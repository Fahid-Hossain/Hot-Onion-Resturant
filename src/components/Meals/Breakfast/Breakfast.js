import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Home from '../../Home/Home';
import BreakfastMeals from './BreakfastMeals/BreakfastMeals';

const Breakfast = () => {
    const [breakfastMeals,setBreakfastMeals]=useState([])
    useEffect(()=>{
        fetch("./fakeData.json")
        .then(res=>res.json())
        .then(data=>setBreakfastMeals(data))
    },[])
    return (
        <div>
            <Home></Home>
            <h1 className="m-5 text-secondary">Good Morning ,Lets Have your breakfast with us</h1>
            <Row xs={1} md={3} className="g-4">
          {
              breakfastMeals.map(meal=><BreakfastMeals meal={meal}></BreakfastMeals>)
          }
            </Row>
       
        </div>
    );
};

export default Breakfast;