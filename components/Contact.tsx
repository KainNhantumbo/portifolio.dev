import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { BiMailSend } from 'react-icons/bi';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import type { TInputEvents, TSubmitEvent, TFormData } from '../@types';
import { ContactContainer as Container } from '../styles/components/contact';

const Contact: FC = (): JSX.Element => {
  const [messageStatus, setMessageStatus] = useState<string>('');
  const [formData, setFormData] = useState<TFormData>({
    name: '',
    email: 'nhantumbok@gmail.com',
    subject: '',
    message: '',
    from_email: '',
  });

  const formDataPicker = (e: TInputEvents): void => {
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

  const emailSender = async (e: TSubmitEvent): Promise<void> => {
    e.preventDefault();
    setMessageStatus('Sending your message, please wait...');
    try {
      await emailjs.send(
        'service_sjw9i8b',
        'template_eso630j',
        formData as any,
        'z3FUpU83GBFJyGXVF'
      );
      notifyStatus('Message sent successfuly!');
      (e as any).target.reset();
    } catch (err: unknown) {
      console.error((err as any).text);
      notifyStatus('Oops! Looks like something went wrong. Please, try again.');
    }
  };

  return (
    <Container id='contact'>
      <h2>
        <FaEnvelope />
        <span>Contact me</span>
      </h2>
      <section className='intro'>
        <motion.h2
          initial={{ opacity: 0, x: -500 }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}>
          Let's bring ideas to life with code!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 500 }}
          transition={{ delay: 0.4 }}
          whileInView={{ opacity: 1, x: 0 }}>
          You can use the form below to send me an e-mail or use the following
          contact options:
        </motion.p>
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

      <motion.section
        className='messageForm'
        initial={{ opacity: 0, scale: 2 }}
        transition={{ delay: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}>
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
      </motion.section>
    </Container>
  );
};

export default Contact;