import React, {useEffect, useState} from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom';
const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        getAllEmployees();
    }, {})

    const getAllEmployees = () =>{
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) =>{
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-sm text-left text-gray-700 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope='col' className='px-6 py-3'>Employee Id</th>
                        <th scope='col' className='px-6 py-3'>Employee First Name</th>
                        <th scope='col' className='px-6 py-3'>Employee Last Name</th>
                        <th scope='col' className='px-6 py-3'>Employee Email</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr  className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'
                                 key = {employee.id}>
                                <td className='px-6 py-4'>{employee.id}</td>
                                <td className='px-6 py-4'>{employee.firstName}</td>
                                <td className='px-6 py-4'>{employee.lastName}</td>
                                <td className='px-6 py-4'>{employee.email}</td>
                                <td className='px-6 py-4'>
                                    <Link className='font-medium text-blue-500 dark:text-blue-500 hover:underline'
                                          to={`/employees/${employee.id}`}> Update
                                     </Link>
                                    <button  className='font-medium text-red-500 dark:text-red-500 hover:underline'
                                             onClick={() => deleteEmployee(employee.id)}
                                             style={{marginLeft:'10px'}}> Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListEmployeeComponent;