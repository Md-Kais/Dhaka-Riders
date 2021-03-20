import React, { createContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



export const DataContext = createContext();
const Destination = (props) => {
    const [sendData, setSendData] = useState({
        start: '',
        end: '',
    });
 
    let { type } = useParams();
    console.log(type);

    const path = `/destination/${type}/${sendData.start}/${sendData.end}`;
    function handleBlur(event) {

        const newUserInfo = { ...sendData };
        if (event.target.name === 'start') {
            newUserInfo[event.target.name] = event.target.value;

        }
        if (event.target.name === 'end') {
            newUserInfo[event.target.name] = event.target.value;
        }
        setSendData(newUserInfo);


       
    }

    
    return (
        <div>
            



            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <div>
                            <form required>
                                <label >Place From: </label><br />
                                <input type="text" name="start" placeholder="Place From" onBlur={handleBlur} />
                                <br />

                                <label >Place To: </label><br />
                                <input type="text" name="end" placeholder="Place To" onBlur={handleBlur} /><br />
                                <br />
                                <Button variant="success">

                                    {

                                        (sendData.start && sendData.end) ? <Link to={path}><input type="submit" /></Link> : <p>Please fill the form</p>
                                    }</Button>
                            </form>
                        </div>


                    </Col>
                    <Col sm={12} md={8}>
                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Destination;