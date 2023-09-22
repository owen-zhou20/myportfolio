import React from 'react';
import { } from '@ant-design/icons';
import { Typography, Col, Row, Carousel, Card, Space, Divider } from 'antd';
import ProjectCard from './ProjectCard'

import admin1 from '../assets/img/screenshot/admin1.jpg'
import admin2 from '../assets/img/screenshot/admin2.jpg'
import admin3 from '../assets/img/screenshot/admin3.jpg'
import admin4 from '../assets/img/screenshot/admin4.jpg'
import admin5 from '../assets/img/screenshot/admin5.jpg'
import admin6 from '../assets/img/screenshot/admin6.jpg'
import member1 from '../assets/img/screenshot/member1.jpg'
import member2 from '../assets/img/screenshot/member2.jpg'
import member3 from '../assets/img/screenshot/member3.jpg'
import member4 from '../assets/img/screenshot/member4.jpg'
import member5 from '../assets/img/screenshot/member5.jpg'
import member6 from '../assets/img/screenshot/member6.jpg'
import member7 from '../assets/img/screenshot/member7.jpg'
import member8 from '../assets/img/screenshot/member8.jpg'
import backend1 from '../assets/img/screenshot/backend1.jpg'
import backend2 from '../assets/img/screenshot/backend2.jpg'
import backend3 from '../assets/img/screenshot/backend3.jpg'
import backend4 from '../assets/img/screenshot/backend4.jpg'
import portfoliopage1 from '../assets/img/screenshot/Portfoliopage1.png'
import portfoliopage2 from '../assets/img/screenshot/Portfoliopage2.png'
import portfoliopage3 from '../assets/img/screenshot/Portfoliopage3.png'
import portfoliopage4 from '../assets/img/screenshot/Portfoliopage4.png'
import portfoliopage5 from '../assets/img/screenshot/Portfoliopage5.png'
import portfoliopage6 from '../assets/img/screenshot/Portfoliopage6.png'


const { Title, Text } = Typography;


