"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ContactUs.css";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
import Image from "next/image";
import profileImage from "../../Assses/images/image1bg.png";
import { postData } from "@/app/services/fetchServer";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await postData('contactUs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      form,
    });

    console.log("res:=>", res);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="contact-wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Have a question or want to work together? Fill out the form below!
      </p>

      <div className="contact-container">
        {/* Left Side Image */}
        <div style={{ background: '#80bcd2ff', width: '20%' }}>
          <motion.div
            className="contact-image"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <Image
              src={profileImage}
              alt="Contact"
              width={400}
              height={400}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                border: "4px solid #fff",
                display: "block",
              }}
            />
          </motion.div>
        </div>
        {/* Right Side Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaCommentDots className="icon" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}
