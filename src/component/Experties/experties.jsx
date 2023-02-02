import React from 'react'
import css from './experties.module.scss'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion'
import {motion} from 'framer-motion'

const experties = () => {
  return (
    <motion.section
        variants ={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={css.wrapper}>

            <a className='anchor' id='expertise'></a>
        <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
            <div className={css.leftSide}>
                { projectExperience.map((exp, i)=> {
                    return <motion.div 
                    variants={fadeIn('right', 'tween', (i-1)*0.2, 1)}
                    className={css.exp} key={i}>
                        <div className='flexCenter' style={{backgroundColor: exp.bg}}>
                            <exp.icon size={25} color='white'/>
                        </div>
                        <div>
                            <span>{exp.name}</span>
                            <span className='secondaryText'>{exp.projects} projects</span>
                        </div>
                    </motion.div>
                }) }
            </div>
            <motion.div 
            variants={textVariant(0.5)}
            className={css.rightSide}>
               <span className='primaryText'>What do i help</span>

               {WhatDoIHelp.map((paragraph, i)=> {
                    return <span className='secondaryText' 
                    key={i}>{paragraph}</span>
               })}

               <div className={css.stats}>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>285+</span>
                        <span className='secondaryText'>Projects Completed</span>
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                    <span className='primaryText'>190+</span>
                    <span className='secondaryText'>Happy Clients</span>
                    </div>
               </div>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default experties