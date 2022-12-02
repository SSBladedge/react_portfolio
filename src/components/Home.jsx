import React from 'react';
// import heroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>

        <div className='max-w-screen-lg'>
            <div>
                <h2>I am a Full Stack Developer</h2>
                <p>I have 5 years of experience building and designing
                    software.
                    Currently, I love to work on web applications using
                    technologies like
                    React, Tailwind, Next JS and GrahQL
                </p>
                <div>
                    <button>
                        Portfolio
                        <span>
                            <MdOutlineKeyboardArrowRight/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home