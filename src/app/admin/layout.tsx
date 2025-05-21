
import TopLoader from "@/components/TopLoader";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { getServerAuthSession } from '@/config/auth'
import { redirect } from 'next/navigation';
import SessionProviderWrapper from "@/components/SessionProviderWrapper";

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const session = await getServerAuthSession()

    if (!session || !session.user) {
        redirect('/api/auth/signin')
    }

    if (session.user.role !== "ADMIN" && session.user.role !== "SUPERADMIN") {
        return <p>Access Denied</p>;
    }

    return (
        <html lang="en">
            <head>
                <meta name="apple-mobile-web-app-title" content="Art For Memories" />
            </head>
            <body className="antialiased">
                <Suspense fallback={<Loading />}>
                    <SessionProviderWrapper session={session}>
                        <main>
                            <TopLoader />
                            {children}
                        </main>
                    </SessionProviderWrapper>
                </Suspense>
            </body>
        </html>
    );
}
