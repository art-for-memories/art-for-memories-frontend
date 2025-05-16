import PageHeader from "@/components/headers/page-header";
import Layout from "@/components/Layout";
import type { Metadata } from "next";
import Stories from "./Stories";

export const metadata: Metadata = {
    title: "Their Stories",
    description: "Browse through a collection of stories that preserve the memories and legacy of Genocide Survivors through Art of Memories Rwanda.",
    keywords: ["Stories", "Art of Memories Rwanda", "Genocide Survivors", "Preserve Memories", "Rwanda", "Art", "Genocide", "Survivors"],
};

export default function Page() {
    return (<>
        <Layout>
            <PageHeader
                title='Written & Illustrated Stories'
                description='Memories They Carry, Stories They Share'
                sup_title='Their Stories'
            />

            <div className="bg-white">
                <Stories />
            </div>
        </Layout>
    </>);
}