import About from '../components/About';
import Layout from '../components/Layout';
import emailjs from '@emailjs/browser';
import Projects from '../components/Projects';
import Introduction from '../components/Introduction';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { ConfirmDialog } from '../components/Modal';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { InputEvents, SubmitEvent } from '../types/form';
import { HomeContainer as Container } from '../styles/home';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import {
  backend_abilities,
  frontEnd_abilities,
  tools,
} from '../data/stack-data';

const Home: NextPage = (): JSX.Element => {
  const [messageStatus, setMessageStatus] = useState<string>('');
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: 'nhantumbok@gmail.com',
    subject: '',
    message: '',
    from_email: '',
  });

  const formDataPicker = (e: InputEvents) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // notifies the e-mail sender about the message status
  const notifyStatus = (message: string): void => {
    setMessageStatus(message);
    clearTimeout(undefined);
    setTimeout(() => {
      setMessageStatus('');
    }, 5000);
  };

  const emailSender = async (e: SubmitEvent): Promise<void> => {
    e.preventDefault();
    setMessageStatus('Sending your message, please wait...');
    try {
      await emailjs.send(
        'service_sjw9i8b',
        'template_eso630j',
        formData,
        'z3FUpU83GBFJyGXVF'
      );
      notifyStatus('Message sent successfuly!');
      (e as any).target.reset();
    } catch (err: any) {
      console.error(err.text);
      notifyStatus('Oops! Looks like something went wrong. Please, try again.');
    }
  };

  return (
    <Layout>
      <Container>
        <ConfirmDialog
          prompt_title='Message Sent'
          prompt_message="I just can't  wait to we start working together, thank you!"
          closeModal={setIsModalActive}
          active={isModalActive}
        />
        <Introduction />
        <About />
        <section className='abilities' id='skills'>
          <h2>
            <HiAcademicCap />
            <span>My Experience and Skills</span>
          </h2>
          <section className='frontend'>
            <h3 className='sub-title'>
              <HiBadgeCheck />
              <span>Frontend Development</span>
            </h3>
            <section className='list-items'>
              {frontEnd_abilities.map((item, index) => (
                <div key={index} className='item'>
                  <item.icon />
                  <h3>{item.tech}</h3>
                  <span>{item.level}</span>
                </div>
              ))}
            </section>
          </section>
          <section className='backend'>
            <h3 className='sub-title'>
              <HiBadgeCheck />
              <span>Backend Development</span>
            </h3>
            <section className='list-items'>
              {backend_abilities.map((item, index) => (
                <div key={index} className='item'>
                  <item.icon />
                  <h3>{item.tech}</h3>
                  <span>{item.level}</span>
                </div>
              ))}
            </section>
          </section>
          <section className='other'>
            <h3 className='sub-title'>
              <HiBadgeCheck />
              <span>Development Tools</span>
            </h3>
            <section className='list-items'>
              {tools.map((item, index) => (
                <div key={index} className='item'>
                  <item.icon />
                  <h3>{item.tech}</h3>
                  <span>{item.level}</span>
                </div>
              ))}
            </section>
          </section>
        </section>

        <Projects />

        <section id='contact' className='contact-container'>
          <h2>
            <FaEnvelope />
            <span>Contact me</span>
          </h2>
          <section className='intro'>
            <h2>Let's bring ideas to life with code!</h2>
            <p>
              You can use the form below to send me an e-mail or use the
              following contact options:
            </p>
          </section>
          <section className='options'>
            <div className='option'>
              <FaPhoneAlt />
              <span>Phone: (+258) 84 400 2535</span>
            </div>
            <div className='option'>
              <FaEnvelope />
              <span>E-mail: nhantumbok@gmail.com</span>
            </div>
          </section>

          <section className='messageForm'>
            <form onSubmit={emailSender}>
              <section className='form-control'>
                <div className='form-item'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    maxLength={120}
                    required
                    placeholder='Type your full name here'
                    onChange={(e) => formDataPicker(e)}
                  />
                </div>
                <div className='form-item'>
                  <label htmlFor='email'>E-mail</label>
                  <input
                    type='email'
                    id='email'
                    name='from_email'
                    required
                    placeholder='Type your e-mail here'
                    maxLength={30}
                    onChange={(e) => formDataPicker(e)}
                  />
                </div>
              </section>
              <label htmlFor='subject'>Subject</label>
              <input
                type='text'
                id='subject'
                name='subject'
                maxLength={120}
                required
                placeholder='Your subject here'
                onChange={(e) => formDataPicker(e)}
              />
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                cols={30}
                rows={10}
                maxLength={2500}
                required
                placeholder='Type the message content here'
                onChange={(e) => formDataPicker(e)}
              />
              <span className='message'>{messageStatus}</span>
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                type='submit'>
                <BiMailSend />
                <span>Send message</span>
              </motion.button>
            </form>
          </section>
        </section>
      </Container>
    </Layout>
  );
};

export default Home;
