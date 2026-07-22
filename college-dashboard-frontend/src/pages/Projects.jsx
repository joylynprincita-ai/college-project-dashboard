import {useEffect,useState} from "react";
import API from "../api";


function Projects(){


const user = JSON.parse(localStorage.getItem("user"));

const isFaculty = user?.role === "faculty";


const [projects,setProjects]=useState([]);

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");



const loadProjects=async()=>{

    const res=await API.get("/projects/projects/");

    setProjects(res.data);

};



const createProject=async(e)=>{

    e.preventDefault();


    await API.post(
        "/projects/projects/",
        {
            title,
            description
        }
    );


    setTitle("");
    setDescription("");

    loadProjects();

};



useEffect(()=>{

    loadProjects();

},[]);




return(


<div className="p-8 bg-gray-100 min-h-screen">


<h1 className="text-3xl font-bold mb-6">
Projects
</h1>





{/* ONLY FACULTY CAN CREATE PROJECT */}

{
isFaculty && (

<form
onSubmit={createProject}
className="bg-white shadow p-5 rounded mb-6"
>


<h2 className="text-xl font-bold mb-4">
Create Project
</h2>



<input
className="border p-3 w-full mb-3 rounded"
placeholder="Project title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>



<textarea
className="border p-3 w-full mb-3 rounded"
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>



<button
className="bg-blue-600 text-white px-5 py-2 rounded"
>
Create Project
</button>



</form>

)
}






{/* PROJECT LIST - BOTH FACULTY AND STUDENTS CAN SEE */}

<div className="grid md:grid-cols-2 gap-6">


{
projects.map(project=>(


<div
key={project.id}
className="bg-white shadow-lg rounded-xl p-6 border"
>


<h2 className="text-xl font-bold mb-2">
{project.title}
</h2>



<p className="text-gray-600 mb-4">
{project.description}
</p>



<div className="text-sm text-gray-500">

<p>
Project ID: {project.id}
</p>


<p>
Created By: {project.created_by || "Faculty"}
</p>


</div>



</div>


))
}



</div>

</div>


)

}


export default Projects;