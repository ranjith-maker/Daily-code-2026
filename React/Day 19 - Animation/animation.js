


// import { useState } from "react";

// export default function MouseFollower() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   function handleMove(e) {
//     setPos({
//       x: e.clientX,
//       y: e.clientY,
//     });
//   }

//   return (
//     <div
//       onMouseMove={handleMove}
//       className="h-screen w-full bg-gray-100"
//     >
//       <div
//         className="w-5 h-5 bg-black rounded-full fixed"
//         style={{
//           transform: `translate(${pos.x}px, ${pos.y}px)`,
//         }}
//       />
//     </div>
//   );
// }



// Mouse Follower

// In performance CPU throttling, 20x slowdown , record it and stop after 10secs
// The graph shows the numbers like 1000ms 2000ms 4000ms 5000ms 10000ms, the higher the number the higher the your CPU runs
// Gold color is JS 




// import { useEffect, useRef } from "react";

// export default function MouseFollower() {
//   const dotRef = useRef();

//   useEffect(() => {
//     let frame;

//     function handleMove(e) {
//       if (frame) return;

//       frame = requestAnimationFrame(() => {
//         dotRef.current.style.transform = 
//           `translate(${e.clientX}px, ${e.clientY}px)`;
//         frame = null;
//       });
//     }

//     window.addEventListener("mousemove", handleMove);

//     return () => window.removeEventListener("mousemove", handleMove);
//   }, []);

//   return (
//     <div className="h-screen">
//       <div
//         ref={dotRef}
//         className="w-5 h-5 bg-black rounded-full fixed"
//       />
//     </div>
//   );
// }


