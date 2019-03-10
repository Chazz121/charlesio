import React from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import { fadeInLeft, fadeInRight, fadeOutLeft, fadeOutRight } from 'react-animations'
import Radium, { StyleRoot } from 'radium';
import './Languages.scss'




class Languages extends React.Component {

  logoHeight = '90px'
  Item = (props, isVisible) => {
    const style = {
      visible: {
        position: 'relative',
        opacity: '1',
        animation: 'fadeIn .5s',
        animationName: Radium.keyframes(!props.left ? fadeInLeft : fadeInRight, 'fadeIn'),
       
      },
      inVisible: {
        
        opacity: '0',
        animation: 'fadeOut .5s',
        animationName: Radium.keyframes(!props.left ? fadeOutLeft : fadeOutRight, 'fadeOut')
      }
    }
    var bars = {
      backgroundColor: 'rgb(255,255,255,.5)',
        marginBottom: '20px',
        borderRadius: '100px',
        height: '130px',
        textAlign: props.left ? 'left' : 'right',
        width:'200vw'
    }
    var logoStyle = {
      left: '0',
      backgroundColor: props.color
    }
    var float = {
     right:{
       float: 'right'
     },
     left:{
       float: 'left'
      }
    }
    return (

      <StyleRoot className='styleRoot' >
        <div style={[isVisible ? style.visible : style.inVisible, props.left ? float.left : float.right, bars]}>
          <a href={props.link}>
            <img className='logo' src={props.logo}
              height={this.logoHeight}
              style={logoStyle}
              alt=''>
            </img>
          </a>
        </div>
      </StyleRoot>
    )
  }
  list = [
    {
      name: 'Javascript',
      logo: 'https://nodejs.org/static/images/logo.svg',
      link: 'https://nodejs.org/en/about/',
      color: 'rgba(0,255,0,.5)',
      left: true,
    },
    {
      name: 'Python',
      logo: 'https://www.python.org/static/img/python-logo.png',
      link: 'https://www.python.org/about/',
      color: 'rgba(0,0,255,.5)',
    },
    {
      name: 'MongoDB',
      logo: 'https://webassets.mongodb.com/_com_assets/global/mongodb-logo-white.png',
      link: 'https://www.mongodb.com/',
      color: 'rgba(0,255,0,.5)',
      left: true,
    },
    {
      name: 'MySQL',
      logo: 'https://kloud.io/wp-content/uploads/2018/07/1024px-MySQL.svg_.png',
      link: 'https://www.mysql.com/',
      color: 'rgba(255,255,66,.5)',
    },
    {
      name: 'ReactJs',
      logo: 'https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/image.png',
      link: 'https://reactjs.org/',
      color: 'rgba(66,66,66,.5)',
      left: true,
    },
    {
      name: 'Angular',
      logo: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
      link: 'https://angular.io/',
      color: 'rgba(255,0,0,.5)',
    },
    {
      name: 'Java',
      logo: 'https://pngimage.net/wp-content/uploads/2018/06/java-logo-png-transparent-background-7.png',
      link: 'https://go.java/index.html?intcmp=gojava-banner-java-com',
      color: 'rgba(0,0,66,.5)',
      left: true,
    },
    {
      name: 'Linux',
      logo: 'http://pngimg.com/uploads/linux/linux_PNG29.png',
      link: 'https://www.linux.org/',
      color: 'rgba(255,255,0,.5)'
    },
    {
      name: 'windows',
      logo: 'http://www.stickpng.com/assets/images/5a01b63d7ca233f48ba6278f.png',
      link: 'https://docs.microsoft.com/en-us/windows/desktop/winmsg/windows',
      color: 'rgba(66,66,66,.5)',
      left: true,
    }
  ]


  renderList(elements) {
    var list = elements.map((item, key) => {
      var style = {
        left: {
          position: 'relative',
          width: '100%'
          
        },
        right: {
          position: 'relative',
          width: '100%',
        }
      }
      return (
        <div style={item.left ? style.left : style.right}>
          <VisibilitySensor  key={key} >
            {({ isVisible }) => this.Item(item, isVisible)}
          </VisibilitySensor>
        </div>
      )
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