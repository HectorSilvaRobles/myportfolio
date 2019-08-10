import React, { Component } from 'react'
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './skillslider.css'
import Javascript from '../../../Media/JavaScript-01.svg'
import Node from '../../../Media/Node-JS-01.svg'
import ReactImg from '../../../Media/React-01.svg'
import PostgresSql from '../../../Media/PostgreSQL-01.svg'
import CSS from '../../../Media/CSS-3-01.svg'
import HTML from '../../../Media/HTML-5-01.svg'
import Redux from '../../../Media/Redux-01.svg'
import Git from '../../../Media/Git-01.svg'

export class SkillSlider extends Component {
    render() {
      var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
        return (
            <div className='slider'>
              <h2> Responsive </h2>
                <Slider {...settings}>
                  <div className='skill-cards'>
                    <div className='skill-info'>
                      <div className='circle'>
                        <img src={Javascript} />
                      </div>
                      <h1>JavaScript</h1>
                    </div>
                  </div>
                  <div className='skill-cards'>
                    <div className='skill-info'>
                      <div className='circle'>
                        <img src={Node} />
                      </div>
                      <h1>Node.js</h1>
                    </div>
                  </div>
                  <div className='skill-cards'>
                    <div className='skill-info'>
                      <div className='circle'>
                        <img src={ReactImg} />
                      </div>
                      <h1>React.js</h1>
                    </div>
                  </div>
                  <div className='skill-cards'>
                    <div className='skill-info'>
                      <div className='circle'>
                        <img src={Redux} />
                      </div>
                      <h1>React.js</h1>
                    </div>
                  </div>
                  <div className='skill-cards'>
                    <div className='skill-info'>
                      <div className='circle'>
                        <img src={PostgresSql} />
                      </div>
                      <h1>PostgreSql</h1>
                    </div>
                  </div>
                  <div className='skill-cards'>
                    <div className='skill-info'>
                      <div className='circle'>
                        <img src={CSS} />
                      </div>
                      <h1>CSS3</h1>
                    </div>
                  </div>
                  <div className='skill-cards'>
                    <div className='skill-info'>
                      <div className='circle'>
                        <img src={HTML} />
                      </div>
                      <h1>HTML</h1>
                    </div>
                  </div>
                  <div className='skill-cards'>
                    <div className='skill-info'>
                      <div className='circle'>
                        <img src={Git} />
                      </div>
                      <h1>Git</h1>
                    </div>
                  </div>
                 
                </Slider>
            </div>
        )
    }
}

export default SkillSlider
