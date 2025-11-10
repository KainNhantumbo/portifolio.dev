'use client';

import { cn } from '@/lib/utils';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';
import { type FlagComponent, PT, US } from 'country-flag-icons/react/3x2';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';

interface Language {
  code: string;
  name: string;
  flag: FlagComponent;
  action: () => void;
}

interface Props {
  canRender: boolean;
}

export function LanguageSwitcher({ canRender }: Props) {
  const locale = useCurrentLocale();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const router = useRouter();
  const translation = useScopedI18n('language-switcher');

  const translate = (lang: 'pt' | 'en') => {
    router.replace(`/${lang}`);
  };

  const languages: Language[] = [
    {
      code: 'en',
      name: translation('buttons.english'),
      flag: US,
      action: () => translate('en')
    },
    {
      code: 'pt',
      name: translation('buttons.portuguese'),
      flag: PT,
      action: () => translate('pt')
    }
  ];

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setIsOpen(false);
  };

  if (!canRender) {
    return null;
  }

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className='flex items-center gap-2 transition-colors'>
        {locale === 'en' ? (
          <US className='h-auto w-6 rounded-sm' />
        ) : (
          <PT className='h-auto w-6 rounded-sm' />
        )}
        <span className='text-sm font-medium text-font'>
          {translation('current-language')}
        </span>
        <ChevronDown
          className={cn(
            'h-auto w-4 text-font transition-transform',
            isOpen && '-rotate-180'
          )}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`base-border ransition-all absolute right-0 top-full z-50 mt-5 w-48 rounded-lg bg-background/50 shadow-[0_0_25px_rgba(0,0,0,.1)] backdrop-blur-sm duration-200 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onMouseLeave={() => setIsOpen(false)}>
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => {
              handleLanguageSelect(language);
              language.action();
            }}
            className={cn(
              'flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors first:rounded-t-md last:rounded-b-md hover:bg-font/15'
            )}>
            <language.flag className='h-6 w-6 rounded-sm' />
            <span
              className={cn(
                'text-sm font-medium text-font',
                locale === language.code && 'text-primary'
              )}>
              {language.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
