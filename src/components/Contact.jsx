import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'USER_ID').then(
      () => {
        alert('Message Sent!');
      }
    );
  };

  return (
    <section id='contact' className="py-16 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-gray-50 text-black rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-gray-50 text-black rounded"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 bg-gray-50 text-black rounded"
          ></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-600 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
