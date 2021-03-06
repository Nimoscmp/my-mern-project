import '../../layout/aside.css';

const Aside = () => {



    return (
    <>
    <aside className="col-1 d-flex flex-column align-items-center justify-content-between m-0 p-0">
        <div className="p-0 d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center my-3 py-2 py-1">
                <i className="fas fa-tasks"></i>
            </div>
            <div className="d-flex justify-content-center my-3 py-2 py-1 selected-tab-div">
                <i className="fas fa-pen-alt selected-tab"></i>
            </div>
        </div>

        <div className="p-0 d-flex justify-content-center">
            <div className="d-flex justify-content-center my-3 py-2 py-1">
                <i className="fas fa-sign-out-alt"></i>
            </div>
        </div>
    </aside>        
    </>
    )
}

export default Aside
