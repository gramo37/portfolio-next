"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { useToast } from "../ui/use-toast";
import { data } from "../../constants";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { Mail, Phone } from "lucide-react";

const contactMeSchema = Yup.object({
  firstname: Yup.string()
    .min(2, "First Name cannot be less than 2 characters")
    .max(30, "First Name cannot exceed 30 characters")
    .required("Please enter your first name"),
  lastname: Yup.string()
    .min(2, "Last Name cannot be less than 2 characters")
    .max(30, "Last Name cannot exceed 30 characters")
    .required("Please enter your last name"),
  email: Yup.string()
    .email("Please enter a Valid Email")
    .required("Please enter your email"),
  subject: Yup.string()
    .min(10, "Subject cannot be less than 10 characters")
    .max(50, "Subject cannot exceed 50 characters")
    .required("Please enter the subject"),
  message: Yup.string()
    .min(10, "Message cannot be less than 10 characters")
    .max(1000, "Message cannot exceed 1000 characters")
    .required("Please enter the message"),
});

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sendMail, setSendMail] = useState(true);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: contactMeSchema,
      onSubmit: (values, { resetForm }) => {
        if (!sendMail) {
          toast({
            variant: "destructive",
            title: "Wait 10 mins",
            description: "Kindly wait for 10 mins",
          });
          return;
        }
        resetForm({ values: initialValues });
        setLoading(true);
        if (formRef.current)
          emailjs
            .sendForm(
              "service_npzjtpg",
              "template_v1582qq",
              formRef.current,
              "uF6OeJEqNkVC7B5mC",
            )
            .then(
              () => {
                setLoading(false);
                toast({
                  variant: "success",
                  title: "Message sent successfully",
                  description: "Your message has been sent.",
                });
                setSendMail(false);
                setTimeout(() => setSendMail(true), 60 * 10 * 1000);
              },
              () => {
                setLoading(false);
                alert("Something went wrong");
              },
            )
            .catch((error) => console.log(error));
      },
    });

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Input
            id="firstname"
            name="firstname"
            placeholder="First name"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstname && touched.firstname && (
            <p className="text-destructive text-xs mt-1">{errors.firstname}</p>
          )}
        </div>
        <div>
          <Input
            id="lastname"
            name="lastname"
            placeholder="Last name"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastname && touched.lastname && (
            <p className="text-destructive text-xs mt-1">{errors.lastname}</p>
          )}
        </div>
      </div>

      <div>
        <Input
          id="email"
          name="email"
          placeholder="Email address"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <p className="text-destructive text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <Input
          id="subject"
          name="subject"
          placeholder="Subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.subject && touched.subject && (
          <p className="text-destructive text-xs mt-1">{errors.subject}</p>
        )}
      </div>

      <div>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message"
          className="min-h-[140px] resize-none"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && touched.message && (
          <p className="text-destructive text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
        {loading ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}

const Contact = () => {
  return (
    <section id="contact" className="section-padding border-t border-border">
      <motion.div
        className="container-narrow"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div variants={fadeInUp}>
            <SectionHeading
              label="Contact"
              title="Let's work together"
              subtitle="Open to full-time roles, contract work, and interesting collaborations. Reach out and I'll respond within 48 hours."
            />

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                {data.email}
              </a>
              <a
                href={`tel:${data.phone}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border">
                  <Phone className="h-4 w-4 text-primary" />
                </span>
                {data.phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-border bg-card p-6 md:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
