import React from 'react'
import style from './card.module.css'
import { Link } from 'react-router-dom';


function Card({country}) {
    // console.log(country);
    const {name,population,region,capital="No capital",flags,cca3}=country

    return (
        <Link className={style.card} to={`/${cca3}/detail`} >
            <div className={style.imageDiv}>
                <img src={flags.svg} alt={name} />
            </div>
            <div className={style.info}>
                <h2>{name.common}</h2>
                <p><strong>Population:</strong> {population.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
            </div>
        </Link>
    )
}

export default Card