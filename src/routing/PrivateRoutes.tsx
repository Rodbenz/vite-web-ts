import { Routes, Route, Navigate } from 'react-router-dom'
import MasterLayout from '../layout/MasterLayout'
import Example from '../app/Example'
import Home from './../app/Home';
import ExampleUploadPhotoCapture from '../app/Example-upload-photo';
import ToggleButton from '../app/test';
import About from '../app/About';
export default function PrivateRoutes() {
    return (
        <Routes>
            <Route element={<MasterLayout />}>
                {/* Redirect to Dashboard after success login/registartion */}
                <Route path='auth/*' element={<Navigate to='/home' />} />
                <Route path='home' element={<Home />} />
                <Route path='test' element={<ToggleButton />} />
                <Route path='about' element={<About/>} />
                {/* Pages */}
                {/* <Route path='dashboard' element={<DashboardWrapper />} />
                    <Route path='builder' element={<BuilderPageWrapper />} />
                    <Route path='menu-test' element={<MenuTestPage />} /> */}
                {/* Lazy Modules */}
                <Route
                    path="apps/*"
                    element={
                       <Example/>
                    }
                />
                <Route
                    path="apps/upload/*"
                    element={
                       <ExampleUploadPhotoCapture/>
                    }
                />
                <Route path='*' element={<Navigate to='/error/404' />} />
            </Route>
        </Routes>
    )
}
