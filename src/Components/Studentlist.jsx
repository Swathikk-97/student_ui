import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Studentlist({students,onDeleteStudent,onEditStudent}) {
    const[editid,setEditid] = useState(null)
    const[editStudent,seteditStudent] = useState({name:'',age:'',email:''})

    const onhandleEditclick = (student)=>{
        setEditid(student.id)
        seteditStudent({name:student.name,age:student.age,email:student.email})
    }

    const handleSave = () =>{
        onEditStudent(editid,editStudent)
        setEditid(null)
    }

    const handleCancel = () =>{
        seteditStudent({name:'',age:'',email:''})
        setEditid(null)
    }

  return (
    <div>
        <h1>list of students</h1>
        <ul>
            {students.map(student=>(
                <li key={student.id}>
                    {editid==student.id ? (
                        <div>
                            <input id='text' value={editStudent.name} onChange={(e)=>seteditStudent({...editStudent,name:e.target.value})}></input>
                            <input id='number' value={editStudent.age} onChange={(e)=>seteditStudent({...editStudent,age:e.target.value})}></input>
                            <input id='email' value={editStudent.email} onChange={(e)=>seteditStudent({...editStudent,email:e.target.value})}></input>
                            <button onClick={handleSave}>SAVE</button>
                            <button onClick={handleCancel}>CANCEL</button>
                        </div>
                    ):(
                     <div>
                        {student.name} {student.age} {student.email}

                        <button onClick={()=> onDeleteStudent(student.id)}>DELETE</button>
                        <button onClick={()=> onhandleEditclick(student)}>EDIT</button>
                     </div>
                    )}

                </li>
            ))}
        </ul>

    </div>
  )
}

export default Studentlist