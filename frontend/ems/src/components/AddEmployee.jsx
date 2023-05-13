import React, { useState } from "react";
import {Link, useNavigate, useParams} from'react-router-dom'
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
    
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();
   
    const saveOrUpdateEmployee = (e) =>{
        e.preventDefault();

        const employee = {firstName, lastName, email}

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) =>{
                navigate('/employees')
            }).catch(error =>{
                console.log(error);
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) => {

                console.log(response.data);
                navigate('/employees');
    
            }).catch(error => {
                console.log(error);
            })
        }
       
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> 
                            Add Employee
                        </h1>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            for="first_name">
                                         First Name:
                                    </label>
                                    <input  type="text"
                                            id="first_name"
                                            placeholder="Enter first name"
                                            name="firstName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}>
                                    </input>
                                </div>

                                <div>
                                    <label  for="last_name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                         Last Name: 
                                    </label>
                                    <input  type="text"
                                            id="last_name"
                                            placeholder="Enter last name"
                                            name="lastName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}>
                                    </input>
                                </div>

                                <div>
                                    <label  for="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                         Email: 
                                    </label>
                                    <input  type="email"
                                            id="email"
                                            placeholder="Enter email"
                                            name="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}>
                                    </input>
                                </div>
                                <div dir="rtl">
                                    <button  className="align-middle mx-1 text-white bg-primary-600 bg-blue-500 hover:bg-[#577480] font-bold py-2 px-4 rounded-full">
                                        <Link to="/employees"> Cancel </Link>
                                    </button >
                                    <button  className="align-middle text-white bg-primary-600 bg-blue-500 hover:bg-[#577480] font-bold py-2 px-4 rounded-full"
                                             onClick={(e) => saveOrUpdateEmployee(e)}>
                                        Submit 
                                    </button>
                                    
                                </div>
                            
                            </form>
                        </div>
                    </div>
            </div>
        </section>            
    );
    
}

export default AddEmployee;