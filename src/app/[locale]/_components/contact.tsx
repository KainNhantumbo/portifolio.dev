'use client';

import { AnimateTextReveal } from '@/components/animations/animate-reveal';
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
    formState: { errors , }
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
      console.error(err)
      console.error((err as any).text);
      notification(translation('message.failure'));
    }
  };

  console.debug(errors);


  return (
    <section
      id='contact'
      className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col gap-12 pt-5'>
      <div className='mb-6 space-y-6 lg:mb-12'>
        <h2 className='font-slab text-5xl font-bold uppercase leading-relaxed sm:text-5xl lg:text-6xl xl:text-[7rem] 2xl:text-[8rem]'>
          <span>{translation('title')}</span>
        </h2>
        <h3 className='w-full max-w-4xl text-lg font-medium sm:text-xl lg:leading-relaxed'>
          {translation('intro-title')}
        </h3>
      </div>

      <section className='flex w-full gap-12'>
        <div className='flex w-full max-w-md flex-col gap-6'>
          <section className='flex flex-col gap-3 font-sans'>
            <AnimateTextReveal inverseDirection>
              <p className='leading-relaxed'>{translation('intro-phrase')}</p>
            </AnimateTextReveal>
            <AnimateTextReveal delay={0.5}>
              <p className='leading-relaxed'>{translation('intro-message')}</p>
            </AnimateTextReveal>
          </section>

          <section className='flex flex-col gap-1 font-sans'>
            <div className='flex items-center gap-3'>
              <MailboxIcon className='h-5 w-5 stroke-primary' />
              <span className='font-semibold'>{translation('mail')}</span>
            </div>
          </section>
        </div>

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
    </section>
  );
};
