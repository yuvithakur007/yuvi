import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

const services = [
  {
    name: 'Problem Solver',
    description: 'Solved 100+ problems on Leetcode + GFG',
    link: 'dec 22-ongoing',
    
  },
  {
    name: 'Hacktober',
    description: 'Solved 6 problems in topic Searching and Sorting of DSA and successfully merge it.',
    link: 'oct 2022',
    
  },
  {
    name: 'Girlscript Winter of Foundation',
    description:'Solved 2 issues in CSS styling in the field of web designing.',
    link: 'sep 21/ nov 21',
  },
  {
    name: 'Hack the Terminal',
    description:'It was great opportunity to work in such a wonderful terminal based event. Our team members bagged the first position in the Hack the Terminal Hackathon under the Open Innovation category.',
    link: 'jul 21',
  },
  // {
  //   name: 'TechnoMech',
  //   description: 'Participated in Poster-Making Competition TechnoMech conducted by Vit Bhopal and we draw a poster (creation and real) about the Navigation System.',
  //   link: '2021',
  // },
  // {
  //   name: 'Anterix Club Vit-B',
  //   description: 'Web Developer at ANTERIX Club: Worked jointly on creating and managing event based website in Advitya’22.',
  //   link: 'jun 21/ jun 22',
  // },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount:0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>Achievements.</h2>
            {/* <h3 className='h3 max-w-[455px] mb-16'>
              I'm a  Front-end Developer with over 2 years of experience.
            </h3> */}
            {/* <button className='btn btn-sm'>See my Works</button> */}
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount:0.3}}
            className='flex-1'>
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#services'
                      className='btn w-9 h-9 mb-{42px] flex justify-center items-center' >
                        <BsArrowUpRight />
                      </a>

                      <a href='#services' className=' text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
