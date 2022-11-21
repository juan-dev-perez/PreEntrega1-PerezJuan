import './ClientForm.css';
import { useEffect, useState } from "react";

const ClientForm = ({datos}) => {

    const [data,setData] = useState({
        nombre:'',
        apellido:'',
        telefono:0,
        email:''
    });

    useEffect(() => {
        datos(data)
    },[data]);

    return (
        <div className="form_client">
            <h2>Datos de Facturación</h2>

            <label htmlFor="nombre"> Nombre </label>
            <input onBlur={(e) => setData({...data,'nombre':e.target.value}) } type="text" name="nombre" id="nombre" required/>

            <label htmlFor="apellido">Apellido</label>
            <input onBlur={(e) => setData({...data,'apellido':e.target.value}) } type="text" name="apellido" id="apellido" required/>

            <label htmlFor="telefono">Telefono</label>
            <input onBlur={(e) => setData({...data,'telefono':e.target.value}) } type="number" name="telefono" id="telefono" required/>

            <label htmlFor="email">Email</label>
            <input onBlur={(e) => setData({...data,'email':e.target.value}) } type="email" name="email1" id="email" required/>

            <label htmlFor="email2">Repetir Email</label>
            <input type="email" name="email2" id="email2" required/>
        </div>
    )
}

export default ClientForm;