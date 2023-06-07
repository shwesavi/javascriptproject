import Banner from './Banner'
import Category from "./categories";
import Videos from './videos';
const Home = () => {
    return(
<div className="home">
<Category/>
<Banner/>
<Videos/>
</div>
    );

}
 
export default Home;