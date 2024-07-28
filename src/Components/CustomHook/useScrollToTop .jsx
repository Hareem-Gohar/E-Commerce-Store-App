import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScrollToTop = () => {
     
        window.scrollTo(0, 0);

    };

    handleScrollToTop();
  }, [location]);
};

export default useScrollToTop;
