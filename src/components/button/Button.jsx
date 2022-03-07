import React from 'react'

const Button = ({children , shiftIndex}) => {
  return (
    <button onClick={shiftIndex} class="h-16 w-16 bg-black flex justify-center items-center text-white hover:bg-darkgray transition-colors ">
        <img src={children} alt="" />
    </button>
  )
}

export default Button