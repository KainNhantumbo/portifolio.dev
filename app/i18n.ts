import { getRequestConfig } from 'next-intl/server';

const config = getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../locales/${locale}.json`)).default
}));

export default config;
