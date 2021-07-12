import { useDispatch, useSelector } from 'react-redux';
import { select_new_project_action, select_project_list_action } from '../../../redux/actions/actions';
import '../../layout/aside.css';

const Aside = () => {
    //  Disptach
    const dispatch = useDispatch();

    return (
    <>
    <aside className="col-1 d-flex flex-column align-items-center justify-content-between m-0 p-0">
        <div className="p-0 d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center my-3 py-2 py-1">
                <i  className="fas fa-tasks"
                    onClick={ () => dispatch(select_project_list_action()) }
                ></i>
            </div>
            <div className="d-flex justify-content-center my-3 py-2 py-1 selected-tab-div">
                <i  className="fas fa-plus selected-tab"
                    onClick={ () => dispatch(select_new_project_action()) }
                ></i>
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
