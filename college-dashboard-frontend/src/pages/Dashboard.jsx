import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";


function Dashboard(){

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const isFaculty = user?.role === "faculty";
    const isStudent = user?.role === "student";


    const [stats,setStats] = useState({
        total_projects:0,
        total_tasks:0,
        completed_tasks:0,
        pending_tasks:0
    });



    const loadStats = async()=>{

        try{

            const response = await API.get("/dashboard/");

            setStats(response.data);

        }
        catch(error){

            console.log(error);

        }

    };



    useEffect(()=>{

        loadStats();

    },[]);




return(

<div className="min-h-screen bg-gray-100 p-8">


<h1 className="text-3xl font-bold">
Welcome {user?.username}
</h1>


<p className="text-gray-600 mb-8">
College Project Dashboard
</p>





{/* ANALYTICS CARDS */}

<div className="grid md:grid-cols-4 gap-6 mb-8">



<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-gray-500">
Projects
</h2>

<p className="text-3xl font-bold">
{stats.total_projects}
</p>

</div>





<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-gray-500">
Tasks
</h2>

<p className="text-3xl font-bold">
{stats.total_tasks}
</p>

</div>





<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-gray-500">
Completed
</h2>

<p className="text-3xl font-bold">
{stats.completed_tasks}
</p>

</div>





<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-gray-500">
Pending
</h2>

<p className="text-3xl font-bold">
{stats.pending_tasks}
</p>

</div>



</div>





<div className="grid md:grid-cols-3 gap-6">



{
isFaculty && (

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold">
Manage Projects
</h2>

<p className="text-gray-500 mb-4">
Create and monitor projects
</p>


<button
onClick={()=>navigate("/projects")}
className="bg-blue-600 text-white px-5 py-2 rounded"
>
Projects
</button>


</div>

)
}





{
isFaculty && (

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold">
Manage Tasks
</h2>

<p className="text-gray-500 mb-4">
Assign student tasks
</p>


<button
onClick={()=>navigate("/tasks")}
className="bg-green-600 text-white px-5 py-2 rounded"
>
Tasks
</button>


</div>

)
}






{
isStudent && (

<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold">
My Tasks
</h2>


<p className="text-gray-500 mb-4">
Track your progress
</p>


<button
onClick={()=>navigate("/tasks")}
className="bg-green-600 text-white px-5 py-2 rounded"
>
View Tasks
</button>


</div>

)
}




<div className="bg-white p-6 rounded-xl shadow">

<h2 className="text-xl font-bold">
Profile
</h2>


<p>
Role: {user?.role}
</p>


<p>
ID: {user?.college_id}
</p>


</div>




</div>


</div>

)

}


export default Dashboard;