import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';
import './BarChart.css';

const BarChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type : 'bar',
      width : '900px',
      height : 350,
      toolbar: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
    series: [{
      data: [
      { x: 'Jan', y: 10 },
      { x: 'Feb', y: 18 },
      { x: 'Mar', y: 14 },
      { x: 'Apr', y: 5 },
      { x: 'May', y: 16 },
      { x: 'Jul', y: 3 },
      { x: 'Aug', y: 7 },
      { x: 'Sep', y: 11 },
      { x: 'Oct', y: 10 },
      { x: 'Nov', y: 4 },]
    }]
  });

  const [data] = useState([50, 60, 40, 70, 80, 65, 55, 85, 75, 68, 90, 72]);

  useEffect(() => {
    const chart = new ApexCharts(document.querySelector('#bar-chart'), options);
    chart.render();

    const updateChart = () => {
      setOptions({ ...options, series: [{ data }] });
      chart.updateOptions({ chart: { width: '100%' } });
    };

    updateChart();

    window.addEventListener('resize', updateChart);

    return () => {
      chart.destroy();
      window.removeEventListener('resize', updateChart);
    };
  }, [data]);

  return (
    <div className='bar-chart'>
      <div className='chart-header'>
        <div className='chart-wrap'>
          <span>Overview</span>
          <span>Monthly Earning</span>
        </div>
        <div>
          <select className='chart-drop'>
            <option>Quarterly</option>
          </select>
        </div>
      </div>
      <div id="bar-chart"/>
    </div>
  );
}

export default BarChart