"use client";

import PageHeader from "@/components/headers/page-header";
import Layout from "@/components/Layout";
import StoriesList from "@/components/lists/StoriesList";

import written_stories from "../../contents/written_stories.json";
import published_stories from "../../contents/published_stories.json";

export default function Stories() {
    return (<>
        <Layout>
            <PageHeader
                title='Written & Illustrated Stories'
                description='Memories They Carry, Stories They Share'
                sup_title='Their Stories'
            />

            <div className="bg-white">
                <StoriesList title="Written Stories" data={written_stories} />
                <StoriesList title="Illustrated Stories" data={published_stories} />
            </div>
        </Layout>
    </>);
}