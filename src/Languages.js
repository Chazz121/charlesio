import React from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import { lightSpeedIn, lightSpeedOut } from 'react-animations'
import Radium, { StyleRoot } from 'radium';
import './Languages.scss'



class Languages extends React.Component {

  logoHeight = '90px'
  Item = (props, isVisible) => {
    const style={
      visible:{
        opacity: '1',
        animation: 'rollIn .5s',
        animationName: Radium.keyframes(lightSpeedIn, 'bounceIn')
      },
      inVisible:{
        opacity:0,
        animation: 'rollOut .5s',
        animationName: Radium.keyframes(lightSpeedOut, 'rollOut')
      }
    }

    return (
      <StyleRoot>
      <li style={isVisible ? style.visible : style.inVisible}>
        <a href={props.link}>
          <img src={props.logo}
            height={this.logoHeight}
            alt=''>
          </img>
        </a>
      </li>
      </StyleRoot>
    )
  }
  list = [
    {
      name: 'Javascript',
      logo: 'https://nodejs.org/static/images/logo.svg',
      link: 'https://nodejs.org/en/about/',
    },
    {
      name: 'Python',
      logo: 'https://www.python.org/static/img/python-logo.png',
      link: 'https://www.python.org/about/',
    },
    {
      name: 'MongoDB',
      logo: 'https://webassets.mongodb.com/_com_assets/global/mongodb-logo-white.png',
      link: 'https://www.mongodb.com/',
    },
    {
      name: 'MySQL',
      logo: 'https://kloud.io/wp-content/uploads/2018/07/1024px-MySQL.svg_.png',
      link: 'https://www.mysql.com/',
    },
    {
      name: 'ReactJs',
      logo: 'https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/image.png',
      link: 'https://reactjs.org/',
    },
    {
      name: 'Angular',
      logo: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
      link: 'https://angular.io/'
    },
    {
      name: 'Java',
      logo: 'https://pngimage.net/wp-content/uploads/2018/06/java-logo-png-transparent-background-7.png',
      link: 'https://go.java/index.html?intcmp=gojava-banner-java-com'
    },
    {
      name: 'Linux',
      logo: 'http://pngimg.com/uploads/linux/linux_PNG29.png',
      link: 'https://www.linux.org/'
    },
    {
      name: 'windows',
      logo: 'http://www.stickpng.com/assets/images/5a01b63d7ca233f48ba6278f.png',
      link: 'https://docs.microsoft.com/en-us/windows/desktop/winmsg/windows',
    }
  ]


  renderList(elements) {
    var list = elements.map((item, key) => {
      return (
        <VisibilitySensor partialVisibility key={key}>
          {({isVisible}) => this.Item(item, isVisible)}
        </VisibilitySensor>)
    })
    return list
  }
  
  render() {
    return (
      <div className='Languages'>
        {this.renderList(this.list)}
        <h2>and more...</h2>
      </div>
    )
  }
}

export default Languages