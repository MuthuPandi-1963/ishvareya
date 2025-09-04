// import cam from '../assets/camera.jpeg'
// export default function Product() {
    
//   return (
//     <div className='grid p-4 border border-gray-700 rounded-2xl'>
//         <img src={cam} alt="" className='w-80 object-cover' />
//         <h1>Camera</h1>
//         <p className='w-80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic ullam cum, ratione odit praesentium reiciendis perspiciatis at nulla unde laborum minus, quidem commodi incidunt repellendus quod aperiam magni dolore maxime!</p>
//     </div>
//   )
// }

// import cam from '../assets/camera.jpeg'
// export default function Product(props) {
//     console.log(props);
    
//   return (
//     <div className='grid p-4 border border-gray-700 rounded-2xl'>
//         <img src={cam} alt="" className='w-80 object-cover' />
//         <h1>{props.pname}</h1>
//         <p className='w-80'>Price : ₹{props.price}</p>
//     </div>
//   )
// }

// import cam from '../assets/camera.jpeg'
// export default function Product(props) {
//     console.log(props);
//     const {pname,price} = props
    
//   return (
//     <div className='grid p-4 border border-gray-700 rounded-2xl'>
//         <img src={cam} alt="" className='w-80 object-cover' />
//         <h1>{pname}</h1>
//         <p className='w-80'>Price : ₹{price}</p>
//     </div>
//   )
// }

import cam from '../assets/camera.jpeg'
export default function Product({pname = "Nothing",price,image}) {
    
  return (
    <div className='grid p-4 border border-gray-700 rounded-2xl'>
        <img src={image} alt="" className='w-80 object-cover' />
        <h1>{pname}</h1>
        <p className='w-80'>Price : ₹{price}</p>
    </div>
  )
}