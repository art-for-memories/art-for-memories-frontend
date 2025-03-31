'use client';

import React, { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import FetchSpinner from '@/components/spinners/fetch-spinner';
import Layout from '@/components/Layout';
import PageHeader from '@/components/headers/page-header';
import stories from '../../../contents/written_stories.json';
import { TheirStoryProps } from '@/components/cards/StoryCard';
import "@/styles/story-contents.css";

function Story() {
  const { slug } = useParams();
  const [story, setStory] = useState<TheirStoryProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<'english' | 'kinyarwanda' | 'french'>('english'); // Default language

  useEffect(() => {
    const fetchStory = async () => {
      const storyData: TheirStoryProps | undefined = stories.find((story: TheirStoryProps) => story.id === slug) as TheirStoryProps | undefined;

      if (storyData) {
        setStory(storyData);
      } else {
        setStory(null);
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

  const handleLanguageChange = (lang: 'english' | 'kinyarwanda' | 'french') => {
    setLanguage(lang);
  };

  return (
    <Layout>
      <PageHeader
        title={story[language].title}
        description={story.caption}
        sup_title={story.author ? `By ${story.author}` : 'Their Story'}
      />

      <div className='bg-white px-5 py-5 md:px-20 md:py-10 text-slate-800'>
        <div
          className='contents prose prose-slate max-w-none text-slate-700'
          dangerouslySetInnerHTML={{ __html: story[language].contents }}
        />

        <div className='border-t border-slate-200 mt-10 pt-5 flex items-center justify-between'>
          <div>
            <span className='text-slate-600 text-sm'>Change Language: </span>
            <span className='text-slate-600 text-sm font-semibold'>{language.charAt(0).toUpperCase() + language.slice(1)}</span>
          </div>
          <div className="flex space-x-4">
            <button onClick={() => handleLanguageChange('kinyarwanda')} className={`px-4 py-2 rounded ${language === 'kinyarwanda' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
              Kinyarwanda
            </button>
            <button onClick={() => handleLanguageChange('french')} className={`px-4 py-2 rounded ${language === 'french' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
              French
            </button>
            <button onClick={() => handleLanguageChange('english')} className={`px-4 py-2 rounded ${language === 'english' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
              English
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Story;