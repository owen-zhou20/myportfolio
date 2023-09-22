import Main from './components/Main'
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import './App.css';

function App() {
  return (
    <ConfigProvider locale={enUS} theme={{
      components: {
        Card: {
          actionsBg: '#f0f0f0',
          headerBg: '#f0f0f0'
        },
      },
    }}>
      <div className="App">
        <Main/>
      </div>
    </ConfigProvider>
  );
}

export default App;
