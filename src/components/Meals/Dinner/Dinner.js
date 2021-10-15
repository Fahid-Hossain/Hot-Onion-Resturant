import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Home from '../../Home/Home';
import DinnerMeals from './DinnerMeals';

const Dinner = () => {
    const [dinnerMeal,setDinnerMeal]=useState([]);

    useEffect(()=>{
        fetch("./dinnerFakeData.json")
        .then(res=>res.json())
        .then(data=>setDinnerMeal(data))
    },[])
    return (
        <div>
            <Home></Home>

            <h1 className="my-5 text-secondary">Its Night,Lets Have your Dinner with us</h1>
            <Row xs={1} md={3} className="g-3">
          {
              dinnerMeal.map(meal=><DinnerMeals meal={meal}></DinnerMeals>)
          }
            </Row>
        </div>
    );
};

export default Dinner;