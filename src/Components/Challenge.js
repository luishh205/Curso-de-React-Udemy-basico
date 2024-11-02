import React, { useState } from 'react';

const Challenge =()=>{
 const a = 12;
 const b = 13;
 const [resultado, setResultado] = useState(0);
 return(
<div>
    <p>Const a= {a}</p>
    <p>Const a= {b}</p>
    <div>
        <button onClick={() => console.log(a + b)}>Click Para exibir no console o resultado! de a+b</button>
    </div>
    <div>
        <p>{resultado}</p> 
        <button onClick={() => setResultado(a + b)}>
        Calcular e exibir na tela
        </button>
    </div>
</div>

 );
}
export default Challenge;