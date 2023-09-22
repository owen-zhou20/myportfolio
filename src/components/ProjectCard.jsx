import React from 'react';
import { Image, Typography, Watermark } from 'antd';



const { Title, Paragraph, Text } = Typography;
const contentStyle = {
    height: '280px',
    color: '#fff',
    lineHeight: '280px',
    textAlign: 'center',
    background: '#364d79',
};


const App = ({ title, description, imgUrl, watermark}) => {

    return (
                <div>
                    {/* <Divider /> */}
                    <Watermark content={watermark} style={contentStyle}>
                        <Image src={imgUrl} style={contentStyle} />
                    </Watermark>
                    <Typography>
                        <Title level={4} code>{title}</Title>
                        <Paragraph>
                            <Text>{description}</Text>
                        </Paragraph>
                    </Typography>
                </div>
    );
}
export default App;