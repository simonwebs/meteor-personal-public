// @ts-nocheck
import React, { useEffect } from 'react';
import { Projects } from '../pages/Projects';
import { Contact } from '../contacts/Contact';
import { Skills } from '../pages/Skills'
import { Blog } from '../pages/Blog'
import { Testimonials } from './Testimonials';

import AOS from 'aos';
import 'aos/dist/aos.css';

const posts = [
  {
    title: 'Boost your conversion rate',
    to: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    to: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
  },
  {
    title: 'Improve your customer experience',
     to: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
  },
  {
    title: 'Writing effective landing page copy',
    to: '#',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29',
  },
];

export const Home = () => {
  
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });
  return (
    <>
    <main className="bg-slate-200 dark:bg-slate-800">
        <section className='bg-slate-200 dark:bg-slate-800 mt-16 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8'>
        <div  className="relative rounded-md bg-gradient-to-r from-cyan-500/95 to-sky-500/95 bg-opacity-0 dark:bg-slate-800 pb-3 pt-8 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <div x="50%" y="100%" />
      </div>
      <div  className="relative mx-auto max-w-5xl mt-20 placeholder:pt-16 sm:px-6">
        <div id="nav" className="bg-slate-200 opacyty-76 dark:bg-slate-800 rounded pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full shadow-lg bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72" data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
            <img src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' id="nav" className='#' data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine" alt="" />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
         
            <p className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl -mt-10">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500/95 to-sky-500/95">Hello</span>
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500/95 to-sky-500/95">I am Simon Agbey</span>
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500/95 to-sky-500/95"> FullStack developer</span>
          
            </p>
            
            <p className="mt-4 tracking-tight text-sm text-darkGrayishBlue">
              I’ve been develping for hobbie for over a 1+ and
              have worked with dozens of projects which is 
              sets for deployment. I’m an accomplished christian preacher,
              and have been teaching a christian values for how to be balance in mind for the
              last ten years.
            </p>
            <p className="mt-8">
              <a
                href="https://mobile.twitter.com/SimonAgbey3"
                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
              >
                <svg aria-hidden="true" className="h-10 w-10 fill-current">
                  <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066" />
                </svg>
                <span className="ml-4">Follow on Twitter</span>
              </a>
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
   
<Skills />
<Projects />
<Blog />
<Testimonials />
<Contact />
  </main>
    </>


  );
};
