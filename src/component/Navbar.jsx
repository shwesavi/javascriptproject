import '../style/Navbar.css';
import youtube from '../images/youtube.png';
import notification from '../images/notification.png';
import vedio from '../images/vedio.png';
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
<img width={40}  src={vedio} alt="" />
<img width={30} height={60} src={notification} alt="" />
<h4>S</h4>
    </div>
</div>
    );
}
export default Navbar;