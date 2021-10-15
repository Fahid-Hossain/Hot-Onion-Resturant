import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BreakfastMeals = (props) => {
    const { meal } = props;
    return (
        <div>
            
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={meal.img} />
                            <Card.Body>
                                <Card.Title>{meal.title}</Card.Title>
                                <Card.Text>
                                   {meal.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
          
        </div>
    );
};

export default BreakfastMeals;