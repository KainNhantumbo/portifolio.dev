'use client';

import { useEffect, useState } from 'react';

export const usePathname = () => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (location !== undefined) setPathname(location.href);
    setPathname('');
  }, []);

  return { pathname, setPathname };
};
