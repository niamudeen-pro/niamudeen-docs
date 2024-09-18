import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../components/layout/MainLayout';
import Dashboard from '../pages/DashboardPage';

export const ALL_ROUTES = [
    {
        id: 1,
        path: '/',
        element: (
            <MainLayout>
                <Dashboard />
            </MainLayout>
        ),
    },
];

export const PRIVATE_ROUTES =
    (ALL_ROUTES?.length > 0 &&
        ALL_ROUTES.filter((route) => route.isPrivate && !route.ishidden)) ||
    [];

export const PUBLIC_ROUTES =
    (ALL_ROUTES?.length > 0 &&
        ALL_ROUTES.filter((menu) => !menu.isPrivate && !menu.ishidden)) ||
    [];

export const _router = createBrowserRouter([
    {
        path: '',
        children: ALL_ROUTES,
    },
]);
