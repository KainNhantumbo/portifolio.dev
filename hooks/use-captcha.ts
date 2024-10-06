'use client';

import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export const useRecaptcha = () => {
  const [token, setToken] = React.useState<string>('');
  const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);

  React.useEffect(() => {
    let timeoutInstance = undefined;

    if (token) {
      timeoutInstance = setTimeout(
        () => {
          if (recaptchaRef.current && token) {
            recaptchaRef.current.reset();
            setToken('');
          }
        },
        2 * 60 * 1000
      );
    }

    return () => clearTimeout(timeoutInstance);
  }, [token]);

  return { recaptchaRef };
};
