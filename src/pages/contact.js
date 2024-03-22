import React from "react"
import { useForm, ValidationError } from "@formspree/react"

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqebzyy")
  if (state.succeeded) {
    return (
      <p style={{ color: "green", fontWeight: "bold" }}>Thanks for joining!</p>
    )
  }
  return (
    <form
      method="POST"
      action="http://formspree.io/f/mnqebzyy"
      //onSubmit={handleSubmit}
      style={{ maxWidth: "500px", margin: "0 auto" }}
    >
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          style={{ width: "100%", padding: "8px" }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="message"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          style={{ width: "100%", height: "100px", padding: "8px" }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: state.submitting ? "default" : "pointer",
        }}
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
