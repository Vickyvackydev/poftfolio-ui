import React from 'react'
import css from './Header.module.scss'
import {BiPhoneCall} from 'react-icons/bi'
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants, hideMenu } from '../../utils/motion'
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from 'react'
import useHeaderShadow from '../../hooks/useHeaderShadow'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const headerShadow = useHeaderShadow()


  return (
    <motion.div 
    initial= 'hidden'
    whileInView='show'
    variants={headerVariants}
    viewport={{once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}
    style={{boxShadow: headerShadow}}>
        <div className={`flexCenter innerwidth ${css.container}`}>
            <div className={css.name}>
                Binjan
            </div>
            <ul
            style={getMenuStyles(menuOpen)}
            className={`flexCenter ${css.menu}`}>
                <li><a href='#expertise'>Services</a></li>
                <li><a href='#work'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#people'>Testiomonial</a></li>
                <li className={`flexCenter ${css.phone}`}>
                <p>+ 234 812 737 8079</p>
                <BiPhoneCall size={'40px'}/>
                </li>
            </ul>
            {/* this is only for medium in small screen */}
            <div className={css.menuIcon}
            onClick={()=>setMenuOpen((prev)=>!prev)}>
                <BiMenuAltRight size={30} style={hideMenu()}/>
            </div>
        </div>
    </motion.div>
  )
}

export default Header