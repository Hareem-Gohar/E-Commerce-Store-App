import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScrollToTop = () => {
      if (window.scrollY > 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };

    handleScrollToTop();
  }, [location]);
};

export default useScrollToTop;
