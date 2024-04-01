import React, { useState} from 'react';
import ReactApexChart from 'react-apexcharts'; 
import './DonutChart.css'

const ApexChart = () => {
  const [series] = useState([44, 55, 34]);
  const [options] = useState({
    chart: {
      width: 380,
      type: 'donut',
    },
    plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          donut: {
            labels: {
              show: true,
              total: {
                show: true, 
                label: 'Total',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                }
              }
            }
          }
        }
      },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
    },
    legend: {
        show: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  });

  return (
    <div className='donut-chart'>
        <div className='dc-wrap'>
            <span>Customers</span>
            <span>Customers that buy products</span>
        </div>
      <div id="chart" className='chart-inner'>
        <ReactApexChart options={options} series={series} type="donut" width={380} />
      </div>
    </div>
  );
}

export default ApexChart;
