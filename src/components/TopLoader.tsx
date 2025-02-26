"use client"; // Ensure this is a Client Component

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation"; // Replace useRouter
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const TopLoader = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        NProgress.start();
        const timer = setTimeout(() => NProgress.done(), 500);

        return () => {
            clearTimeout(timer);
            NProgress.done();
        };
    }, [pathname, searchParams]);

    return null;
};

export default TopLoader;
