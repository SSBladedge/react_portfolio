import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
// import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const experience = () => {
  const techs = [
    {
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      src: reactImage,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      src: nextjs,
      title: "NEXT JS",
      style: "shadow-white",
    },
    // {
    //   src: graphql,
    //   title: "GRAPHQL",
    //   style: "shadow-pink-400",
    // },
    {
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full xl:h-screen overflow-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            Please find below the technologies I have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ src, title, style }, index) => (
            <div
              key={index}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default experience;
