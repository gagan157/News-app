import React, { Component } from 'react'
import './Style/Navbar.css'
import { NavLink } from 'react-router-dom'


export default class Navbar extends Component {
handletoggle = ()=>{
    let nav = document.getElementById('navo')
    nav.classList.toggle('toggle')
}


    render() {
        return (
            <div className='mx-auto flex flex-col sticky top-0 z-[100] xl:bg-navbg text-navtext box-border xl:flex-row xl:justify-between xl:pr-16
            xl:items-center xl:h-11'>
                <div className="logo px-3 flex justify-between items-center relative bg-navbg">
                    <h1 className='text-2xl uppercase font-bold tracking-[5px] ml-9'>News</h1>
                    <span onClick={this.handletoggle} className="ico text-3xl cursor-pointer xl:hidden"><ion-icon name="menu-outline"></ion-icon></span>
                </div>

                <div className="nav w-full duration-1000 -z-10 xl:z-10 xl:translate-y-0 xl:relative xl:w-auto" id='navo'>
                    <ul className='flex flex-col justify-center items-center xl:flex-row xl:justify-center xl:items-center '>
                        <li className='w-full bg-navbg1 border-b-2 text-center group xl:bg-transparent xl:border-0'>
                            <div className='space-x-5 font-semibold text-lg group-hover:bg-red-100 group-hover:bg-navhover group-hover:cursor-pointer tracking-widest xl:space-x-2 xl:tracking-normal xl:flex xl:px-4 xl:py-2 group-hover:scale-105 transition-all group-hover:rounded-br-md group-hover:rounded-bl-md'>
                                <span className='icon'><ion-icon name="home-outline"></ion-icon></span>

                                <NavLink activeclassname="active" to="/">Home</NavLink>

                            </div>
                        </li>
                        <li className='w-full  bg-navbg1 border-b-2 text-center group xl:bg-transparent xl:border-0'>
                            <div className='space-x-5 font-semibold text-lg group-hover:bg-red-100 group-hover:bg-navhover group-hover:cursor-pointer tracking-widest xl:space-x-2 xl:tracking-normal xl:flex xl:px-4 xl:py-2 group-hover:scale-105 transition-all group-hover:rounded-br-md group-hover:rounded-bl-md'>
                                <span className='icon'><ion-icon name="newspaper-outline"></ion-icon></span>
                                <NavLink to="news/" activeclassname="active">News</NavLink>

                            </div>
                        </li>
                        <li className='w-full  bg-navbg1 border-b-2 text-center group xl:bg-transparent xl:border-0'>
                            <div className='space-x-5 font-semibold text-lg group-hover:bg-red-100 group-hover:bg-navhover group-hover:cursor-pointer tracking-widest xl:space-x-2 xl:tracking-normal xl:flex xl:px-4 xl:py-2 group-hover:scale-105 transition-all group-hover:rounded-br-md group-hover:rounded-bl-md'>
                                <span className='icon'><ion-icon name="nuclear-outline"></ion-icon></span>
                                <NavLink to="weather/" activeclassname="active">Weather</NavLink>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
