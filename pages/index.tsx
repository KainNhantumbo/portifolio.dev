import type { NextPage } from 'next';
import { HomeContainer as Container } from '../styles/home';
import Layout from '../components/Layout';
import About from '../components/About';
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import { FaEnvelope, FaPhoneAlt, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ConfirmDialog } from '../components/Modal';
import { useState } from 'react';
import { BiMailSend } from 'react-icons/bi';
import Projects from '../components/Projects';
import emailjs from '@emailjs/browser';
import Introduction from '../components/Introduction';
import { InputEvents, SubmitEvent } from '../types/form';

interface AbilitiesProps {
  tech: string;
  icon: JSX.Element;
  level: string;
}

enum Levels {
  ex = 'Experienced',
  inter = 'Intermediate',
  med = 'Medium',
  learn = 'Learning',
}

const frontEnd_abilities: AbilitiesProps[] = [
  { tech: 'Typescript', icon: <SiTypescript />, level: Levels.inter },
  { tech: 'Javascript', icon: <SiJavascript />, level: Levels.ex },
  { tech: 'React', icon: <FaReact />, level: Levels.ex },
  { tech: 'React Native', icon: <SiReact />, level: Levels.learn },
  { tech: 'Next.JS', icon: <SiReact />, level: Levels.ex },
  { tech: 'SASS & CSS', icon: <SiCss3 />, level: Levels.ex },
  { tech: 'HTML5', icon: <SiHtml5 />, level: Levels.ex },
];

const backend_abilities: AbilitiesProps[] = [
  { tech: 'Typescript', icon: <SiTypescript />, level: Levels.inter },
  { tech: 'Javascript', icon: <SiJavascript />, level: Levels.ex },
  { tech: 'Node.JS', icon: <SiNodedotjs />, level: Levels.inter },
  { tech: 'Python', icon: <SiPython />, level: Levels.learn },
  { tech: 'Express.JS', icon: <SiExpress />, level: Levels.inter },
  { tech: 'Mongo DB', icon: <SiMongodb />, level: Levels.inter },
  { tech: 'PostgreSQL', icon: <SiPostgresql />, level: Levels.inter },
];

const tools: AbilitiesProps[] = [
  { tech: 'Git', icon: <SiGit />, level: Levels.inter },
  { tech: 'Markdown', icon: <SiMarkdown />, level: Levels.ex },
  { tech: 'Github', icon: <SiGithub />, level: Levels.inter },
];

const Home: NextPage = () => {
  const [messageStatus, setMessageStatus] = useState('');
  const [isModalActive, setIsModalActive] = useState(false);

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
      console.log(err.text);
      notifyStatus('Oops! Looks like something went wrong. Please, try again.');
    }
  };

  return (
    <Layout>
      <Container>
        <ConfirmDialog
          prompt_title='Message Sent.'
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
              {frontEnd_abilities.map(({ tech, icon, level }, index) => {
                return (
                  <div key={index} className='item'>
                    {icon}
                    <h3>{tech}</h3>
                    <span>{level}</span>
                  </div>
                );
              })}
            </section>
          </section>
          <section className='backend'>
            <h3 className='sub-title'>
              <HiBadgeCheck />
              <span>Backend Development</span>
            </h3>
            <section className='list-items'>
              {backend_abilities.map(({ tech, icon, level }, index) => {
                return (
                  <div key={index} className='item'>
                    {icon}
                    <h3>{tech}</h3>
                    <span>{level}</span>
                  </div>
                );
              })}
            </section>
          </section>
          <section className='other'>
            <h3 className='sub-title'>
              <HiBadgeCheck />
              <span>Development Tools</span>
            </h3>
            <section className='list-items'>
              {tools.map(({ tech, icon, level }, index) => {
                return (
                  <div key={index} className='item'>
                    {icon}
                    <h3>{tech}</h3>
                    <span>{level}</span>
                  </div>
                );
              })}
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
