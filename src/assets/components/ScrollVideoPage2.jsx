// // src/components/ScrollVideo.jsx
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const ScrollVideo = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="relative w-full h-full">
//       {/* Background Photo */}
//       <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
//       <img src="" alt="" />
//       </div>

//       {/* Content Sections */}
//       <section className="h-screen flex items-center justify-center text-white text-5xl font-bold bg-black/50">
//         <h1 data-aos="fade-up">Welcome to Rolex World</h1>
//       </section>

//       <section className="h-screen flex items-center justify-center text-white text-5xl font-bold bg-black/50">
//         {/* <h1 data-aos="fade-up">Explore Our Watches</h1> */}
//         <div className="flex items-center gap-2">
//           <img className="w-[800px] h-auto" src="/rolex-logo.svg" alt="Rolex Logo" />
//         </div>
//       </section>

//       <section className="h-screen flex items-center justify-center text-white text-5xl font-bold bg-black/50">
//         <h1 data-aos="fade-up">Luxury & Precision</h1>
//       </section>
//     </div>
//   );
// };

// export default ScrollVideo;
