"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = ({ isDarkMode }) => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1c71b4d6-c874-436f-b660-f05240d3763b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
            id="contact" className='w-full px-[12%] py-5 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>

            <motion.h4 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>Connect With Me</motion.h4>

            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                className='text-center text-5xl font-Ovo'>Get In Touch</motion.h2>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out!
            </motion.p>

            <motion.form onSubmit={onSubmit} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
                className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                    <motion.input initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
                        name="name" type="text" className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' placeholder="Please enter your name" required />

                    <motion.input initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
                        name="email" type="email" className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' placeholder="Please enter your email" required />

                </div>

                <motion.textarea initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
                    name="message" rows="6" placeholder='Please enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white md-6 dark:bg-darkHover/30 dark:border-white/90' >
                </motion.textarea>

                <motion.button type="submit" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' >
                    Submit Now <Image src={assets.right_arrow_white} alt="Right Arrow" className='w-4' />
                </motion.button>

                <p className='mt-4'>{result}</p>

            </motion.form>

        </motion.div>
    )
}

export default Contact
