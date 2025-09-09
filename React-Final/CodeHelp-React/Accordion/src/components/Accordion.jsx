import React, { useState } from 'react'

function Accordion({items}) {
    const [openIndex,setOpenIndex] = useState(null);

    function handleToggle(index){
        setOpenIndex( openIndex === index ? null : index)
    }
    return !items || (items.length === 0) ? "No Items Available" : 
        (
        <div className='accordion'>
            {items.map((item,index) =>{
                return <div key={index} className='accordion-item'>
                    <button className='accordion-title' onClick={ () => handleToggle(index)}>
                        {item.title}
                    </button>
                    {openIndex === index && 
                        <div className='accordion-content'>
                            {item.content}
                        </div>
                    }
                </div>
            })}
        </div>
    )
}

export default Accordion
