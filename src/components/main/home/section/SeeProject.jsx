import { useEffect, useState } from "react";
import Tasks from "./Tasks";

const SeeProject = () => {
    // Local states
    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        tasks: []
    })

    const [validateData, setValidateData] = useState({
        title: true,
        description: true
    })

    //  Destructure object
    const { title , description } = projectData;

    //  Save input values 
    const handleChangeValue = e => {
        setProjectData({
            ...projectData,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        if (title.trim() !== '' && description.trim() !== '') {
            setValidateData({
                title: true,
                description: true
            })
        } else if (title.trim() !== '') {
            setValidateData({
                ...validateData,
                title: true
            })
        } else if (description.trim() !== ''){
            setValidateData({
                ...validateData,
                description: true
            })
        }
        // eslint-disable-next-line
    }, [title, description])

    const handleSubmit = e => {
        e.preventDefault();

        if (title.trim() === '' && description.trim() === '') {
            setValidateData({
                title: false,
                description: false
            })
        } else if (title.trim() === '') {
            setValidateData({
                ...validateData,
                title: false
            })
        } else if (description.trim() === ''){
            setValidateData({
                ...validateData,
                description: false
            })
        }
    }

    return (
    <>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Project description</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form action="" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input 
                                type="text" 
                                name="title" 
                                id="text" 
                                placeholder="Type the project name"
                                className={validateData.title ? 'form-control' : 'form-control is-invalid'}
                                onChange={handleChangeValue}
                                value={title}/>
                            {validateData.title ?
                                null
                            :
                                <div className="invalid-feedback d-block">The title is empty</div>
                            }    
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input 
                                type="text" 
                                name="description" 
                                id="description"
                                placeholder="Put a brief description" 
                                className={validateData.description ? 'form-control' : 'form-control is-invalid'}
                                onChange={handleChangeValue}
                                value={description}/>
                            {validateData.description ?
                                null
                            :
                                <div className="invalid-feedback d-block">The description is empty</div>
                            }
                        </div>
                        {/* <div className="col-12">
                            <button 
                                type="submit" 
                                className="btn btn-primary w-100 my-3">
                                Add project
                            </button>
                        </div> */}
                        <Tasks/>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success">Save changes</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default SeeProject
