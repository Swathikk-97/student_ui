import React, { useState } from 'react'
import axios from 'axios'

export default function Studentform({onAdd}) {
    const [name,setName] = useState ('')
    const [age,setAge] = useState ('')
    const [email,setEmail] = useState ('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
    const studentData = {name,age,email}
    try{
        const response = await axios.post('http://127.0.0.1:8000/student/create',studentData)
        console.log(response.data)
        onAdd(studentData)
        setName('')
        setAge('')
        setEmail('')
    }
    catch(error){
        console.error("Error",error)
    }

    }

  return (
    <div>
        <h1>Add Student</h1>
        <form onSubmit={handleSubmit}> 
            <label>Name : </label><input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <label>Age : </label><input type='number' value={age} onChange={(e)=>setAge(e.target.value)}></input>
            <label>Email : </label><input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <button type='submit' > Add Student</button>
        </form>
    </div>
  )
}
