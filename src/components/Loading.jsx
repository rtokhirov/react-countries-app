import React from 'react'
import loadingImg from '../spinner.svg'
import style from './loading.module.css'

function Loading() {
  return (
    <div className={style.main}><img src={loadingImg} alt="" /></div>
  )
}

export default Loading