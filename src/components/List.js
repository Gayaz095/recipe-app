import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

    const List = ({ title, image, ingredients }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      return (  
      <div>
      <Row xs={4} md={4} className="g-4">
        {Array.from({ length: 1 }).map((_, key) => (
          <Col key={key}>
            <Card style={{display: "flex", alignItems: "center", width: "200px", height: "250px", margin: "10px"}}>
              <Card.Img variant="center" src={image}
                  style={{
                  width: "100px",
                  height: "100px"
              }} />
              <Card.Body>
                <Card.Title>{ title }</Card.Title>
                <Card.Text>
              <Button variant="primary" onClick={handleShow}>
                Steps for recipe.
              </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ title }</Modal.Title>
        </Modal.Header>
          <Modal.Body>
          <ol >
              {ingredients.map((ingredient,key) =>(
                  <li key={key}>{ingredient.text}</li>
              ))}
          </ol>
          </Modal.Body>
      </Modal>
      </div>
    );
};

export default List;
