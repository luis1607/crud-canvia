import { useEffect, useState } from "react"
import { createProduct, getProducts, deleteProductById, updateProductById } from "../../api-connection/api-connection"


import "./MainPage.css"
import Header from "../../components/header/header.tsx";
import Form from "../../components/form/Form";
import Table from "../../components/table/Table"

const MainPage = () => {

    const [datos, setDatos] = useState({
        name: "",
        price: null
    })

    const [products, setProducts] = useState([])

    const [showPopUp, setShowPopUp] = useState(false)


    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [datos])

    const handleOnchange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const deleteProduct = (id) => {
        deleteProductById(id).then(response => {
            if (response.statusText === 'OK') {
                console.log("llego")
                setDatos({
                    name: "",
                    price: ""
                })
            }
        });
    }

    return (
        <>
            <Header />
            <Form
                datos={datos}
                setDatos={setDatos}
                handleOnchange={handleOnchange}
            />

            <Table
                products={products}
                datos={datos}
                handleOnchange={handleOnchange}
                deleteProduct={deleteProduct}
                setShowPopUp={setShowPopUp}
                showPopUp={showPopUp}
                setDatos={setDatos}
            />
        </>
    )
}

export default MainPage