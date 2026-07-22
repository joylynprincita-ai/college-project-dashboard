import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login(){

    const navigate = useNavigate();

    const [college_id,setCollegeId] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");


    const login = async(e)=>{

        e.preventDefault();

        try{

            const response = await axios.post(
                "http://127.0.0.1:8000/api/users/login/",
                {
                    college_id,
                    password
                }
            );


            localStorage.setItem(
                "access",
                response.data.access
            );


            localStorage.setItem(
                "refresh",
                response.data.refresh
            );


            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );


            navigate("/dashboard");


        }
        catch(error){

            setError(
                error.response?.data?.error ||
                "Login failed"
            );

        }

    };


    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <form
            onSubmit={login}
            className="bg-white p-8 rounded-xl shadow-md w-96"
            >

                <h1 className="text-2xl font-bold mb-6">
                    College Dashboard
                </h1>


                {
                    error &&
                    <p className="text-red-500 mb-3">
                        {error}
                    </p>
                }


                <input
                className="border p-3 w-full mb-3 rounded"
                placeholder="College ID"
                value={college_id}
                onChange={(e)=>setCollegeId(e.target.value)}
                />


                <input
                className="border p-3 w-full mb-5 rounded"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />


                <button
                className="bg-blue-600 text-white w-full p-3 rounded"
                >
                    Login
                </button>
                
                <p
                className="mt-4 text-center text-blue-600 cursor-pointer"
                onClick={()=>navigate("/register")}
                >
                Create new account
                </p>

            </form>

        </div>

    );

}



export default Login;