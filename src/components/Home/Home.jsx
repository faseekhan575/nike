import React, { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [selectedItem, setSelectedItem] = useState(null); 
  const showed=useSelector((state)=>state.updation.info)

  const items = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1670105084645-d4e3c9800776?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      name: "NIKE-JORDAN",
      price: "1200",
      description: "BEST FOR DAILY WEAR",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      name: "NIKE-ALPHA",
      price: "2500",
      description: "SPORTS",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1695073621086-aa692bc32a3d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      name: "NIKE-AIR",
      price: "3000",
      description: "BEST FOR FASHION SHOW",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=60&w=600",
      name: "NIKE-MAX",
      price: "9000",
      description:
        "NIKE MAX OUT PRODUCT IS NOW AVAILABLE ON OUR ONLINE STORE",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=60&w=600",
      name: "NIKE-SCHOOL",
      price: "500",
      description: "BEST HIGH QUALITY DESIGNED FOR DAILY WEAR",
    },
  ];

  return (
    <div className="font-sans bg-gray-100 text-black"> {/* Hero Section */} <section className="his"> <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="Hero" className="w-full h-full object-cover bg-gray-800" /> <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4"> <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider text-white drop-shadow-lg"> Own the Inning </h1> <p className="text-white text-lg md:text-xl mt-3 drop-shadow-md"> Born on the Court. Perfected on the Field. </p> <button className="mt-6 bg-white text-black font-bold uppercase rounded-full px-6 py-3 hover:bg-gray-300 transition"> Shop </button> </div> </section>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto my-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-center mb-10">
          Featured Products
        </h2>

        
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)} // opens modal
            >
              <div className="w-full h-52 bg-gray-800 flex items-center justify-center text-white text-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                
               {showed ? (
                    <div className="text-base mb-4">
                      <span className="text-gray-500 line-through mr-2">
                        ${item.price}
                      </span>
                      <span className="text-black font-bold">
                        ${item.price*0.95}
                      </span>
                    </div>
                  ) : (
                    <div className="text-black font-bold text-base mb-4">
                      ${item.price}
                    </div>
                  )}
                <button className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        
        </div>
      </section>

      
      {selectedItem && (
        <>
          {/* Overlay (click outside to close) */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
            onClick={() => setSelectedItem(null)}
          />

          {/* Popup Modal */}
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       bg-white rounded-3xl shadow-2xl p-6 z-[1000] w-[90%] max-w-md 
                       text-center animate-scaleFade"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-lg font-bold"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            {/* Product Image */}
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 object-contain mb-4 rounded-xl"
            />

            {/* Product Info */}
            <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
            <p className="text-gray-600 mb-2">{selectedItem.description}</p>
            <span className="text-lg font-bold">${selectedItem.price}</span>

            {/* Buttons */}
            <div className="mt-5 flex justify-center gap-4 flex-wrap">
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Add to Cart
              </button>
              <button
                className="border-2 border-black px-6 py-2 rounded-full hover:bg-gray-100 transition"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>
          </div>

          {/* Simple Fade + Scale Animation */}
          <style>{`
            @keyframes scaleFade {
              0% { transform: translate(-50%, -60%) scale(0.8); opacity: 0; }
              100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            .animate-scaleFade { animation: scaleFade 0.4s ease-out forwards; }
          `}</style>
        </>
      )}
    </div>
  );
}

export default Home;

