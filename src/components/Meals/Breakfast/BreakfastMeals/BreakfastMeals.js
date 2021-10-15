import {faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BreakfastMeals = (props) => {
    const { meal } = props;
    return (
        <div>
            
                    <Col>
                        <Card>
                            <Card.Img className="img-fluid mx-auto" style={{width:"200px"}} variant="top" src={meal.img} />
                            <Card.Body>
                                <Card.Title>{meal.title}</Card.Title>
                                <Card.Text>
                                   {meal.description}
                                </Card.Text>
                                <h4> <FontAwesomeIcon icon={faDollarSign}/> {meal.price}</h4>
                            </Card.Body>
                        </Card>
                    </Col>
          
        </div>
    );
};

export default BreakfastMeals;