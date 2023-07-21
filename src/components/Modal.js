import React from 'react'

export default function EditModal({editid, notes, setnotes}) {
    const updateHandler = () => {
      const updateNotes = notes.map((elem) => {
            if (editid === elem.id) {
              return({
                ...elem, title: document.getElementById("edittitle").value,
                tag:document.getElementById("edittag").value,
                 desc:document.getElementById("editdesc").value
              })
            }
            else{
                return elem;
            }
        })
        setnotes(updateNotes)
    }
    return (

        <>



            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Notes</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="mb-3" >
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="edittitle" placeholder="Enter your Title" />

                                </div>
                                <div className="mb-3">
                                    <label for="tag" className="form-label">Tags</label>
                                    <input type="text" className="form-control" id="edittag" placeholder="Enter your Tags" />

                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">Description</label>
                                    <textarea name="desc" id="editdesc" rows="3" className="form-control" placeholder="Enter your Description"></textarea>
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandler}>Edit Notes</button>

                        </div>
                    </div>
                </div>
            </div></>
    )
}
