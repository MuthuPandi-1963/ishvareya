import { useState } from "react"
import { todoListData } from "./todoListData";
import TodoForm from "./TodoForm";

export default function TodoList() {
    const [listData,setListData] = useState(todoListData);


  return (
    <div className="flex mx-[2%] overflow-y-hidden  my-auto ">
        <div className="w-96 h-dvh overflow-y-scroll scroll-m-3">

        <h1 className=" text-5xl text-center mt-10">Todo List</h1>
      <div className=" mx-auto grid grid-cols-1">
        {
            listData.map((val,id)=>(
                <div className="list border-2 rounded-2xl m-2 p-4" key={id}>
                    <h3 className="text-3xl font-semibold">{val.name}</h3>
                    <p className="indent-3 mt-2">{val.content}</p>
                </div>
            ))
        }
    </div>
        </div>
            <TodoForm setListData={setListData} />
        </div>
  )
  
}
