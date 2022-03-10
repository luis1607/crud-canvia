import faker from '@faker-js/faker';
import './Form.css'
import { createProduct, updateProductById } from "../../api-connection/api-connection"
import { useEffect } from 'react';

const Form = ({
    datos,
    setDatos,
    handleOnchange,
    isEdit,
    setShowPopUp,
    productSelected
}) => {

    useEffect(() => {
        setDatos({
            ...productSelected
        })
    }, [])



    const handleSubmit = (e) => {
        e.preventDefault();
        if (datos.name === undefined || datos.name === "") return;
        if (datos.price === undefined || datos.price === "") return;

        if (isEdit) {
            let body = {
                name: datos.name,
                price: datos.price
            }
            updateProductById(productSelected.id, body).then(
                response => {
                    if (response.statusText === 'OK') {
                        setShowPopUp(false);
                        setDatos({
                            name: "",
                            price: ""
                        })
                    }
                }
            )
        } else {
            let body = {
                id: faker.datatype.number(),
                name: datos.name,
                price: datos.price
            }

            createProduct(body)
            setDatos({
                name: "",
                price: ""
            })

        }



    }



    return (
        <>
            <div className="container-form">
                <form className={isEdit ? "container-form-edit" : ""} onSubmit={handleSubmit}>
                    <label>Ingrese Nombre</label>
                    <input type="text" onChange={handleOnchange} value={datos.name || ""} name="name" />
                    <label>Ingrese Precio</label>
                    <input type="number" onChange={handleOnchange} value={datos.price || ""} name="price" />
                    <input className='btn-submit' type="submit" value={isEdit ? "Editar" : "Crear Producto"} />
                </form>
            </div>
        </>
    )
}

export default Form;