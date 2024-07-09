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
      element: <AdminPage />
    },
    {
      path: '/blogs',
      element: <ListPage />
    },
    {
      path: '/blogs/create',
      element: <CreatePage />
    },
    {
      path: '/blogs/:id/edit',
      element: <EditPage />
    },
    {
      path: '/blogs/:id',
      element: <ShowPage />
    },
]

export default routes;