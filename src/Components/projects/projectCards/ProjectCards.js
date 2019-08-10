import React from 'react'
import './projectCards.css'
import $ from 'jquery'
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import ProjectInfo from '../projectInfo/ProjectInfo'

export default function ProjectCards() {

    const params = {
        effect: 'coverflow',
        direction: 'vertical',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true
        },
        pagination: {
            el: '.swiper-pagination'
        },
    }

    return (
        <Swiper {...params} >
            <div className='swiper-slide'>
                <ProjectInfo />
            </div>
        </Swiper>
    )
}
