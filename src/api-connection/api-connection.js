import axios from 'axios'

const API_URL = "http://localhost:5000/products"

const getProducts = ()=>{
    return new Promise(async(resolve,reject)=>{
        await axios.get(API_URL)
        .then(response=>{
            resolve(response.data)
        })
        .catch(error=>{
            console.log('error',error)
        })
    })
}

const createProduct = (body)=>{
    return new Promise(async(resolve,reject)=>{
        await axios.post(API_URL,body)
        .then(response=>{
            resolve(response.data)
        })
        .catch(error=>{
            console.log('error',error)
        })
    })
}


const deleteProductById = (id)=>{
    const url = `${API_URL}/${id}`
    console.log(url)

    return new Promise(async(resolve,reject)=>{
        await axios.delete(url)
        .then(response=>{
            resolve(response)
        })
        .catch(error=>{
            console.log('error',error)
        })
    })
}

const updateProductById = (id,body)=>{
    const url = `${API_URL}/${id}`

    return new Promise(async(resolve,reject)=>{
        await axios.put(url,body)
        .then(response=>{
            resolve(response)
        })
        .catch(error=>{
            console.log('error',error)
        })
    })
}



export {getProducts,createProduct, deleteProductById,updateProductById}