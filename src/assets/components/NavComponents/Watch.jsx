import Header from "../Header";
import Footer from "../Footer";

function Watch() {
  const watches = [
    {
      title: "Rolex Submariner",
      price: "$5,500",
      image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Omega Seamaster",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1605101232508-283d0cd4909e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
      {
      title: "Omega Seamaster",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
      {
      title: "Omega Seamaster",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://...",
    },
      {
      title: "Omega Seamaster",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1670404160620-a3a86428560e?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://...",
    },
      {
      title: "Omega Seamaster",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1662384205880-2c7a9879cc0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds://...",
    },
      {
      title: "Omega Seamaster",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1598533891159-1d1db0800d61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dps://...",
    },
      {
      title: "Omega Seamaster",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1619976442556-210d9a914669?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
      {
      title: "Omega Seamaster",
      price: "$4,200",
      image: "https://images.unsplash.com/photo-1671119720870-df45dcaf81c1?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // alte produse
  ];

  return (
    <>
      <Header />
      <section className="p-8 bg-white dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Our Watch Collection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {watches.map((watch, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={watch.image}
                alt={watch.title}
                className="rounded-xl w-full h-64 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {watch.title}
              </h2>
              <p className="text-green-600 font-bold mt-2">{watch.price}</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Watch;
