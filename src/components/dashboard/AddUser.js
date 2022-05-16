import axios from 'axios'
import React, { useEffect } from 'react'
import { BsThreeDots } from 'react-icons/bs'

const AddUser = () => {


    const roles = [
        {
            name: "Sales Manager",
            description: "Sales representative represent us in our stores and field any stands."
        },
        {
            name: "Web Master",
            description: "Administrate the state of the website, has access to some privileges actions."
        },
        {
            name: "Customer",
            description: "Regular customer that can consult the catalogue and book an electric scooter with accessories."
        }
    ]

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/v1/scooters")
            .then((res) => {
                console.log(res.data.data);
            })
            .catch((err) => console.log("Error: " + err));
    }, []);

    const handleEditUser = (e) => {
        e.preventDefault();
    }

    return (
        <div className=''>
            <div className="flex justify-between items-center mb-10">
                <h1 className='text-2xl font-bold'>Add User</h1>
                <div className="flex items-center space-x-3">
                    <button className='p-2 border rounded-md'>Open Documentation</button>
                    <button className='p-2 border rounded-md border-violet-800 text-violet-800'>Setup Details</button>
                    <button className='p-2 border rounded-md'><BsThreeDots /></button>
                </div>

            </div>
            <h1 className='text-gray-400 font-semibold'>Choose user role</h1>

            <div className="mt-2 flex items-center  flex-wrap mx-auto">
                {
                    roles.map((role, i) => (
                        <div key={i} className={`${i === 0 ? "border-violet-800 text-violet-800" : ""}  border h-[125px] w-[250px] rounded-md flex items-center p-3 space-x-3 mr-3 mb-3`}>
                            <input type="radio" name="role" id="" className='h-10 w-10' />
                            <div className="">
                                <h1 className='font-semibold '>{role.name}</h1>
                                <p className='text-gray-400 text-sm leading-5'>{role.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <p className='my-10 text-gray-300 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit repellendus fugit repellat ex quidem reiciendis itaque numquam. Vero voluptatum laudantium reiciendis dicta assumenda fugiat error dolore tempora cumque quae! Illum quasi deleniti, omnis voluptates veniam accusamus sapiente deserunt illo nostrum velit sit laudantium dolorum esse magnam fugiat, cumque voluptatibus? Quia vel quaerat nihil repellendus ut temporibus pariatur quidem porro ea illum rem sed libero expedita, consequuntur dolorem incidunt illo laborum, deleniti quasi facere sunt. A fugiat ducimus cumque velit?</p>

            <form onSubmit={handleEditUser} className=''>
                <div className="flex space-x-10">

                    <div className="">
                        <h1 className='text-gray-400 font-light'>Profile Picture</h1>
                        <img className='rounded-xl w-[200px]' src="https://i.pinimg.com/564x/28/bc/a3/28bca37007cd6b95dc192ee2319bc681.jpg" alt="" />
                    </div>
                    <div className="w-[70%]">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full text-gray-600 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full text-gray-600 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                    Password
                                </label>
                                <input className="appearance-none block w-full text-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-city">
                                    City
                                </label>
                                <input className="appearance-none block w-full text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-state">
                                    State
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full border border-gray-200 text-gray-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option>New Mexico</option>
                                        <option>Missouri</option>
                                        <option>Texas</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" htmlFor="grid-zip">
                                    Zip
                                </label>
                                <input className="appearance-none block w-full text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-end space-x-3 ">
                    <button className='bg-blue-900 text-white p-3 rounded-md' type="submit">Save</button>
                    <button className='border text-blue-900 p-3 rounded-md' type="">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser