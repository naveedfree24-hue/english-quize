import { QuizCategory } from '../types';

export const categories: Record<string, QuizCategory> = {
  'english-grammar-quizzes': {
    slug: 'english-grammar-quizzes',
    name: 'English Grammar Quizzes',
    headline: 'Master Core English Grammar with Clear, Step-by-Step Quizzes',
    introduction:
      'Grammar provides the framework for confident communication. Whether you find verb tenses confusing, struggle with prepositions of place and time, or frequently wonder which article to use, these focused quizzes help you identify blind spots and learn the underlying logic. Each question features immediate, friendly explanations so you understand the rule behind every answer.',
    metaDescription:
      'Practise English grammar with free interactive quizzes. Detailed explanations on verb tenses, prepositions, conditionals, articles, and common mistakes.',
    iconName: 'BookOpen',
    imagePath: '/src/assets/images/grammar_quiz_concept_1791840162391.jpg',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    gradient: 'from-emerald-600 to-teal-800',
    learningOutcomes: [
      'Understand the crucial difference between finished past actions and actions connected to now.',
      'Select the natural preposition for times, places, and transportation without guessing.',
      'Recognise when to use definite, indefinite, or zero articles with countable and uncountable nouns.',
      'Form zero, first, second, and third conditionals correctly for real and hypothetical scenarios.',
    ],
  },
  'english-vocabulary-tests': {
    slug: 'english-vocabulary-tests',
    name: 'English Vocabulary Tests',
    headline: 'Expand Your Active English Vocabulary and Natural Phrasal Verbs',
    introduction:
      'Building a strong vocabulary is not about memorising isolated word lists—it is about understanding how native speakers combine words in authentic contexts. Our vocabulary quizzes focus on high-frequency everyday words, essential phrasal verbs, collocations, and nuances between easily confused words. Test yourself to make your spoken and written English more expressive and precise.',
    metaDescription:
      'Free English vocabulary tests and phrasal verbs practice. Discover context-based meanings, common idioms, and natural collocations with clear examples.',
    iconName: 'GraduationCap',
    imagePath: '/src/assets/images/vocabulary_concept_art_1791840172513.jpg',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    gradient: 'from-amber-600 to-orange-700',
    learningOutcomes: [
      'Master high-frequency everyday vocabulary suitable for CEFR A2 and B1 levels.',
      'Learn multi-word phrasal verbs in context so you can use them naturally in conversation.',
      'Distinguish subtle differences between similar words (e.g. affect vs effect, borrow vs lend).',
      'Grow your confidence in informal and formal everyday communication.',
    ],
  },
  'english-level-practice': {
    slug: 'english-level-practice',
    name: 'English Level Practice',
    headline: 'Benchmark and Reinforce Your Grammar at B1 and B2 Levels',
    introduction:
      'Level-based practice tests allow you to challenge your overall grammatical command across multiple topic areas at once. Designed in alignment with CEFR standards (from pre-intermediate B1 to independent upper-intermediate B2), these comprehensive quizzes help you pinpoint exactly where to focus your study time before formal coursework or professional assessments.',
    metaDescription:
      'Test your English grammar level with comprehensive B1 intermediate and B2 upper-intermediate practice quizzes. Pinpoint strengths and areas to review.',
    iconName: 'Award',
    imagePath: '/src/assets/images/level_practice_banner_1791840183508.jpg',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    gradient: 'from-teal-700 to-cyan-900',
    learningOutcomes: [
      'Evaluate your grasp of intermediate tense combinations, modal verbs of deduction, and comparisons.',
      'Tackle advanced structures including cleft sentences, inversion, and complex conditionals at B2.',
      'Gain insight into whether your grammar foundation is ready for formal examinations.',
      'Receive structured recommendations on which specific grammar topics to review next.',
    ],
  },
  'business-english': {
    slug: 'business-english',
    name: 'Business English Practice',
    headline: 'Professional English for Modern Meetings, Emails, and Workplace Communication',
    introduction:
      'In an international workplace, clear and polite English makes projects run smoothly and career opportunities flourish. Our Business English tests challenge you on real-world office vocabulary, email etiquette, polite requests, diplomatic language, negotiation terms, and meeting terminology used in modern global enterprises.',
    metaDescription:
      'Practise Business English vocabulary and workplace communication. Test your knowledge of business idioms, formal email phrasing, and meeting terminology.',
    iconName: 'Briefcase',
    imagePath: '/src/assets/images/business_english_graphic_1791840191754.jpg',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-200',
    gradient: 'from-slate-800 to-indigo-950',
    learningOutcomes: [
      'Communicate professionally in international emails, memos, and client updates.',
      'Use diplomatic and polite language when giving feedback, disagreeing, or delegating tasks.',
      'Understand corporate terminology (KPIs, overheads, action items, stakeholder management).',
      'Avoid common awkward translations in meetings and formal presentations.',
    ],
  },
};
