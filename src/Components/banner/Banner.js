import React from 'react'
import './banner.css'
import $ from 'jquery'

export default class Banner extends React.Component {
    
    componentDidMount(){
        $(window).scroll(function() {
            var scrollPos = $(this).scrollTop();
            console.log(scrollPos)
            $('.hero-back').css({
                'background-size' : 200 + scrollPos + 'vh'
            })
        })
    }
    render(){
        return (
            <div id='banner'>
                {/* <div className='hero-back'>
                    <img src='http://pngriver.com/wp-content/uploads/2018/04/Download-Mountain-Transparent-Background.png' />
                </div> */}
                <div id='main'>
                    <img src='./hsr.png' />
                </div>
            </div>
        )
    }
}
