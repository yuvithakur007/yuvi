import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return ( 
  <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount:0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>

        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount:0.3}}
          className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>
            I'm a Front-end Developer with over 2 years of experience.
          </h3>
          <p className='mb-6'>
          This is Yuvraj Singh from Varanasi, India. I really enjoy working with the machine which is Now Part of Everyone's life. Yes I am Talking about Computers.

I Love to Develop Something Unique that Works for us like Websites. I am Resposible for Building Website, and I really love to Find Vulnerabilities in Websites.
          </p>

          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={2} duration={1} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br /> WEB-DEV
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={100} duration={2} /> : null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Leetcode <br />
                Problem Solved
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={2} duration={2} /> : null}
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                LinkedIn <br />
                Followers
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <a href="https://www.linkedin.com/in/yuvi-singh07/" target="_blank">
              <button className='btn btn-lg' >Contact me</button>
              </a>
              <a href="https://drive.google.com/file/d/1dpLxX3_UjcRZb0s7c13WMSX_tbkN3STQ/view?usp=sharing" target="_blank" className='text-gradient btn-link'>
                My Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
