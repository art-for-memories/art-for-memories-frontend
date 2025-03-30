'use client';

import React, { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import FetchSpinner from '@/components/spinners/fetch-spinner';
import { Stories } from '@/types/stories';
import MyPDFViewer from '../RenderPdf';
import Layout from '@/components/Layout';
import PageHeader from '@/components/headers/page-header';

function Story() {
  const { slug } = useParams();
  const [story, setStory] = useState<Stories | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      if (slug) {
        const res = await fetch(`/api/stories/${slug}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug })
        });

        if (res.ok) {
          const story = await res.json();
          setStory(story);
        } else {
          setStory(null);
        }
      }
      setLoading(false);
    };

    fetchStory();
  }, [slug]);

  if (loading) {
    return <FetchSpinner />;
  }

  if (!story) {
    return notFound();
  }

  return (
    <Layout>
      <PageHeader
        title={story.title}
        description='Explore inspiring written and published stories shared by our community.'
        sup_title='Their Stories'
      // backgroundImage='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/63/27/43/academic-visit-for-national.jpg?w=1400&h=-1&s=1'
      />
      <div className='bg-white px-5 py-5 md:px-20 md:py-10 text-slate-800'>
        <MyPDFViewer pdfUrl={story.StoryFile[0].url} />
      </div>
    </Layout>
  )
}

export default Story