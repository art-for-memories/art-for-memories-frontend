import "../../styles/globals.css";
import TopLoader from "@/components/TopLoader";
import { Suspense } from "react";
import Loading from "@/components/loading";
import { getServerAuthSession } from '@/config/auth'
import { redirect } from 'next/navigation';
import { SessionProvider } from "next-auth/react";

export default async function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const session = await getServerAuthSession()

    if (!session || !session.user) {
        redirect('/api/auth/signin')
    }

    return (
        <html lang="en">
            <head>
                <meta name="apple-mobile-web-app-title" content="Art For Memory" />
            </head>
            <body className="antialiased">
                <Suspense fallback={<Loading />}>
                    <SessionProvider session={session}>
                        <main>
                            <TopLoader />
                            {children}
                        </main>
                    </SessionProvider>
                </Suspense>
            </body>
        </html>
    );
}
