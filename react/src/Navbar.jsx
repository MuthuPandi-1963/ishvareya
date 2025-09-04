
// export default function Navbar() {
//   const navItems = [ "Home","About","Settings","Login","Signup"]
//   return (
//     <ul>
//       <li>{navItems[0]}</li>
//       <li>{navItems[1]}</li>
//       <li>{navItems[2]}</li>
//       <li>{navItems[3]}</li>
//       <li>{navItems[4]}</li>
//     </ul>
//   )
// }



// export default function Navbar() {
//   const navItems = [ "Home","About","Settings","Login","Signup"]
//   console.log(navItems.map(val=>val.toUpperCase()));
  
//   return (
//     <ul>
//       {/* <li>Home</li> */}
//       {
//         navItems.map(
//           function(val,id){
//             return (
//               <li>{val}</li>
//             )
//           }
//         )
//       }
//     </ul>
//   )
// }


export default function Navbar() {
  const navItems = [ "Home","About","Settings","Login","Signup"]
  console.log(navItems.map(val=>val.toUpperCase()));
  
  return (
    <ul>
      {/* <li>Home</li> */}
      {
        navItems.map(
          (v,id )=>(
            <li>{v}</li>
          )
        )
      }
    </ul>
  )
}
