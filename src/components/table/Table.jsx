
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Form from "../form/Form";
import Pagination from "../pagination/Pagination";
import './Table.css'


const Table = ({
    products,
    datos,
    handleOnchange,
    deleteProduct,
    setShowPopUp,
    showPopUp,
    setDatos
}) => {

    const [currentPage, setCurrentPage] = useState(0);

    const [productSelected, setProductSelected] = useState({})


    const handleUpdate = (producto) => {
        setShowPopUp(true)
        setProductSelected(producto)
    }


    const closeModal = () => {
        setShowPopUp(false)
        setDatos({
            name: "",
            price: ""
        })
    }

    const filteredProducts = () => {
        if (products) return products.sort().slice(currentPage, currentPage + 5);

    }



    return (
        <div className="container-table">
            <table className="tableOrders">
                <thead className="tableOrders__header">
                    <tr className="tableOrders__tr">
                        <th className="tableOrders__header--cell">Cod. Pedido</th>
                        <th className="tableOrders__header--cell">Nombre</th>
                        <th className="tableOrders__header--cell">Precio</th>
                        <th className="tableOrders__header--cell">Opciones</th>
                    </tr>
                </thead>
                <tbody className="tableOrders__body">
                    {
                        filteredProducts().map(product => (
                            <tr className="tableOrders__tr" key={product.id}>
                                <td className="tableOrders__body--cell">{product.id}</td>
                                <td className="tableOrders__body--cell">{product.name}</td >
                                <td className="tableOrders__body--cell">S/ {product.price}</td>
                                <td className="container-buttons">
                                    <button className="btn-table" onClick={() => handleUpdate(product)}>Actualizar </button>
                                    <button className="btn-table" onClick={() => deleteProduct(product.id)} >Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>


            </table>
            <Pagination
                products={products}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            {
                showPopUp &&
                <div className="container-popup">
                    <div className="container-popup-center">
                        <h3>ACTUALIZAR USUARIOS</h3>
                        <AiOutlineClose className="icon-popup" onClick={closeModal} />
                        <Form
                            datos={datos}
                            setDatos={setDatos}
                            handleOnchange={handleOnchange}
                            isEdit
                            setShowPopUp={setShowPopUp}
                            productSelected={productSelected}
                        />
                    </div>


                </div>
            }

        </div>)

}

export default Table