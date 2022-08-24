function Daiktas ({pirmas, antras}) {
    console.log({pirmas});

    return (<p>{pirmas && pirmas.map((seaPlaner=> seaPlaner.id))}
    {antras && antras.map((seaPlaner=> seaPlaner.id))}
    
    
    </p>)
}

export default Daiktas;