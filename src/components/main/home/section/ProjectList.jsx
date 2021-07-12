const ProjectList = () => {
    return (
    <>
    <section className="w-75 m-1 p-1">
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Completed</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>PHP project</td>
                    <td className="text-success">Yes</td>
                    <td>25-11-2021</td>
                    <td>
                        <i className="far fa-edit mx-1 text-info"></i>
                        <i className="far fa-trash-alt mx-1 text-danger"></i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>React project</td>
                    <td className="text-danger">No</td>
                    <td>25-11-2021</td>
                    <td>
                        <i className="far fa-edit mx-1 text-info"></i>
                        <i className="far fa-trash-alt mx-1 text-danger"></i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Java spring</td>
                    <td className="text-success">Yes</td>
                    <td>25-11-2021</td>
                    <td>
                        <i className="far fa-edit mx-1 text-info"></i>
                        <i className="far fa-trash-alt mx-1 text-danger"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    </>
    )
}

export default ProjectList
