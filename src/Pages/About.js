import React from "react";
import img from "../Images/service-2.jpg";

import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";

const About = () => {
  const Card = [
    {
      name: "Network technology acquisitions 2021",
      desc: " Sollicitudin, lorem bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit duis sed odio sit.",
      img2: "../Images/02.webp",
    },
    {
      name: "Network technology acquisitions 2021",
      desc: " Sollicitudin, lorem bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit duis sed odio sit.",
      img2: "../Images/07.webp",
    },
    {
      name: "Network technology acquisitions 2021",
      desc: " Sollicitudin, lorem bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit duis sed odio sit.",
      img2: "../Images/08.webp",
    },
  ];
  return (
    <section>
      <div className="  w-[100%] px-10 ">
        <div className="text-center mt-20">
          <h1 className="text-black font-bold pt-5">About The Author</h1>
          <p className="pt-5">
            Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
            lorem quis bibendum auctor nisi elit consequat ipsum.
          </p>
          <h1>Thomas Mills</h1>
        </div>
        <div className="grid lg:grid-cols-2  justify-center items-center gap-10 mx-10">
          <p className="flex flex-col justify-center items-center text-black pt-5">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
            <br />
            <br />
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
          <div>
            <img
              className="mb-10 mt-10 h-[400px] w-[600px] border-x-8 border-y-8 border-green-800 "
              src={img}
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center mt-10">
            What Recommends Him??
          </h1>
          <p className="flex flex-col items-center mt-10">
            Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
            lorem quis bibendum auctor nisi elit consequat ipsum.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 mt-10 mb-5">
          <div>
            <h1 className="text-center font-bold text-2xl mb-5">
              Communication Skills
            </h1>
            <p className="flex flex-col items-center">
              Sollicitudin, lorem bibendum auctor, nisi elit consequat ipsum,
              nec sagittis sem nibh id elit duis sed odio sit.
            </p>
          </div>
          <div>
            <h1 className="text-center font-bold text-2xl mb-5">Patience</h1>
            <p className="flex flex-col items-center">
              Sollicitudin, lorem bibendum auctor, nisi elit consequat ipsum,
              nec sagittis sem nibh id elit duis sed odio sit.
            </p>
          </div>
          <div className="">
            <h1 className="text-center font-bold text-2xl mb-5">
              Subject Expertise
            </h1>
            <p className="flex flex-col items-center">
              Sollicitudin, lorem bibendum auctor, nisi elit consequat ipsum,
              nec sagittis sem nibh id elit duis sed odio sit.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-3 justify-center items-center">
          {Card.map((item) => {
            return (
              <div className=" gap-5  max-w-sm border-gray-200 rounded-lg shadow-lg mb-5  dark:bg-gray-800 dark:border-red-700 bg-indigo-950">
                <div>
                  <a href="#">
                    <img className="rounded-t-lg" src={item.img2} />
                  </a>
                  <h1 className="text-white text-lg text-center font-bold mt-5">
                    {item.name}
                  </h1>
                  <p className="text-white text-center mt-5 px-3">
                    {item.desc}
                  </p>
                  <div className="flex justify-center items-center gap-5 mt-5 pb-5">
                    <span>
                      <FiInstagram className="text-white text-3xl" />
                      {item.icon}
                    </span>
                    <span>
                      <FaFacebook className="text-white text-3xl" />
                      {item.icon}
                    </span>
                    <span>
                      <RxTwitterLogo className="text-white text-3xl" />
                      {item.icon}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
