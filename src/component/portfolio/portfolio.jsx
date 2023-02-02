import React from 'react'
import css from './portfolio.module.scss'
import {fadeIn, staggerChildren} from '../../utils/motion'
import {motion} from 'framer-motion'
const portfolio = () => {
  return (
    <section 
    variants={staggerChildren}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

        <a className='' id='portfolio'></a>
        <div className={`innerWidth flexCenter ${css.container}`}>
            <div className={`flexCenter ${css.heading}`}>
                <div>
                    <span className='primaryText'>
                        My latest Works
                    </span>
                    <p style={{marginTop: '10px'}}>
                        perfect solution for digital experience
                    </p>
                </div>
                <span className='secondaryText'>
                    Explore more Works
                </span>
            </div>
            {/* image */}
            <div className={`flexCenter ${css.showCase}`}>
                <motion.img 
                variants={fadeIn('up', 'tween', 0.5, 0.6)}
                src="./showCase1.png" alt="project" />
                <motion.img 
                variants={fadeIn('up', 'tween', 0.7, 0.6)}
                src="./showCase2.png" alt="project" />
                <motion.img 
                variants={fadeIn('up', 'tween', 0.9, 0.6)}
                src="./showCase3.png" alt="project" />
            </div>
        </div>
    </section>
  )
}

export default portfolio