import React, { Component } from 'react'
import '../projectCards/projectCards.css'

export default class ProjectInfo extends Component {
    render() {
        return (
                <div className='project-card'>
                    <div className='project-title'>
                        <h1>Snazz Sneakers</h1>
                    </div>
                    <div className='project-details'>
                        <div className='project-image'>

                        </div>
                        <div className='project-info'>
                            <div className='project-description'>
                                <h1>Project Description</h1>
                                <p>G wagon</p>
                            </div>
                            <div className='project-technologies'>
                                <h1>Built With</h1>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>html</li>
                                        <li>css</li>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>Node</li>
                                        <li>Express</li>
                                        <li>PostgresSql</li>
                                    </ul>
                            </div>
                            <div className='project-links'>
                                <button className='github-repo'>GitHub Repo</button>
                                <button className='project-website-link'>Project Link</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
