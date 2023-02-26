import React, { useEffect, useState } from 'react'
import style from './home.module.css'
import searchBtn from '../search.svg'
import useFetch from '../hooks/useFetch'
import Loading from '../components/Loading'
import Card from '../components/Card'

function Home() {
    
    const [info,setInfo]= useState([])
    const [searchText,setSearchText]= useState("")
    const [selectValue,setSelectValue]= useState("All")
    let {data,loading,error}=useFetch('https://restcountries.com/v3.1/all')
    useEffect(()=>{
        loading=true
        if(data){
            setInfo(data)
            loading=false
        }
    },[data])
    useEffect(()=>{
        if(data){
            if(selectValue=="All"){
                let newData= data.filter((item)=>{
                    const nameEL=item.name.common.toLowerCase()
                    if(searchText==""){
                        return item
                    }else if(nameEL.includes(searchText.toLowerCase())){
                        return item
                    }
                })
                setInfo(newData)
            }else{
                let newData=data.filter((item)=>{
                    if(item.region.toLowerCase()==selectValue.toLowerCase()){
                        const nameEL=item.name.common.toLowerCase()
                        if(searchText==""){
                            return item
                        }else if(nameEL.includes(searchText.toLowerCase())){
                            return item
                        }
                    }
                })
                setInfo(newData)
            }
        }
    },[searchText,selectValue])
    
  return (
    <div>
        <div className={style.main}>

            <form className={style.form}>
                <img src={searchBtn} className={style.searchBtn} alt="" />
                <input className={style.search} type="search" placeholder='Search for a country …' onChange={(e)=>{setSearchText(e.target.value)}} />
            </form>

            <div className={style.select} >
                <select className={style.selectEl}  name="" id="" onChange={(e)=>{setSelectValue(e.target.value)}}>
                    <option value="All" style={{display:'none'}} >Filter by Region</option>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
        
        {loading && <Loading/>}
        <div className={style.countries}>
            {info && info.map((item)=>{
                return(
                    <Card country={item} key={item.cca3}/>
                )
            })}
        </div>
    </div>
  )
}

export default Home