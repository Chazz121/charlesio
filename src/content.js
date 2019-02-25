import React from 'react'
import './content.scss'
import VisibilitySensor from 'react-visibility-sensor';
import { fadeInLeft, fadeOutRight } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import Languages from './Languages.js'


  
  const Item = (props) =>{
    var style = {
      visible:{
        visibility: 'visible',
        animation: 'fadeIn .5s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeIn')
      },
      invisible:{
        opacity: '0',animation: 'x .5s',animationName: Radium.keyframes(fadeOutRight, 'fadeOut')
      }
    };
    var styler = () =>{
      return props.isVisible ? style.visible : style.invisible
    }
    return (
      <StyleRoot>
      <div  style={styler()} id={props.element.reference}>
        <h1>{props.element.name}</h1>
        <div>{props.element.content}</div>
      </div>
      </StyleRoot>
    )
  }
  
class Content extends React.Component {

  elementStyles = {
    about:{
      fontSize: '35px',
      minWidth: '0',
      maxWidth: '720px',
      margin: ' 0 auto',
      padding: '15px',
      listStyleType: 'none',
    },
    blue:{
      color:'#6495ed'
    },
    red:{
      color:'red'
    },
  }

  elements = [
    {
      name: 'About Me',
      content: <p style={this.elementStyles.about}>"I am a senior,IT major, at 
      <span style={this.elementStyles.red}> Delaware</span> 
      <span style={this.elementStyles.blue}>State</span>. I have expirence in full-stack web
      development, system adminastration, and database managment.
      I have also completed projects involving robotics, as well as android app development!"</p>,
      reference: 'AboutMe',
    },
    {
      name: 'Familiar with...',
      content: <div style={this.elementStyles.about}><Languages /></div>,
      reference: 'Tools',
    },
    {
      name:'Contact Info',
      content:'',
      reference:'ContactInfo'
    }
  ]

 onChange(isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }
  renderContent(elements) {
    var content = elements.map((element, key) => {
      return (
        <VisibilitySensor partialVisibility key={key}>
          {({isVisible}) => <Item element={element} isVisible={isVisible}></Item>}
        </VisibilitySensor>
      )
    })
    return content
  }
  style = {
    col:{
      minWidth:'0',
      maxWidth:'900px',
      margin:'0 auto',
      padding:'10px'
    }
  }
  
  render() {
    return (
      <div className='Content' style={this.style.col}>
        {this.renderContent(this.elements)}
      </div>
    )
  }
}

export default Content