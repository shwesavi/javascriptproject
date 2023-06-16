import '../style/Navbar.css';
import youtube from '../images/youtube.png';
import notification from '../images/notification.png';
import vedio from '../images/vedio.png';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
<div className="navbar">
    <div className="logo">
<img width={150} height={50} src={youtube} alt="" />
    </div>
    <div className="search">
<input type="text" placeholder='Search' />
    </div>
    <div className="others">
        <div className="Navlinks">
            <Link to="/">Home</Link>
            <Link to="/addVideo">Add Video</Link>
        </div>
<img width={30} height={50} src={vedio} alt="" />
<div className='notify'>
<img width={30} height={60} src={notification} alt="" />
</div>
<div className='name'>
<h4>S</h4>
</div>
    </div>
</div>
    );
}
export default Navbar;