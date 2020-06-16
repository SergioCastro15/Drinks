import React, { useEffect, useState, createContext } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [idReceta, setIdReceta] = useState(null);
    const [open, setOpen] = useState(false);
    const [receta, setReceta] = useState({});

    useEffect(() => {
        if (idReceta) {
            const consultarApi = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
                const response = await fetch(url);
                const data = await response.json();
                setReceta(data.drinks[0])
            };
    
            consultarApi();
        }
    }, [idReceta]);

    return(
        <ModalContext.Provider
            value={{
                setIdReceta,
                open,
                setOpen,
                receta
            }}
        >
            { children }
        </ModalContext.Provider>
    )
};

export default ModalProvider;
