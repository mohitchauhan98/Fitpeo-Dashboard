import React from 'react'
import './Dashboard.css'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import SearchIcon from '@mui/icons-material/Search';
import Card from '../Card/Card';
import BarChart from '../BarChart/BarChart';
import DonutChart from '../DonutChart/DonutChart';
import Table from '../Table/Table';

const Dashboard = () => {
  return (
    <>
        <div className='dashboard'>
            <div className='db-header'>
                <div className='db-inner'>
                    <span>Hello Mohit</span>
                    <span><WavingHandIcon /> ,</span>
                </div>
                <div className='db-searchbox'>
                    <span><SearchIcon className='db-searchIcon'/></span>
                    <input type = 'search' placeholder='Search...' className='db-searchInput'/>
                </div>
            </div>
            <Card />
            <div className='chart-main'>
                <BarChart />
                <DonutChart />
            </div>
            <div className='table-main'>
                <Table />
            </div>
        </div>
    </>
    )  
}

export default Dashboard