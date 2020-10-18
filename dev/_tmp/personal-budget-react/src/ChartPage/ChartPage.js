import React from 'react';
import Chart from 'react-chartjs-2';



function ChartPage(props) {
  return (
    <canvas
        
        onLoad={props.create}>
        
    </canvas>
  );
}

export default ChartPage;
