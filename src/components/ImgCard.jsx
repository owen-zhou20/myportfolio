import React from 'react';
import { Image, Typography } from 'antd';



const { Title, Paragraph, Text } = Typography;

const App = ({ title, description, imgUrl }) => {

    return (
        <div>
            <Image src={imgUrl} />
            <Typography>
                <Title code>{title}</Title>
                <Paragraph>
                    <Text strong>{description}</Text>
                </Paragraph>
            </Typography>
        </div>
    );
}
export default App;