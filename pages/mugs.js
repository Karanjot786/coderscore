import React from 'react'
import { mongoose } from "mongoose";
import Product from "../models/Product"
import Link from 'next/link';

const Mugs = ({ Products }) => {
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
                  <p className="mt-1 dark:text-white">{Products[item].price}</p>
                  
                </div></Link>
              </div>
            })}


          </div></div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
  }
  await mongoose.connect(process.env.MONGO_URI)
  let Products = await Product.find({ category:'mugs'})
  let mugs = {}
  for (let item of Products) {
    if (item.title in mugs) {
      if (!mugs[item.title].color.includes(item.color) && item.availableQty > 0) {
        mugs[item.title].color.push(item.color)
      }
      if (!mugs[item.title].size.includes(item.size) && item.availableQty > 0) {
        mugs[item.title].size.push(item.size)
      }

    }
    else {
      mugs[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        mugs[item.title].color = [item.color]
        mugs[item.title].size = [item.size]
      }
    }
  }
  return {
    props: { Products: JSON.parse(JSON.stringify(mugs)) },
  }
}


export default Mugs