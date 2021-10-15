import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Home from '../../Home/Home';
import LunchMeals from './LunchMeals';

const Lunch = () => {
    const [lunchMeals,setLunchMeals]=useState([])
    useEffect(()=>{
        fetch("./lunchFakeData.json")
        .then(res=>res.json())
        .then(data=>setLunchMeals(data))
    },[])
    return (
        <div>
            <Home></Home>
            <h1 className="my-5 text-secondary">Good Noon ,Lets Have your Lunch with us</h1>
            <Row xs={1} md={3} className="g-3">
          {
              lunchMeals.map(meal=><LunchMeals meal={meal}></LunchMeals>)
          }
            </Row>
        </div>
    );
};

export default Lunch;