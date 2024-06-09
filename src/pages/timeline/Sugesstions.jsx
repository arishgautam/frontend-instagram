import React from 'react'
import "./Sugesstions.css"
import { Button } from '@mui/material'
import { Avatar } from "@mui/material"


function Sugesstions() {
  return (
   
    <div className='sugesstions'>
       <div className='sugesstions__title'>Sugesstions for you</div>
       <div className='sugesstions__usernames'>

       <div className='sugesstions__username'>
       <div className='username__left'>
       <span className="avatar"> 
       <Avatar>R</Avatar>
       </span>
       <div className="username__info">
       <span className="username">redian_</span>
       <span className="relation">New to Instagram</span>
        </div>
       </div>
       <Button className='follow__button'>Follow</Button>
       </div>

       <div className='sugesstions__username'>
       <div className='username__left'>
       <span className="avatar"> 
       <Avatar>p</Avatar>
       </span>
       <div className="username__info">
       <span className="username">person10</span>
       <span className="relation">Followed by Lucifer</span>
        </div>
       </div>
       <Button className='follow__button'>Follow</Button>
       </div>

       <div className='sugesstions__username'>
       <div className='username__left'>
       <span className="avatar"> 
       <Avatar>T</Avatar>
       </span>
       <div className="username__info">
       <span className="username">TigerG</span>
       <span className="relation">New to Instagram</span>
        </div>
       </div>
       <Button className='follow__button'>Follow</Button>
       </div>

       <div className='sugesstions__username'>
       <div className='username__left'>
       <span className="avatar"> 
       <Avatar>C</Avatar>
       </span>
       <div className="username__info">
       <span className="username">Chamelion</span>
       <span className="relation">Followed by 2 others</span>
        </div>
       </div>
       <Button className='follow__button'>Follow</Button>
       </div>

       <div className='sugesstions__username'>
       <div className='username__left'>
       <span className="avatar"> 
       <Avatar>L</Avatar>
       </span>
       <div className="username__info">
       <span className="username">Leena</span>
       <span className="relation">New to Instagram</span>
        </div>
       </div>
       <Button className='follow__button'>Follow</Button>
       </div>
       </div>
    </div>
  )
}

export default Sugesstions