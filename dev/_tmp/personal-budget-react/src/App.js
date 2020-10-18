import React, {useState} from 'react';
import Chart from 'react-chartjs-2';
import axios from 'axios';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import ChartPage from './ChartPage/ChartPage';

var dataSource = {
  datasets: [
      {
          data: [],
          backgroundColor: [
              '#ffcd56,',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#32a852',
              '#a6a832',
              '#6d32a8'

          ],
      }
  ],
  labels: []
};

const createChart = () =>{
  var ctx = document.getElementById("myChart");
  var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: dataSource,
      options: {
          responsive : false
      }
  });
  
}

function getBudget(){
  axios.get('/budget')
  .then(function(res){
      console.log(res);
      for(var i = 0; i < res.data.budget.length; i++){
          dataSource.datasets[0].data[i]=res.data.budget[i].budget;
          dataSource.labels[i] = res.data.budget[i].title;
      }
      createChart();
  });
}
getBudget();



function App() {
  //const[chart,data] =
  const [chart]= useState(createChart);
  const [data]= useState(getBudget);

 
  return (
    <Router>
      <Menu/>

      <Hero/>

      <div className="mainContainer">

        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/">
            <HomePage>
              <ChartPage create={chart} data={data} />
            </HomePage>
            
            
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
