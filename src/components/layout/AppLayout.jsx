import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import MainLayout from './MainLayout';

export default function AppLayout() {
    return (
        <main className="custom_container">
            <Navbar />
            <MainLayout>
                <Outlet />
            </MainLayout>
        </main>
    );
}
