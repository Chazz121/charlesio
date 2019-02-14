import React from 'react'
import Banner from './banner'
import Sidebar from './sidebar';
import Content from './content'
import './Main.scss'

class Main extends React.Component {

    bannerHeight = '101vh'
    sidebarWidth = 400

    render() {
        return (
            <div className = 'main'>
                <Banner bannerHeight={this.bannerHeight} />
                <Sidebar sidebarWidth ={this.sidebarWidth}/>
                <Content />
            </div>
        )
    }
}

export default Main