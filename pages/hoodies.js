import React from 'react'
import mongoose  from "mongoose";
import Product from "../models/Product"
import Link from 'next/link';

const Hoodies = ({ Products }) => {
  return (
    <div>
      <section className="bg-white  dark:bg-gray-800 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(Products).length === 0 && <p>Sorry all the Hoodies are out of stock.</p>}
            {Object.keys(Products).map((item) => {

              return <div key={Products[item]._id} className=" bg-white  dark:bg-gray-700 lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2"><Link passHref={true} href={`/product/${Products[item].slug}`}>
                <samp className=" bg-white block relative  rounded overflow-hidden">
                  <img alt="ecommerce" className="m-auto md:m-0  block" src={Products[item].img} />
                </samp>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 dark:text-white text-xs tracking-widest title-font mb-1">Hoodies</h3>
                  <h2 className="text-gray-900 dark:text-white  title-font text-lg font-medium">{Products[item].title}</h2>
                  <p className="mt-1 dark:text-white">₹ {Products[item].price}</p>
                  <div className="mt-1 dark:text-white">
                    {Products[item].size.includes("S") && <span className='border border-gray-600 px-1 mx-1'>S</span>}
                    {Products[item].size.includes("M") && <span className='border border-gray-600 px-1 mx-1'>M</span>}
                    {Products[item].size.includes("L") && <span className='border border-gray-600 px-1 mx-1'>L</span>}
                    {Products[item].size.includes("XL") && <span className='border border-gray-600 px-1 mx-1'>XL</span>}
                    {Products[item].size.includes("XXL") && <span className='border border-gray-600 px-1 mx-1'>XXL</span>}
                  </div>
                  <div className="mt-1">
                    {Products[item].color.includes("Blue") && <button className="border-2 border-gray-800 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {Products[item].color.includes("Red") && <button className="border-2 border-gray-800 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {Products[item].color.includes("Pink") && <button className="border-2 border-gray-800 ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                    {Products[item].color.includes("Black") && <button className="border-2 border-gray-800 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                  </div>
                </div></Link>
              </div>
            })}


          </div></div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
}
  let Products = await Product.find({ category:'hood'})
  let hoods = {}
  for (let item of Products) {
    if (item.title in hoods) {
      if (!hoods[item.title].color.includes(item.color) && item.availableQty > 0) {
        hoods[item.title].color.push(item.color)
      }
      if (!hoods[item.title].size.includes(item.size) && item.availableQty > 0) {
        hoods[item.title].size.push(item.size)
      }

    }
    else {
      hoods[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        hoods[item.title].color = [item.color]
        hoods[item.title].size = [item.size]
      }
    }
  }
  return {
    props: { Products: JSON.parse(JSON.stringify(hoods)) },
  }
}


export default Hoodies