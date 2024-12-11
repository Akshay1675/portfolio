import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center text-2xl mb-4">Feel free to reach out via email!</p>
        <div className="text-center">
          <a
            href="mailto:akshaydesai1675@gmail.com"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
