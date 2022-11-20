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
        <div>
            <label htmlFor="nombre">Nombre</label>
            <input onBlur={(e) => setData({...data,'nombre':e.target.value}) } type="text" name="nombre" id="nombre" required></input>
            <label>Apellido</label>
            <input onBlur={(e) => setData({...data,'apellido':e.target.value}) } type="text" name="apellido" required></input>
            <label>Telefono</label>
            <input onBlur={(e) => setData({...data,'telefono':e.target.value}) } type="number" name="telefono" required></input>
            <label>Email</label>
            <input onBlur={(e) => setData({...data,'email':e.target.value}) } type="email" name="email1" required></input>
            <label>Repetir Email</label>
            <input type="email" name="email2" required></input>
        </div>
    )
}

export default ClientForm;