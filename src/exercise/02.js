// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import React from 'react'
import {Switch} from '../switch'

const ToggleOn = ({on, children}) => on ? children : null
const ToggleOff = ({on, children}) => !on ? children : null
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />
function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

  return React.Children.map(props.children, child => (
    allowedTypes.includes(child.type)
      ? React.cloneElement(child, {on, toggle})
      : child
  ))
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
