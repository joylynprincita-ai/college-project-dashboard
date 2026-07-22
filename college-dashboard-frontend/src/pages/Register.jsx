import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Register(){

    const navigate = useNavigate();

    const [role,setRole] = useState("student");

    const [form,setForm] = useState({
        username:"",
        email:"",
        college_id:"",
        password:"",
        phone:""
    });


    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };


    const register=async(e)=>{

        e.preventDefault();

        try{

            await axios.post(
                `http://127.0.0.1:8000/api/users/register/${role}/`,
                form
            );


            alert("Registration successful");

            navigate("/");

        }
        catch(error){

            console.log(error.response?.data);

            alert("Registration failed");

        }

    };


    return(

        <div className="min-h-screen flex items-center justify-center bg-gray-100">


            <form
            onSubmit={register}
            className="bg-white p-8 rounded-xl shadow-md w-96"
            >

            <h1 className="text-2xl font-bold mb-5">
                Create Account
            </h1>


            <select
            className="border p-3 w-full mb-3"
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            >

                <option value="student">
                    Student
                </option>

                <option value="faculty">
                    Teacher
                </option>

            </select>



            <input
            name="username"
            placeholder="Username"
            className="border p-3 w-full mb-3"
            onChange={handleChange}
            />


            <input
            name="email"
            placeholder="Email"
            className="border p-3 w-full mb-3"
            onChange={handleChange}
            />


            <input
            name="college_id"
            placeholder="College ID"
            className="border p-3 w-full mb-3"
            onChange={handleChange}
            />


            <input
            name="password"
            type="password"
            placeholder="Password"
            className="border p-3 w-full mb-3"
            onChange={handleChange}
            />


            <input
            name="phone"
            placeholder="Phone"
            className="border p-3 w-full mb-4"
            onChange={handleChange}
            />


            <button
            className="bg-blue-600 text-white w-full p-3 rounded"
            >
                Register
            </button>


            </form>


        </div>

    )

}


export default Register;