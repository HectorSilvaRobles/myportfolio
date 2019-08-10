import React from 'react'
import './banner.css'
import $ from 'jquery'

export default class Banner extends React.Component {
    
    componentDidMount(){

        $(window).scroll(function() {
            var offset = $(this).scrollTop();
            var scroll = offset

            $('.layer1').css('top', 10 + scroll/3 + '%')

            $('.layer2').css('left', 25 + scroll/8 + '%')
            $('.layer2-2').css('left', 5 - scroll/9 + '%')

            $('.layer3').css('top', 25 - scroll/3 + '%')
            $('.layer3').css('right', scroll/3 + '%')
            
        })
    }
    render(){
        return (
            <div id='banner'>
                <div className='hero-back'>
                    <img src={require('./hsr.png')} className='layer1' />
                    <img src='http://combigene.com/2/wp-content/uploads/2017/04/Parallax_1-1.png' className='mtn-layer' />
                    <img src='http://www.pngall.com/wp-content/uploads/2016/03/Cloud-PNG-9.png' className='layer2' />
                    <img src='http://www.pngall.com/wp-content/uploads/2016/03/Cloud-PNG-9.png' className='layer2-2' />
                    <img src='https://i.dlpng.com/static/png/1808261-birds-png-birds-png-1600_900_preview.png' className='layer3' />
                    <img src='https://patimes.org/wp-content/uploads/2017/05/yosemite-waterfall.jpg' className='background' />
                </div>

                <div className='mobile-display'>
                    <img src={require('./hsr.png')} className='my-name-mobile' />
                    <img src='https://i.redd.it/6tt0k38f9ck21.jpg' className='mobile-background' />
                </div>
            </div>
        )
    }
}
