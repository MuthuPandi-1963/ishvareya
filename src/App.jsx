import Global from "./Global";
import Practice from "./Practice";
import Product from "./props/Product";
import cam from './assets/camera.jpeg'
import air from './assets/airpods.jpeg'
import User from "./User.jsx";
export default function App() {

  const user = {
    name : "Ram",
    age :24 ,
    city : "madurai",
    role : "admin"
  }
  console.log(Object.entries(user));
  let keys = [];
  let values = [];
  for(const ele of Object.entries(user)){
    console.log(ele[0],ele[1]);
    keys.push(ele[0])
    values.push(ele[1])
    
  }
  console.log("keys : ",keys);
  console.log("values : ",values);
  
  
  
  return (
  // <Practice/>
  <>
  <Global>

  <Product pname ={"Camera"} price={20000} image={cam}  />
  <Product pname ={"Headphone"} price={10000} image={air}/>
  <Product pname ={"Ipad"} price={40000}/>
  <Product />
  <Product/>
  <User/>
  </Global>
  </>
  )
}
