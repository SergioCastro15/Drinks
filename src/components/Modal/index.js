import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import { ModalContext } from '../../context/modalContext';
import { useStyles } from './styles';

const ModalReceta = () => {
    const { open, setOpen, receta } = useContext(ModalContext);

    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <h2>{receta.strDrink}</h2>
                    <h3 className='mt=4'>Instrucciones</h3>
                    <p>{receta.strInstructions}</p>
                    <img className='img-fluid my-4' src={receta.strDrinkThumb} alt='Imagen'/>
                </div>
            </Modal>
        </div>
    );
};

export default ModalReceta;