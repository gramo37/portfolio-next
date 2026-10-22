import * as path from "path";
import * as cdk from "aws-cdk-lib/core";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import { CONFIG } from "./config";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const domainName = CONFIG.domain.frontendDomain;

    // CloudFront only accepts ACM certificates from us-east-1.
    const certificate = new acm.Certificate(this, "PortfolioCertificate", {
      domainName,
      validation: acm.CertificateValidation.fromDns(),
    });

    const bucket = new s3.Bucket(this, "PortfolioBucket", {
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const distribution = new cloudfront.Distribution(
      this,
      "PortfolioDistribution",
      {
        domainNames: [domainName],
        certificate,
        defaultRootObject: "index.html",
        defaultBehavior: {
          origin: origins.S3BucketOrigin.withOriginAccessControl(bucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
          compress: true,
        },
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
            ttl: cdk.Duration.seconds(0),
          },
          {
            httpStatus: 404,
            responseHttpStatus: 200,
            responsePagePath: "/index.html",
            ttl: cdk.Duration.seconds(0),
          },
        ],
      },
    );

    new s3deploy.BucketDeployment(this, "DeployPortfolio", {
      sources: [
        s3deploy.Source.asset(
          path.resolve(__dirname, CONFIG.frontend.buildOutputDir),
        ),
      ],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/*"],
      prune: true,
    });

    new cdk.CfnOutput(this, "PortfolioBucketName", {
      value: bucket.bucketName,
    });

    new cdk.CfnOutput(this, "CloudFrontDistributionId", {
      value: distribution.distributionId,
    });

    new cdk.CfnOutput(this, "CloudFrontDomainName", {
      value: distribution.distributionDomainName,
    });

    new cdk.CfnOutput(this, "PortfolioURL", {
      value: `https://${domainName}`,
    });

    new cdk.CfnOutput(this, "CertificateArn", {
      value: certificate.certificateArn,
    });
  }
}
