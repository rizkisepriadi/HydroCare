import React from 'react'

export function Button({ text, link }) {
  return (
    <div>
      <a href={link} className='btn bg-neutral border-primary rounded-[100px] text-xl text-primary font-semibold'>{text}</a>
    </div>
  )
}
