import { AUTHOR } from '@/shared/constants';
import { z } from 'zod';

export const ContactSchema = z.object({
  name: z
    .string()
    .min(1, 'Please type your name.')
    .max(64, 'Name field length must not be more than 64 characters.'),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Please enter a valid email.' })
    .default(AUTHOR.email),
  subject: z
    .string()
    .min(1, 'Please type your subject.')
    .max(96, 'Subject field length must not be more than 96 characters.'),
  message: z
    .string()
    .min(1, 'Please write a message')
    .max(4096, 'Message field length must not be more than 4096 characters.'),
  from_email: z.string().email({ message: 'Please enter a valid email.' })
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
