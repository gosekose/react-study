import CreatePage from '../pages/CreatePage';
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import EditPage from '../pages/EditPage';
import ShowPage from '../pages/ShowPage';
import AdminPage from '../pages/AdminPage';

const routes = [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/admin',
      element: <AdminPage />,
      auth: true
    },
    {
      path: '/blogs',
      element: <ListPage />
    },
    {
      path: '/blogs/create',
      element: <CreatePage />,
      auth: true
    },
    {
      path: '/blogs/:id/edit',
      element: <EditPage />,
      auth: true
    },
    {
      path: '/blogs/:id',
      element: <ShowPage />
    },
]

export default routes;