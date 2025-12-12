'use client';

import Package from '@/../package.json';
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
import { DashIcon, StopwatchIcon } from '@radix-ui/react-icons';
import { now } from 'dot-beat-time';
import { Mail, MessageSquareDashed, TextIcon, UserIcon } from 'lucide-react';

import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

const initialFormState: ContactSchemaType = {
  name: '',
  email: AUTHOR.email,
  subject: '',
  message: '',
  from_email: ''
};

const Contact = () => {
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const translation = useScopedI18n('contact');
  const [messageStatus, setMessageStatus] = React.useState('');

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: { ...initialFormState },
    mode: 'onSubmit'
  });

  const [internetTime, setInternetTime] = React.useState<string | null>(null);

  React.useEffect(() => {
    const timeoutInstance = setInterval(() => {
      setInternetTime(now(true));
    }, 1000);

    return () => clearTimeout(timeoutInstance);
  }, []);

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
      className='relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col gap-12 px-4 pt-5'>
      <SectionHeader
        title={translation('title')}
        description={translation('intro-title')}
      />

      <section className='flex w-full flex-col gap-12 md:flex-row'>
        <div className='flex w-full flex-col gap-6 md:max-w-md'>
          <section className='flex flex-col gap-6 font-sans text-lg'>
            <AnimateTextReveal inverseDirection>
              <p className='leading-relaxed'>{translation('intro-phrase')}</p>
            </AnimateTextReveal>

            <div className='border-t border-font/20'>
              <div className='group space-y-3 border-b border-font/20 py-3'>
                <h4 className='flex items-center gap-3'>
                  <MessageSquareDashed className='h-auto w-6' />
                  <span className='text-md font-slab font-medium'>Whatsapp</span>
                </h4>
                <a
                  href={`https://wa.me/258844002535`}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='flex items-center gap-3 font-semibold group-hover:text-accent-primary'>
                  <DashIcon className='h-auto w-6' />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <div className='group space-y-3 border-b border-font/20 py-3'>
                <h4 className='flex items-center gap-3'>
                  <Mail className='h-auto w-6' />
                  <span className='text-md font-slab font-medium'>Email</span>
                </h4>
                <a
                  href={`mailto:${Package.author.email}`}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='flex items-center gap-3 font-semibold group-hover:text-accent-primary'>
                  <DashIcon className='h-auto w-6' />
                  <span>{Package.author.email}</span>
                </a>
              </div>

              <div className='group space-y-3 border-b border-font/20 py-3'>
                <h4 className='flex items-center gap-3'>
                  <StopwatchIcon className='h-auto w-6' />
                  <span className='text-md font-slab font-medium'>.Beat Time</span>
                </h4>
                <a
                  href='https://en.wikipedia.org/wiki/Swatch_Internet_Time'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='flex items-center gap-3 font-semibold group-hover:text-accent-primary'>
                  <DashIcon className='h-auto w-6' />
                  <span>{internetTime}</span>
                </a>
              </div>
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

                <Controller
                  name='name'
                  control={control}
                  render={({ field }) => (
                    <AnimatedInput
                      {...field}
                      as='input'
                      icon={<UserIcon className='h-5 w-5 text-font' />}
                      {...register('name')}
                      id='name'
                      placeholder={translation('form.name-placeholder')}
                    />
                  )}
                />
                <p className='p-1 text-error'>{errors?.name?.message}</p>
              </div>
              <div className='flex w-full flex-col gap-2'>
                <label htmlFor='from_email' className='ml-1 block font-medium'>
                  <span>{translation('form.mail-label')}</span>
                </label>

                <Controller
                  name='from_email'
                  control={control}
                  render={({ field }) => (
                    <AnimatedInput
                      {...field}
                      as='input'
                      type='email'
                      autoComplete='true'
                      icon={<Mail className='h-5 w-5 text-font' />}
                      gradientFrom='from-fuchsia-500'
                      gradientTo='to-purple-600'
                      {...register('from_email')}
                      id='from_email'
                      placeholder={translation('form.mail-placeholder')}
                    />
                  )}
                />
                <p className='p-1 text-error'>{errors?.from_email?.message}</p>
              </div>
            </section>

            <div className='flex w-full flex-col gap-2'>
              <label htmlFor='subject' className='ml-1 block font-medium'>
                <span>{translation('form.subject-label')}</span>
              </label>

              <Controller
                name='subject'
                control={control}
                render={({ field }) => (
                  <AnimatedInput
                    {...field}
                    id='subject'
                    as='input'
                    icon={<TextIcon className='h-5 w-5 text-font' />}
                    gradientFrom='from-amber-400'
                    gradientTo='to-rose-400'
                    placeholder={translation('form.subject-placeholder')}
                  />
                )}
              />
              <p className='p-1 text-error'>{errors?.subject?.message}</p>
            </div>

            <label htmlFor='message' className='ml-1 block font-medium'>
              <span>{translation('form.message-label')}</span>
            </label>

            <Controller
              name='message'
              control={control}
              render={({ field }) => (
                <AnimatedInput
                  {...field}
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
              )}
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

export default React.memo(Contact);
