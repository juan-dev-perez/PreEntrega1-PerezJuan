import './ClientForm.css';
import { useContext, useEffect } from "react";
import { CartContext } from '../../../../context/CartContext';

const ClientForm = () => {

   const {setSameEmail, 
        validation, 
        clientData, 
        setClientData,
        error,
        setError
    } = useContext(CartContext)

    const handleChange = (e) => {
        setClientData({...clientData,[e.target.name]:e.target.value});
        setError({...error,div:'error_email_none',email:''});
    }

    const verificarEmail = () => {
        setSameEmail(false);
        const {email,email2} = clientData;
        email === email2 && setSameEmail(true);
    }

    useEffect(() => {
        verificarEmail();
    },[clientData]);

    return (
        <form className="form_client" id='form-client' onSubmit={validation}>
            <h2>Datos de Facturación</h2>

            <label htmlFor="nombre"> Nombre </label>
            <input onChange={handleChange} type="text" name="nombre" id="nombre" required/>

            <label htmlFor="apellido">Apellido </label>
            <input onChange={handleChange} type="text" name="apellido" id="apellido" required/>

            <label htmlFor="telefono">Telefono </label>
            <input onChange={handleChange} type="tel" name="telefono" id="telefono" required/>

            <label htmlFor="email">Email </label>
            <input className={error.email} onChange={handleChange} type="email" name="email" id="email" required/>

            <label htmlFor="email2">Repetir Email </label>
            <input className={error.email} onChange={handleChange} type="email" name="email2" id="email2" required/>

            <div className={error.div}>Los emails deben ser iguales</div>
            {/* <div className='error_email' style={{display: error}}>Los emails deben ser iguales</div> */}
        </form>
    )
}

export default ClientForm;