import Aside from "./home/Aside"
import Header from "./home/Header"
import Section from "./home/Section"

const Home = () => {
    return (
    <>
    <div>
        <Header/>   
        <main className="row d-flex justify-content-center m-0 p-0">
            <Aside/>
            <Section/>
        </main>    
    </div>       
    </>
    )
}

export default Home
