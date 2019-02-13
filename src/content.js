import React from 'react'
import TrackVisibility from 'react-on-screen'
import './content.scss'
import VisibilitySensor from 'react-visibility-sensor';


  
  const Item = (props) =>{
    var style = {
      visibility: props.isVisible ? 'visible' : 'hidden'
    };
    return (
      <div style={style}>
        <h1>{props.element.name}</h1>
        <div>{props.element.content}</div>
      </div>
    )
  }



class Content extends React.Component {


  elements = [
    {
      name: 'About Me',
      content: <h1>"About Works"</h1>,
      reference: '#About',
    },
    {
      name: 'Projects',
      content: 'A few of the projects i have been workin on',
      reference: '',
    }
  ]

 onChange(isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }

  renderContent(elements) {
    var content = elements.map((element, key) => {
      return (
        <VisibilitySensor key={key}>
          {({isVisible}) => <Item element={element} isVisible={isVisible}></Item>}
        </VisibilitySensor>
      )
    })
    return content
  }
  render() {
    return (
      <div className='Content'>
        {this.renderContent(this.elements)}
      </div>
    )
  }
}

export default Content