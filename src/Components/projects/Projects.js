import React, {Component} from 'react'
import './projects.css'
import ProjectCards from './projectCards/ProjectCards'
import $ from 'jquery'


export default class Projects extends Component {
    componentDidMount(){
        $(window).scroll(function(){
            var offset = $(this).scrollTop();
            var scroll = offset
            console.log(scroll)

            $('.intro-projects').css('top', 20 - scroll/50 + '%')
            $('.intro-projects').css('width', 50 + scroll/80 + '%')

            $('.project-component').css('bottom', 5  + scroll/30  + '%')
            // $('.project-component').css('width', 85  + scroll/100  + '%')

            //Parallax for the text
            $('.text-projects').css('font-size', 40 + scroll/30 + 'px')

        })
    }
    render(){
        return (
            <div id='projects'>
                <div className='intro-projects'>
                    <h1 className='text-projects'>Get To Know My Work</h1>
                </div>
                <div className='project-component'>
                    {/* <ProjectComp /> */}
                    <ProjectCards />
                </div>
            </div>
        )
    }
    
}
