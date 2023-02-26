import React from 'react'
import style from './navbar.module.css'
import moon from '../moon.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className={style.body}>
        <div className={style.nav}>
            <Link className={style.title} to="/">Where in the world?</Link>
            <div className={style.darkBtn}>
                <img src={moon} alt="" />
                <p className={style.darkText}>Dark Mode</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar