import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../CardApii.css'


function CardApi(props) {
    return (

   <Card className="card">
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + props.data.poster_path} />
      <Card.Body className="card_body">
        <Card.Title className="card_title">{props.data.title}</Card.Title>
         <Card.Text className="card_text">
         {props.data.overview}
        </Card.Text>
        <p>Popularity: {props.data.popularity}</p>
        <Button variant="primary">Ver Más</Button>
      </Card.Body>
    </Card>

  );
}

export default CardApi