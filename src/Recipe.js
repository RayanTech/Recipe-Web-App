import React from 'react'
import Card from 'react-bootstrap/Card';
import './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
            <div class="col-md-3">
        <Card className="Card">
            <Card.Img class="img" variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}<br />{~~calories} Calories</Card.Title>
                <Card.Text>
                    <ol>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Recipe;