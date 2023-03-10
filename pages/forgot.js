import React from 'react'

const Forgot = () => {
  return (
    <div>
        <div className="bg-white dark:bg-gray-800 rounded  flex flex-col items-center justify-center">
  <div className='py-16 px-12 m-16'>
  <img className="rounded-full justify-center" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user avatar" />
  <form method="post" className="mt-8 mb-4">
    <div className="mb-4">
      <label htmlFor="userEmail" className="sr-only">Email address</label>
      <input className="border-solid border border-gray-400 rounded px-2 py-3" type="email" id="userEmail" placeholder="Email address" required />
    </div>
    <div>
      <label htmlFor="userEmail" className="sr-only">Password</label>
      <input className="border-solid border border-gray-400 rounded px-2 py-3" type="password" id="userPass" placeholder="Password" required />
    </div>
    <div className="my-4 flex items-center">
      <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
      <label htmlFor="userRemember">Remember me</label>
    </div>
    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3" type="submit">Sign in</button>
  </form>
  <a href="#" className="self-start">Forgot the password?</a>
  </div>
</div>
    </div>
  )
}

export default Forgot