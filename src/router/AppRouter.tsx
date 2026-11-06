import { Route, Routes } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Timer from '@/pages/Timer/timer';
import Matrix2x2 from '@/pages/Matrix2x2/Matrix2x2';
import Matrix3x3 from '@/pages/Matrix3x3/Matrix3x3';
import Matrix4x4 from '@/pages/Matrix4x4/Matrix4x4';
import Component from '@/pages/Comp/Comp';
import Ygadai from "@/pages/Ygadai/ygadai";
 
const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="ygadai" element={<Ygadai />} />
            <Route path="timer" element={<Timer/>} />
            <Route path="matrix2x2" element={<Matrix2x2/>} />
            <Route path="matrix3x3" element={<Matrix3x3/>} />
            <Route path="matrix4x4" element={<Matrix4x4/>} />
        <Route path ="Comp" element ={<Component/>}/>


            
        </Route>
    </Routes>
    
};

export default AppRouter;