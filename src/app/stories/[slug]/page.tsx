'use client';

import TopHeader from '@/components/TopHeader'
import React, { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import FetchSpinner from '@/components/spinners/fetch-spinner';
import { Stories } from '@/types/stories';
import MyPDFViewer from '../RenderPdf';

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

  return (<>
    <TopHeader title={story.title} path="Stories" />
    <div className='px-4 py-10'>
      <div className="container mx-auto px-4 bg-white rounded-3xl">
        <MyPDFViewer pdfUrl={story.StoryFile[0].url} />
      </div>
    </div>
  </>)
}

export default Story