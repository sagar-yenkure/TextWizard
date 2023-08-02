import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <header>
        <nav className="nav bg-slate-300 h-12 p-3" style={props.dkmode}>
          <ul className="flex space-x-7 hover:cursor-pointer">
            <li className='font-bold text-lg mr-2'>{props.logo_name} </li>
            <li>
              <Link to="/Textform">Home</Link>
            </li>
            <li>
               <Link to="/About">About</Link>
               </li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
          <div className="flex flex-row-reverse space-x-3 space-x-reverse mt-2 flex-wrap mb-5">
            <button onClick={props.darkmode} className='upperbtn bg-black text-white p-1 my-1 rounded-xl'>{props.dktext}</button>
            <button onClick={props.bluebtn}  className='upperbtn bg-black text-white p-1 my-1  rounded-xl'>{props.bluetext}</button>
            <button onClick={props.greenbuttton} className='upperbtn bg-black text-white p-1 my-1 rounded-xl'>{props.greentext}</button>
          </div>
        </nav>
      </header>

    </>
  )
}
// Navbar.prototype={
//     logo_name:prototype.string.isRequire
// }
