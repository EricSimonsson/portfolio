import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    
    render() {
        return (
            <div className='Header'>
                <Link to={"/"}>
                    <button type="button" class="btn btn-secondary btn-sm">Home</button>
                </Link>
                <Link to={"/About"}>
                    <button type="button" class="btn btn-secondary btn-sm">About</button>
                </Link>
                <Link to={"/projects"}>
                    <button type="button" class="btn btn-secondary btn-sm">Projects</button>
                </Link>
                <Link to={"/contact"}>
                    <button type="button" class="btn btn-secondary btn-sm">Contact</button>
                </Link>
            </div>
        )
    }
}



export default Header;