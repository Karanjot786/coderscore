
export default function Home() {
  return (<>
        <section className="bg-white dark:bg-gray-800 text-gray-600 body-font">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <a href="#" className="w-full block">
                  <img src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/oversizedtshirt.webp" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="hover:scale-110 transition-transform duration-300" />
                  
                  </a>

                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#" className="hover:underline">
                          Oversized T-Shirts
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        The most comfortable T-Shirts you'll ever wear.
                      </p>
                    </div>
                    </div>

              </div>

            </div>
          </div>
          </section>
    </>
  );
}
