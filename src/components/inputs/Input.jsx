import React, { useId } from 'react'

const Input = ({ type, name, id, message }) => {
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input type={inputType} name={inputName} id={inputId} />
        <span id={inputId + 'span'}>{message && message}</span>
      </div>
    </>
  )
}

export default Input
