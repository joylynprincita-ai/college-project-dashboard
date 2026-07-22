import {useEffect,useState} from "react";
import API from "../api";


function Tasks(){

    const user = JSON.parse(localStorage.getItem("user"));

    const isFaculty = user?.role === "faculty";


    const [tasks,setTasks]=useState([]);



    const loadTasks=async()=>{

        const res = await API.get("/tasks/tasks/");

        setTasks(res.data);

    };



    useEffect(()=>{

        loadTasks();

    },[]);




    const updateStatus = async(id,status)=>{

        await API.patch(
            `/tasks/tasks/${id}/`,
            {
                status:status
            }
        );


        loadTasks();

    };



return(

<div className="p-8 bg-gray-100 min-h-screen">


<h1 className="text-3xl font-bold mb-6">
Tasks
</h1>




<div className="grid gap-4">


{
tasks.map(task=>(


<div
key={task.id}
className="bg-white shadow-lg rounded-xl p-6"
>


<h2 className="font-bold text-xl">
{task.title}
</h2>



<p>
{task.description}
</p>



<p className="mt-3">

Priority:

<span className="ml-2 px-3 py-1 rounded bg-yellow-100">
{task.priority}
</span>

</p>



<p className="mt-3">

Status:

<span className="ml-2 px-3 py-1 rounded bg-green-100">
{task.status}
</span>

</p>




{/* ONLY STUDENTS CAN UPDATE STATUS */}

{
!isFaculty && (

<select
value={task.status}
onChange={(e)=>
updateStatus(task.id,e.target.value)
}
className="border p-2 mt-3 rounded"
>


<option value="todo">
To Do
</option>


<option value="progress">
In Progress
</option>


<option value="done">
Done
</option>


</select>

)
}



</div>


))

}



</div>



</div>

)

}


export default Tasks;