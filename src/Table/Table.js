import React from 'react';
import './Table.css'
import SearchIcon from '@mui/icons-material/Search';
import sea from '../assets/sea1.jpg'

const Table = () => {
    const tableData = [
        {
            name : 'Abstract 3D',
            desc : 'Lorem Ipsum dolar',
            stock : '32 in stock',
            price : '$ 45.99',
            total : 20
        }
    ]
    return (
        <>
        <div className='table-wrapper'>
        <div className='table-container'>
                <div className='tc-box'>
                    <div className='product'>
                        <span>Product Sell</span>
                    </div>
                    <div className='tc-searchead'>
                        <div className='db-searchbox'>
                            <span><SearchIcon className='db-searchIcon'/></span>
                            <input type = 'search' placeholder='Search...' className='db-searchInput'/>
                        </div>
                        <select className='chart-drop'>
                            <option>Last 30 days</option>
                        </select>
                    </div>
                </div>
                <div className='tc-tablebox'>
                    <div className='tc-tablehead'>
                        <div>
                            <span>Product Name</span>
                        </div>
                        <div className='tc-tableinner'>
                            <span>Stock</span>
                            <span>Price</span>
                            <span>Total Sales</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
            <div className='table-container'>
                {tableData.map((item, index) => (
                    <div key={index}>
                        <div className="table-row">
                            <div className='tc-productwrap'>
                                <div>
                                    <span><img src={sea} alt='logo' className='tc-image'/></span>
                                </div>
                                <div className='tc-textbox'>
                                    <span>{item.name}</span>
                                    <span>{item.desc}</span>
                                </div>
                            </div>
                            <div className='tc-tabledata'>
                                <span>{item.stock}</span>
                                <span>{item.price}</span>
                                <span>{item.total}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Table