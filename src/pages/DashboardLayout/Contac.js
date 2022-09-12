import React from 'react'
import { useFormik } from "formik";

function Contac() {
  const {handleChange, handleSubmit} = useFormik({
     initialValues:{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        },
        onSubmit: async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(JSON.stringify(values, null, 2));
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
            onChange={handleChange("firstName")}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
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
            onChange={handleChange("email")}
          />
        </div>
        <div>
          <label htmlFor="email">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your massege... "
            onChange={handleChange("messsage")}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contac;