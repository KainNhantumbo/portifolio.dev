'use client';

import { AnimateTextReveal } from '@/components/animations/animate-reveal';
import Button from '@/components/ui/button';
import { AnimatedInput } from '@/components/ui/inputs';
import { SectionHeader } from '@/components/ui/section-header';
import { useScopedI18n } from '@/locales/client';
import { ContactSchema, ContactSchemaType } from '@/schemas/contact';
import {
  AUTHOR,
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID
} from '@/shared/constants';
import { send as sender } from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, MailboxIcon, MessageSquareDashed, TextIcon, UserIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const initialFormState: ContactSchemaType = {
  name: '',
  email: AUTHOR.email,
  subject: '',
  message: '',
  from_email: ''
};

export const Contact = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const translation = useScopedI18n('contact');
  const [messageStatus, setMessageStatus] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: { ...initialFormState },
    mode: 'onSubmit'
  });

  // notifies the e-mail sender about the message status
  const notification = (message: string) => {
    setMessageStatus(message);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
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
      console.error(err);
      console.error((err as any).text);
      notification(translation('message.failure'));
    }
  };

  return (
    <section
      id='contact'
      className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col gap-12 pt-5'>
      <SectionHeader
        title={translation('title')}
        description={translation('intro-title')}
      />

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
              <div className='flex w-full flex-col gap-2'>
                <label htmlFor='name' className='ml-1 block font-medium'>
                  <span>{translation('form.name-label')}</span>
                </label>
                <AnimatedInput
                  as='input'
                  icon={<UserIcon className='h-5 w-5 text-font' />}
                  {...register('name')}
                  id='name'
                  placeholder={translation('form.name-placeholder')}
                />

                <p className='p-1 text-error'>{errors?.name?.message}</p>
              </div>
              <div className='flex w-full flex-col gap-2'>
                <label htmlFor='from_email' className='ml-1 block font-medium'>
                  <span>{translation('form.mail-label')}</span>
                </label>
                <AnimatedInput
                  as='input'
                  icon={<Mail className='h-5 w-5 text-font' />}
                  gradientFrom='from-fuchsia-500'
                  gradientTo='to-purple-600'
                  {...register('from_email')}
                  id='from_email'
                  placeholder={translation('form.mail-placeholder')}
                />

                <p className='p-1 text-error'>{errors?.from_email?.message}</p>
              </div>
            </section>

            <div className='flex w-full flex-col gap-2'>
              <label htmlFor='subject' className='ml-1 block font-medium'>
                <span>{translation('form.subject-label')}</span>
              </label>
              <AnimatedInput
                as='input'
                icon={<TextIcon className='h-5 w-5 text-font' />}
                gradientFrom='from-amber-400'
                gradientTo='to-rose-400'
                {...register('subject')}
                id='subject'
                placeholder={translation('form.subject-placeholder')}
              />

              <p className='p-1 text-error'>{errors?.subject?.message}</p>
            </div>

            <label htmlFor='message' className='ml-1 block font-medium'>
              <span>{translation('form.message-label')}</span>
            </label>
            <AnimatedInput
              as='textarea'
              icon={<MessageSquareDashed className='h-5 w-5 text-font' />}
              gradientFrom='from-amber-400'
              gradientTo='to-orange-500'
              {...register('message')}
              id='message'
              cols={30}
              rows={10}
              placeholder={translation('form.message-placeholder')}
            />

            <p className='p-1 text-error'>{errors?.message?.message}</p>

            <span className='text-sm font-medium text-primary'>{messageStatus}</span>

            <Button variant='secondary' type='submit' className='w-fit'>
              <span>{translation('form.button')}</span>
            </Button>
          </form>
        </section>
      </section>
    </section>
  );
};
