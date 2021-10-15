import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Home from '../../Home/Home';
import BreakfastMeals from './BreakfastMeals/BreakfastMeals';

const Breakfast = () => {
    const [breakfastMeals,setBreakfastMeals]=useState([])
    useEffect(()=>{
        fetch("./breakfastFakeData.json")
        .then(res=>res.json())
        .then(data=>setBreakfastMeals(data))
    },[])
    return (
        <div>
            <Home></Home>
            <h1 className="my-5 text-secondary">Good Morning ,Lets Have your breakfast with us</h1>
            <Row xs={1} md={3} className="g-3">
          {
              breakfastMeals.map(meal=><BreakfastMeals meal={meal}></BreakfastMeals>)
          }
            </Row>
       
        </div>
    );
};

export default Breakfast;