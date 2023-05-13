import React from "react";
import img from "../Images/download-removebg-preview (1).png";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-center text-white">
      <div className="container px-6 pt-6">
        <div className="grid md:grid-cols-6">
          <div>
            <img
              src={img}
              className=" md:text-justify justify-center items-center"
            />
            <div className="mb-6 flex justify-center">
              <AiFillLinkedin className="m-1 h-9 w-9 border-white uppercase leading-normal text-white transition duration-150 ease-in-out" />
              <BsTwitter className="m-1 h-9 w-9 border-white uppercase leading-normal text-white transition duration-150 ease-in-out " />
              <FaFacebookF className="m-1 h-9 w-9 border-white uppercase leading-normal text-white transition duration-150 ease-in-out " />
              <BsInstagram className="m-1 h-9 w-9 border-white uppercase leading-normal text-white transition duration-150 ease-in-out " />
              <BsYoutube className="m-1 h-9 w-9  border-white uppercase leading-normal text-white transition duration-150 ease-in-out" />
            </div>
          </div>
          <div className="mb-6">
            <h5 className="mb-5 font-thin text-lg text-white italic">
              TheWorkPlace
            </h5>

            <ul class="mb-0 list-none">
              <li>
                <p className="flex flex-col justify-center text-sm">
                  Donec Sodales Sagittis Magna. SedConsequat, Leo Eget Bibendum
                  Sodales, Augue Velit Cursus Nunc, Quis Gravida Libero.
                </p>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-5 font-thin uppercase  dark:text-neutral-200 italic">
              Quick Links
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className=" text-sm text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className=" text-sm text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#!" className=" text-sm text-white">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#!" className=" text-sm text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#!" className=" text-sm text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-5 font-thin uppercase dark:text-neutral-200 italic">
              Important Links
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className=" text-white">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#!" className=" text-white">
                  Legal
                </a>
              </li>
              <li>
                <a href="#!" className=" text-white">
                  Business
                </a>
              </li>
              <li>
                <a href="#!" className=" text-white">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-5 font-thin uppercase  dark:text-neutral-200 italic">
              Let’s Connect!
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className=" text-sm text-white">
                  Connect with entrepreneurs, build your network, make great
                  business.
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-5 font-thin uppercase  dark:text-neutral-200 italic">
              Quick Links
            </h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#!" className=" text-sm text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="about" className=" text-sm text-white">
                  About
                </a>
              </li>
              <li>
                <a href="service" className=" text-sm text-white">
                  Service
                </a>
              </li>
              <li>
                <a href="blogs" className=" text-sm text-white">
                  Blogs
                </a>
              </li>
              <li>
                <a href="contact" className=" text-sm text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-4 text-center">
          <hr className="mb-5" />© 2023 Copyright:
          <a className="text-whitehite" href="">
            Working Space
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
