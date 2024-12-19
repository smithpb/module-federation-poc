import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type RouteEvent = CustomEvent<string>;

const useSyncBrowserRouter = ({ basename }: { basename: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const newPath = `${basename}${
    location.pathname === '/' ? '' : location.pathname
  }`;

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('remote', { detail: newPath }));
    const appNavigate = ({ detail }: RouteEvent) => {
      if (detail === location.pathname) {
        return;
      }
      navigate(detail);

      window.addEventListener('host', appNavigate as EventListener);
      return () => {
        window.removeEventListener('host', appNavigate as EventListener);
      };
    };
  }, [location]);
};

export default useSyncBrowserRouter;
