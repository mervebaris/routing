import React from 'react'
import { useFormik } from "formik";
import contactSchema from "./validations";
import './styles.css'

function Contact() {
  const {handleChange, handleSubmit, handleBlur, values, isSubmitting, errors, touched } = useFormik({
     initialValues:{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        },
        onSubmit: async (values, bag) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(JSON.stringify(values, null, 2));
          bag.resetForm();
        },
        validationSchema: contactSchema,

  })


  return (
    <div>
      <h2>Contact</h2>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            value={values.firstName}
            disabled={isSubmitting}
            onChange={handleChange("firstName")}
            onBlur={handleBlur("firstName")}
          />
          {errors.firstName && touched.firstName && (
            <div className="error">{errors.firstName}</div>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={values.lastName}
            disabled={isSubmitting}
            onChange={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
          />
          {errors.lastName && touched.lastName && (
            <div className="error">{errors.lastName}</div>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            value={values.email}
            disabled={isSubmitting}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your massege... "
            value={values.message}
            disabled={isSubmitting}
            onChange={handleChange("messsage")}
            onBlur={handleBlur("message")}
          />
          {errors.message && touched.message && (
            <div className="error">{errors.message}</div>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;