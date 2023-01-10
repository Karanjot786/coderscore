import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
    return (
        <div>
            <section className=" bg-white dark:bg-gray-900 px-2 ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">Checkout</h1>
                        {/* <p className="lg:w-2/3 text-gray-900 dark:text-white mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <h2 className='font-semibold text-xl text-gray-900 dark:text-white'>1. Delivery Details</h2>
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-900 dark:text-white">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2  focus:ring-indigo-200 dark:focus:ring-indigo-900  text-base outline-none  text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-900 dark:text-white">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2  focus:ring-indigo-200 dark:focus:ring-indigo-900  text-base outline-none  text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-900 dark:text-white">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 h-32 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="Phone" className="leading-7 text-sm text-gray-900 dark:text-white">Phone</label>
                                    <input type="text" id="Phone" name="Phone" className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2  focus:ring-indigo-200 dark:focus:ring-indigo-900  text-base outline-none  text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="city" className="leading-7 text-sm text-gray-900 dark:text-white">City</label>
                                    <input type="email" id="city" name="city" className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2  focus:ring-indigo-200 dark:focus:ring-indigo-900  text-base outline-none  text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="state" className="leading-7 text-sm text-gray-900 dark:text-white">State</label>
                                    <input type="text" id="state" name="state" className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2  focus:ring-indigo-200 dark:focus:ring-indigo-900  text-base outline-none  text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="pincode" className="leading-7 text-sm text-gray-900 dark:text-white">Pincode</label>
                                    <input type="text" id="pincode" name="pincode" className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-40 rounded border border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2  focus:ring-indigo-200 dark:focus:ring-indigo-900  text-base outline-none  text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <h2 className='font-semibold text-xl text-gray-900 dark:text-white'>2. Reviwe Cart Items</h2>
                                    </div>
                        <div className='bg-white px-2 dark:bg-gray-900'>
                                <ol className='list-decimal font-semibold '>
                                    {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'> no items</div>}
                                    {Object.keys(cart).map((k) => {
                                        return <li key={k}>
                                            <div className='item flex my-5'>
                                                <div className='font-semibold text-gray-900 dark:text-white'>{cart[k].title}({cart[k].size}/{cart[k].variant})</div>
                                                <div className='text-gray-900 dark:text-white flex font-semibold items-center justify-center w-1/3 text-lg'>
                                                    <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} />
                                                    <span className='mx-2 '>{cart[k].qty}</span>

                                                    <AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} />
                                                </div>
                                            </div>
                                        </li>
                                    })}
                                </ol>
                                </div>
                                <div className="font-semibold text-gray-900 dark:text-white">Total: {subTotal}</div>
                    <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay Now</button>
                            </div>
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default Checkout