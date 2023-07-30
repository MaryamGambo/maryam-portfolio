import React from "react";
import { Button, Text } from "@maryamgambo/react-component-library";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Maryam.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
             With a passion for software development and a love for modern technologies, I'm constantly driven to create responsive and user-intuitive interfaces for websites.
             My journey in web development has equipped me with a deep understanding of data structures and their relevance in crafting robust and optimized software solutions.
             I thrive in agile methodologies, embracing iterative and collaborative processes to ensure efficient software development and high-quality results.
          </p>
          <div className="flex justify-center">
            <Button
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
             label="Work with me"
            />
            <Button
              href="#projects"
              label="See My Past Work"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              See My Past Work
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}