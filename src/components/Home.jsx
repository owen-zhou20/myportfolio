import React from 'react';
import Summary from './Summary'
import Skills from './Skills'
import Projects from './Projects'
import { Divider } from 'antd';



const App = () => {


    return (
        <>
            <Summary/>
            <Divider/>
            <Skills/>
            <Divider/>
            <Projects/>
            <Divider/>
        </>

    )
}
export default App;