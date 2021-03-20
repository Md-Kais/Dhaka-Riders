import React, { useContext } from 'react';
import { useParams } from 'react-router';
import DestinationCard from '../Component/DestinationCard/DestinationCard';
import { Col, Container, Row } from 'react-bootstrap';

import fakedata from './../../src/FakeData.json'

const DestinationProcess = () => {
    let { type, start, end } = useParams();

    const data = fakedata.filter(fakedata => fakedata.type === type);



    return (
        <div>


            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <div style={{ backgroundColor: 'orange', borderRadius: '20px', padding: '5px' }}>
                            <h3>Start : {start}</h3>
                            <h3> End : {end}</h3>
                        </div>
                        {
                            data.map((e) => {
                                return <DestinationCard e={e}></DestinationCard>

                            })

                        }
                    </Col>
                    < Col sm={12} md={6}>
                        xs=6 md=4
                    </Col>
                </Row>
            </Container>







        </div >
    );
};

export default DestinationProcess;