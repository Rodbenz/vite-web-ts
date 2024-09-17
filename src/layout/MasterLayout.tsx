import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';
import SideBar from './components/sidebar';
import Footer from './components/footer';

export default function MasterLayout() {
    const [open, setOpen] = React.useState(false)


    const headleOpen = (val: boolean) => {
        setOpen(val);
    }
    return (
        <div >
            <div className="flex gap-6">
                <NavBar open={open} />
                <div className='hidden sm:block'>
                    <SideBar isOpen={open} headleOpen={headleOpen} />
                </div>
                <div className={``}>
                    <Outlet />
                </div>
            </div>
            <Footer isOpen={open} />
        </div>
    )
}
