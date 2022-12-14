import {motion} from 'framer-motion';
import { useState } from 'react';

const projects = [
    {
        title: 'Weather App',
        descr: 'For this project I created a weather API that collects information from an open soruce API to then display the current weather in a requested location.',
        imgUrl: 'https://code.visualstudio.com/assets/docs/languages/typescript/overview.png'
    },
    {
        title: 'Weather App',
        descr: 'Ipsum lipsum tipsum a pleab aer tots oea',
        imgUrl: 'https://code.visualstudio.com/assets/docs/languages/typescript/overview.png'
    },
    {
        title: 'Weather App',
        descr: 'Ipsum lipsum tipsum a pleab aer tots oea',
        imgUrl: 'https://code.visualstudio.com/assets/docs/languages/typescript/overview.png'
    },
    {
        title: 'Weather App',
        descr: 'Ipsum lipsum tipsum a pleab aer tots oea',
        imgUrl: 'https://code.visualstudio.com/assets/docs/languages/typescript/overview.png'
    },
]

const Card = ({ title, descr, imgUrl }) => {

    return (
        <motion.div className='project-card' whileHover={{ scale: 1.05 }} >
            <motion.img src={imgUrl} alt="" />
            <motion.h2>{title}</motion.h2>
            <motion.p>{descr}</motion.p>
        </motion.div>
    );
}

const SectionSecond = () => {
  return (
    <div className='section-second'>
        <h2 className='title'>Projects</h2>
        <div  className='container'>
            {projects.map(project => <Card {...project}/>)}
        </div>
    </div>
  );
}

export default SectionSecond