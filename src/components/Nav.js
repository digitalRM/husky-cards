import "./Nav.css";
import { MessageSquare, ShoppingCart } from 'feather-icons-react';


const NavIcon = (props) => {
    return(
        <div className="nav-icon">
            <div className="nav-alert box-center">
                <span className="nav-num">
                    {props.count}   
                </span>
            </div>
            {props.children}
        </div>
    )
}

const Nav = ({user}) => {
    return(
        <>
        <div className="wrapper-wrapped">
            <div className="wrapper">
                <div className="nav h-center">
                    <h1>Husky Cards</h1>
                    <div className="nav-box">
                        <NavIcon count={3}>
                            <MessageSquare size="2em"/>
                        </NavIcon>

                        <NavIcon count={9}>
                            <ShoppingCart size="2em"/>
                        </NavIcon>
                        <div className="user-pfp-wrapper">
                            <img className="user-pfp" src={user.pfp} alt="User Profile Picture" />
                        </div>
                    </div> 
                </div>            
            </div>            
        </div>


        </>

    )
}

export default Nav
