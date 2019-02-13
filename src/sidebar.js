import React from 'react'
import './sidebar.scss'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            width: this.sidebarInitialWidth,
            expanded: false
        }
    }
    sidebarInitialWidth = 0;
    sidebarExpandedWidth = this.props.sidebarWidth;
    sWidth() {
        var width = {
            width: '' + this.state.width + 'px',
            maxWidth: '100vw'
        }
        return width
    }

    sidebar() {
        return (
            <div id='sidebar' style={this.sWidth()} /* onMouseLeave={()=>{this.expand()}} onMouseEnter = {()=>{this.expand()}}*/>
                {this.menu()}
            </div>
        )
    };

    menu() {
        return (
            <i className="material-icons" id='menuIcon' onClick={()=>{this.expand()}}>menu</i>
        )
    }

    expand() {
       this.setState({width: this.state.expanded ? this.sidebarInitialWidth: this.sidebarExpandedWidth},()=>{
            this.setState({expanded: !this.state.expanded})
       } ); 
    }

    render() {
        return (
            <div>
                {this.sidebar()}
            </div>
        )
    }
}

export default Sidebar