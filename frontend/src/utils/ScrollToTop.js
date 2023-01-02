import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function ScrollToTop() {
  // useLocation : use to get current url pathname
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
