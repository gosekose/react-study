import CreatePage from '../pages/CreatePage';
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import EditPage from '../pages/EditPage';

const routes = [
    {
      path: '/',
      name: 'HomePage',
      element: <HomePage />
    },
    {
      path: '/blogs',
      name: 'Blogs',
      element: <ListPage />
    },
    {
      path: '/blogs/create',
      name: 'Blogs Create',
      element: <CreatePage />
    },
    {
      path: '/blogs/edit',
      name: 'Blogs Edit',
      element: <EditPage />
    },
]

export default routes;