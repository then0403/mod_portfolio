import React from 'react';
import { motion } from "framer-motion";


type Props = {}

function About({}: Props) {
  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5,
        }}
       
        className='h-screen flex flex-col relative text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{ once: true }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrePPz_0Xr32HTVzu_3OhHVaKwaxJ6rWK74ruO-wPi4Bp42cCCt5JSfFLH4L-TEAatR4&usqp=CAU'
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className='space-y-10 px-0 pb-5 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
            <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum tempora quo quas nostrum quibusdam! Ut cupiditate 
                doloribus odit incidunt atque quis in natus iste a error. Explicabo, odio in corporis facilis mollitia non nisi, 
                reiciendis officia cupiditate velit beatae quae? Quae, aspernatur. Labore esse, voluptate, incidunt eos maiores 
                laudantium asperiores, non repellendus a cupiditate nobis commodi ipsam modi? Similique enim ea aliquid eveniet 
                asperiores tempora dolore quasi sint deserunt nostrum quidem perspiciatis, natus iste dicta repudiandae labore tempore 
                soluta nulla inventore. Unde alias ab animi debitis earum eveniet deserunt assumenda? Perspiciatis laborum id quia magnam 
                incidunt velit culpa numquam nulla, nobis rem nesciunt deserunt deleniti maiores facere eius eos repudiandae distinctio ullam 
                cum maxime autem? Non odit voluptate animi ullam laudantium officiis dolore dolorem rerum? Fugit at fuga assumenda quaerat 
                eligendi! Provident sint voluptates soluta repudiandae reiciendis maxime culpa recusandae. Pariatur quia eligendi numquam, 
                omnis dolorum rerum facilis eum.
            </p>
        </div>
    </motion.div>
  )
}

export default About