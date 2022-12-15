import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <div className='TopSidebar'>
            <img></img>
            <p id='Name'>
                Eric Simonsson
            </p>
            <p id='work'>
                System developer, Animator, Designer in Sweden
            </p>
        </div>
        <nav id='main-menu'>
            <div className='NavLinks'>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <a>Home</a>
                        </Link>                        
                    </li>
                    <li>
                        <Link to={"/About"}>
                            <a>About</a>
                        </Link>                        
                    </li>
                    <li>
                        <Link to={"/Projects"}>
                            <a>Projects</a>
                        </Link>                        
                    </li>
                    <li>
                        <Link to={"/Contact"}>
                            <a>Contact</a>
                        </Link>                        
                    </li>
                </ul>
            </div>


        </nav>

      </div>
    )
  }
}