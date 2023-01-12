import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({value : null})
  const [key, setKey] = useState()
  useEffect(() =>{
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.clear()
    }
    const token = localStorage.getItem('token');
    if(token){
      setUser({value : token})
      setKey(Math.random());
    }
  }, [router.query])
  
  const saveCart = (myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt= 0;
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length;i++){
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }
  const addToCart = (itemCode, qty, price, title, size, variant)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode] = {qty: 1, price, title, size, variant}
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const Logout = () => {
    localStorage.removeItem('token')
    setUser({value : null})
    setKey(Math.random())
    router.push('/')
 }

  const buyNow = (itemCode, qty, price, title, size, variant)=>{
    let newCart = {itemCode: {qty: 1, price, title, size, variant}}
    setCart(newCart)
    saveCart(newCart)
    router.push("/checkout")
  }

  const clearCart = ()=>{
    setCart({})
    saveCart({})
  }
  const removeFromCart = (itemCode, qty, price, title, size, variant)=>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
      if(newCart[itemCode]["qty"]<=0){
        delete newCart[itemCode]
      }
    setCart(newCart)
    saveCart(newCart)
  }

  return <>
       
      <Head>
        <title>coders core</title>
      </Head>
  <ThemeProvider attribute="class">
  <Navbar Logout={Logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}  {...pageProps} />
  <Footer />
  </ThemeProvider>
  </>
}

export default MyApp
