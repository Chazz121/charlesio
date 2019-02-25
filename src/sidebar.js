import React from 'react'
import './sidebar.scss'
const sidebarItems = [
  {
    name: 'About Me',
    ref: '#AboutMe'
  },
  {
    name: 'Tools I\'m familar with',
    ref: '#Tools'
  },
  {
    name: 'Contact Info',
    ref: '#ContactInfo'
  }
]
const Item = (props) => {
  return (
    <li>
      <a href={props.item.ref}onClick={() =>{ props.expand() }}>{props.item.name} </a>
    </li>
  )
}

const SidebarList = (props) => {
  const items = sidebarItems.slice()
  const list = items.map((item, key) => {
    return <Item key={key} item={item} expand={() => {props.expand()}}/>
  })

  return (
    <div className='SidebarList'>
      <ul >
        {list}
      </ul>
    </div>
  )
}

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
        <SidebarList expand={() => {this.expand()}}/>
      </div>
    )
  };

  menu() {
    return (
      <i className="material-icons" id='menuIcon' onClick={() => { this.expand() }}>menu</i>
    )
  }

  expand() {
    this.setState({ width: this.state.expanded ? this.sidebarInitialWidth : this.sidebarExpandedWidth }, () => {
      this.setState({ expanded: !this.state.expanded })
    });
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