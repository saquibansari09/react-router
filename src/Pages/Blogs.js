import React from "react";
import img from "../Images/service-1.jpg";

const Blogs = () => {
  const List = [
    {
      img: "../Images/service-1.jpg",
      name: " What Do You Do When You Know You’re Not Fine?",
      desc: "We do this with the aim of creating the future of media. The future of",
    },

    {
      img1: "../Images/service-2.jpg",
      name: " What Do You Do When You Know You’re Not Fine?",
      desc: "We do this with the aim of creating the future of media. The future of",
    },

    {
      img2: "../Images/service-3.jpg",
      name: " What Do You Do When You Know You’re Not Fine?",
      desc: "We do this with the aim of creating the future of media. The future of",
    },
  ];
  return (
    <div className=" grid md:lg:lg:grid-cols-3  justify-center items-center gap-5 px-10">
      {List?.map((item) => {
        return (
          <div>
            <img
              className="mt-28
              "
              src={img}
              alt="image"
              height={"250px"}
              width={"400px"}
            />
            <h1 className=" flex flex-col text-lg justify-center font-semibold mt-5">
              {item.name}
            </h1>
            <p className="flex flex-col justify-center mb-2">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
