import logo from "../../static-images/Angry-Rias-Gremory-PNG-High-Quality-Image1.png"
import './header.scss'
import HeaderButton from "../header-buttons/header-button";
import Profile from "../user-profile-icon/profile";
function Header() {
    return (
        <>
            <div className="header">
                <div className="logo-name">
                    <div className="site-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="site-name"><h3>AnimeDatabase</h3></div>
                </div>
            <HeaderButton />
            <Profile/>
            </div>
        </>
    );
}
export default Header;