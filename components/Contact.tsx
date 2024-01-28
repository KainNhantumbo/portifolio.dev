'use client';

import {
  AtSignIcon,
  MailboxIcon,
  MessageSquareDashed,
  TextIcon,
  UserIcon
} from 'lucide-react';
import { useState } from 'react';
import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { send as sender } from '@emailjs/browser';
import type { FormData, InputEvents, SubmitEvent } from '../types';

export default function Contact() {
  const translation = useScopedI18n('contact');
  const [messageStatus, setMessageStatus] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: 'nhantumbok@gmail.com',
    subject: '',
    message: '',
    from_email: ''
  });

  const formDataPicker = (e: InputEvents) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };
  303074;

  // notifies the e-mail sender about the message status
  const notification = (message: string) => {
    setMessageStatus(message);
    clearTimeout(undefined);
    setTimeout(() => {
      setMessageStatus('');
    }, 5000);
  };

  const emailSender = async (e: SubmitEvent) => {
    e.preventDefault();
    setMessageStatus(translation('message.informative'));
    try {
      await sender(
        'service_sjw9i8b',
        'template_eso630j',
        formData as any,
        'z3FUpU83GBFJyGXVF'
      );
      notification(translation('message.success'));
      (e as any).target.reset();
    } catch (err: unknown) {
      console.error((err as any).text);
      notification(translation('message.failure'));
    }
  };

  return (
    <section
      id='contact'
      className='w-full max-w-[700px] max-[370px]:m-0 flex flex-col items-center gap-3 pt-5 mx-auto border-solid border-t-[1px] border-font/10'>
      <h2 className='base-section-title'>
        <MessageSquareDashed />
        <span>{translation('title')}</span>
      </h2>
      <section className='flex flex-col gap-3 font-sans'>
        <motion.h3
        className='text-center text-xl font-normal'
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1 }}>
          {translation('intro-title')}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
          whileInView={{ opacity: 1 }}>
          {translation('intro-phrase')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ delay: 0.6 }}
          whileInView={{ opacity: 1 }}>
          {translation('intro-message')}
        </motion.p>
      </section>
      <section className='flex flex-col gap-1 font-sans'>
        <div className='flex gap-3 items-center'>
          <MailboxIcon className='stroke-primary w-5 h-5' />
          <span> {translation('mail')}</span>
        </div>
      </section>

      <motion.section
        className='w-full flex flex-col gap-3 p-5 rounded-xl font-sans base-border bg-foreground max-[420px]:py-5 max-[420px]:px-3'
        initial={{ opacity: 0, scale: 0.4 }}
        transition={{ delay: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}>
        <form onSubmit={emailSender} className='w-full flex flex-col gap-3'>
          <section className='flex gap-3 max-[568px]:flex-wrap'>
            <div className='flex flex-col w-full'>
              <label htmlFor='name' className='base-label pb-2'>
                <UserIcon />
                <span>{translation('form.name-label')}</span>
              </label>
              <input
                type='text'
                id='name'
                name='name'
                maxLength={120}
                required
                className='base-input'
                placeholder={translation('form.name-placeholder')}
                onChange={(e) => formDataPicker(e)}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='email' className='base-label pb-2'>
                <AtSignIcon />
                <span>{translation('form.mail-label')}</span>
              </label>
              <input
                type='email'
                id='email'
                name='from_email'
                className='base-input'
                required
                placeholder={translation('form.mail-placeholder')}
                maxLength={30}
                onChange={(e) => formDataPicker(e)}
              />
            </div>
          </section>
          <label htmlFor='subject' className='base-label pb-2'>
            <TextIcon />
            <span>{translation('form.subject-label')}</span>
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            maxLength={120}
            className='base-input'
            required
            placeholder={translation('form.subject-placeholder')}
            onChange={(e) => formDataPicker(e)}
          />
          <label htmlFor='message' className='base-label pb-2'>
            <MessageSquareDashed />
            <span>{translation('form.message-label')}</span>
          </label>
          <textarea
            id='message'
            name='message'
            cols={30}
            rows={10}
            maxLength={3500}
            required
            className='base-input'
            placeholder={translation('form.message-placeholder')}
            onChange={(e) => formDataPicker(e)}
          />
          <span className='text-primary text-sm font-medium'>
            {messageStatus}
          </span>
          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.05 }}
            className='bg-primary-variant base-border w-fit rounded-lg px-4 py-2 text-white font-medium'
            type='submit'>
            <span>{translation('form.button')}</span>
          </motion.button>
        </form>
      </motion.section>
    </section>
  );
}
