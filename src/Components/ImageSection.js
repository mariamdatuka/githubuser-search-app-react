import React from 'react'
import Profileimg from '../assets/icon-oval.svg'


function ImageSection({data, createdAt, months}) {

    const Bio = ()=>{
        return(
            <div className='bio-box'>
            <p className='bio'>
               {data.bio || 'Bio'}
            </p>
            </div>
        )
    }

  return (
    <>
      <div className='profile-box'>
       <img  className='avatar-img'src={data.avatar_url || Profileimg}></img>
       <div className='username'>
        <div>
        <h2 className='login'>{data.login || 'The Octocat'}</h2>
        <p className='user-id'>@{data.login || 'octocat'}</p>
        </div>
        <p className='join-date'> Joined {createdAt && createdAt[2]}
            {createdAt && months[createdAt[1] - 1]} {createdAt && createdAt[0]}</p>
       </div>
       
        </div>
        <Bio/>
    </>
  )
}

export default ImageSection;