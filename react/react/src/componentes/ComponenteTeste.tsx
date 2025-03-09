interface Elementos {
    id: number;
    paragrafo: string;
    desc: string;
}

export const Componente = ({id, paragrafo, desc}: Elementos) => {
    return (
        <div> 
            <h1>Card {id} </h1>
            <h2>{paragrafo}</h2>
            <p>{desc}</p>
        </div>
    )
}