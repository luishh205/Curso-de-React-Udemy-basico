const TemplateExpressions = () =>{
    const name = "Luis";
    const data = {
        age:32,
        job:"Programador"
    }
    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Voce atua como {data.job}</p>
            <p>{5+5}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplateExpressions;
