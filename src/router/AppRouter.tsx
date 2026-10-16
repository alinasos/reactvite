import { Route, Routes } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Random from '@/pages/Random/Random';
import CowsBulls from '@/pages/CowsBulls/cowsBulls';


const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="random" element={<Random/>} />
            <Route path="cowsBulls" element={<CowsBulls/>} />
            
        </Route>
    </Routes>
};

export default AppRouter;