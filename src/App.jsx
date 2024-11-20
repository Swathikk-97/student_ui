import { useState , useEffect } from 'react'
import './App.css'
import Studentform from './Components/Studentform'
import Studentlist from './Components/Studentlist'
import axios from 'axios'

function App() {
  const [students,setStudents] =  useState([])
  const fetchstudent = async()=>{
    try{
        const response = await axios.get('http://127.0.0.1:8000/student/')
        setStudents(response.data)
    }
    catch(error){
        console.error('error',error)

    }
}

const onAdd=(newStudent) => {
  setStudents([...students,newStudent])
}
const deleteStudent = async (id)=>{
  try{
    const response = await axios.delete(`http://127.0.0.1:8000/student/${id}/delete`)
    if (response.status == 204) {
      setStudents((students)=>students.filter((student)=>student.id !==id))
    }
  }
  catch (error){
    console.error('error in deleting student',error)

  }
}

const editStudent = async (id,updatedStudent)=>{
  try {
    const response = await axios.put(`http://127.0.0.1:8000/student/${id}/update`,updatedStudent)
  
  if (response.status == 200) {
    setStudents((students)=>students.map((student)=>student.id == id ? {...student, ...updatedStudent}:student))
  }
}
  catch (error){
    console.error('error in editing student',error)
}
}

useEffect(()=>{
    fetchstudent();
},[])

  return (
    <div>
      <Studentform onAdd={onAdd}></Studentform>
      <Studentlist students={students} onDeleteStudent={deleteStudent} onEditStudent={editStudent}></Studentlist>
      
    </div>
  )
}

export default App
