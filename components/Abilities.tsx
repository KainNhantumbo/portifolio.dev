import { FC } from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import { backend_data, frontend_data, tools_data } from '../data/stack-data';
import { AbilitiesContainer as Container } from '../styles/components/abilities';

const Abilities: FC = (): JSX.Element => {
  return (
    <Container id='skills'>
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
    </Container>
  );
};
export default Abilities;
