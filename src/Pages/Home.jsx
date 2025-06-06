
import Navbar from '../Shared/Navbar';
import Bannar from '../Components/Bannar';
import Swipe from '../Components/Swipe';
import PopularMenu from '../Components/popularMenu';



const Home = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Bannar></Bannar>
           <div className='max-w-6xl mx-auto'>
             <Swipe></Swipe>
            <PopularMenu></PopularMenu>
           </div>
            
        </div>
    );
};

export default Home;