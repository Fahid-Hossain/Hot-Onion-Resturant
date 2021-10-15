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
            <h1>Good Morning , Have a breakfast with us</h1>
            <Row xs={1} md={2} className="g-4">
          {
              breakfastMeals.map(meal=><BreakfastMeals meal={meal}></BreakfastMeals>)
          }
            </Row>
       
        </div>
    );
};

export default Breakfast;