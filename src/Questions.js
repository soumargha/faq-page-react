import React, { useState } from 'react'

export default function Questions({question}) {
    const [isOpen, setOpen] = useState(false);

    return (
      <section>
    <div className= {isOpen? "open" : "closed"}>
     <h4>{ question.title }</h4>
     <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
    </div>
    
    {isOpen && <p>{question.info}</p>}
    </section>
 );

}
