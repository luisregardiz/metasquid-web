import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="container lg:max-w-screen-xl max-w-none mx-auto">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
