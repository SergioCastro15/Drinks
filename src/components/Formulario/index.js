import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../../context/categoriasContext';
import { RecetasContext } from '../../context/recetasContext';

const Formulario = () => {
    const { categorias } = useContext(CategoriasContext);
    const { setBusquedaReceta, setConsultar } = useContext(RecetasContext);

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });
    
    const obtenerCategoria = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    };

    return(
        <form 
            className='col-12'
            onSubmit={e => {
                e.preventDefault();
                setBusquedaReceta(busqueda);
                setConsultar(true);
            }}
        >
            <fieldset className='text-center'>
                <legend>Busca bebidas por categoria o ingrediente</legend>
            </fieldset>

            <div className='row'>
                <div className='col-md-4'>
                    <input 
                        name='nombre'
                        className='form-control'
                        type='text'
                        placeholder='Buscar por ingrediente'
                        onChange={obtenerCategoria}
                    />
                </div>

                <div className='col-md-4'>
                    <select 
                        className='form-control' 
                        name='categoria' 
                        onChange={obtenerCategoria}
                    >
                        <option value=''> -- Selecciona categoria -- </option>
                        {categorias.map(categoria => (
                            <option  key={categoria.strCategory} value={categoria.strCategory}>
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='col-md-4'>
                    <input 
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Buscar bebidas'
                    />
                </div>
            </div>
        </form>
    );
};

export default Formulario;