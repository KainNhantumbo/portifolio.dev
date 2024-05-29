'use client';

import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { send as sender } from '@emailjs/browser';
import {
  AtSignIcon,
  MailboxIcon,
  MessageSquareDashed,
  TextIcon,
  UserIcon
} from 'lucide-react';
import { useState } from 'react';
import type { FormData, InputEvents, SubmitEvent } from '../types';

export const Contact = () => {
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
      className='mx-auto flex w-full max-w-[700px] flex-col items-center gap-6 border-t-[1px] border-solid border-font/10 pt-5 max-[370px]:m-0'>
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
        <p className='text-justify'>{translation('intro-phrase')}</p>
        <p className='text-justify'>{translation('intro-message')}</p>
      </section>
      <section className='flex flex-col gap-1 font-sans'>
        <div className='flex items-center gap-3'>
          <MailboxIcon className='h-5 w-5 stroke-primary' />
          <span className='font-semibold'> {translation('mail')}</span>
        </div>
      </section>

      <section className='flex w-full flex-col gap-3 font-sans max-[420px]:py-5'>
        <form onSubmit={emailSender} className='flex w-full flex-col gap-3'>
          <section className='flex gap-3 max-[568px]:flex-wrap'>
            <div className='flex w-full flex-col'>
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
            <div className='flex w-full flex-col'>
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
          <span className='text-sm font-medium text-primary'>{messageStatus}</span>
          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.05 }}
            className='base-border w-fit rounded-lg bg-primary-variant px-4 py-2 font-medium text-white'
            type='submit'>
            <span>{translation('form.button')}</span>
          </motion.button>
        </form>
      </section>
    </section>
  );
};
