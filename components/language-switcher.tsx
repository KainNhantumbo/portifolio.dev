'use client';

import { useScopedI18n } from '@/locales/client';
import { useRouter } from 'next/navigation';
import * as React from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
  action: () => void;
}

interface Props {
  canRender: boolean;
}

export function LanguageSwitcher({ canRender }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const router = useRouter();
  const translation = useScopedI18n('language_switcher_modal');

  const translate = (lang: 'pt' | 'en') => {
    router.replace(`/${lang}`);
  };

  const languages: Language[] = [
    {
      code: 'en',
      name: translation('buttons.english'),
      flag: '🇺🇸',
      action: () => translate('en')
    },
    {
      code: 'pt',
      name: translation('buttons.portuguese'),
      flag: '🇧🇷',
      action: () => translate('pt')
    }
  ];

  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>(languages[0]);

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
    setSelectedLanguage(language);
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
        className='flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 transition-colors hover:bg-gray-50'>
        <span className='text-xl'>{selectedLanguage.flag}</span>
        <span className='text-sm text-gray-700'>{selectedLanguage.name}</span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white shadow-lg transition-all duration-200 ${
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
            className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors first:rounded-t-md last:rounded-b-md hover:bg-gray-50 ${
              selectedLanguage.code === language.code ? 'bg-gray-50' : ''
            }`}>
            <span className='text-xl'>{language.flag}</span>
            <span className='text-sm text-gray-700'>{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
