'use client';

import { useScopedI18n } from '@/locales/client';
import { motion } from '@/providers/framer-provider';
import { ContactSchema, ContactSchemaType } from '@/schemas/contact';
import {
  AUTHOR,
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID
} from '@/shared/constants';
import { send as sender } from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AtSignIcon,
  MailboxIcon,
  MessageSquareDashed,
  TextIcon,
  UserIcon
} from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimateTextReveal } from './animations/animate-reveal';

const initialFormState: ContactSchemaType = {
  name: '',
  email: AUTHOR.email,
  subject: '',
  message: '',
  from_email: ''
};

export const Contact = () => {
  const translation = useScopedI18n('contact');
  const [messageStatus, setMessageStatus] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { ...initialFormState }
  });

  // notifies the e-mail sender about the message status
  const notification = (message: string) => {
    setMessageStatus(message);
    clearTimeout(undefined);
    setTimeout(() => {
      setMessageStatus('');
    }, 5000);
  };

  const onSubmit = async (values: ContactSchemaType) => {
    setMessageStatus(translation('message.informative'));
    try {
      await sender(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, { ...values }, EMAIL_PUBLIC_KEY);
      notification(translation('message.success'));
      reset(initialFormState);
    } catch (err: unknown) {
      console.error((err as any).text);
      notification(translation('message.failure'));
    }
  };

  return (
    <section
      id='contact'
      className='mx-auto flex w-full max-w-[780px] flex-col items-center gap-6 border-t-[1px] border-solid border-font/10 pt-5 max-[370px]:m-0'>
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
        <AnimateTextReveal inverseDirection>
          <p className='text-justify'>{translation('intro-phrase')}</p>
        </AnimateTextReveal>
        <AnimateTextReveal delay={0.5}>
          <p className='text-justify'>{translation('intro-message')}</p>
        </AnimateTextReveal>
      </section>
      <section className='flex flex-col gap-1 font-sans'>
        <div className='flex items-center gap-3'>
          <MailboxIcon className='h-5 w-5 stroke-primary' />
          <span className='font-semibold'>{translation('mail')}</span>
        </div>
      </section>

      <section className='flex w-full flex-col gap-3 font-sans max-[420px]:py-5'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex w-full flex-col gap-3'>
          <section className='flex gap-3 max-[568px]:flex-wrap'>
            <div className='flex w-full flex-col'>
              <label htmlFor='name' className='base-label pb-2'>
                <UserIcon />
                <span>{translation('form.name-label')}</span>
              </label>
              <input
                {...register('name')}
                id='name'
                className='base-input'
                placeholder={translation('form.name-placeholder')}
              />

              <p className='p-1 text-error'>{errors?.name?.message}</p>
            </div>
            <div className='flex w-full flex-col'>
              <label htmlFor='from_email' className='base-label pb-2'>
                <AtSignIcon />
                <span>{translation('form.mail-label')}</span>
              </label>
              <input
                {...register('from_email')}
                className='base-input'
                placeholder={translation('form.mail-placeholder')}
              />

              <p className='p-1 text-error'>{errors?.email?.message}</p>
            </div>
          </section>

          <label htmlFor='subject' className='base-label pb-2'>
            <TextIcon />
            <span>{translation('form.subject-label')}</span>
          </label>
          <input
            {...register('subject')}
            id='subject'
            className='base-input'
            placeholder={translation('form.subject-placeholder')}
          />

          <p className='p-1 text-error'>{errors?.subject?.message}</p>

          <label htmlFor='message' className='base-label pb-2'>
            <MessageSquareDashed />
            <span>{translation('form.message-label')}</span>
          </label>
          <textarea
            {...register('message')}
            id='message'
            cols={30}
            rows={10}
            className='base-input'
            placeholder={translation('form.message-placeholder')}
          />

          <p className='p-1 text-error'>{errors?.message?.message}</p>

          <span className='text-sm font-medium text-primary'>{messageStatus}</span>

          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.05 }}
            className='base-border w-fit rounded-lg bg-primary-variant px-4 py-2 font-medium text-white disabled:bg-primary-variant/40'
            type='submit'>
            <span>{translation('form.button')}</span>
          </motion.button>
        </form>
      </section>
    </section>
  );
};
