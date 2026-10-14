import React from 'react';
import { Compass, BookOpen, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface NotFoundProps {
  navigate: (href: string) => void;
}

export function NotFoundPage({ navigate }: NotFoundProps) {
  return (
    <div className="py-16 text-center max-w-xl mx-auto space-y-6">
      <SeoHead
        title="Page Not Found (404) – Clear English Quiz"
        description="The requested English quiz or guide page could not be found. Explore our full library of practice tests."
        canonicalPath="/404"
      />

      <div className="w-16 h-16 rounded-full bg-[#DCE9DF] flex items-center justify-center mx-auto text-[#245747]">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#69736D]">
          Error 404
        </span>
        <h1 className="text-3xl font-extrabold text-[#252B28]">Page Not Found</h1>
        <p className="text-sm text-[#69736D] leading-relaxed">
          The quiz or learning guide you are looking for may have moved or no longer exists. Let's get you back on track with our popular practice topics.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={() => navigate('/')}
          className="w-full sm:w-auto bg-[#245747] hover:bg-[#1b4336] text-[#FAF9F6] font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          Return to Homepage
        </button>
        <button
          onClick={() => navigate('/quizzes/')}
          className="w-full sm:w-auto bg-[#FFFFFF] border border-[#E7E9E5] hover:border-[#245747] text-[#252B28] font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          Browse All Quizzes
        </button>
      </div>
    </div>
  );
}
