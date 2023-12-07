/*
 * @version: 1.0
 * @author: fengziwei
 * @creatTime: 2023-11-24
 * @updateTime: 2023-12-06
 * @lastEditors: fengziwei
 * @Description :
 */
import { useEffect, useState } from 'react';

export default function useBreakpoint() {
  const [size, setSize] = useState<'sm' | 'lg'>('lg');

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const resizeObserver = new ResizeObserver(() => {
      setSize(document.body.clientWidth > 800 ? 'lg' : 'sm');
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return size;
}
