import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Navbar from "./components/Navbar";


function App(){

return(

<BrowserRouter>

<Routes>


{/* Pages without Navbar */}

<Route path="/" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>



{/* Pages with Navbar */}

<Route 
path="/dashboard" 
element={
<>
<Navbar />
<Dashboard />
</>
}
/>



<Route 
path="/projects" 
element={
<>
<Navbar />
<Projects />
</>
}
/>



<Route 
path="/tasks" 
element={
<>
<Navbar />
<Tasks />
</>
}
/>



</Routes>


</BrowserRouter>

)

}


export default App;