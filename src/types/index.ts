export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'All Levels';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topicTag?: string;
}

export interface Quiz {
  slug: string;
  categorySlug: 'english-grammar-quizzes' | 'english-vocabulary-tests' | 'english-level-practice' | 'business-english';
  title: string;
  shortDescription: string;
  fullDescription: string;
  level: CefrLevel;
  estimatedMinutes: number;
  imagePath?: string;
  questions: QuizQuestion[];
  relatedQuizSlugs: string[];
  relatedGuideSlug?: string;
  educationalContent: {
    overview: string;
    targetAudience: string;
    keyRules: Array<{ rule: string; example: string; note?: string }>;
    commonMistakes: Array<{ incorrect: string; correct: string; reason: string }>;
    faqs?: Array<{ question: string; answer: string }>;
  };
}

export interface GuideArticle {
  slug: string;
  title: string;
  metaDescription: string;
  readingMinutes: number;
  level: CefrLevel;
  lastUpdated: string;
  introSummary: string;
  sections: Array<{
    heading: string;
    content: string;
    examples?: Array<{ sentence: string; explanation: string }>;
    table?: {
      headers: string[];
      rows: string[][];
    };
  }>;
  commonMistakes: Array<{ incorrect: string; correct: string; tip: string }>;
  practiceExercises?: Array<{
    prompt: string;
    options: string[];
    correctAnswer: string;
    hint: string;
  }>;
  relatedQuizSlugs: string[];
}

export interface QuizCategory {
  slug: 'english-grammar-quizzes' | 'english-vocabulary-tests' | 'english-level-practice' | 'business-english';
  name: string;
  headline: string;
  introduction: string;
  metaDescription: string;
  iconName: string;
  imagePath?: string;
  badgeColor?: string;
  gradient?: string;
  learningOutcomes: string[];
}

export interface AffiliateResource {
  id: string;
  name: string;
  tagline: string;
  category: 'App' | 'Book' | 'Course' | 'Dictionary';
  description: string;
  destinationUrl: string;
  disclosureLabel: string;
  badgeText: string;
}
