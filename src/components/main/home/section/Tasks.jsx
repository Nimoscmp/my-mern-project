const Tasks = () => {
    return (
    <>
    <div>
        <h6>Tasks</h6>
        <p className="d-inline-block me-2">There are no tasks. Click on the icon to add one.</p>
        <i class="fas fa-plus-circle fa-2x"></i>

        <div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task name</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>   
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Time</span>
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            </div>

            <div>
                <button type="button" className="btn btn-outline-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-success">OK</button>
            </div>
        </div>

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Completed</th>
                    <th scope="col">Time</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td data-bs-toggle="modal" data-bs-target="#exampleModal"><strong>PHP project</strong></td>
                    <td className="text-success">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitch1"/>
                            <label className="form-check-label" for="flexSwitch1">No</label>
                        </div>
                    </td>
                    <td>2 days</td>
                    <td>
                        <i className="far fa-edit mx-1 text-info"></i>
                        <i className="far fa-trash-alt mx-1 text-danger"></i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>React project</td>
                    <td className="text-danger">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitch2"/>
                            <label className="form-check-label" for="flexSwitch2">No</label>
                        </div>
                    </td>
                    <td>8 days</td>
                    <td>
                        <i className="far fa-edit mx-1 text-info"></i>
                        <i className="far fa-trash-alt mx-1 text-danger"></i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Java spring</td>
                    <td className="text-success">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitch3"/>
                            <label className="form-check-label" for="flexSwitch3">No</label>
                        </div>
                    </td>
                    <td>10 days</td>
                    <td>
                        <i className="far fa-edit mx-1 text-info"></i>
                        <i className="far fa-trash-alt mx-1 text-danger"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
    )
}

export default Tasks;
