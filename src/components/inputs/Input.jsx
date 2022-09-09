import React, { useId } from 'react'
import './inputStyle.css'

const Input = ({ type, name, id }) => {
  const uuid = useId()
  const AVAILAVLE_TYPES = [
    'button',
    'checkbox',
    'color',
    'date',
    'datetime',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]

  let inputType = AVAILAVLE_TYPES.indexOf(type) < 0 ? 'text' : type
  let inputName = name ? `${name}-${uuid}` : `name-${uuid}`
  let inputId = id ? `${id}-${uuid}` : `id-${uuid}`

  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', padding: '2px' }}
        className='cus__inp'
      >
        <input
          type={inputType}
          name={inputName}
          id={inputId}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid black',
          }}
        />
        <span id={inputId + 'span'} style={{ marginTop: '2px' }}></span>
      </div>
    </>
  )
}

export default Input
