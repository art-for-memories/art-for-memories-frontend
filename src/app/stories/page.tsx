"use client";

import PageHeader from "@/components/headers/page-header";
import Layout from "@/components/Layout";
import StoriesList from "@/components/lists/StoriesList";
import stories from "../../contents/written_stories.json";

export default function Stories() {
    return (<>
        <Layout>
            <PageHeader
                title='Written & Published Stories'
                description='Explore inspiring written and published stories shared by our community.'
                sup_title='Their Stories'
                // backgroundImage='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/63/27/43/academic-visit-for-national.jpg?w=1400&h=-1&s=1'
            />

            <div className="bg-white">
                <StoriesList title="Written Stories" data={stories} />
                <StoriesList title="Published Stories" data={stories} />
            </div>
        </Layout>
    </>);
}