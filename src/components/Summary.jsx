import React from 'react';
import { Typography, Col, Row } from 'antd';
import InfoCard from './InfoCard'
import './Summary.css'


const { Title, Paragraph, Text } = Typography;

const App = () => {


    return (
        <>
            <Row justify="center">
                <Col span={10} justify="end" align="middle" >
                    <InfoCard/>
                </Col>
                <Col span={14}>
                    <Typography>
                        <Title type="success">Hi, I'm Owen Zhou</Title>
                        <Paragraph>
                            <Text className='WelcomeText'>
                                Welcome to my <Text strong italic className='WelcomeText'>portfolio page!</Text>
                            </Text>
                        </Paragraph>
                        <Paragraph>
                            I'm a <Text strong>
                             Java developer, Full stack web developer. 
                            </Text>
                        </Paragraph>
                    </Typography>
                </Col>
            </Row>
        </>

    )
}
export default App;