import React from 'react';
import { Typography, Col, Row } from 'antd';
import InfoCard from './InfoCard'
import './Summary.css'


const { Title, Paragraph, Text, Link } = Typography;

const App = () => {


    return (
        <>
            <Row justify="center">
                <Col span={10} justify="end" align="middle" >
                    <InfoCard />
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
                            I'm a <Text type="success" strong>
                                Java developer, Full stack web developer
                            </Text>
                            <Text> with experience in web-based applications. </Text>
                        </Paragraph>
                        <Paragraph>
                            <Text>
                                I am passionate about software. I also have a great interest in the cloud.
                            </Text>
                        </Paragraph>
                        <Paragraph>
                            <Text>
                                You can find my personal projects at below:
                            </Text>
                        </Paragraph>
                        <Paragraph>
                            <Text>
                                My Protfolio: <Link href="https://owen-zhou20.github.io/">https://owen-zhou20.github.io/</Link>
                                <Paragraph>
                                    <Text>
                                    </Text>
                                </Paragraph>
                                My Github: <Link href="https://github.com/owen-zhou20">https://github.com/owen-zhou20</Link>
                            </Text>
                        </Paragraph>
                    </Typography>
                </Col>
            </Row>
        </>

    )
}
export default App;