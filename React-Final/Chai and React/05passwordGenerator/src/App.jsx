import { useCallback, useState, useRef } from 'react'

function App() {
  const [length,setLength] = useState(8);
  const [num,setNumber] = useState(false);
  const [char,setChar] = useState(false);
  const [password,setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const copyToClipboard = useCallback( () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(num){
      str += "0123456789"
    }

    if(char){
      str += "~!@#$%^&*-_+="
    }

    for(let i = 1;i<=length;i++){
      let idx = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(idx)

    }

    setPassword(pass)

  },[length,num,char,setPassword])


  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8  bg-gray-800'>
        <h1 className='text-5xl font-bold text-center bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text py-5 mb-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-5'>
            <input 
            type="text"
            value={password} 
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />

            <button 
              onClick={copyToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-3 shrink-0 cursor-pointer'>
              Copy
            </button>
          </div>
          <div className='flex text-sm gap-x-2 text-orange-400'>
            <div className='flex item-center gap-x-1'>
              <input type="range"
              min = {8}
              max = {100}
              value = {length}
              className='cursor-pointer'
              onChange={ (e) => setLength(e.target.value)}
              />
              <label htmlFor="">Length : {length}</label>
            </div>
            <div className='flex item-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={num}
              id='numInp'
              onChange={ () => setNumber((prev) => !prev)}/>
              <label htmlFor="">Number</label>
            </div>
            <div className='flex item-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={char}
              id='numInp'
              onChange={ () => setChar((prev) => !prev)}/>
              <label htmlFor="">Character</label>
            </div>
          </div>
          <div className='flex justify-center my-3'>
            <button className='bg-blue-500 px-4 py-2 rounded-lg text-white cursor-pointer' onClick={passwordGenerator}>Generate Password</button>
          </div>
      </div>
    </>
  )
}

export default App
