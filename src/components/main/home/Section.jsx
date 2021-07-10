import NewProject from "./section/NewProject"
import ProjectList from "./section/ProjectList"

const Section = () => {
    return (
    <>
    <section className="col-11 m-0 p-2 d-flex justify-content-center">
        <NewProject/>
        <ProjectList/>
    </section>        
    </>
    )
}

export default Section