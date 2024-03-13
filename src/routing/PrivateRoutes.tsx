import { Routes, Route, Navigate } from 'react-router-dom'
import MasterLayout from '../layout/MasterLayout'
import Example from '../app/Example'
import Home from './../app/Home';
export default function PrivateRoutes() {
    return (
        <Routes>
            <Route element={<MasterLayout />}>
                {/* Redirect to Dashboard after success login/registartion */}
                <Route path='auth/*' element={<Navigate to='/home' />} />
                <Route path='home' element={<Home />} />
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

                <Route path='*' element={<Navigate to='/error/404' />} />
            </Route>
        </Routes>
    )
}
