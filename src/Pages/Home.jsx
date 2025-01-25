import Hero from "../Sections/Hero";
import Navbar from "../Sections/Navbar";


const Home = () => {
    return (
        <div className="space-y-10">
           <Navbar></Navbar>
           <Hero></Hero>
        </div>
    );
};

export default Home;