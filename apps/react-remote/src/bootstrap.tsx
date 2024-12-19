import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './app/routes';

const mount = (el: HTMLElement | Element) => {
  const router = createMemoryRouter(Routes, {
    // eslint-disable-next-line no-restricted-globals
    initialEntries: [location.pathname.replace('/contact', '') || '/'],
  });
  const root = ReactDOM.createRoot(el);
  root.render(
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>
  );
};

// if (process.env.NODE_ENV === 'development') {
const devRoot = document.getElementById('window-event');

if (devRoot) {
  mount(devRoot);
}
// }

export { mount };
