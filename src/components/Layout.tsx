import React from 'react'
import Footer from './Footer';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;
