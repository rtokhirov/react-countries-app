import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import style from './detail.module.css'
import btnImg from '../left_direction.svg'
import Loading from '../components/Loading';

function Detail() {
  const {id}=useParams()
  const {data, loading ,error}=useFetch(`https://restcountries.com/v3.1/alpha/${id}`)
  if(data){
    const {name,population,region,subregion,capital ="No capital",currencies="No currency",languages,borders,tld,flags}=data[0]
    console.log(data[0]);
    // console.log(name,population,region,subregion,capital,currencies,languages,borders);
    const nativeName=Object.values(name.nativeName)[0].common
    const currency= Object.values(currencies)[0].name
    const language = Object.values(languages)

    return (
      <div className={style.main}>
        {loading && <Loading/>}
        <Link className={style.backBtn} to={'/'}> <img src={btnImg} /> <p>Back</p></Link>
        <div className={style.country}>
          <div className={style.imgDiv}>
            <img src={flags.svg} alt={name.common}/>
          </div>
          <div className={style.info}>
            <h1>{name.common}</h1>

            <div className={style.infoText}>
              <div className={style.infoTextLeft}>
                <p><b>Native name: </b>{nativeName}</p>
                <p><b>Population: </b>{population.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Sub region: </b>{subregion}</p>
                <p><b>Capital: </b>{capital}</p>
              </div>
              <div className={style.infoTextRight}>
                <p><b>Top Level Domain: </b>{tld.map((item)=>{
                  return (
                    <span key={item}>{item} </span>
                  )
                })}</p>
                <p><b>Currencies: </b>{currency}</p>
                <p><b>Languages: </b>{language.map((item)=>{
                  return (
                    <span key={item}>{item} </span>
                  )})}
                </p>
              </div>
            </div> 

            <div className={style.bordersDiv}>
              <h3>Border countries:</h3>
              <div className={style.borders}>
                {borders ? borders.map((item)=>{
                  return(
                    <Link className={style.borderCountry} key={item} to={`/${item}/detail`}><b>{item}</b></Link>
                  )
                }): <div className={style.borderCountry}>No border</div> }
              </div>
            </div>
          </div>
        </div>
       
      </div>
    )
  }
}

export default Detail