/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from 'react';

const compareClasses = (className: string, values: Array<string>) =>
  values.reduce((prev, value) => prev || className?.includes?.(value), false);

const useOutsideClick: (
  ref: any,
  callback: Function,
  values?: Array<any>,
  options?: { ignore: any }
) => void = (ref, callback, values = [], options?) => {
  const handleClick = useCallback(
    (e) => {
      let ignore = false;
      Object.entries(options?.ignore ?? {}).forEach(
        ([key, value]: Array<any>) => {
          if (key === 'className') {
            ignore = ignore || compareClasses(e.target?.[key], value);
          } else {
            ignore = ignore || value?.join(',').includes?.(e.target?.[key]);
          }
        }
      );
      if (ref.current && !ref.current.contains(e.target) && !ignore) {
        callback();
      }
    },
    [...values]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [...values]);
};

export default useOutsideClick;
