import Practice from "./Practice";

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
  <Practice/>
  )
}
