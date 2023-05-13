import React from "react";
import image1 from "../Images/avatar_1.jpg";
import image2 from "../Images/avatar_2.jpg";
import image3 from "../Images/avatar_3.jpg";
import image4 from "../Images/avatar_4.jpg";
import { BiWorld } from "react-icons/bi";
import { AiFillFile } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { FaFileVideo } from "react-icons/fa";
// import { SiPython } from "react-icons/si";

const Service = () => {
  const List = [
    {
      name: "Python",
      desc: "Python is a very popular general-purpose interpreted interactive object-oriented and high-level programming language. Python isdynamically-typed and garbage-collected programming language. It was created by Guido van Rossum during 1985- 1990. Like Perl, Python source code is also available under the GNU General Public License",
    },

    {
      name: "Java",
      desc: "Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.",
    },

    {
      name: "React.js",
      desc: "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.",
    },

    {
      name: "SQL-Plus",
      desc: "The iSQL*Plus user interface comprises web pages served to your web browser through the Internet or your intranet. There is no installation or configuration required for the iSQL*Plus user interface. You only need to know the URL of the Application Server to access an available Oracle database.",
    },
  ];
  return (
    <div>
      <div className="px-10 text-center mb-10">
        <h1 className="font-mono text-3xl pt-28 mb-5 text-violet-950">
          Strategy. Planning. Execution.
        </h1>
        <p className="flex flex-col">
          Neque porro quisquam est, quiipsum quia dolor sit amet, consectetur
          adipisci numquam eius modi tempora incidunt lores ta porro ame.
        </p>
        <h1 className="text-4xl font-mono text-violet-950">
          We are optimists who love to work together
        </h1>
      </div>

      <div className="grid lg:grid-cols-4 gap-5 justify-center px-10">
        <div className="text-center">
          <img className="rounded-lg " src={image1} />
          <h1 className="text-2xl font-bold">Juan George​</h1>
          <p>Vice President</p>
        </div>
        <div className="text-center">
          <img className="rounded-lg" src={image2} />
          <h1 className="text-2xl font-bold">Emma Kelly</h1>
          <p>Project Leader</p>
        </div>
        <div className="text-center">
          <img className="rounded-lg" src={image3} />
          <h1 className="text-2xl font-bold">Sean Hart</h1>
          <p>Creative Director</p>
        </div>
        <div className="text-center">
          <img className="rounded-lg" src={image4} />
          <h1 className="text-2xl font-bold">Juan Miller</h1>
          <p>software Director</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 justify-center items-center gap-5 px-5">
        {List.map((item) => {
          return (
            <div>
              <h1 className="text-lime-800  text-center mt-5 pl-3">
                {item.name}
              </h1>
              <div>
                {/* <SiPython className=" items-center justify-center" /> */}
              </div>
              <p className="text-lime-800 text-lg pl-3 flex flex-col text-justify mb-5  ">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
      <section>
        <div className="flex  justify-center items-center gap-3  mt-20 mb-20">
          <div className="text-4xl font-bold text-slate-800  ">
            Popular Categories
            <hr className="w-[300px] h-[4px] bg-yellow-600 mt-2" />
          </div>
        </div>
        <div className=" grid lg:grid-cols-4 justify-center items-center gap-5  pb-10 px-10 shadow-2xl shadow-teal-800">
          <div className="w-[300px] h-[400px] bg-gray-400 rounded-lg  ">
            <span className="text-4xl flex justify-center items-center">
              <BiWorld className="hover:text-yellow-500 text-6xl justify-center items-center mt-5" />
            </span>
            <h1 className="text-center text-lg hover:text-yellow-500 pt-5">
              Lorem Ipsum
            </h1>
            <p className="flex flex-col text-justify px-5">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
          <div className="w-[300px] h-[400px] bg-gray-400 rounded-lg justify-center">
            <span className="text-4xl flex justify-center items-center">
              <AiFillFile className="hover:text-yellow-500 flex justify-center items-center text-6xl mt-5" />
            </span>
            <h1 className="text-center text-lg hover:text-yellow-500 pt-5">
              Sed ut perspiciatis
            </h1>
            <p className="flex flex-col text-justify px-5">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
          <div className="w-[300px] h-[400px] bg-gray-400 rounded-lg justify-center">
            <span className="text-4xl flex justify-center items-center">
              <BsStopwatch className="hover:text-yellow-500 flex justify-center items-center text-6xl mt-5" />
            </span>
            <h1 className="text-center text-lg hover:text-yellow-500 pt-5">
              Magni Dolores
            </h1>
            <p className="flex flex-col text-justify px-5">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
          <div className="w-[300px] h-[400px] bg-gray-400 rounded-lg justify-center">
            <span className="text-4xl flex justify-center items-center">
              <FaFileVideo className="hover:text-yellow-500 flex justify-center items-center text-6xl mt-5" />
            </span>
            <h1 className="text-center text-lg hover:text-yellow-500 pt-5">
              Nemo Enim
            </h1>
            <p className="flex flex-col text-justify px-5">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
