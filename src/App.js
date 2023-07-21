import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Notes from './components/Notes'
import Modal from './components/Modal'

export default function App() {
   const [title, settitle] = useState("")
   const [tag, settag] = useState("")
   const [desc, setdesc ]= useState("")
   const [notes, setnotes] = useState(getNotesFromList)
   const [editid, seteditid ]= useState("")
   localStorage.setItem("notes",JSON.stringify(notes))
  
  return (
    <>
      <Modal editid={editid} notes={notes} setnotes={setnotes}/>
      <Navbar />
      
      <Form title={title} settitle={settitle} tag={tag} settag={settag} desc={desc} setdesc={setdesc} notes={notes} setnotes={setnotes}/>
      <div className="container" >
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1>Your Notes</h1>
            {
              notes.length===0?<div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    Message
                  </h5>
                  <p className="card-text">No notes are available for reading</p>
                </div>
              </div>:notes.map((element)=>{
              return(
                <Notes element={element} key={element.id} notes={notes} setnotes={setnotes} seteditid={seteditid}/>
              )
               } )
            }
           
          </div>
        </div>
      </div>
     
    </>
  )
  function getNotesFromList(){
    const note=JSON.parse(localStorage.getItem("notes"));
    if(note){
      return note
    }
    else{
      return [];
    }
  }
}
