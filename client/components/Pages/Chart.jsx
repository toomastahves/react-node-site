import React from 'react';
import Menu from '../Menu/';
import Footer from '../Footer';
import './pages.css';
import { Line } from 'react-chartjs';

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      fillColor: 'rgba(151,187,205,0.2)',
      strokeColor: 'rgba(151,187,205,1)',
      pointColor: 'rgba(151,187,205,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(151,187,205,1)',
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};

export const Chart = () => {
  return (
    <div>
      <Menu />
      <div>
        <div className='header'>
          <h1>{'Chart demo'}</h1>
          <h2>{'Created using react-chartjs library'}</h2>
        </div>
        <div className='content'>
          <div className='content-subheader'>
            {'Line chart'}
          </div>
          <div className='content-subcontent'>
            <Line data={chartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chart;
