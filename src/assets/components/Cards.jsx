function Cards() {
  return (
    <section className="w-full bg-white dark:bg-[#0A2025] py-9 px-8">
      <div className="mx-auto max-w-[1160px]">
        <header className="h-12 mb-8 justify-between items-center flex">
          <h2 className="text-[#0A2025] dark:text-white text-2xl font-bold font-['Roboto']">
           ROLEX
          </h2>
          <div className="flex gap-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0.5C16.1433 0.5 12.3731 1.64366 9.16639 3.78634C5.95963 5.92903 3.46027 8.97451 1.98436 12.5377C0.508449 16.1008 0.122284 20.0216 0.874696 23.8043C1.62711 27.5869 3.4843 31.0615 6.21143 33.7886C8.93855 36.5157 12.4131 38.3729 16.1957 39.1253C19.9784 39.8777 23.8992 39.4916 27.4623 38.0156C31.0255 36.5397 34.071 34.0404 36.2137 30.8336C38.3564 27.6269 39.5 23.8567 39.5 20C39.4945 14.83 37.4383 9.87322 33.7826 6.21745C30.1268 2.56167 25.1701 0.50546 20 0.5Z"
                fill="#449596"
                fillOpacity="0.5"
              />
            </svg>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0.5C16.1433 0.5 12.3731 1.64366 9.16639 3.78634C5.95963 5.92903 3.46027 8.97451 1.98436 12.5377C0.508449 16.1008 0.122284 20.0216 0.874696 23.8043C1.62711 27.5869 3.4843 31.0615 6.21143 33.7886C8.93855 36.5157 12.4131 38.3729 16.1957 39.1253C19.9784 39.8777 23.8992 39.4916 27.4623 38.0156C31.0255 36.5397 34.071 34.0404 36.2137 30.8336C38.3564 27.6269 39.5 23.8567 39.5 20C39.4945 14.83 37.4383 9.87322 33.7826 6.21745C30.1268 2.56167 25.1701 0.50546 20 0.5Z"
                fill="#3E9D26"
              />
            </svg>
          </div>
        </header>

        <main className="flex items-center flex-col md:flex-row gap-10">
          <div>
            <img
              className="mb-7 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
              src="https://images.unsplash.com/photo-1619976491498-f2dadb25fb3b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rolex"
            />
            <div>
              <h3 className="text-[#0A2025] dark:text-white text-2xl font-bold font-['Roboto']">
                Rolex
              </h3>
              <p className="mt-5 mb-8 text-[#0A2025] dark:text-white text-sm font-normal font-['Roboto']">
                Unmatched elegance and precision — the legacy of Rolex.
              </p>
              <button className="text-[#3e9d26] text-sm font-semibold font-['Roboto']">
                Shop
              </button>
            </div>
          </div>

          <div>
            <img
              className="mb-7 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
              src="https://images.unsplash.com/photo-1619976396248-56d05beb2919?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rolex"
            />
            <div>
              <h3 className="text-[#0A2025] dark:text-white text-2xl font-bold font-['Roboto']">
                Rolex
              </h3>
              <p className="mt-5 mb-8 text-[#0A2025] dark:text-white text-sm font-normal font-['Roboto']">
                Crafted to impress. Worn to lead.
              </p>
              <button className="text-[#3e9d26] text-sm font-semibold font-['Roboto']">
                Shop
              </button>
            </div>
          </div>

          <div>
            <img
              className="mb-7 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
              src="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rolex"
            />
            <div>
              <h3 className="text-[#0A2025] dark:text-white text-2xl font-bold font-['Roboto']">
                Rolex
              </h3>
              <p className="mt-5 mb-8 text-[#0A2025] dark:text-white text-sm font-normal font-['Roboto']">
                Iconic design. Timeless performance.
              </p>
              <button className="text-[#3e9d26] text-sm font-semibold font-['Roboto']">
                Shop
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
export default Cards;
