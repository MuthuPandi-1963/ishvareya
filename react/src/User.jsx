import { userData } from "./user";

export default function User() {
    console.log(userData);
    console.log(userData[0].name);
    
    console.log(userData.map(val=>val.name));
    
    
  return (
    <table>
        <thead>
            <tr>
                <td>SNo</td>
                <td>Name</td>
                <td>Age</td>
                <td>City</td>
                <td>Role</td>
            </tr>
        </thead>
        {
            userData.map((val,id)=>(
                    <tr>
                        <td>{id+1}</td>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.city}</td>
                        <td>{val.role}</td>
                    </tr>
            ))
        }
    </table>
  )
}
