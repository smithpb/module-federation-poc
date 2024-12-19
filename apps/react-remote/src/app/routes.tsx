import { Link, Outlet } from 'react-router-dom';
import useSyncBrowserRouter from './hooks/useSyncBrowserRouter';

const ContactInfo = () => {
  return (
    <div>
      Contact
      <div>
        <Link to="form">Contact Form</Link>
      </div>
      <div>
        <Link to="chat">Contact Chat</Link>
      </div>
      <Outlet />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div>
      Contact Form!
      <Link to="/">Return to Home</Link>
    </div>
  );
};
const ContactChat = () => {
  return (
    <div>
      Contact Chat!
      <Link to="/">Return to Home</Link>
    </div>
  );
};

const RouteHandler = () => {
  useSyncBrowserRouter({ basename: '/contact' });
  return <Outlet />;
};

export const Routes = [
  {
    path: '/',
    element: <RouteHandler />,
    children: [
      {
        index: true,
        element: <ContactInfo />,
      },
      {
        path: 'form',
        element: <ContactForm />,
      },
      {
        path: 'chat',
        element: <ContactChat />,
      },
    ],
  },
];
