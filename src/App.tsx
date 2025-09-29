import { Outlet } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ThemeProvider } from '@/providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
