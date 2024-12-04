import { useState } from "react"

const useToggle = () => {
    const [value,setValue] = useState(false)

    const toggle = () =>{
        setValue(Value=>!Value)
    }
    return[value,toggle]
}

export default useToggle
