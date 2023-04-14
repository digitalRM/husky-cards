import "./Nav.css";
import { MessageSquare, ShoppingCart } from 'feather-icons-react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';


const Nav = ({user}) => {
    return(
        <>
        <div className="wrapper-wrapped">
            <div className="wrapper">
                <div className="nav h-center">
                    <a href="/"><h1>Husky Cards</h1></a>
                    <div className="nav-box">

                        <Badge badgeContent={user.unreadMessages.length} sx={{"& .MuiBadge-badge": {color: "white", backgroundColor: "#DB7676", fontWeight: "700", fontFamily: "Inter"}}}>
                            <MessageSquare size="2em"/>
                        </Badge>
                        
                        <Badge badgeContent={user.cart.length} sx={{"& .MuiBadge-badge": {color: "white", backgroundColor: "#DB7676", fontWeight: "700", fontFamily: "Inter"}}}>
                            <ShoppingCart size="2em"/>
                        </Badge>

                        <div className="">
                            <Avatar sx={{width: "80px", height: "80px", borderRadius: "250px"}} varient="circular" className="user-pfp" alt={user.name} src={user.pfp} />
                        </div>
                    </div> 
                </div>            
            </div>            
        </div>


        </>

    )
}

export default Nav
