import React from 'react'

const ProfileCardLegacy = (props) => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="object-cover w-48 h-48 rounded-full shadow"
        src={props.img}
        alt={props.fullname} />
      <div className="flex flex-col justify-center text-center mt-2">
        <p className="font-bold text-primary">{props.fullname}</p>
        <p className="mb-4 text-xs">{props.position}</p>
      </div>
    </div>
  )
}

export default ProfileCardLegacy