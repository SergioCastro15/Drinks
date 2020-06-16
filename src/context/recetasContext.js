import React, { createContext, useState, useEffect } from 'react'

export const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {

    const [recetas, setRecetas] = useState([]);
    const [busquedaReceta, setBusquedaReceta] = useState({});
    const [consultar, setConsultar] = useState(false);
    
    useEffect(() => {
        const { nombre, categoria } = busquedaReceta;
        if (consultar) {
            const consultarApi = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const response = await fetch(url);
                const data = await response.json();
    
                setRecetas(data.drinks);
    
            }
            consultarApi();
        }
    }, [busquedaReceta, consultar]);

    return(
        <RecetasContext.Provider
            value={{
                setBusquedaReceta,
                setConsultar,
                recetas
            }}
        >
            { children }
        </RecetasContext.Provider>
    )
};

export default RecetasProvider;