const App = () => {

    const project1 = [
        {
            title: "Login for Admins and Teachers",
            description: "Users only can see and control the functions which they have permissions. All pictures and videos in cloud",
            imgUrl: admin1,
        },
        {
            title: "Permission list",
            description: "All permissions list can be auth to roles",
            imgUrl: admin2,
        },
        {
            title: "Teacher list",
            description: "Pagenation with conditions select teachers. Add, delete and modify a teacher or batch delete teachers",
            imgUrl: admin3,
        },
        {
            title: "Course list",
            description: "Pagenation with conditions select courses. Add, delete, batch delete and modify a published course or save as a draft course.",
            imgUrl: admin4,
        },
        {
            title: "Publish course",
            description: "3 steps to publish or save draft for a new course",
            imgUrl: admin5,
        },
        {
            title: "Statistics data ",
            description: "Statistics daily login data and show in a table",
            imgUrl: admin6,
        }
    ]

    const project2 = [
        {
            title: "Member Website Homepage",
            description: "Member can login and pay for courses and watch videos from cloud. All pictures and videos in cloud",
            imgUrl: member1,
        },
        {
            title: "All courses page",
            description: "Pagenation show all courses and order by best selling, New and price with 2 level coursetype",
            imgUrl: member2,
        },
        {
            title: "Course detial page",
            description: "Show course detail and chapter with videos. Pay for this course or watch video if not necessary",
            imgUrl: member3,
        },
        {
            title: "Register new member",
            description: "By Australia moblie number and verification code message. Can scan QR code to login for Wechat",
            imgUrl: member4,
        },
        {
            title: "Shopping cart",
            description: "Buy a course with course detials and order information",
            imgUrl: member5,
        },
        {
            title: "Scan QR code to pay",
            description: "Scan QR code to pay for a order by Wechat",
            imgUrl: member6,
        }
    ]

    const project3 = [
        {
            title: "Member watch videos",
            description: "Member watch videos from cloud",
            imgUrl: member7,
        },
        {
            title: "Member comment",
            description: "Member comment for a course",
            imgUrl: member8,
        },
        {
            title: "Payment controller",
            description: "Based on springboot2, MyBatis-Plus and MVC",
            imgUrl: backend1,
        },
        {
            title: "Course controller",
            description: "RESTful api and common result to return",
            imgUrl: backend2,
        },
        {
            title: "Course serviceImpl",
            description: "Nacos, openfeign and microservices used",
            imgUrl: backend3,
        },
        {
            title: "Upload file to cloud",
            description: "Ali cloud OSS, VOD, SMS and Wechat QR Code used",
            imgUrl: backend4,
        }
    ]

    const project4 = [
        {
            title: "Member watch videos",
            description: "Member watch videos from cloud",
            imgUrl: member7,
        },
        {
            title: "Member comment",
            description: "Member comment for a course",
            imgUrl: member8,
        },
        {
            title: "Payment controller",
            description: "Based on springboot2, MyBatis-Plus and MVC",
            imgUrl: backend1,
        },
        {
            title: "Course controller",
            description: "RESTful api and common result to return",
            imgUrl: backend2,
        },
        {
            title: "Course serviceImpl",
            description: "Nacos, openfeign and microservices used",
            imgUrl: backend3,
        },
        {
            title: "Upload file to cloud",
            description: "Ali cloud OSS, VOD, SMS and Wechat QR Code used",
            imgUrl: backend4,
        }
    ]

    const project6 = [
        {
            title: "Member watch videos",
            description: "Member watch videos from cloud",
            imgUrl: portfoliopage1,
        },
        {
            title: "Member comment",
            description: "Member comment for a course",
            imgUrl: portfoliopage2,
        },
        {
            title: "Payment controller",
            description: "Based on springboot2, MyBatis-Plus and MVC",
            imgUrl: portfoliopage3,
        },
        {
            title: "Course controller",
            description: "RESTful api and common result to return",
            imgUrl: portfoliopage4,
        },
        {
            title: "Course serviceImpl",
            description: "Nacos, openfeign and microservices used",
            imgUrl: portfoliopage5,
        },
        {
            title: "Upload file to cloud",
            description: "Ali cloud OSS, VOD, SMS and Wechat QR Code used",
            imgUrl: portfoliopage6,
        }
    ]

    return (
        <Space
            direction="vertical"
            size="middle"
            style={{
                display: 'flex',
            }}
        >
            <Row >
                <Col span={24}>
                    <Typography>
                        <Title code>Some of my projects:</Title>
                    </Typography>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12} justify="space-between" align="bottom">
                    <Card title="Sv-edu Website"
                        bordered={false}
                        style={{
                            width: '100%'
                        }}
                        cover={<Carousel autoplay>
                            {
                                project2.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            {...project} watermark='Sv-edu'
                                        />
                                    )
                                })
                            }
                        </Carousel>}>
                        <Divider>Sv-edu Website</Divider>
                        <p>Sv-edu website is used for customers to buy and watch video courses online.</p>
                        <p>Customers can buy and pay for courses than watch course videos online.</p>
                        <p><Text keyboard>Vue</Text><Text keyboard>JavaScript</Text><Text keyboard>Nuxt</Text><Text keyboard>ES6</Text><Text keyboard>Nodejs</Text>
                            <Text keyboard>NPM</Text><Text keyboard>Element-UI</Text><Text keyboard>Axios</Text><Text keyboard>Json</Text></p>
                    </Card>
                </Col>
                <Col span={12} justify="space-between" align="bottom">
                    <Card title="Admin System (Sv-edu Website)"
                        bordered={false}
                        style={{
                            width: '100%'
                        }}
                        cover={<Carousel autoplay>
                            {
                                project1.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            {...project} watermark='Sv-edu'
                                        />
                                    )
                                })
                            }
                        </Carousel>}>
                        <Divider>Website Admin System</Divider>
                        <p>Admin System is used for teachers and system administrators to manage all the data for sv-edu website.</p>
                        <p>Teachers manage courses and upload videos to cloud. This system include a Access Control System.</p>
                        <p><Text keyboard>Vue</Text><Text keyboard>JavaScript</Text><Text keyboard>ES6</Text><Text keyboard>Nodejs</Text><Text keyboard>NPM</Text><Text keyboard>Echarts</Text></p>
                        <p><Text keyboard>Element-UI</Text><Text keyboard>Axios</Text><Text keyboard>Json</Text><Text keyboard>Access Control System</Text><Text keyboard>Vue admin template</Text></p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12} justify="space-between" align="bottom">
                    <Card title="Backend System (Sv-edu Website)"
                        bordered={false}
                        style={{
                            width: '100%'
                        }}
                        cover={<Carousel autoplay>
                            {
                                project3.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            {...project} watermark='Sv-edu'
                                        />
                                    )
                                })
                            }
                        </Carousel>}>
                        <Divider>Backend System</Divider>
                        <p>Backend System is used as a service for sv-edu website and admin system.</p>
                        <p>It is built by microservices architecture.</p>
                        <p>Pictures and videos are stored on Alibaba Cloud.</p>
                        <p><Text keyboard>Java EE</Text><Text keyboard>Spring Boot</Text><Text keyboard>Spring Coud</Text><Text keyboard>Alibaba Cloud</Text><Text keyboard>MyBatis-Plus</Text></p>
                        <p><Text keyboard>Microservices architecture</Text><Text keyboard>Spring Cloud Gateway</Text><Text keyboard>Spring Security</Text></p>
                        <p><Text keyboard>Restful API</Text><Text keyboard>Nacos</Text><Text keyboard>Feign</Text><Text keyboard>JWT Token</Text><Text keyboard>OAuth2.0</Text></p>
                        <p><Text keyboard>MySQL</Text><Text keyboard>Redis</Text></p>
                    </Card>
                </Col>
                <Col span={12} justify="space-between" align="bottom">
                    <Card title="Access Control System (Sv authentication)"
                        bordered={false}
                        style={{
                            width: '100%'
                        }}
                        cover={<Carousel autoplay>
                            {
                                project4.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            {...project} watermark='Portfolio page'
                                        />
                                    )
                                })
                            }
                        </Carousel>}>
                        <Divider>Access Control System</Divider>
                        <p>Backend System is used as a service for sv-edu website and admin system.</p>
                        <p><Text keyboard>Java EE</Text><Text keyboard>Spring Boot</Text><Text keyboard>Spring Coud</Text><Text keyboard>Alibaba Cloud</Text><Text keyboard>MyBatis-Plus</Text></p>
                        <p><Text keyboard>Microservices architecture</Text><Text keyboard>Spring Cloud Gateway</Text><Text keyboard>Spring Security</Text></p>
                        <p><Text keyboard>Restful API</Text><Text keyboard>Nacos</Text><Text keyboard>Feign</Text><Text keyboard>MySQL</Text><Text keyboard>Redis</Text></p>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12} justify="space-between" align="bottom">
                    <Card title="My portfolio"
                        bordered={false}
                        style={{
                            width: '100%'
                        }}
                        cover={<Carousel autoplay>
                            {
                                project3.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            {...project} watermark='Sv-edu'
                                        />
                                    )
                                })
                            }
                        </Carousel>}>
                        <Divider>My portfolio</Divider>
                        <p>Backend System is used as a service for sv-edu website and admin system.</p>
                        <p>It is built by microservices architecture.</p>
                        <p>Pictures and videos are stored on Alibaba Cloud.</p>
                        <p><Text keyboard>React</Text><Text keyboard>Ant Design UI</Text><Text keyboard>ES6</Text><Text keyboard>Nodejs</Text>
                            <Text keyboard>NPM</Text></p>
                    </Card>
                </Col>
                <Col span={12} justify="space-between" align="bottom">
                    <Card title="Portfolio page"
                        bordered={false}
                        style={{
                            width: '100%'
                        }}
                        cover={<Carousel autoplay>
                            {
                                project6.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            {...project} watermark='Portfolio page'
                                        />
                                    )
                                })
                            }
                        </Carousel>}>
                        <Divider>Portfolio page</Divider>
                        <p>Portfolio page is a page to show my projects.</p>
                        <p>It build by React, React Bootstrap and Animate.css.</p>
                        <p>It include a carousel with Zmage to show my project screenshots.</p>
                        <p><Text keyboard>React</Text><Text keyboard>Bootstrap React</Text><Text keyboard>Animate.css</Text><Text keyboard>ES6</Text><Text keyboard>Nodejs</Text>
                            <Text keyboard>NPM</Text></p>
                    </Card>
                </Col>
            </Row>
        </Space>
    )
}
export default App;