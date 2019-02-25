import React from 'react'


class Banner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            height: '500vh',
            cursorShown: true,

        }
        setTimeout(() => { this.expand(); }, 2000)
        setInterval(() => { this.blink(); }, this.cursorTiming)
    }
    greeting() {

        var style = {
            banner: {
                height: this.state.height,
                width: '100vw',
                backgroundColor: '#f53939',
                position: 'relative',
                overflow: 'hidden',
                transition: 'height ease .5s',
                fontSize: '40px',
            },
            greeting: {
                textAlign: 'center',
                margin: 'auto ',
                color: '#ffbfbf',
                height: '100%',
                width: '100%',
                verticalAlign: 'center',
                },
                cursor: {
                    opacity: this.state.cursorShown ? '1': '0'
                }
        }
        return (
            <div style={style.banner}>
                <table style={style.greeting}>
                    <tbody>
                        <tr>
                            <td><h1>Char<span style={style.cursor}>/</span>es.Io</h1></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    cursor(){
        return this.state.cursorShown ? '' : '/'
    }
    cursorTiming = 500
    expand() {
        var height = this.props.bannerHeight
        this.setState({ height: height })
    }
    blink = function(){
        this.setState({ cursorShown: !this.state.cursorShown })
    }
    render() {
        return (
            <div>
                {this.greeting()}
            </div>
        )
    }

}

export default Banner