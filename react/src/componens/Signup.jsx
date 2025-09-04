// import { useState } from "react"

// export default function Signup() {
//     const [username,setUsername] = useState("")
//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState("")
//     const [c_pwd,setC_pwd] = useState("")
//   return (
//     <div className="h-screen flex item-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded shadow-2xl w-96 h-fit m-auto">
//             <h1>{username}</h1>
//             <h1>{email}</h1>
//             <h1>{password}</h1>
//             <h1>{c_pwd}</h1>
//             <h1 className="text-2xl font-bold mb-6 text-center ">Signup</h1>
//         <form className="space-y-6 grid">
//             <div className="form-inputs">
//                 <label htmlFor="username">Username:</label>
//                 <input type="text" name="" id="username" placeholder="Enter a Username" onChange={(e)=>{
//                     setUsername(e.target.value)
                    
//                 }} />
//             </div>
//             <div className="form-inputs">
//                 <label htmlFor="email">Email or Phone Number:</label>
//                 <input type="text" name="" id="email" placeholder="Enter a email" onChange={(e)=>{
//                     setEmail(e.target.value)
                    
//                 }} />
//             </div>
//             <div className="form-inputs">
//                 <label htmlFor="password">password:</label>
//                 <input type="password" name="" id="password" placeholder="Enter a password" onChange={(e)=>{
//                     setPassword(e.target.value)
                    
//                 }}/>
//             </div>
//             <div className="form-inputs">
//                 <label htmlFor="c-password">Re-enter:</label>
//                 <input type="password" name="" id="c-password" placeholder="Enter a Confirm Passsword"  onChange={(e)=>{
//                     setC_pwd(e.target.value)
                    
//                 }}/>
//             </div>
//             <button className="submit">Signup</button>
//         </form>
//     </div>
//     </div>
//   )
// }


// import { useState } from "react"
// const formData = {
//     username : "",
//     email : "",
//     password : "",
//     confirmPassword:""

// }
// export default function Signup() {
//     const [SignupData,setSignupData] = useState(formData);
//     console.log(SignupData);
    
    
//   return (
//     <div className="h-screen flex item-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded shadow-2xl w-96 h-fit m-auto">
      
//             <h1 className="text-2xl font-bold mb-6 text-center ">Signup</h1>
//         <form className="space-y-6 grid">
//             <div className="form-inputs">
//                 <label htmlFor="username">Username:</label>
//                 <input type="text" name="username" id="username" placeholder="Enter a Username" onChange={(e)=>setSignupData((prev)=>{
//                     console.log(prev);
//                     // return prev
//                     return {...prev,username  :e.target.value}
                    
//                 })}
//                  />
//             </div>
//             <div className="form-inputs">
//                 <label htmlFor="email">Email or Phone Number:</label>
//                 <input type="text" name="email" id="email" placeholder="Enter a email"  onChange={(e)=>setSignupData((prev)=>{
//                     console.log(prev);
//                     // return prev
//                     return {...prev,email  :e.target.value}
                    
//                 })}/>
//             </div>
//             <div className="form-inputs">
//                 <label htmlFor="password">password:</label>
//                 <input type="password" name="password" id="password" placeholder="Enter a password" onChange={(e)=>setSignupData((prev)=>{
//                     console.log(prev , e.target.name);
//                     // return prev
//                     return {...prev,password  :e.target.value}
                    
//                 })}/>
//             </div>
//             <div className="form-inputs">
//                 <label htmlFor="c-password">Re-enter:</label>
//                 <input type="password" name="confirmPassword" id="c-password" placeholder="Enter a Confirm Passsword"  onChange={(e)=>setSignupData((prev)=>{
//                     console.log(prev);
//                     // return prev
//                     return {...prev,confirmPassword  :e.target.value}
                    
//                 })}/>
//             </div>
//             <button className="submit">Signup</button>
//         </form>
//     </div>
//     </div>
//   )
// }




// import { useState } from "react"
// const formData = {
//     username : "",
//     email : "",
//     password : "",
//     confirmPassword:""

// }
// export default function Signup() {
//     const [SignupData,setSignupData] = useState(formData);
//     console.log(SignupData);
    
    
//   return (
//     <div className="h-screen flex item-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded shadow-2xl w-96 h-fit m-auto">
      
//             <h1 className="text-2xl font-bold mb-6 text-center ">Signup</h1>
//         <form className="space-y-6 grid">
//             <div className="form-inputs">
//                 <label htmlFor="username">Username:</label>
//                 <input type="text" name="username" id="username" placeholder="Enter a Username" onChange={(e)=>setSignupData((prev)=>{
//                     console.log(prev);
//                     // return prev
//                     return {...prev,[e.target.name]  :e.target.value}
                    
//                 })}
//                  />
//             </div>
//             <div className="form-inputs">
//                 <label htmlFor="email">Email or Phone Number:</label>
//                 <input type="text" name="email" id="email" placeholder="Enter a email"  onChange={(e)=>setSignupData((prev)=>{
//                     console.log(prev);
//                     // return prev
//                     return {...prev,[e.target.name]  :e.target.value}
                    
//                 })}/>
//             </div>
//             <div className="form-inputs">
//                 <label htmlFor="password">password:</label>
//                 <input type="password" name="password" id="password" placeholder="Enter a password" onChange={(e)=>setSignupData((prev)=>{
//                     console.log(prev , e.target.name);
//                     // return prev
//                     return {...prev,[e.target.name]  :e.target.value}
                    
//                 })}/>
//             </div>
//             <div className="form-inputs">
//                 <label htmlFor="c-password">Re-enter:</label>
//                 <input type="password" name="confirmPassword" id="c-password" placeholder="Enter a Confirm Passsword"  onChange={(e)=>setSignupData((prev)=>{
//                     console.log(prev);
//                     // return prev
//                     return {...prev,[e.target.name]  :e.target.value}
                    
//                 })}/>
//             </div>
//             <button className="submit">Signup</button>
//         </form>
//     </div>
//     </div>
//   )
// }


import { useState } from "react"
const formData = {
    username : "",
    email : "",
    password : "",
    confirmPassword:""

}
export default function Signup() {
    const [SignupData,setSignupData] = useState(formData);
    console.log(SignupData);
    const handleChange = (e)=>setSignupData((prev)=>({...prev,[e.target.name]  :e.target.value}))
                    

  return (
    <div className="h-screen flex item-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-2xl w-96 h-fit m-auto">
      
            <h1 className="text-2xl font-bold mb-6 text-center ">Signup</h1>
        <form className="space-y-6 grid">
            <div className="form-inputs">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" placeholder="Enter a Username" onChange={handleChange}
                 />
            </div>
            <div className="form-inputs">
                <label htmlFor="email">Email or Phone Number:</label>
                <input type="text" name="email" id="email" placeholder="Enter a email"  onChange={handleChange}/>
            </div>
            <div className="form-inputs">
                <label htmlFor="password">password:</label>
                <input type="password" name="password" id="password" placeholder="Enter a password" onChange={handleChange}/>
            </div>
            <div className="form-inputs">
                <label htmlFor="c-password">Re-enter:</label>
                <input type="password" name="confirmPassword" id="c-password" placeholder="Enter a Confirm Passsword"  onChange={handleChange}/>
            </div>
            <button className="submit">Signup</button>
        </form>
    </div>
    </div>
  )
}
