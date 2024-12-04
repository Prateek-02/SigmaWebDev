import useToggle from './useToggle'

const ToggleButton = () => {
    const[isToggled,toggle] = useToggle(false)
  return (
    <div>
      <button onClick={toggle}>{isToggled ? "Turn off":"Turn on"}</button>
      <p>The button is {isToggled ? "On" : "Off"}</p>
    </div>
  )
}

export default ToggleButton
