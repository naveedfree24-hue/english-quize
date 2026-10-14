import { AffiliateResource } from '../types';

/**
 * Centralized affiliate and recommended educational study resources.
 * Compliant with Section 14: Clear disclosure labels, relevant to the page,
 * using placeholders until the site owner connects approved affiliate programs.
 */
export const affiliateResources: AffiliateResource[] = [
  {
    id: 'grammar-in-use',
    name: 'English Grammar in Use by Raymond Murphy',
    tagline: 'Self-study reference and practice for intermediate learners',
    category: 'Book',
    description:
      'The classic grammar reference book used worldwide. Features simple 2-page units with explanations on the left and practical exercises on the right.',
    destinationUrl: 'https://www.cambridge.org/elt/inuse', // Editorial link / affiliate partner placeholder
    disclosureLabel: 'Affiliate Partner Link (Example)',
    badgeText: 'Reference Book',
  },
  {
    id: 'oxford-learner-dictionary',
    name: 'Oxford Learner’s Dictionaries Online',
    tagline: 'Definitive definitions, CEFR frequency levels, and clear audio',
    category: 'Dictionary',
    description:
      'High-quality definitions curated specifically for non-native English speakers with real-world examples, collocations, and pronunciation guides.',
    destinationUrl: 'https://www.oxfordlearnersdictionaries.com',
    disclosureLabel: 'Educational Resource',
    badgeText: 'Free Resource',
  },
  {
    id: 'anki-flashcards',
    name: 'Anki Spaced Repetition Flashcards',
    tagline: 'Open-source intelligent spaced repetition system',
    category: 'App',
    description:
      'A powerful, memory-enhancing flashcard tool ideal for retaining difficult phrasal verbs, idioms, and vocabulary collocations over months and years.',
    destinationUrl: 'https://apps.ankiweb.net/',
    disclosureLabel: 'Recommended Tool',
    badgeText: 'Free & Open Source',
  },
];
