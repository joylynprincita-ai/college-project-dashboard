import { useNavigate } from "react-router-dom";


function Navbar(){

    const navigate = useNavigate();


    const user = JSON.parse(localStorage.getItem("user"));



    const logout = ()=>{

        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");

        navigate("/");

    };



return(

<nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">


<h1 
className="text-xl font-bold cursor-pointer"
onClick={()=>navigate("/dashboard")}
>
College Dashboard
</h1>



<div className="flex gap-5 items-center">


<button
onClick={()=>navigate("/dashboard")}
>
Dashboard
</button>



<button
onClick={()=>navigate("/projects")}
>
Projects
</button>



<button
onClick={()=>navigate("/tasks")}
>
Tasks
</button>




<span className="border-l pl-5">
{user?.username}
</span>



<button
onClick={logout}
className="bg-white text-blue-600 px-4 py-2 rounded"
>
Logout
</button>


</div>


</nav>

)

}


export default Navbar;