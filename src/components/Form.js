import React from 'react'

export default function Form({title,settitle,tag,settag,desc,setdesc,notes,setnotes}) {
    const inputHandler=(e)=>{
        if(e.target.id === "title"){
            settitle(e.target.value)
        }else if (e.target.id === "tag") {
            settag(e.target.value )
        } else {
            setdesc(e.target.value)
        }
        
    }
    const addNotesHandler=(e)=>{
        e.preventDefault()
        if(title!==""&&tag!==""&&desc!=="")
        {
            setnotes((note)=>{
                return(
                    [...note,{
                        title:title,
                        tag:tag,
                        desc:desc,
                        id:new Date().getTime()
                    }]
                )
            })
        }
        settitle("");
        settag("");
        setdesc("");

    }
    return (
        <>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <form style={{border:"2px solid #ced4da",borderRadius:"10px",padding:"30px"}}>
                            <div className="mb-3" >
                                <label for="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="Enter your Title" value={title} onChange={inputHandler}/>

                            </div>
                            <div className="mb-3">
                                <label for="tag" className="form-label">Tags</label>
                                <input type="text" className="form-control" id="tag" placeholder="Enter your Tags" value={tag} onChange={inputHandler}/>

                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label">Description</label>
                                <textarea name="desc" id="desc" rows="3" className="form-control" placeholder="Enter your Description" value={desc} onChange={inputHandler}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>Add Notes</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
