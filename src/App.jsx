import { useEffect, useState } from 'react'
import Input from './components/inputs/Input'

const App = () => {
  const [inpTracker, setInputTracker] = useState([])

  useEffect(() => {
    inpTracker.map((ele) => {
      let element = document.getElementById(ele.id)
      let span = document.getElementById(ele.id + 'span')
      if (ele.hasError) {
        element.style.border = `1px solid red`
        span.innerText = 'This Field is empty'
        span.style.color = 'red'
      } else {
        element.style.border = `1px solid black`
        span.innerText = ''
      }
      return null
    })
  }, [inpTracker])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    let target = event.target

    let tarcker = []

    for (let i = 0; i < target.length - 1; i++) {
      let elementID = target.elements[i].id
      let elementValue = target.elements[i].value

      if (
        typeof elementValue === 'string' &&
        elementValue.trim().length === 0
      ) {
        tarcker.push({
          id: elementID,
          hasError: true,
        })
      } else {
        tarcker.push({
          id: elementID,
          hasError: false,
        })
      }
    }
    setInputTracker(tarcker)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Input type={'text'} />
        <Input type={'email'} />
        <Input type={'email'} />
        <Input type={'email'} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
