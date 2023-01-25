// import React from "react";

// export default function useWindowResize() {
//     const [dimension, setDimension] = React.useState([0, 0]);

//     React.useEffect(() => {
//         window.addEventListener("resize", () => {
//             setDimension([window.innerWidth, window.innerHeight])
//         });
//         return () => {
//             window.removeEventListener("resize", () => {
//                 setDimension([window.innerWidth, window.innerHeight])
//             })
//         }
//     }, []);
    
//     return dimension;
// }