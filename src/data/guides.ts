import { GuideArticle } from '../types';

export const guides: GuideArticle[] = [
  // Guide 1: Present Perfect vs Past Simple
  {
    slug: 'present-perfect-vs-past-simple',
    title: 'Present Perfect vs. Past Simple: The Complete Learner Guide',
    metaDescription:
      'Master the distinction between Present Perfect and Past Simple with clear rules, time-marker comparisons, example sentences, and practice exercises.',
    readingMinutes: 7,
    level: 'B1',
    lastUpdated: 'October 2026',
    introSummary:
      'The golden rule: use the Past Simple when you are talking about a completed action at a specific, finished time in the past (yesterday, in 2020, two hours ago). Use the Present Perfect (have/has + past participle) when the exact time does not matter, the time period is still unfinished (today, this year), or the past action has a direct, visible consequence right now.',
    sections: [
      {
        heading: '1. What Is the Fundamental Difference?',
        content:
          'In many languages, past events are expressed with a single compound or simple tense. English, however, demands that the speaker decide: does this action have a bridge connected to the present moment, or is it completely sealed in the past? When there is a connection to now, English selects the Present Perfect. When the action is locked in past history, English selects the Past Simple.',
        examples: [
          {
            sentence: 'I lost my keys yesterday. (Past Simple)',
            explanation: 'The sentence focuses on a completed event at a specific past time ("yesterday").',
          },
          {
            sentence: 'I have lost my keys! Can you help me look? (Present Perfect)',
            explanation: 'The loss is connected to now: I do not have my keys at this exact second.',
          },
        ],
      },
      {
        heading: '2. Time Expression Cheat Sheet',
        content:
          'The easiest way to make the right choice is to look for time adverbs. Certain words never combine with the Present Perfect in standard English.',
        table: {
          headers: ['Use Past Simple With...', 'Use Present Perfect With...'],
          rows: [
            ['yesterday / last night', 'already / just / yet'],
            ['in 2018 / in the 1990s', 'ever / never (in your life)'],
            ['two days ago / an hour ago', 'since Monday / since 2021'],
            ['when I was a child', 'for three years (and still continuing)'],
            ['on my last holiday', 'recently / so far / this week'],
          ],
        },
      },
      {
        heading: '3. "Have Been To" vs. "Have Gone To"',
        content:
          'One of the most frequent errors at B1 level is mixing up "been" and "gone". "Been" implies a completed round trip (the person went and has come back). "Gone" implies the person is still absent or travelling right now.',
        examples: [
          {
            sentence: 'Sarah has been to Paris twice.',
            explanation: 'She visited Paris and is now back home sharing memories.',
          },
          {
            sentence: 'Where is Sarah? — She has gone to Paris for a conference.',
            explanation: 'She is in Paris right now or on the plane.',
          },
        ],
      },
      {
        heading: '4. Unfinished Time Periods (Today, This Morning)',
        content:
          'Expressions like "this morning" or "this month" can take either tense depending on the clock! If it is currently 10:00 AM, the morning is not over: "I have drunk two coffees this morning." If it is 4:00 PM, the morning is over: "I drank two coffees this morning."',
      },
    ],
    commonMistakes: [
      {
        incorrect: 'I have seen that film yesterday.',
        correct: 'I saw that film yesterday.',
        tip: 'Never use the Present Perfect with "yesterday", "ago", or "last week".',
      },
      {
        incorrect: 'She lives here since six months.',
        correct: 'She has lived here for six months.',
        tip: 'Use "for" with durations of time, and pair with Present Perfect to indicate continuation.',
      },
      {
        incorrect: 'When have you bought that jacket?',
        correct: 'When did you buy that jacket?',
        tip: 'Questions beginning with "When" always ask for a specific point in the past, requiring the Past Simple.',
      },
    ],
    practiceExercises: [
      {
        prompt: '1. I ___ (never / try) sushi in my entire life.',
        options: ['never tried', 'have never tried', 'was never trying', 'had never tried'],
        correctAnswer: 'have never tried',
        hint: 'Life experiences without a specific date take the Present Perfect.',
      },
      {
        prompt: '2. She ___ (move) to Canada three years ago.',
        options: ['has moved', 'moved', 'was moving', 'had moved'],
        correctAnswer: 'moved',
        hint: 'The time marker "ago" always requires the Past Simple.',
      },
    ],
    relatedQuizSlugs: ['present-perfect-vs-past-simple', 'b1-english-grammar-test'],
  },

  // Guide 2: How to Use English Prepositions
  {
    slug: 'how-to-use-english-prepositions',
    title: 'How to Use English Prepositions: In, On, At & More',
    metaDescription:
      'Learn the foolproof pyramid system for prepositions of time and place. Master in, on, at, transportation rules, and dependent prepositions.',
    readingMinutes: 6,
    level: 'A2',
    lastUpdated: 'October 2026',
    introSummary:
      'To choose correctly between IN, ON, and AT, think of an inverted triangle moving from the widest, most general concepts down to the narrowest, most specific points. Use IN for large spaces, countries, months, and years. Use ON for surfaces, streets, and specific days. Use AT for exact clock times, specific addresses, and precise functional points.',
    sections: [
      {
        heading: '1. The Preposition Pyramid of Time',
        content:
          'Time prepositions become intuitive once you map them onto three distinct levels of precision: broad, intermediate, and exact.',
        table: {
          headers: ['Preposition', 'Scope', 'Clear Examples'],
          rows: [
            ['IN (Broadest)', 'Centuries, Decades, Years, Months, Seasons', 'in the 21st century, in 1999, in October, in winter'],
            ['ON (Intermediate)', 'Days of the week, Specific dates, Special days', 'on Monday, on 25 December, on my birthday, on New Year’s Day'],
            ['AT (Most Precise)', 'Exact clock times, Points in the day, Holidays', 'at 8:30 AM, at noon, at midnight, at bedtime, at Christmas'],
          ],
        },
      },
      {
        heading: '2. The Preposition Pyramid of Place',
        content:
          'The same rule of thumb applies to locations! Move from geographical regions down to specific street names and coordinates.',
        examples: [
          {
            sentence: 'She lives in Spain, in Barcelona. (Large area / boundary)',
            explanation: 'Cities, states, countries, continents take "in".',
          },
          {
            sentence: 'Her apartment is on Oxford Street. (Street / surface)',
            explanation: 'Streets, avenues, and physical surfaces take "on".',
          },
          {
            sentence: 'We will meet at 10 Oxford Street. (Exact address / point)',
            explanation: 'When a street number is provided, use "at".',
          },
        ],
      },
      {
        heading: '3. Transportation: "In" the Car vs. "On" the Bus',
        content:
          'Why do we get ON a train, plane, bus, or ship, but IN a car or taxi? The general guideline is simple: if you can physically walk upright, board with a platform, or step onto an open vehicle (bicycle, horse), use ON. If you have to crouch and sit inside a private cabin, use IN.',
      },
      {
        heading: '4. High-Frequency Dependent Prepositions',
        content:
          'Many adjectives and verbs are permanently linked to specific prepositions. Memorise these as single vocabulary units rather than translating:',
        examples: [
          { sentence: 'Good at / Bad at', explanation: 'She is fantastic at mathematics.' },
          { sentence: 'Interested in', explanation: 'Are you interested in photography?' },
          { sentence: 'Afraid of / Frightened of', explanation: 'He is afraid of heights.' },
          { sentence: 'Depend on / Rely on', explanation: 'Success depends on hard work.' },
        ],
      },
    ],
    commonMistakes: [
      {
        incorrect: 'I will call you in Tuesday.',
        correct: 'I will call you on Tuesday.',
        tip: 'Days of the week always take "on".',
      },
      {
        incorrect: 'I am waiting you at the lobby.',
        correct: 'I am waiting for you in the lobby.',
        tip: 'The verb "wait" takes "for" when specifying a person or outcome.',
      },
    ],
    practiceExercises: [
      {
        prompt: '1. The lecture begins ___ 10:15 AM sharp.',
        options: ['at', 'on', 'in', 'by'],
        correctAnswer: 'at',
        hint: 'Specific clock times take "at".',
      },
    ],
    relatedQuizSlugs: ['english-prepositions-test', 'english-articles-a-an-the'],
  },

  // Guide 3: When to Use A, An, and The
  {
    slug: 'when-to-use-a-an-and-the',
    title: 'When to Use A, An, and The: The Definitive Guide to English Articles',
    metaDescription:
      'Understand English articles step-by-step. Discover the sound rule for a vs an, the definite article (the), and when to use zero article.',
    readingMinutes: 6,
    level: 'B1',
    lastUpdated: 'October 2026',
    introSummary:
      'Articles are short words with huge importance. Use "a" or "an" (indefinite) when mentioning a singular countable noun for the first time or when any member of a group will do. Use "the" (definite) when both the speaker and listener know exactly which specific person or object is being discussed. Use the Zero Article (no article) when talking about plural or uncountable nouns in a general sense.',
    sections: [
      {
        heading: '1. The Sound Rule for A vs. An',
        content:
          'The most common trap is thinking that "an" goes before vowels (a, e, i, o, u) in writing. In reality, "a" or "an" is determined 100% by the FIRST PHONETIC SOUND of the following word, not its spelling!',
        table: {
          headers: ['Word', 'Initial Sound', 'Correct Article', 'Explanation'],
          rows: [
            ['hour', 'Vowel sound /aʊ/', 'an hour', 'Silent "h" leaves an initial vowel sound.'],
            ['university', 'Consonant sound /juː/', 'a university', 'Starts with a "y" consonant sound.'],
            ['honest answer', 'Vowel sound /ɒ/', 'an honest answer', 'Silent "h".'],
            ['European country', 'Consonant sound /juː/', 'a European country', 'Pronounced like "you".'],
            ['umbrella', 'Vowel sound /ʌ/', 'an umbrella', 'Standard short "u" vowel sound.'],
          ],
        },
      },
      {
        heading: '2. The Definite Article: When to Use "The"',
        content:
          'Use "the" whenever the reference is unique or obvious from the context: "Close the door" (the only door in this room), "Look at the sky", "The CEO of Google". Also use "the" for second mentions: "A dog ran into the park. The dog had a red collar."',
      },
      {
        heading: '3. When to Use NO Article (Zero Article)',
        content:
          'Do not use articles when making general statements about plural nouns or uncountable concepts. "Books are fascinating" means books in general. "The books on that shelf" refers to specific books.',
        examples: [
          {
            sentence: 'Children need love and encouragement. (General plural)',
            explanation: 'All children everywhere—no article.',
          },
          {
            sentence: 'The children next door are playing outside. (Specific)',
            explanation: 'A specific identifiable group of children.',
          },
        ],
      },
    ],
    commonMistakes: [
      {
        incorrect: 'I study at an university.',
        correct: 'I study at a university.',
        tip: 'Sound matters: "university" starts with a consonant /j/ sound.',
      },
      {
        incorrect: 'The life can be challenging.',
        correct: 'Life can be challenging.',
        tip: 'Abstract concepts in general do not take "the".',
      },
    ],
    relatedQuizSlugs: ['english-articles-a-an-the', 'english-grammar-quizzes/english-common-mistakes-quiz'],
  },

  // Guide 4: How to Improve English Vocabulary
  {
    slug: 'how-to-improve-english-vocabulary',
    title: 'How to Improve Your English Vocabulary: Practical Strategies That Work',
    metaDescription:
      'Learn how to expand your active English vocabulary efficiently. Spaced repetition, learning collocations, reading strategies, and context-based practice.',
    readingMinutes: 7,
    level: 'All Levels',
    lastUpdated: 'October 2026',
    introSummary:
      'Memorising long lists of isolated English words rarely leads to fluent speaking. To build an active, flexible vocabulary, focus on whole phrases (collocations), learn words in meaningful stories and dialogues, review with spaced repetition, and immediately practice using new terms in your own sentences.',
    sections: [
      {
        heading: '1. Learn Chunks and Collocations, Not Isolated Words',
        content:
          'Native speakers do not assemble sentences word by individual word; they retrieve multi-word "chunks". When you learn a word like "decision", do not just write down the translation. Note the verbs and adjectives that accompany it: "make a decision", "a tough decision", "reach a final decision".',
        examples: [
          { sentence: 'Heavy rain', explanation: 'In English rain is "heavy", not "strong".' },
          { sentence: 'Catch a cold', explanation: 'We "catch" a cold, rather than "take" one.' },
          { sentence: 'Do business', explanation: 'We "do" business, but "make" money.' },
        ],
      },
      {
        heading: '2. The Power of Spaced Repetition (SRS)',
        content:
          'The human brain naturally forgets new information within 24–48 hours unless revisited. Reviewing a word after 1 day, then 3 days, then 7 days, then 14 days moves it securely from fragile short-term recall into automatic long-term memory.',
      },
      {
        heading: '3. Read Slightly Above Your Current Level (i+1)',
        content:
          'Linguist Stephen Krashen proposed the "i+1" hypothesis: optimal language acquisition happens when the material is roughly 90–95% understandable, with only 5–10% unfamiliar vocabulary. If you have to look up every second word in a dictionary, the text is too difficult and will exhaust you. Choose graded readers, news articles written for learners, or high-interest podcasts.',
      },
      {
        heading: '4. Turn Passive Vocabulary into Active Vocabulary',
        content:
          'Passive vocabulary contains words you recognise when reading or listening. Active vocabulary contains words you can produce naturally while speaking or writing without pausing. To bridge this gap, compose your own personal example sentence about your life whenever you learn a new phrase.',
      },
    ],
    commonMistakes: [
      {
        incorrect: 'Memorising 50 random words from a dictionary each day.',
        correct: 'Learning 5 to 8 useful phrases in context and using them in speech.',
        tip: 'Quality and emotional context always beat raw word counts.',
      },
    ],
    relatedQuizSlugs: ['a2-english-vocabulary-quiz', 'phrasal-verbs-test', 'business-english-vocabulary-test'],
  },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return guides.find((g) => g.slug === slug);
}
