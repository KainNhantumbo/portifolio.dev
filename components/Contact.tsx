import { FC, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { BiMailSend } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import type { TInputEvents, TSubmitEvent, TFormData } from '../@types';
import { _contact as Container } from '../styles/components/contact';

const Contact: FC = (): JSX.Element => {
  const { t: translation } = useTranslation();
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
  const notification = (message: string): void => {
    setMessageStatus(message);
    clearTimeout(undefined);
    setTimeout(() => {
      setMessageStatus('');
    }, 5000);
  };

  const emailSender = async (e: TSubmitEvent): Promise<void> => {
    e.preventDefault();
    setMessageStatus(translation('contact.message.informative'));
    try {
      await emailjs.send(
        'service_sjw9i8b',
        'template_eso630j',
        formData as any,
        'z3FUpU83GBFJyGXVF'
      );
      notification(translation('contact.message.success'));
      (e as any).target.reset();
    } catch (err: unknown) {
      console.error((err as any).text);
      notification(translation('contact.message.failure'));
    }
  };

  return (
    <Container id='contact'>
      <h2>
        <FaEnvelope />
        <span>{translation('contact.title')}</span>
      </h2>
      <section className='intro'>
        <motion.h2
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1}}>
          {translation('contact.intro-title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
          whileInView={{ opacity: 1 }}>
          {translation('contact.intro-message')}
        </motion.p>
      </section>
      <section className='options'>
        <div className='option'>
          <FaPhoneAlt />
          <span> {translation('contact.phone')}</span>
        </div>
        <div className='option'>
          <FaEnvelope />
          <span> {translation('contact.mail')}</span>
        </div>
      </section>

      <motion.section
        className='form-container'
        initial={{ opacity: 0, scale: 0.4 }}
        transition={{ delay: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}>
        <form onSubmit={emailSender}>
          <section className='form-control'>
            <div className='form-item'>
              <label htmlFor='name'>
                {translation('contact.form.name-label')}
              </label>
              <input
                type='text'
                id='name'
                name='name'
                maxLength={120}
                required
                placeholder={translation('contact.form.name-placeholder')}
                onChange={(e) => formDataPicker(e)}
              />
            </div>
            <div className='form-item'>
              <label htmlFor='email'>
                {translation('contact.form.mail-label')}
              </label>
              <input
                type='email'
                id='email'
                name='from_email'
                required
                placeholder={translation('contact.form.mail-placeholder')}
                maxLength={30}
                onChange={(e) => formDataPicker(e)}
              />
            </div>
          </section>
          <label htmlFor='subject'>
            {translation('contact.form.subject-label')}
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            maxLength={120}
            required
            placeholder={translation('contact.form.subject-placeholder')}
            onChange={(e) => formDataPicker(e)}
          />
          <label htmlFor='message'>
            {translation('contact.form.message-label')}
          </label>
          <textarea
            id='message'
            name='message'
            cols={30}
            rows={10}
            maxLength={3500}
            required
            placeholder={translation('contact.form.message-placeholder')}
            onChange={(e) => formDataPicker(e)}
          />
          <span className='message'>{messageStatus}</span>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            type='submit'>
            <BiMailSend />
            <span>{translation('contact.form.button')}</span>
          </motion.button>
        </form>
      </motion.section>
    </Container>
  );
};

export default Contact;
