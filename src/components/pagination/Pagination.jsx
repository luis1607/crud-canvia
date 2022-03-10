import React, { useState } from 'react';
import "./Pagination.css";


const Pagination = ({products,currentPage,setCurrentPage}) => {

    const [countingPage, setCountingPage] = useState(1)
    let total = Math.ceil(products.length / 5);
    
    const nextPage = () => {
        if (products.length > currentPage + 5) {
            setCurrentPage(currentPage + 5);
            setCountingPage(countingPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 5);
        setCountingPage(countingPage - 1)
        }
    }
   

    return (
        <div className="container-pagination">
                <button
                    className="btn-pagination"
                    onClick={prevPage}
                >
                    Anteriores
                </button>
                <span className='number-pagination'>{countingPage}</span>
                <span>de</span>
                <span className='number-pagination'>{total}</span>
                <button
                    className="btn-pagination"
                    onClick={nextPage}
                >
                    Siguientes
                </button>
            </div>
    );
};

export default Pagination