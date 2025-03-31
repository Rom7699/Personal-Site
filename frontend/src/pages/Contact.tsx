import React, { useState } from "react";
import "../styles/Contact.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success?: boolean;
    message?: string;
  }>({ submitted: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set loading state
    setFormStatus({
      submitted: true,
      success: undefined,
      message: "Sending your message...",
    });

    try {
      console.log("About to send fetch request", formData);
      // Make API call to your backend
      const response = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response received:", response);

      const result = await response.json();

      if (response.ok && result.success) {
        // Handle successful submission
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you for your message! I will get back to you soon.",
        });

        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // Handle error from server
        setFormStatus({
          submitted: true,
          success: false,
          message:
            result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          Have a question or want to work together? Feel free to contact me!
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>rom7699@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h3>Phone</h3>
              <p>054-2824838</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Location</h3>
              <p>Tel Aviv, Israel</p>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/rom-eisenberg-a80a14212/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Rom7699"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          {formStatus.submitted && formStatus.success === undefined ? (
            <div className="form-loading">
              <div className="spinner"></div>
              <p>{formStatus.message}</p>
            </div>
          ) : formStatus.submitted && formStatus.success ? (
            <div className="form-success">
              <i className="fas fa-check-circle"></i>
              <p>{formStatus.message}</p>
            </div>
          ) : formStatus.submitted && !formStatus.success ? (
            <div className="form-error">
              <i className="fas fa-times-circle"></i>
              <p>{formStatus.message}</p>
              <button
                className="try-again-btn"
                onClick={() => setFormStatus({ submitted: false })}
              >
                Try Again
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
