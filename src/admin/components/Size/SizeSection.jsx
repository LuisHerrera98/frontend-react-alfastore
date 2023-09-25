import React from 'react'
import "./sizeSection.css"
import Success from '../notify/Success'
import Error from '../notify/Error'
import useForm from '../../hooks/useForm'

const SizeSection = () => {

    const { name, onInputChange, onResetForm } = useForm({
        name: ''
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false)

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
          name
        };
    
        fetch(`${import.meta.env.VITE_API_URL}/category/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.ok) {
              setSuccess(true)
              onResetForm();
              setReload(true)
              setTimeout(() => {
              setSuccess(false)
              }, 5000);
            } else {
              console.error("Error en la solicitud POST");
            }
          })
          .catch((error) => {
            setError(true);
          });
      };

    return <div className="box-create-size">
        {
            success ? (
                <Success type="size" />
            ) :
                null
        }
        {
            error ? (
                <Error type="size" />
            ) : null
        }
        <h3>Crear Categoria</h3>

        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Nombre</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="nombre.."
                value={name}
                onChange={onInputChange}
                autoComplete="off"
            />
            <button type="submit">Crear</button>
        </form>
    </div>
}

export default SizeSection