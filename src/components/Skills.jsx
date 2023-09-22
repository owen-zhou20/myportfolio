import React, { useState } from 'react';
import { Typography, Col, Row, Button, Space } from 'antd';
import { FileSearchOutlined, DownloadOutlined, GithubOutlined } from '@ant-design/icons';



const App = () => {
    const [size, setSize] = useState('large');
    const { Title, Paragraph, Text } = Typography;

    return (
        <section id='skills'>
            <Row>
                <Col span={8}>
                </Col>
                <Col span={16}>
                    <Typography>
                        <Title>Skills</Title>
                    </Typography>
                </Col>
            </Row>
            <Row align="middle" >
                <Col span={8} >
                    <Space direction="vertical" >
                        <Space wrap >
                            <Button type="primary" shape="round" icon={<FileSearchOutlined />} size={size}>
                                CV
                            </Button>
                            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                                Resume
                            </Button>
                            <Button type="primary" shape="round" icon={<GithubOutlined />} size={size}>
                                Github
                            </Button>
                        </Space>
                    </Space>
                </Col>
                <Col span={16}>
                    <Typography>
                        <Paragraph justify="center" align="left">
                            <ul>
                                <li>
                                    <Text >Back-end: JAVA EE(Web), SpringBoot2, SpringCloud, AliCloud, Nacos, Feign, SpringSecurity, Gateway, Nginx, Maven, C#</Text>
                                </li>
                                <li>
                                    <Text type="success">Front-end:  Vue, React, JavaScript, HTML, CSS</Text>
                                </li>
                                <li>
                                    <Text type="warning">Database:  MySQL, Redis, MyBatis, MyBatis-Plus, JDBC, Microsoft SQL Server</Text>
                                </li>
                                <li>
                                    <Text type="danger">Test: Postman, Swagger and JUnit</Text>
                                </li>
                                <li>
                                    <Text type="secondary">Tools: Git, Docker, IntelliJ IDEA, Visual Studio Code, Maven, Npm(Node.js), Tomcat</Text>
                                </li>
                            </ul>
                        </Paragraph>
                    </Typography>
                </Col>
            </Row>
        </section>
    );
};
export default App;