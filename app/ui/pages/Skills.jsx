import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import { Link } from 'react-router-dom';



export const Skills = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });

  return (

 <section id='about' className="bg-white dark:bg-slate-800">
<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-32 ">
<h2 className="text-4xl font-bold text-center">
Skills
</h2>
<div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mt-16">
  <div>
    <h2
className="text-3xl font-extrabold text-darkGrayishBlue sm:text-4xl"
data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      These are some of the skills am good using.
    </h2>
    <p
className="mt-3 max-w-3xl text-lg text-darkGrayishBlue"
data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
    I have skills in Html, Css/scss, JavaScript, Meteorjs, Nodejs, MongoDB, React, Chakra-ui, Tailwindcss, Bootstrap and basic knowledge in Blaze and Firebase.
    </p>
    <div className="mt-8 sm:flex" data-aos="zoom-in-right">
      <div className="rounded-md shadow">
        <a
          href="contact"
          className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 transform motion-safe:hover:scale-110 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm"
        >
          Contact
        </a>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <a
          href="/projects"
          className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 transform motion-safe:hover:scale-110 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm"
        >
          Projects
        </a>
      </div>
    </div>
  </div>
  <div
className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"
data-aos="fade-left"
  data-aos-offset="200"
  data-aos-easing="ease-in-sine">
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/html.png"
        alt="Html"
      />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img className="max-h-12  rounded-full transform motion-safe:hover:scale-110" src="./img/css.png" alt="Css-tailwindcss-chakra-ui-boostrap-scss" />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img className="max-h-12  rounded-full transform motion-safe:hover:scale-110" src="./img/javascript.png" alt="JavaScript" />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/node.png"
        alt="Nodejs"
      />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/meteor.png"
        alt="Meteorjs"
      />
    </div>
    <div className="col-span-1 flex justify-center py-8 px-8 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl hover:transition duration-500 hover:scale-125">
      <img
        className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
        src="./img/firebase.png"
        alt="Statamic"
      />
    </div>
  </div>
</div>
</div>
</section>

  );
};
