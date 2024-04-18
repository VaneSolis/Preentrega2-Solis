import {useForm} from "react-hook-form";
import './Contacto.css';
export default function ContactComponent() {

    const {register, handleSubmit} = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (
        <>
        <div className="contacto-cont">
            <h1>¡Contáctanos!</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
            
            <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
            <br /><br />
            <input type="text" placeholder="Ingresa tu email" {...register("email")} />
            <br /><br />
            <input type="text" placeholder="Ingresa tu teléfono" {...register("teléfono")} />
            <br /><br />
            <input type="text" placeholder="Deja tu mensaje aquí" {...register("mensaje")} />
            <br /><br />
            
            <button className="enviar" type="submit">Enviar</button>
            
            </form>
        </div>
        
        
        
        </>
    )
}