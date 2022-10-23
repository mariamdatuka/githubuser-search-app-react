import React from 'react'

function Followers({data}) {
  return (
    <>
    <div className='wrapper'>
    <div className='info-box'>
        <div className='repo'>Repos</div>
        <div className='followers'>Followers</div>
        <div className='following'>Following</div>
        <div className='repo-nmb'>{data.public_repos}</div>
        <div className='followers-nmb'>{data.followers}</div>
        <div className='following-nmb'>{data.following}</div>
    </div>
    </div>
    </>
    
  )
}

export default Followers;