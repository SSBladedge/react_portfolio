import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white overflow-auto"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit a form below to get in touch with me</p>
        </div>

        <div className="flex justify-center item-center">
          <form
            action="https://getform.io/f/c3a37cfb-582f-438a-bfa8-0a4d4cf7d174"
            className="flex flex-col w-full md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="enter your name please"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="enter your email please"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Please enter your message here"
              className="p-2 bg-transparent border-2 rounded-md text-whitefocus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-stone-300  to-gray-500 px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
