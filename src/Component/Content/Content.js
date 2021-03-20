import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bus from '../../images/Frame-1.png'
import car from '../../images/Frame-2.png'
import bike from '../../images/Frame.png'
import train from '../../images/Group.png'
import './Content.css'
const Content = () => {
  
    const carType='car';
    return (
        <div>

            <Container className='middle'>
                <Row className="containerGap">
                    <Col xs md lg='3'>
                        <Link to="/destination/bike/search">
                        <Card className='gapBetweenCard' style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={bike} />
                            <Card.Body>
                                <Card.Title className='cardTitle' style={{ textAlign: 'center' }}>Bike</Card.Title>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>

                    <Col xs md lg='3'>
                        
                        <Link to="/destination/car/search">
                        <Card className='gapBetweenCard' style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={car} />
                            <Card.Body>
                                <Card.Title className='cardTitle'>Car</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    </Col>


                    <Col xs md lg='3'>
                        <Link to="/destination/bus/search">
                        <Card className='gapBetweenCard' style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={bus} />
                            <Card.Body>
                                <Card.Title className='cardTitle'>Bus</Card.Title>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                     <Col md lg='3'>
                        <Link to="/destination/train/search">
                        <Card className='gapBetweenCard' style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={train} />
                            <Card.Body>
                                <Card.Title className='cardTitle'>Train</Card.Title>
                            </Card.Body>
                        </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Content;