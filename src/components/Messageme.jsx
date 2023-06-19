import React, { useEffect, useRef, useState } from "react";
import PageLayout from "./PageLayout";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import messageSchema from "../utils.jsx/messageValidation";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Messageme = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (values, actions) => {
    emailjs
      .sendForm(
        "service_vkmkxx7",
        "template_5k675hm",
        form.current,
        "bA4fqTqAOjhRjZhGh"
      )
      .then(
        (result) => {
          toast.success("Your message has been sent");
        },
        (error) => {
          toast.error("Your message did not get sent");
        }
      );
    actions.resetForm();
  };

  useEffect(() => {
    if (isSent) {
      setTimeout(() => setIsSent(false), 3000);
    }
  }, [isSent]);

  const { values, errors, getFieldProps, handleBlur, handleSubmit } = useFormik(
    {
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
      validationSchema: messageSchema,
      onSubmit,
    }
  );

  return (
    <div className="box pb-3" style={{ background: "rgb(249, 249,249)" }}>
      <PageLayout>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div
            className="d-flex flex-column gap-3 align-items-center"
            style={{ width: "100%", maxWidth: "700px" }}
          >
            <div className="sendMe">
              <h1 style={{ color: "#4831d4" }} className="fw-bold text-center ">
                Send me a message
              </h1>
              <p className="text-center heading" style={{ color: "#543172" }}>
                Got a question or proposal, or just want to say hello? Go ahead.
              </p>
            </div>
            <div className="w-100">
              <Form ref={form} onSubmit={handleSubmit}>
                <div className="d-lg-flex justify-content-between bottom">
                  <div className="formWidth nameBottom">
                    <Form.Group controlId="formBasicFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your First Name"
                        className="rounded-0 form"
                        style={{ height: "50px" }}
                        onBlur={handleBlur}
                        value={values.firstName}
                        {...getFieldProps("firstName")}
                        name="firstName"
                      />
                      {errors.firstName && (
                        <span className="small" style={{ color: "green" }}>
                          {errors.firstName}
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  <div className="formWidth">
                    <Form.Group controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Last Name"
                        className="rounded-0 form"
                        style={{ height: "50px" }}
                        onBlur={handleBlur}
                        value={values.lastName}
                        {...getFieldProps("lastName")}
                        name="lastName"
                      />
                      {errors.lastName && (
                        <span className="small" style={{ color: "green" }}>
                          {errors.lastName}
                        </span>
                      )}
                    </Form.Group>
                  </div>
                </div>
                <Form.Group controlId="formBasicEmail" className="bottom">
                  <Form.Label>E-Mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your E-mail"
                    className="rounded-0 form"
                    style={{ height: "50px" }}
                    onBlur={handleBlur}
                    value={values.email}
                    {...getFieldProps("email")}
                    name="email"
                  />
                  {errors.email && (
                    <span className="small" style={{ color: "green" }}>
                      {errors.email}
                    </span>
                  )}
                </Form.Group>
                <Form.Group
                  controlId="formBasicMessage"
                  style={{ paddingBottom: "30px" }}
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    className="rounded-0 textA"
                    placeholder="Hi, we need a well skilled developer to build our project(or work on an existing one). How soon can you hop on to discuss this"
                    as="textarea"
                    onBlur={handleBlur}
                    value={values.message}
                    {...getFieldProps("message")}
                    name="message"
                  />
                  {errors.message && (
                    <span className="small" style={{ color: "green" }}>
                      {errors.message}
                    </span>
                  )}
                </Form.Group>
                <Button
                  type="submit"
                  className="rounded-0 w-100 button fs-3"
                  style={{ height: "60px" }}
                >
                  SEND MESSAGE
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Messageme;
