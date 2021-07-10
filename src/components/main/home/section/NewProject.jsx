import { useState } from "react"

const NewProject = () => {

    //  Local states
    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        tasks: []
    })

    const [newTask, setNewTask] = useState('')

    //  Destructure object
    const { title , description , tasks} = projectData;

    //  Save input values 
    const handleChangeValue = e => {
        setProjectData({
            ...projectData,
            [e.target.name] : e.target.value
        })
    }

    //  Save task
    const handleChangeTask = e => {
        setNewTask([e.target.name] = e.target.value)
    }

    //  Add task
    const handleAddTask = () => {
        projectData.tasks.push(newTask);
    }

    //  Submit actions
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
    <>
    <div className="w-75">
        <h3 className="text-center">Create a new project</h3>
        <form action="" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="text" 
                        placeholder="Type the project name"
                        className="form-control"
                        onChange={handleChangeValue}
                        value={title}/>
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input 
                        type="text" 
                        name="description" 
                        id="description"
                        placeholder="Put a brief description" 
                        className="form-control"
                        onChange={handleChangeValue}
                        value={description}/>
                </div>
                <div className="col-12">
                    <button 
                        type="submit" 
                        className="btn btn-primary w-100 my-1">
                        Add project
                    </button>
                </div>
            </div>
        </form>

        <section className="mt-3">
            <div>
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
            </div>
        </section>
    </div>
    </>
    )
}

export default NewProject
