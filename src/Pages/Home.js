import React from "react";
// import Images from "../Images/raimond-klavins-xAqrT-279UA-unsplash.jpg";
import video from "../Components/assets/pexels-amit-1654216-1920x1080-30fps.mp4";
import leaf from "../Images/leaf.jpg";
import footer from "../Images/footer-hero-big.jpg";

const Home = () => {
  const Datas = [
    {
      // img: "../Images/service-1.jpg",
      name: "Web Design",
      desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
    },

    {
      // img: "../Images/service-2.jpg",
      name: "Web development",
      desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
    },
    {
      // img3: "../Images/service-3.jpg",
      name: "Graphic design",
      desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
    },
  ];
  return (
    <section>
      <video className="w-[100%]" src={video} autoPlay loop muted />
      <h1 className="text-center font-thin text-5xl text-yellow-500 mb-10 mt-10">
        Our Service
      </h1>
      <div className="grid lg:grid-cols-3 justify-center items-center gap-5 px-20">
        {Datas.map((item) => {
          return (
            <div>
              {/* <img
                className="border-x-4 border-y-8 border-gray-500 shadow-2xl shadow-slate-900"
                src={item.img}
              /> */}
              <h1 className="text-lime-800 mt-5 pl-3 text-2xl">{item.name}</h1>
              <p className="text-lime-800 pl-3 flex flex-col  ">{item.desc}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className=" text-center text-lime-800 mt-10 text-3xl font-medium flex flex-col mx-5 md:mx-10 mb-5 md:mb-5 ">
          “Original and with an innate understanding of their
          <br /> customer’s needs, the team at Love Nature are
          <br /> always a pleasure to work with.”
        </h1>
      </div>
      <div className="px-20 grid lg:grid-cols-2 gap-20 pt-10">
        <div>
          <h2 className="mt-10 text-lime-800 text-lg">ABOUT US</h2>
          <div>
            <h1 className="font-medium text-4xl mb-10 mt-10 flex flex-col text-lime-800">
              Tell website visitors who you are and why they should choose your
              business.
            </h1>
            <p className=" text-lime-800 flex flex-col mb-10">
              Because when a visitor first lands on your website, you’re a
              stranger to them. They have to get to know you in order to want to
              read your blog posts, subscribe to your email newsletter, or buy
              what you’re selling.
            </p>
          </div>

          <button className=" duration-1000 shadow-2xl hover:delay-150 border-solid border-[1px] rounded-md border-lime-800 py-3 px-10 bg-lime-800  hover:bg-white hover:text-primary font-bold">
            Find Out More
          </button>
        </div>

        <div className="mb-20 md:block justify-center items-center">
          <img
            className="border-x-4 border-y-8  border-gray-500 shadow-2xl shadow-slate-900"
            src={leaf}
          />
        </div>
      </div>
      <div className="relative">
        <img src={footer} />
        <h1 className="absolute text-5xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          QUESTIONS?
        </h1>
      </div>
      <div>
        <iframe
          className="w-[100%] h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.220465004627!2d72.84907247411392!3d19.05404205266369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94791a5bd7d%3A0xe7d79ab380319668!2sApple%20BKC!5e0!3m2!1sen!2sin!4v1683179961202!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Home;
