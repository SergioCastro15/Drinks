import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const CategoriasContext = createContext();

// provider es donde se encuentran las funciones y el state
const CategoriasProvider = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const response = await axios.get(url);
            setCategorias(response.data.drinks);
        };

        consultarApi();
    }, []);

    return(
        <CategoriasContext.Provider
            value={{
                categorias, 
            }}
        >
            { children }
        </CategoriasContext.Provider>
    );
};

export default CategoriasProvider