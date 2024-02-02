'use client';

import { useEffect, useMemo, useState } from 'react';

export const useHeaderView = (minWidth: number, initialScrollRange = -100) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [deltaY, setDeltaY] = useState<number>(initialScrollRange);

  const onChangeWidth = useMemo(
    () => () =>
      window.innerWidth > minWidth ? setIsMenu(true) : setIsMenu(false),
    [minWidth]
  );

  const onScroll = (e: WheelEvent) => setDeltaY(e.deltaY);

  useEffect((): (() => void) => {
    onChangeWidth();
    window.addEventListener('resize', onChangeWidth);
    window.addEventListener('wheel', onScroll);

    return () => {
      window.removeEventListener('resize', onChangeWidth);
      window.removeEventListener('wheel', onScroll);
    };
  }, [onChangeWidth]);

  return {
    handleToggleMenu: () => setIsMenu((current) => !current),
    isHeaderInView: isMenu,
    scrollRangeValue: deltaY
  };
};
