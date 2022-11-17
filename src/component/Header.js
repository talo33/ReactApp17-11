import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
 

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontsize="large" className="header_icon" />
            </IconButton> 
            <img className="header_logo" src="https://png.pngtree.com/thumb_back/fh260/background/20210420/pngtree-simple-cute-pet-dog-background-image_645354.jpg" alt="header"/>
            <IconButton>
                <ForumIcon fontsize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header