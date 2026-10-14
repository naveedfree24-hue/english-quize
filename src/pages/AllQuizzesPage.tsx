import React, { useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import { quizzes } from '../data/quizzes';
import { QuizCard } from '../components/QuizCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SeoHead } from '../components/SeoHead';

interface AllQuizzesPageProps {
  navigate: (href: string) => void;
}

export function AllQuizzesPage({ navigate }: AllQuizzesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch =
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.slug.includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || quiz.categorySlug === selectedCategory;
    const matchesLvl = selectedLevel === 'all' || quiz.level === selectedLevel;

    return matchesSearch && matchesCat && matchesLvl;
  });

  return (
    <div className="space-y-8">
      <SeoHead
        title="All English Quizzes – Free Interactive Practice Tests"
        description="Explore our full collection of free English grammar, vocabulary, level-based practice, and business English quizzes with step-by-step explanations."
        canonicalPath="/quizzes/"
      />

      <Breadcrumbs items={[{ label: 'All Quizzes' }]} navigate={navigate} />

      {/* Page Header */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#252B28] tracking-tight">
          All English Practice Quizzes
        </h1>
        <p className="text-sm sm:text-base text-[#69736D] max-w-3xl leading-relaxed">
          Practise English at your own speed with our full library of interactive quizzes. Each quiz includes approximately 10 verified questions, instant answers, and detailed explanations of the grammar rules.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-[#FFFFFF] border border-[#E7E9E5] p-4 sm:p-5 rounded-2xl shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#69736D] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search quizzes by topic (e.g. prepositions, conditionals, verbs)..."
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#E7E9E5] focus:outline-none focus:ring-2 focus:ring-[#245747] focus:border-transparent bg-[#FAF9F6]/50"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-bold text-[#69736D] mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#245747] text-[#FAF9F6]'
                  : 'bg-[#FAF9F6] text-[#252B28] hover:bg-[#E7E9E5]'
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setSelectedCategory('english-grammar-quizzes')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'english-grammar-quizzes'
                  ? 'bg-[#245747] text-[#FAF9F6]'
                  : 'bg-[#FAF9F6] text-[#252B28] hover:bg-[#E7E9E5]'
              }`}
            >
              Grammar
            </button>
            <button
              onClick={() => setSelectedCategory('english-vocabulary-tests')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'english-vocabulary-tests'
                  ? 'bg-[#245747] text-[#FAF9F6]'
                  : 'bg-[#FAF9F6] text-[#252B28] hover:bg-[#E7E9E5]'
              }`}
            >
              Vocabulary
            </button>
            <button
              onClick={() => setSelectedCategory('english-level-practice')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'english-level-practice'
                  ? 'bg-[#245747] text-[#FAF9F6]'
                  : 'bg-[#FAF9F6] text-[#252B28] hover:bg-[#E7E9E5]'
              }`}
            >
              Level Practice
            </button>
            <button
              onClick={() => setSelectedCategory('business-english')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === 'business-english'
                  ? 'bg-[#245747] text-[#FAF9F6]'
                  : 'bg-[#FAF9F6] text-[#252B28] hover:bg-[#E7E9E5]'
              }`}
            >
              Business English
            </button>
          </div>

          {/* Level Filter Dropdown */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#69736D]">Level:</span>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-2.5 py-1.5 text-xs rounded-lg border border-[#E7E9E5] bg-[#FAF9F6] font-medium text-[#252B28] focus:ring-2 focus:ring-[#245747] focus:outline-none"
            >
              <option value="all">All CEFR Levels</option>
              <option value="A2">A2 Elementary</option>
              <option value="B1">B1 Intermediate</option>
              <option value="B2">B2 Upper-Intermediate</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quizzes Grid */}
      {filteredQuizzes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.slug} quiz={quiz} navigate={navigate} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#FFFFFF] border border-[#E7E9E5] rounded-2xl p-6 space-y-3">
          <BookOpen className="w-10 h-10 text-[#69736D] mx-auto" />
          <h3 className="text-base font-bold text-[#252B28]">No quizzes matched your filters</h3>
          <p className="text-xs text-[#69736D] max-w-sm mx-auto">
            Try resetting your filters or search keywords to view all practice topics.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedLevel('all');
            }}
            className="text-xs font-semibold text-[#245747] underline pt-1"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
