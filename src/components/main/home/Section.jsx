import { useSelector } from "react-redux"
import NewProject from "./section/NewProject"
import ProjectList from "./section/ProjectList"
import SeeProject from "./section/SeeProject"

const Section = () => {

    //  Global states
    const { projectsList , newProject } = useSelector(state => state.tabs)

    return (
    <>
    <section className="col-11 m-0 p-2 d-flex justify-content-center">
        { 
        newProject ?
            <NewProject/>
        :   
            <ProjectList/>
        }
        <SeeProject/>
    </section>        
    </>
    )
}

export default Section