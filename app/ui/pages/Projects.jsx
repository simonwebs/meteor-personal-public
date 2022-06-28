import React from 'react'
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'E-commerce',
    href: '#',
    availability: 'Meteorjs + React + Tailwindcss',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Refresh Tour',
    href: '#',
    availability: 'Nodejs + pug',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'CMM',
    href: '#',
    availability: 'Meteorjs + React + Tailwindcss',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    name: 'E-commerce',
    href: '#',
    availability: 'Meteorjs + React + Tailwindcss',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    imageAlt: 'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 5,
    name: 'Todo',
    href: '#',
    availability: 'Meteor + React + Chakra-ui',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt: 'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 6,
    name: 'LSMS',
    href: '#',
    availability: 'Meteorjs + React + Chakra-ui',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
]

export const Projects = ()=> {
  return (
   <div id="projects" className="bg-slate-50 dark:bg-slate-800 mt-16">
        <h2 className="text-4xl font-bold text-center py-7">
       Projects
      </h2>

      <div className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={product.href} className="group text-sm">
              <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 font-medium dark:text-slate-50 text-gray-900">{product.name}</h3>
              <p className="text-gray-500 dark:text-slate-50 italic">{product.availability}</p>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}