"use client";

import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { useToast } from "../ui/use-toast";
import { data } from "../../constants";

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
  const formRef: any = useRef();
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
        if (formRef?.current)
          emailjs
            .sendForm(
              "service_npzjtpg",
              "template_v1582qq",
              formRef?.current,
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
                setTimeout(
                  () => {
                    setSendMail(true);
                  },
                  60 * 10 * 1000,
                );
              },
              () => {
                setLoading(false);
                alert("Something went wrong");
              },
            )
            .catch((error: any) => console.log(error));
      },
    });

  return (
    <form
      ref={formRef as any}
      onSubmit={handleSubmit}
      className="flex flex-col p-2 max-h-[70vh] md:max-h-fit overflow-auto"
    >
      <div className="flex flex-col md:flex-row">
        <div className="m-1 md:w-full">
          <Input
            id="firstname"
            name="firstname"
            placeholder="Your firstname"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstname && touched.firstname ? (
            <p className="text-destructive m-0">{errors.firstname}</p>
          ) : null}
        </div>
        <div className="m-1 md:w-full">
          <Input
            id="lastname"
            name="lastname"
            placeholder="Your lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastname && touched.lastname ? (
            <p className="text-destructive m-0">{errors.lastname}</p>
          ) : null}
        </div>
      </div>
      <div className="flex md:p-1">
        <Input
          className="m-1"
          id="email"
          name="email"
          placeholder="Your Email address"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input className="opacity-0 hidden md:block" />
      </div>
      {errors.email && touched.email ? (
        <p className="text-destructive m-0">{errors.email}</p>
      ) : null}
      <div className="flex">
        <Input
          className="m-1"
          id="subject"
          name="subject"
          placeholder="Your subject of this message"
          type="text"
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {errors.subject && touched.subject ? (
        <p className="text-destructive m-0">{errors.subject}</p>
      ) : null}
      <div className="flex">
        <Textarea
          className="m-1 h-[200px]"
          id="message"
          name="message"
          placeholder="Type your message here"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {errors.message && touched.message ? (
        <p className="text-destructive m-0">{errors.message}</p>
      ) : null}
      <div className="m-2 md:mx-auto my-2">
        <Button
          type="submit"
          className="text-lg text-secondary-foreground bg-secondary"
        >
          {loading ? "Loading..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

const Contact = () => {
  return (
    <div className="p-2 pt-5 bg-muted rounded-lg m-10 md:mx-auto md:w-[825px]">
      <div className="ml-5">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Me</h1>
        <p className="my-2 text-md md:text-lg italic text-muted-foreground">
          Don't like forms? Send me an{" "}
          <a
            className="text-secondary underline cursor-pointer font-bold not-italic"
            href={`mailto:${data.email}`}
          >
            email
          </a>
          .
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
