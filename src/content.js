import React from 'react'
import './content.scss'
import VisibilitySensor from 'react-visibility-sensor';
import { fadeInLeft, fadeOutRight } from 'react-animations'
import Radium, {StyleRoot} from 'radium';


  
  const Item = (props) =>{
    var style = {
      visibility: 'visible',
      animation: 'fadeIn .5s',
      animationName: Radium.keyframes(fadeInLeft, 'fadeIn')
    };
    var styler = () =>{
      return props.isVisible ? style : {opacity: '0',animation: 'x .5s',animationName: Radium.keyframes(fadeOutRight, 'fadeOut')}
    }
    
    return (
      <StyleRoot>
      <div  style={styler()}>
        <h1>{props.element.name}</h1>
        <div>{props.element.content}</div>
      </div>
      </StyleRoot>
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