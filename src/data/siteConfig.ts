export const siteConfig = {
  brandName: 'Clear English Quiz',
  tagline: 'Learn English. Test Yourself. Grow with Confidence.',
  baseUrl: 'https://clearenglishquiz.com',
  author: 'Clear English Quiz Editorial Team',
  contactEmail: 'hello@clearenglishquiz.com',
  defaultMetaDescription:
    'Practise English grammar, grow your vocabulary and understand your mistakes with free interactive quizzes and clear explanations. Learn at your own pace.',
  theme: {
    primaryGreen: '#245747',
    softSage: '#DCE9DF',
    warmIvory: '#FAF9F6',
    charcoal: '#252B28',
    mutedGrey: '#69736D',
    amberAccent: '#F2C879',
    subtleBorder: '#E7E9E5',
  },
  advertising: {
    // Disabled by default until the site owner is approved by an ad network (e.g. Google AdSense)
    enabled: false,
    publisherId: 'ca-pub-XXXXXXXXXXXXXXXX', // Placeholder: Replace with actual verified publisher ID
    adSlots: {
      inArticle: '1234567890',
      postQuiz: '0987654321',
      sidebar: '1122334455',
    },
  },
  analytics: {
    // Disabled by default until a real measurement ID is supplied
    enabled: false,
    googleAnalyticsId: 'G-XXXXXXXXXX', // Placeholder: Add your GA4 ID in production
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'All Quizzes', href: '/quizzes/' },
    { label: 'Grammar', href: '/english-grammar-quizzes/' },
    { label: 'Vocabulary', href: '/english-vocabulary-tests/' },
    { label: 'Level Practice', href: '/english-level-practice/' },
    { label: 'Business English', href: '/business-english/' },
    { label: 'Learning Guides', href: '/english-learning-guides/' },
    { label: 'AI Practice', href: '/ai-quiz-generator/' },
  ],
  footerLinks: {
    quizzes: [
      { label: 'All Quizzes', href: '/quizzes/' },
      { label: 'Grammar Quizzes', href: '/english-grammar-quizzes/' },
      { label: 'Vocabulary Tests', href: '/english-vocabulary-tests/' },
      { label: 'Level-Based Practice', href: '/english-level-practice/' },
      { label: 'Business English', href: '/business-english/' },
      { label: 'AI Quiz Generator', href: '/ai-quiz-generator/' },
    ],
    guides: [
      { label: 'Present Perfect vs Past Simple', href: '/english-learning-guides/present-perfect-vs-past-simple/' },
      { label: 'English Prepositions Guide', href: '/english-learning-guides/how-to-use-english-prepositions/' },
      { label: 'When to Use A, An, and The', href: '/english-learning-guides/when-to-use-a-an-and-the/' },
      { label: 'Improve Vocabulary Daily', href: '/english-learning-guides/how-to-improve-english-vocabulary/' },
      { label: 'All Learning Guides', href: '/english-learning-guides/' },
    ],
    legal: [
      { label: 'About Us', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Cookie Policy', href: '/cookie-policy/' },
      { label: 'Terms of Use', href: '/terms/' },
      { label: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
    ],
  },
};
