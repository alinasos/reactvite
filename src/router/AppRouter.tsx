import { Route, Routes } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Random from '@/pages/Random/Random';
import CowsBulls from '@/pages/CowsBulls/cowsBulls';
import Timer from '@/pages/Random/Timer/timer';
import Matrix from '@/pages/Matrix/Matrix';
import Matrix3 from '@/pages/Matrix3/Matrix3';
const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="random" element={<Random/>} />
            <Route path="cowsBulls" element={<CowsBulls/>} />
            <Route path="timer" element={<Timer/>} />
            <Route path="matrix" element={<Matrix/>} />
            <Route path="matrix3" element={<Matrix3/>} />


            
        </Route>
    </Routes>
};

export default AppRouter;