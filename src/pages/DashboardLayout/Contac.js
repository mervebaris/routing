import React from 'react'
import { useFormik } from "formik";

function Contac() {
  const {handleChange, handleSubmit, values, isSubmitting} = useFormik({
     initialValues:{
          firstName: "Test",
          lastName: "Deneme",
          email: "Test@deneme.com",
          message: "Helllüüüü :)",
        },
        onSubmit: async (values, bag) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(JSON.stringify(values, null, 2));
          bag.resetForm();
        }

  })


  return (
    <div>
      <h2>Contac</h2>

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
          />
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
          />
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
          />
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
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contac;