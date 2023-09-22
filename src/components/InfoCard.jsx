import React from 'react';
import { DownloadOutlined, GithubOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const App = () => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <FileSearchOutlined key="setting" />,
      <DownloadOutlined key="edit" />,
      <GithubOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Owen Zhou"
      description="Java Developer, Full Stack Web Developer"
    />
  </Card>
);
export default App;