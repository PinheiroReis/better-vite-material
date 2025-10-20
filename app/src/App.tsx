import { Outlet } from 'react-router-dom';
import Layout from '@/components/Layout';
import { AuthProvider } from '@/providers/AuthProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <Outlet />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}
