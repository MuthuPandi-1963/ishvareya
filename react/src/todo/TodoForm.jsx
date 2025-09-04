import { useState } from "react"

export default function TodoForm({setListData}) {
    const [name,setName] = useState("");
    const [content,setContent] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        const task = {
            name : name,
            content : content
        }
        console.log(task);
        setListData((prev)=>(
            [...prev,task]
        ))
        setName("")
        setContent("")
    }
  return (
    <div className=" flex-1  mx-10 items-center grid h-screen content-center">
        <form onSubmit={handleSubmit} className="border rounded-2xl p-10">

        <h1 className="text-3xl font-semibold text-center">Add task</h1>
        <div className="grid">
            <div className="grid mx-10">
                <label htmlFor="name" className="font-semibold">Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}
                required
                 className="border rounded-lg mt-2 py-2 px-6" placeholder="enter a task name"/>
            </div>
            <div className="grid mx-10">
                <label htmlFor="name" className="font-semibold mt-2">Content</label>
                <textarea type="text" onChange={(e)=>setContent(e.target.value)} value={content}
                 className="border rounded-lg mt-2 py-2 px-6 h-32 min-h-full" placeholder="enter a task name"></textarea>
            </div>
            <button type="submit" className=" py-2 mx-10 mt-8 text-white cursor-pointer rounded-lg bg-blue-600 hover:bg-blue-700">Add Task</button>
        </div>
        </form>
    </div>
  )
}
