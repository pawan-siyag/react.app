import React from 'react'

const Profile = (props) => {

  return (
<div className="card">
       <img src={props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>Software Engineer</p>
        <button>View Profile</button>
      </div>
  )
}

export default Profile
