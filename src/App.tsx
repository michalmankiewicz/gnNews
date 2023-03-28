import { AppShell } from '@mantine/core';
import { Route, Routes } from 'react-router';
import Aside from './components/aside/Aside';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Country from './pages/Country';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import './i18n';

function App() {
  return (
    <AppShell
      header={<Header />}
      aside={<Aside />}
      footer={<Footer />}
      className="overflow-x-hidden"
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppShell>
  );
}

export default App;
