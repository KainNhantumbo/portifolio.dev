import { useState } from 'react';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import About from '../components/About';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import ConfirmModal from '../components/Modal';
import Introduction from '../components/Introduction';
import { HomeContainer as Container } from '../styles/home';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import { backend_data, frontend_data, tools_data } from '../data/stack-data';

const Home: NextPage = (): JSX.Element => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  return (
    <Layout>
      <Container>
        <ConfirmModal
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
          <section className='stack-container'>
            <h3 className='sub-title'>
              <HiBadgeCheck />
              <span>Frontend Development</span>
            </h3>
            <section className='list-items'>
              {frontend_data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 0.5, bounce: 1 },
                  }}
                  whileHover={{ rotate: -15 }}
                  className='item'>
                  <item.icon />
                  <h3>{item.tech}</h3>
                  <span>{item.level}</span>
                </motion.div>
              ))}
            </section>
          </section>
          <section className='stack-container'>
            <h3 className='sub-title'>
              <HiBadgeCheck />
              <span>Backend Development</span>
            </h3>
            <section className='list-items'>
              {backend_data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 0.5, bounce: 1 },
                  }}
                  whileHover={{ rotate: -15 }}
                  className='item'>
                  <item.icon />
                  <h3>{item.tech}</h3>
                  <span>{item.level}</span>
                </motion.div>
              ))}
            </section>
          </section>
          <section className='stack-container'>
            <h3 className='sub-title'>
              <HiBadgeCheck />
              <span>Development Tools</span>
            </h3>
            <section className='list-items'>
              {tools_data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                    transition: { duration: 0.5, bounce: 1 },
                  }}
                  whileHover={{ rotate: -15 }}
                  className='item'>
                  <item.icon />
                  <h3>{item.tech}</h3>
                  <span>{item.level}</span>
                </motion.div>
              ))}
            </section>
          </section>
        </section>

        <Projects />
        <Contact />
      </Container>
    </Layout>
  );
};

export default Home;
