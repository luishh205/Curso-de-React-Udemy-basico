const Events = () =>{
  const handleMyEvent = (e) => {

    console.log(e);

    console.log("Ativou btn");
  };
const renderSomething=(x)=> {
    if(x){
    return <h1>Renderizando isso!</h1>;   
    }else{
    return <h1>tambem posso Renderizando isso!</h1>;  
    }
};
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Click Aqui!</button>
            </div>
            <div>
                <button onClick={()=> console.log("Clicou aqui2")}>Click Aqui Tambem!</button>
           </div>
            <div>
                <button onClick={()=> {
                    if(true){
                        console.log("isso nao deveria existir");
                    }
                }}>Click Aqui Tambem!</button>
            </div>
            {renderSomething(true)}
        </div>
    )
};

export default Events;