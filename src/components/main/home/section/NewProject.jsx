import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { select_project_list_action } from "../../../../redux/actions/actions"

const NewProject = () => {

    //  Local states
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

    // //  Save task
    // const handleChangeTask = e => {
    //     setNewTask([e.target.name] = e.target.value)
    // }

    // //  Add task
    // const handleAddTask = () => {
    //     projectData.tasks.push(newTask);
    // }

    //  Submit actions
    const handleSubmit = e => {
        e.preventDefault();

        if (title.trim() === '' && description.trim() === '') {
            setValidateData({
                title: false,
                description: false
            })


        } 
    }

    //  Put correct when changes
    useEffect(() => {
        
        if (title.trim() !== '' && description !== '') {
            setValidateData({
                title: true,
                description: true
            })
        } else if (title.trim() !== '') {
            setValidateData({
                title: true,
                description: false
            })
        } else if (description.trim() !== '') {
            setValidateData({
                title: false,
                description: true
            })
        }
    }, [title, description])

    //  Disptach
    const dispatch = useDispatch();

    //  Actions
    const handleListClick = e => {
        e.preventDefault();

        dispatch(select_project_list_action());
    }

    return (
    <>
    <div className="w-75">
        <h3 className="text-center mx-1 my-3 p-1">Create a new project</h3>
        <form action="" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 mb-3">
                    <label htmlFor="title" className="form-label"><strong>Title</strong></label>
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
                    <label htmlFor="description" className="form-label"><strong>Description</strong></label>
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
                <div className="col-12">
                    <button 
                        type="submit" 
                        className="btn btn-primary w-100 my-3">
                        Add project
                    </button>
                </div>
            </div>
        </form>

        <section className="mt-3">
            {/* <div>
                <h4>Project title</h4>
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="task" className="form-label">Task</label>
                <input 
                    type="text" 
                    name="task" 
                    id="task"
                    placeholder="Add a task" 
                    className="form-control"
                    onChange={handleChangeTask}/>
                <button 
                    type="button" 
                    className="btn btn-secondary w-100 my-1"
                    onClick={() => handleAddTask()}>
                    Add task
                </button>
            </div> */}

            <div className="alert alert-success mt-5" role="alert">
                <p>Your project <strong>Title</strong> was added successfully to the database</p>
                <a 
                    href="#a"
                    onClick={handleListClick}
                    >
                    See projects list</a>                  
            </div>
        </section>
    </div>
    </>
    )
}

export default NewProject;
