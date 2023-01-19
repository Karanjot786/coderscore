import React, { useRef } from 'react'
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';


const Navbar = ({ Logout,user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    const toggleCart = () => {

        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')

        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')

        }
    }
    const navigation = [
        { name: 'T-Shirts', href: '/tshirts', current: true },
        { name: 'Hoodies', href: '/hoodies', current: false },
        { name: 'Mugs', href: '/mugs', current: false },
        { name: 'Stickers', href: '/stickers', current: false },
    ]
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const ref = useRef()
    return (
        <div>
            <Disclosure as="nav" className="bg-white dark:bg-gray-900">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                       <Link href={"/"}> <img
                                            className="block h-8 w-auto lg:hidden"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        /></Link>
                                       <Link href={"/"}> <img 
                                            className="hidden h-8 w-auto lg:block"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        /></Link>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={("bg-white dark:bg-gray-900  text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium")}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            {user.value && (<Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>)}
                                        </div>
                                        {!user.value && (
                                            <Link href={"/login"}>
                                                <button className="bg-indigo-600 px-2 py-1 rounded-md text-sm text-white mx-2">
                                                    Login
                                                </button>
                                            </Link>
                                        )}
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/orders"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            onClick={Logout}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    <div className="py-3 flex flex-wrap items-center justify-between">
                                        <div className="cursor-pointer  flex items-center justify-between">
                                            <AiOutlineShoppingCart onClick={toggleCart} className='cursor-pointer  text-black dark:text-white bg-white dark:bg-gray-900 className="border hover:bg-gray-100 border-gray-300  rounded-lg p-1 h-8 w-8 dark:border-none" ' />
                                            <button
                                                aria-label="Toggle Dark Mode"
                                                type="button"
                                                className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"

                                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                            >
                                                {mounted && (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        className="h-4 w-4 text-gray-800 dark:text-gray-200"
                                                    >
                                                        {theme === "dark" ? (
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                                            />
                                                        ) : (
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                            />
                                                        )}
                                                    </svg>
                                                )}
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-white dark:bg-gray-900 text-black dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white  ' : 'text-black dark:text-gray-300  hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white ',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <hr className='dark:border-gray-900'></hr>





      <div ref={ref} className={`w-72 h-full sideCart overflow-y-scroll overflow-x-hidden absolute top-0 right-0 bg-white  dark:bg-gray-800 px-8 py-10 transform transition-transform ${ Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full" }`}>
                <h2 className="font-bold text-xl text-center text-black dark:text-white">Shopping Cart</h2>
                <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-indigo-600'><AiFillCloseCircle /></span>
                <ol className='list-decimal font-semibold'>
                    {Object.keys(cart).length == 0 && <div className='my-4 font-semibold text-black dark:text-white'>Your cart is empty!</div>}
                    {Object.keys(cart).map((k) => {
                        return <li key={k}>
                            <div className='item flex my-5'>
                                <div className='w-2/3 font-semibold text-black dark:text-white'>{cart[k].title}({cart[k].size}/{cart[k].variant})</div>
                                <div className='flex  font-semibold items-center justify-center w-1/3 text*lg'> <AiFillMinusCircle className='text-indigo-500' onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].title, cart[k].size, cart[k].variant) }} /><span className='mx-2 text-black dark:text-white '>{cart[k].qty}</span><AiFillPlusCircle className='text-indigo-500' onClick={() => { addToCart(k, 1, cart[k].price, cart[k].title, cart[k].size, cart[k].variant) }} /> </div>
                            </div>
                        </li>
                    })}
                </ol>
                <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            ClearCart
          </button>
        </div>

            </div>


            <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
        </div>
    )
}

export default Navbar

