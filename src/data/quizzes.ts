import { Quiz } from '../types';

export const quizzes: Quiz[] = [
  // 1. Present Perfect vs Past Simple
  {
    slug: 'present-perfect-vs-past-simple',
    categorySlug: 'english-grammar-quizzes',
    title: 'Present Perfect vs. Past Simple Quiz',
    shortDescription:
      'Test your understanding of finished past events versus experiences and actions with present relevance.',
    fullDescription:
      'Choosing between the Present Perfect (have + past participle) and the Past Simple (-ed / irregular) is one of the most common challenges for English learners. Practise identifying specific time markers, life experiences, and present consequences across 10 realistic questions.',
    level: 'B1',
    estimatedMinutes: 8,
    relatedQuizSlugs: ['english-prepositions-test', 'b1-english-grammar-test', 'english-common-mistakes-quiz'],
    relatedGuideSlug: 'present-perfect-vs-past-simple',
    questions: [
      {
        id: 'pp-1',
        question: 'I ___ to Japan three times, but I want to go again next spring.',
        options: ['have been', 'went', 'have gone', 'was'],
        correctIndex: 0,
        explanation:
          '"Have been" is used for life experience when the person has visited a place and returned. "Went" requires a specific past time marker (e.g. in 2019), while "have gone" implies the person is still there right now.',
        topicTag: 'Life Experience',
      },
      {
        id: 'pp-2',
        question: 'Thomas ___ his keys yesterday evening and had to climb through the kitchen window.',
        options: ['has lost', 'lost', 'had lost', 'loses'],
        correctIndex: 1,
        explanation:
          'Because the sentence includes the definite past time expression "yesterday evening", we must use the Past Simple ("lost"). The Present Perfect cannot be combined with finished past time words.',
        topicTag: 'Specific Past Time',
      },
      {
        id: 'pp-3',
        question: 'How long ___ here at this school? — For about three years now.',
        options: ['did you teach', 'have you taught', 'do you teach', 'are you teaching'],
        correctIndex: 1,
        explanation:
          '"Have you taught" (or "have you been teaching") connects an action starting in the past with the ongoing present ("for about three years now"). "Did you teach" would mean the speaker no longer works there.',
        topicTag: 'Unfinished Duration',
      },
      {
        id: 'pp-4',
        question: 'She ___ her homework yet, so she cannot join us at the cinema.',
        options: ["didn't finish", "hasn't finished", "doesn't finish", "won't finish"],
        correctIndex: 1,
        explanation:
          'The adverb "yet" is typically used with the Present Perfect in negative sentences and questions to refer to something expected up to the present moment ("hasn\'t finished").',
        topicTag: 'Time Adverbs (Yet/Already)',
      },
      {
        id: 'pp-5',
        question: 'William Shakespeare ___ thirty-seven plays during his lifetime.',
        options: ['has written', 'wrote', 'had written', 'writes'],
        correctIndex: 1,
        explanation:
          'Shakespeare lived in a completed past period (his lifetime is over). We always use the Past Simple ("wrote") for actions by people who are deceased.',
        topicTag: 'Historical Figures',
      },
      {
        id: 'pp-6',
        question: 'Look at that mess! The puppy ___ the sofa cushion!',
        options: ['has chewed', 'chewed', 'was chewing', 'chews'],
        correctIndex: 0,
        explanation:
          'The visual evidence is in front of us right now ("Look at that mess!"). We use the Present Perfect ("has chewed") when a past action has an obvious result in the present.',
        topicTag: 'Present Result',
      },
      {
        id: 'pp-7',
        question: 'When ___ the new manager? — Last Tuesday afternoon.',
        options: ['did you meet', 'have you met', 'were you meeting', 'had you met'],
        correctIndex: 0,
        explanation:
          'Questions starting with "When...?" ask about a specific point in time in the past and therefore always take the Past Simple ("did you meet?").',
        topicTag: 'When Questions',
      },
      {
        id: 'pp-8',
        question: 'I ___ two cups of coffee this morning, and it is now 3:00 PM.',
        options: ['have drunk', 'drank', 'was drinking', 'have been drinking'],
        correctIndex: 1,
        explanation:
          'Because it is now 3:00 PM (the afternoon), "this morning" is a completed, finished time period. Therefore, we use the Past Simple ("drank"). If it were still 9:00 AM, "have drunk" would be appropriate.',
        topicTag: 'Finished vs Unfinished Time',
      },
      {
        id: 'pp-9',
        question: 'We ___ each other since our first week at university.',
        options: ['know', 'knew', 'have known', 'are knowing'],
        correctIndex: 2,
        explanation:
          'The state verb "know" cannot be in continuous form, and the time marker "since" indicates an ongoing state up to the present. The Present Perfect ("have known") is required.',
        topicTag: 'State Verbs with Since',
      },
      {
        id: 'pp-10',
        question: 'A: Did you enjoy the concert? B: Yes, I ___ it was fantastic!',
        options: ['have thought', 'thought', 'think', 'was thinking'],
        correctIndex: 1,
        explanation:
          'The question asks about a specific completed event in the past ("Did you enjoy...?"), so the response uses the Past Simple ("thought").',
        topicTag: 'Conversational Past',
      },
    ],
    educationalContent: {
      overview:
        'The key difference between the Present Perfect and the Past Simple lies in connection to the present. Use the Past Simple when the action took place at a definite, finished time in the past (yesterday, in 2021, when I was ten). Use the Present Perfect when the time is unspecified, the time period is still open (today, this week), or the result matters right now.',
      targetAudience:
        'Intermediate learners (CEFR B1) preparing for everyday conversation, Cambridge B1 Preliminary / B2 First exams, or professional emails.',
      keyRules: [
        {
          rule: 'Finished Time Marker = Past Simple',
          example: 'I bought my laptop in 2022. (Not: I have bought...)',
          note: 'Never combine yesterday, last week, ago, or in [year] with have + participle.',
        },
        {
          rule: 'Unfinished Time / Life Experience = Present Perfect',
          example: 'I have visited Rome twice in my life.',
          note: 'The exact date is not mentioned; the speaker is alive and may visit again.',
        },
        {
          rule: 'Present Evidence / Result = Present Perfect',
          example: 'Someone has broken the window. (It is broken right now).',
          note: 'Focuses on the present state rather than when the event happened.',
        },
      ],
      commonMistakes: [
        {
          incorrect: 'I have seen him yesterday.',
          correct: 'I saw him yesterday.',
          reason: '"Yesterday" is a finished past time marker requiring Past Simple.',
        },
        {
          incorrect: 'She lives here since five years.',
          correct: 'She has lived here for five years.',
          reason: 'Duration connected to the present requires Present Perfect + "for".',
        },
        {
          incorrect: 'Where have you gone on holiday last summer?',
          correct: 'Where did you go on holiday last summer?',
          reason: '"Last summer" specifies a closed past period.',
        },
      ],
      faqs: [
        {
          question: 'What is the difference between "have been to" and "have gone to"?',
          answer:
            '"Have been to" means the person travelled there and has returned home. "Have gone to" means the person has travelled there and is still there right now.',
        },
        {
          question: 'Can I use "just" with both tenses?',
          answer:
            'In British English, "just" almost always takes the Present Perfect ("I have just eaten"). In American English, the Past Simple is also frequently used in informal speech ("I just ate"). Both are understood, but the Present Perfect is standard in international examinations.',
        },
      ],
    },
  },

  // 2. English Prepositions Test
  {
    slug: 'english-prepositions-test',
    categorySlug: 'english-grammar-quizzes',
    title: 'English Prepositions Test (In, On, At & More)',
    shortDescription:
      'Master the essential rules for prepositions of time, location, and common fixed prepositional phrases.',
    fullDescription:
      'English prepositions rarely translate word-for-word between languages. Test your command of "at 5 o\'clock", "in July", "on Monday", "on the bus", "in the car", and common expressions like "interested in" or "good at".',
    level: 'A2',
    estimatedMinutes: 7,
    relatedQuizSlugs: ['english-articles-a-an-the', 'english-common-mistakes-quiz', 'b1-english-grammar-test'],
    relatedGuideSlug: 'how-to-use-english-prepositions',
    questions: [
      {
        id: 'prep-1',
        question: 'The meeting will start promptly ___ 9:30 AM.',
        options: ['at', 'on', 'in', 'by'],
        correctIndex: 0,
        explanation: 'We use "at" for precise clock times: at 9:30 AM, at noon, at midnight.',
        topicTag: 'Prepositions of Time',
      },
      {
        id: 'prep-2',
        question: 'My grandmother was born ___ 1954.',
        options: ['at', 'on', 'in', 'for'],
        correctIndex: 2,
        explanation: 'We use "in" for years, decades, centuries, months, and seasons: in 1954, in July, in summer.',
        topicTag: 'Prepositions of Time',
      },
      {
        id: 'prep-3',
        question: 'We always visit our relatives ___ Christmas Day.',
        options: ['at', 'on', 'in', 'during'],
        correctIndex: 1,
        explanation:
          'We use "on" for specific calendar dates and days containing the word "Day": on Christmas Day, on Monday, on July 4th. (Note: "at Christmas" refers to the general holiday season, but "on Christmas Day" refers to the exact day).',
        topicTag: 'Days and Holidays',
      },
      {
        id: 'prep-4',
        question: 'I love reading books while travelling ___ the train.',
        options: ['in', 'on', 'at', 'into'],
        correctIndex: 1,
        explanation:
          'For large public transport where passengers can walk upright or board a platform (train, bus, plane, ship), English uses "on". For private vehicles where you sit inside (car, taxi), we use "in".',
        topicTag: 'Transportation',
      },
      {
        id: 'prep-5',
        question: 'She is exceptionally good ___ explaining complex grammatical rules.',
        options: ['in', 'at', 'for', 'about'],
        correctIndex: 1,
        explanation:
          'The adjective phrase is "good at" (or "bad at", "brilliant at") followed by a noun or gerund (-ing).',
        topicTag: 'Dependent Prepositions',
      },
      {
        id: 'prep-6',
        question: 'They have been waiting at the airport ___ three hours.',
        options: ['since', 'for', 'during', 'from'],
        correctIndex: 1,
        explanation:
          'Use "for" when specifying a duration of time (for three hours, for two days). Use "since" when naming the starting point (since 8:00 AM).',
        topicTag: 'For vs Since',
      },
      {
        id: 'prep-7',
        question: 'There is a small café ___ the corner of Market Street and 5th Avenue.',
        options: ['at', 'on', 'in', 'to'],
        correctIndex: 0,
        explanation:
          'For street intersections or exact addresses, we use "at" (at the corner of X and Y, at 42 Elm Street). "On the corner" is also acceptable in American English, but "at the corner of [two streets]" is the precise intersection standard.',
        topicTag: 'Prepositions of Place',
      },
      {
        id: 'prep-8',
        question: 'Are you interested ___ joining the campus debate club?',
        options: ['about', 'of', 'in', 'with'],
        correctIndex: 2,
        explanation:
          'The adjective "interested" takes the dependent preposition "in" (interested in art, interested in joining).',
        topicTag: 'Dependent Prepositions',
      },
      {
        id: 'prep-9',
        question: 'Please submit your quarterly report ___ Friday at the latest.',
        options: ['until', 'by', 'at', 'since'],
        correctIndex: 1,
        explanation:
          '"By" means at or before a specified deadline. "Until" means continuing continuously up to that point.',
        topicTag: 'By vs Until',
      },
      {
        id: 'prep-10',
        question: 'We usually go for a quiet walk in the park ___ the weekend.',
        options: ['at', 'on', 'in', 'for'],
        correctIndex: 0,
        explanation:
          '"At the weekend" is standard British English, while "on the weekend" is common in American English. Both are recognised, and "at the weekend" is the classic traditional form.',
        topicTag: 'Time Expressions',
      },
    ],
    educationalContent: {
      overview:
        'Prepositions show relationships in time, space, and direction. Mastering the core trio (At, On, In) is easiest when visualizing a pyramid from narrowest/most specific (At) to intermediate (On) to widest/most general (In).',
      targetAudience:
        'Elementary to intermediate learners (A2-B1) who want to stop making minor preposition slips in speech and writing.',
      keyRules: [
        {
          rule: 'AT = Specific Points and Exact Times',
          example: 'at 7:00 PM, at midnight, at the bus stop, at the entrance.',
        },
        {
          rule: 'ON = Days, Dates, and Surfaces',
          example: 'on Tuesday, on 15 March, on the wall, on the table, on the train.',
        },
        {
          rule: 'IN = Enclosed Spaces, Months, Years, and Long Periods',
          example: 'in the room, in Spain, in July, in 2026, in the 21st century.',
        },
      ],
      commonMistakes: [
        {
          incorrect: 'I will see you in Monday.',
          correct: 'I will see you on Monday.',
          reason: 'Days of the week require "on", not "in".',
        },
        {
          incorrect: 'She arrived in the airport.',
          correct: 'She arrived at the airport.',
          reason: 'Functional points and transit hubs use "at" (or "in" for cities/countries).',
        },
        {
          incorrect: 'I am waiting since two hours.',
          correct: 'I have been waiting for two hours.',
          reason: 'Duration of time uses "for". "Since" requires a starting moment.',
        },
      ],
    },
  },

  // 3. English Articles: A, An, The
  {
    slug: 'english-articles-a-an-the',
    categorySlug: 'english-grammar-quizzes',
    title: 'English Articles Quiz: A, An, The & Zero Article',
    shortDescription:
      'Practise indefinite, definite, and zero articles with countable, uncountable, singular, and plural nouns.',
    fullDescription:
      'Should you say "the university" or "an university"? "Go to hospital" or "go to the hospital"? Articles are among the most frequently tested grammar points. Learn the rules for specific reference, sound-based choices (vowel vs consonant sounds), and general statements.',
    level: 'B1',
    estimatedMinutes: 8,
    relatedQuizSlugs: ['english-grammar-quizzes/english-common-mistakes-quiz', 'english-prepositions-test'],
    relatedGuideSlug: 'when-to-use-a-an-and-the',
    questions: [
      {
        id: 'art-1',
        question: 'My brother wants to study computer science at ___ university in Scotland.',
        options: ['a', 'an', 'the', 'no article'],
        correctIndex: 0,
        explanation:
          'Although "university" begins with the letter "u", it starts with a consonant sound /juː/ (like "yellow"). Therefore, it takes the indefinite article "a", not "an".',
        topicTag: 'Sound Rules (A vs An)',
      },
      {
        id: 'art-2',
        question: 'We need to hire ___ honest accountant to audit the accounts.',
        options: ['a', 'an', 'the', 'no article'],
        correctIndex: 1,
        explanation:
          'The "h" in "honest" is silent, so the word begins with a vowel sound /ɒ/. We use "an" before vowel sounds: an honest person, an hour.',
        topicTag: 'Sound Rules (A vs An)',
      },
      {
        id: 'art-3',
        question: 'Could you please pass me ___ salt that is next to your plate?',
        options: ['a', 'an', 'the', 'no article'],
        correctIndex: 2,
        explanation:
          'Even though salt is an uncountable noun, the speaker is referring to a specific container of salt ("that is next to your plate"). Specific reference requires "the".',
        topicTag: 'Specific Reference',
      },
      {
        id: 'art-4',
        question: '___ breakfast is the most important meal of the day according to some doctors.',
        options: ['A', 'An', 'The', 'No article'],
        correctIndex: 3,
        explanation:
          'In English, meals in general (breakfast, lunch, dinner) take zero article: "Breakfast is served", "have lunch". We only use an article if there is a descriptive adjective (e.g. "a delicious breakfast").',
        topicTag: 'Zero Article (Meals)',
      },
      {
        id: 'art-5',
        question: 'Neil Armstrong was the first person to walk on ___ Moon.',
        options: ['a', 'an', 'the', 'no article'],
        correctIndex: 2,
        explanation:
          'Unique objects in nature where there is only one in existence take "the": the Moon, the Sun, the Earth, the sky.',
        topicTag: 'Unique Entities',
      },
      {
        id: 'art-6',
        question: '___ music has always helped people express their deepest feelings.',
        options: ['A', 'An', 'The', 'No article'],
        correctIndex: 3,
        explanation:
          'When talking about music, art, life, or concepts in general, uncountable nouns take no article: "Music connects people" (not: "The music").',
        topicTag: 'General vs Specific',
      },
      {
        id: 'art-7',
        question: 'They are planning a holiday across ___ United Kingdom and Ireland.',
        options: ['a', 'an', 'the', 'no article'],
        correctIndex: 2,
        explanation:
          'Countries with plural names, or words like "Kingdom", "Republic", or "States" require "the" (the UK, the USA, the Netherlands). Ordinary country names like France or Ireland take zero article.',
        topicTag: 'Geographical Names',
      },
      {
        id: 'art-8',
        question: 'She plays ___ violin with great emotion and skill.',
        options: ['a', 'an', 'the', 'no article'],
        correctIndex: 2,
        explanation:
          'Musical instruments take the definite article "the" when talking about the ability to play them: play the piano, play the guitar, play the violin.',
        topicTag: 'Musical Instruments',
      },
      {
        id: 'art-9',
        question: 'I saw ___ bird in the garden. ___ bird was singing a lovely melody.',
        options: ['a / The', 'the / A', 'a / A', 'the / The'],
        correctIndex: 0,
        explanation:
          'When mentioning a countable noun for the first time, use "a/an" (first mention). When referring to the same noun a second time, the listener now knows which one, so use "the" (second mention).',
        topicTag: 'First vs Second Mention',
      },
      {
        id: 'art-10',
        question: 'He is currently in ___ prison serving a five-year sentence.',
        options: ['a', 'an', 'the', 'no article'],
        correctIndex: 3,
        explanation:
          'Nouns like school, prison, hospital, church, and university take zero article when used for their primary institutional purpose (e.g. he is an inmate, so he is in prison). We use "the" only when visiting the building.',
        topicTag: 'Institutions',
      },
    ],
    educationalContent: {
      overview:
        'English articles (A, An, The, and the Zero Article) help the listener determine whether you are speaking about a specific item or any general member of a group. Understanding sound rules (vowel sound vs letter) and general vs specific reference is the secret to getting them right.',
      targetAudience: 'Pre-intermediate and intermediate learners (CEFR A2-B2).',
      keyRules: [
        {
          rule: 'A vs AN is determined by SOUND, not spelling',
          example: 'a uniform (/juː/ sound), an umbrella (/ʌ/ sound), an hour (silent h), a house.',
        },
        {
          rule: 'THE = Definite (Both speaker and listener know which one)',
          example: 'Close the window. (The specific window in this room).',
        },
        {
          rule: 'Zero Article = Plural or Uncountable nouns spoken in general',
          example: 'Cats are curious creatures. Coffee gives me energy.',
        },
      ],
      commonMistakes: [
        {
          incorrect: 'She is studying at an university.',
          correct: 'She is studying at a university.',
          reason: '"University" begins with a consonant /j/ sound, so it takes "a".',
        },
        {
          incorrect: 'The life is beautiful.',
          correct: 'Life is beautiful.',
          reason: 'Abstract concepts in general take no article.',
        },
      ],
    },
  },

  // 4. English Conditionals Quiz
  {
    slug: 'english-conditionals-quiz',
    categorySlug: 'english-grammar-quizzes',
    title: 'English Conditionals Quiz: Zero, 1st, 2nd & 3rd',
    shortDescription:
      'Test your mastery of real, hypothetical, and counterfactual conditional clauses (if-clauses).',
    fullDescription:
      'Conditionals allow us to talk about scientific facts, realistic future plans, imaginary scenarios, and past regrets. Test your ability to choose the correct verb combinations across all four standard conditional patterns.',
    level: 'B2',
    estimatedMinutes: 9,
    relatedQuizSlugs: ['b1-english-grammar-test', 'b2-english-grammar-practice', 'present-perfect-vs-past-simple'],
    educationalContent: {
      overview:
        'Conditionals consist of a condition (the "if" clause) and a result clause. The verb tenses tell the listener how likely or realistic the scenario is.',
      targetAudience: 'Intermediate to upper-intermediate learners (CEFR B1-B2).',
      keyRules: [
        { rule: 'Zero Conditional (Facts/Nature)', example: 'If you heat ice, it melts. (Present Simple + Present Simple)' },
        { rule: '1st Conditional (Real Future)', example: 'If it rains tomorrow, we will cancel the picnic. (Present Simple + will + verb)' },
        { rule: '2nd Conditional (Unreal/Imaginary Present)', example: 'If I had a million dollars, I would travel the world. (Past Simple + would + verb)' },
        { rule: '3rd Conditional (Past Regrets/Impossible Past)', example: 'If she had studied, she would have passed. (Past Perfect + would have + participle)' },
      ],
      commonMistakes: [
        {
          incorrect: 'If I will see him, I will tell him.',
          correct: 'If I see him, I will tell him.',
          reason: 'Do not use "will" in the if-clause of a first conditional.',
        },
        {
          incorrect: 'If I would know the answer, I would tell you.',
          correct: 'If I knew the answer, I would tell you.',
          reason: 'In the 2nd conditional if-clause, use the Past Simple, not "would".',
        },
      ],
    },
    questions: [
      {
        id: 'cond-1',
        question: 'If you ___ water to 100 degrees Celsius, it boils.',
        options: ['heat', 'will heat', 'heated', 'would heat'],
        correctIndex: 0,
        explanation: 'This is a universal scientific fact (Zero Conditional): both clauses use the Present Simple.',
        topicTag: 'Zero Conditional',
      },
      {
        id: 'cond-2',
        question: 'If it rains this evening, we ___ indoors.',
        options: ['stay', 'will stay', 'would stay', 'would have stayed'],
        correctIndex: 1,
        explanation: 'This is a real future possibility (First Conditional): If + Present Simple, will + base verb.',
        topicTag: 'First Conditional',
      },
      {
        id: 'cond-3',
        question: 'If I ___ more free time, I would learn how to play the piano.',
        options: ['have', 'had', 'would have', 'will have'],
        correctIndex: 1,
        explanation:
          'This is an imaginary or hypothetical present situation (Second Conditional): If + Past Simple ("had"), would + base verb.',
        topicTag: 'Second Conditional',
      },
      {
        id: 'cond-4',
        question: 'If they ___ earlier, they wouldn’t have missed the flight.',
        options: ['left', 'had left', 'would leave', 'have left'],
        correctIndex: 1,
        explanation:
          'This is a counterfactual past regret (Third Conditional): If + Past Perfect ("had left"), would have + past participle.',
        topicTag: 'Third Conditional',
      },
      {
        id: 'cond-5',
        question: 'If I ___ you, I would take that job offer immediately.',
        options: ['am', 'was', 'were', 'had been'],
        correctIndex: 2,
        explanation:
          'In formal English and standard grammar, "were" is used for all persons in the Second Conditional hypothetical structure ("If I were you...").',
        topicTag: 'Second Conditional (Were)',
      },
      {
        id: 'cond-6',
        question: 'You will fail the driving exam ___ you practise parking every weekend.',
        options: ['if', 'unless', 'provided', 'as long as'],
        correctIndex: 1,
        explanation:
          '"Unless" means "if not". The sentence means: "You will fail if you do not practise parking every weekend."',
        topicTag: 'Unless Clauses',
      },
      {
        id: 'cond-7',
        question: 'What would you do if an earthquake ___ right now?',
        options: ['happens', 'happened', 'would happen', 'had happened'],
        correctIndex: 1,
        explanation:
          'The result clause uses "would do", signaling a Second Conditional hypothetical scenario requiring the Past Simple ("happened").',
        topicTag: 'Second Conditional Question',
      },
      {
        id: 'cond-8',
        question: 'If we had known you were in hospital, we ___ you some flowers.',
        options: ['sent', 'would send', 'would have sent', 'will send'],
        correctIndex: 2,
        explanation:
          'Third conditional result clause: "would have sent" matches the past condition "If we had known".',
        topicTag: 'Third Conditional Result',
      },
      {
        id: 'cond-9',
        question: 'As long as you ___ the book by Friday, you may borrow it.',
        options: ['return', 'will return', 'returned', 'had returned'],
        correctIndex: 0,
        explanation:
          '"As long as" functions as a conditional connector similar to "if" and takes the Present Simple for future conditions.',
        topicTag: 'Conditional Connectors',
      },
      {
        id: 'cond-10',
        question: 'If he had taken an umbrella, he ___ soaking wet right now.',
        options: ["wouldn't be", "wouldn't have been", "isn't", "wasn't"],
        correctIndex: 0,
        explanation:
          'This is a mixed conditional: a past condition ("If he had taken") has a direct consequence in the present ("right now"), so we use "wouldn\'t be".',
        topicTag: 'Mixed Conditionals',
      },
    ],
  },

  // 5. Common English Mistakes
  {
    slug: 'english-common-mistakes-quiz',
    categorySlug: 'english-grammar-quizzes',
    title: 'Common English Mistakes Quiz',
    shortDescription:
      'Spot and fix frequent errors in subject-verb agreement, word order, false friends, and confusing pairs.',
    fullDescription:
      'Even advanced learners frequently make minor slips with collective nouns, "borrow vs lend", "every vs each", and inverted questions. Test your eye for accuracy across 10 commonly tested mistakes.',
    level: 'B1',
    estimatedMinutes: 8,
    relatedQuizSlugs: ['english-grammar-quizzes/present-perfect-vs-past-simple', 'english-prepositions-test'],
    educationalContent: {
      overview:
        'Small grammatical slips often happen when learners translate directly from their mother tongue. These questions highlight the most common patterns where English behaves differently than expected.',
      targetAudience: 'Learners of all levels looking to polish their spoken and written accuracy.',
      keyRules: [
        { rule: 'Subject-Verb Agreement with Singular Pronouns', example: 'Everyone is ready. (Not: Everyone are ready).' },
        { rule: 'Borrow vs. Lend', example: 'Can I borrow your pen? vs. Can you lend me your pen?' },
        { rule: 'Indirect Questions retain normal word order', example: 'Do you know where the station is? (Not: where is the station).' },
      ],
      commonMistakes: [
        {
          incorrect: 'I look forward to hear from you.',
          correct: 'I look forward to hearing from you.',
          reason: '"Look forward to" ends in a preposition, which must be followed by a gerund (-ing).',
        },
        {
          incorrect: 'She explained me the problem.',
          correct: 'She explained the problem to me.',
          reason: 'The verb "explain" requires "to [person]".',
        },
      ],
    },
    questions: [
      {
        id: 'cm-1',
        question: 'Everybody in the lecture hall ___ listening attentively.',
        options: ['is', 'are', 'were', 'have been'],
        correctIndex: 0,
        explanation:
          'Indefinite pronouns such as "everybody", "everyone", "nobody", and "someone" are grammatically singular in English and take singular verbs ("is").',
        topicTag: 'Subject-Verb Agreement',
      },
      {
        id: 'cm-2',
        question: 'Could you please ___ me your dictionary until tomorrow?',
        options: ['borrow', 'lend', 'rent', 'take'],
        correctIndex: 1,
        explanation:
          '"Lend" means to give something temporarily to someone. "Borrow" means to receive something temporarily from someone. Here, the other person is giving, so "lend" is correct.',
        topicTag: 'Confusing Pairs (Borrow vs Lend)',
      },
      {
        id: 'cm-3',
        question: 'I am really looking forward to ___ you next weekend.',
        options: ['see', 'seeing', 'have seen', 'saw'],
        correctIndex: 1,
        explanation:
          'In "look forward to", the word "to" is a preposition (not an infinitive marker). Prepositions are always followed by gerunds (-ing forms): "looking forward to seeing you".',
        topicTag: 'Preposition + Gerund',
      },
      {
        id: 'cm-4',
        question: 'Do you know what time ___?',
        options: ['the train leaves', 'does the train leave', 'leaves the train', 'is the train leaving'],
        correctIndex: 0,
        explanation:
          'In an indirect question introduced by "Do you know...", the second clause reverts to standard statement word order (Subject + Verb: "the train leaves"), not inverted question order.',
        topicTag: 'Indirect Questions',
      },
      {
        id: 'cm-5',
        question: 'The professor gave us a lot of useful ___ about the research project.',
        options: ['advices', 'advice', 'piece of advices', 'an advice'],
        correctIndex: 1,
        explanation:
          '"Advice" is an uncountable noun in English. It cannot be made plural with "-s" and cannot take "an". You can say "some advice" or "a piece of advice".',
        topicTag: 'Uncountable Nouns',
      },
      {
        id: 'cm-6',
        question: 'She ___ the problem to all of us yesterday morning.',
        options: ['explained', 'explained to', 'said', 'told to'],
        correctIndex: 0,
        explanation:
          'The structure is "explain something to someone": "She explained the problem to all of us." We do not say "explained us the problem".',
        topicTag: 'Verb Patterns',
      },
      {
        id: 'cm-7',
        question: 'Despite ___ very tired, Marcus finished his entire assignment.',
        options: ['of being', 'he was', 'being', 'that he was'],
        correctIndex: 2,
        explanation:
          '"Despite" is a preposition and is followed directly by a noun or gerund ("Despite being..."). "In spite of" means the same thing, but "despite" never takes "of".',
        topicTag: 'Conjunctions & Prepositions',
      },
      {
        id: 'cm-8',
        question: 'The news about the peace negotiations ___ very encouraging.',
        options: ['is', 'are', 'were', 'have been'],
        correctIndex: 0,
        explanation:
          'Even though "news" ends in an "s", it is an uncountable singular noun in English and takes a singular verb ("The news is...").',
        topicTag: 'Uncountable Nouns',
      },
      {
        id: 'cm-9',
        question: 'I have been living in Manchester ___ five years now.',
        options: ['since', 'for', 'during', 'from'],
        correctIndex: 1,
        explanation:
          'Use "for" to express duration or a length of time ("for five years"). Use "since" only with a specific starting date or point in time.',
        topicTag: 'Since vs For',
      },
      {
        id: 'cm-10',
        question: 'The police ___ investigating the incident thoroughly.',
        options: ['is', 'are', 'was', 'has been'],
        correctIndex: 1,
        explanation:
          'In English, "police" is treated as a plural collective noun and takes a plural verb ("The police are investigating").',
        topicTag: 'Collective Nouns',
      },
    ],
  },

  // 6. A2 Vocabulary Quiz
  {
    slug: 'a2-english-vocabulary-quiz',
    categorySlug: 'english-vocabulary-tests',
    title: 'A2 Elementary English Vocabulary Quiz',
    shortDescription:
      'Test your everyday English vocabulary for practical situations, family, shopping, work, and travel.',
    fullDescription:
      'Designed for A2 elementary learners, this quiz tests essential words and everyday collocations used in restaurants, airports, hotels, and daily conversations.',
    level: 'A2',
    estimatedMinutes: 6,
    relatedQuizSlugs: ['phrasal-verbs-test', 'english-prepositions-test'],
    educationalContent: {
      overview:
        'A2 vocabulary focuses on surviving and communicating comfortably in daily life—asking for directions, ordering food, describing routines, and understanding basic workplace notifications.',
      targetAudience: 'Elementary learners aiming to reach the B1 intermediate threshold.',
      keyRules: [
        { rule: 'Collocations matter', example: 'We make a decision and take a photo.' },
        { rule: 'False friends alert', example: '"Sensible" means wise and practical, not sensitive.' },
      ],
      commonMistakes: [
        {
          incorrect: 'I make my homework.',
          correct: 'I do my homework.',
          reason: 'We "do" homework, housework, and tasks, but "make" a cake or a phone call.',
        },
      ],
    },
    questions: [
      {
        id: 'a2-1',
        question: 'Could I have the ___ please? We are finished with our meal.',
        options: ['bill', 'receipt', 'recipe', 'ticket'],
        correctIndex: 0,
        explanation:
          'In a restaurant, you ask for the "bill" (or "check" in US English) to pay for your meal. A "receipt" is given after paying as proof of purchase, and a "recipe" is instructions for cooking.',
        topicTag: 'Restaurant & Dining',
      },
      {
        id: 'a2-2',
        question: 'Remember to ___ your alarm clock so you wake up on time.',
        options: ['make', 'set', 'put', 'do'],
        correctIndex: 1,
        explanation: 'The natural English collocation is to "set an alarm clock".',
        topicTag: 'Daily Routines',
      },
      {
        id: 'a2-3',
        question: 'She is very ___. She always says "please" and "thank you".',
        options: ['polite', 'rude', 'funny', 'strict'],
        correctIndex: 0,
        explanation: '"Polite" describes someone with good manners who shows respect to others.',
        topicTag: 'Character Traits',
      },
      {
        id: 'a2-4',
        question: 'I usually ___ a shower right after I wake up.',
        options: ['take', 'make', 'do', 'hold'],
        correctIndex: 0,
        explanation: 'We say "take a shower" or "have a shower" in English.',
        topicTag: 'Collocations',
      },
      {
        id: 'a2-5',
        question: 'You must show your ___ at the border control desk.',
        options: ['passport', 'postcard', 'newspaper', 'menu'],
        correctIndex: 0,
        explanation: 'A "passport" is the official travel document required when crossing international borders.',
        topicTag: 'Travel Vocabulary',
      },
      {
        id: 'a2-6',
        question: 'My coat is very wet because it was ___ outside.',
        options: ['foggy', 'pouring', 'sunny', 'dry'],
        correctIndex: 1,
        explanation: '"Pouring" means raining very heavily ("it is pouring down").',
        topicTag: 'Weather',
      },
      {
        id: 'a2-7',
        question: 'We need to ___ a table for six at the Italian restaurant.',
        options: ['book', 'buy', 'order', 'call'],
        correctIndex: 0,
        explanation: 'To reserve a table, room, or ticket, we use the verb "book" (or "reserve").',
        topicTag: 'Reservations',
      },
      {
        id: 'a2-8',
        question: 'I am so ___ after working for ten hours without a break.',
        options: ['exhausted', 'angry', 'excited', 'bored'],
        correctIndex: 0,
        explanation: '"Exhausted" means extremely tired and without energy.',
        topicTag: 'Feelings & Physical State',
      },
      {
        id: 'a2-9',
        question: 'Could you give me some ___? I do not know where the museum is.',
        options: ['directions', 'destinations', 'tickets', 'passengers'],
        correctIndex: 0,
        explanation: '"Directions" are instructions on how to reach a destination.',
        topicTag: 'Asking for Directions',
      },
      {
        id: 'a2-10',
        question: 'Please turn ___ the lights before you leave the bedroom.',
        options: ['off', 'out', 'away', 'down'],
        correctIndex: 0,
        explanation: 'We "turn off" or "switch off" electrical appliances and lights.',
        topicTag: 'Everyday Actions',
      },
    ],
  },

  // 7. Phrasal Verbs Test
  {
    slug: 'phrasal-verbs-test',
    categorySlug: 'english-vocabulary-tests',
    title: 'Phrasal Verbs in Context Test',
    shortDescription:
      'Learn and test high-frequency multi-word verbs essential for natural English communication.',
    fullDescription:
      'Phrasal verbs (verb + particle) give spoken English its natural rhythm. From "give up" and "turn down" to "run out of" and "put off", test your ability to understand and use these verbs in everyday situations.',
    level: 'B1',
    estimatedMinutes: 8,
    relatedQuizSlugs: ['a2-english-vocabulary-quiz', 'business-english-vocabulary-test'],
    educationalContent: {
      overview:
        'A phrasal verb is a combination of a verb and an adverb or preposition whose combined meaning is often completely different from the individual words.',
      targetAudience: 'Intermediate learners (B1-B2) wishing to sound more natural.',
      keyRules: [
        { rule: 'Literal vs Idiomatic', example: '"Look up" can mean look at the ceiling (literal) or search a word in a dictionary (idiomatic).' },
        { rule: 'Separable vs Inseparable', example: 'Turn off the lights / Turn them off. But: look after your sister (never "look your sister after").' },
      ],
      commonMistakes: [
        {
          incorrect: 'I will put out the meeting until Friday.',
          correct: 'I will put off the meeting until Friday.',
          reason: '"Put off" means postpone. "Put out" means extinguish a fire.',
        },
      ],
    },
    questions: [
      {
        id: 'pv-1',
        question: 'They decided to ___ the wedding until next year because of family illness.',
        options: ['put off', 'put on', 'put out', 'put up'],
        correctIndex: 0,
        explanation: '"Put off" means to postpone or delay an event to a later date.',
        topicTag: 'Schedule & Time',
      },
      {
        id: 'pv-2',
        question: 'We need to stop at the gas station; we have ___ petrol.',
        options: ['run out of', 'run into', 'run over', 'run away'],
        correctIndex: 0,
        explanation: '"Run out of" means to have none left of something.',
        topicTag: 'Supplies',
      },
      {
        id: 'pv-3',
        question: 'I ___ an old school friend while shopping at the supermarket.',
        options: ['ran into', 'ran off', 'ran away', 'ran through'],
        correctIndex: 0,
        explanation: '"Run into" (or "bump into") means to meet someone unexpectedly.',
        topicTag: 'Social Encounters',
      },
      {
        id: 'pv-4',
        question: 'He was offered a promotion, but he ___ it down because it required relocating.',
        options: ['turned', 'took', 'put', 'let'],
        correctIndex: 0,
        explanation: '"Turn down" means to reject or decline an offer or invitation.',
        topicTag: 'Decisions',
      },
      {
        id: 'pv-5',
        question: 'Never ___ up on your dreams, even when progress feels slow.',
        options: ['give', 'bring', 'hold', 'break'],
        correctIndex: 0,
        explanation: '"Give up" means to surrender, stop trying, or abandon an effort.',
        topicTag: 'Motivation',
      },
      {
        id: 'pv-6',
        question: 'Can you please ___ up this word in the dictionary for me?',
        options: ['look', 'watch', 'see', 'find'],
        correctIndex: 0,
        explanation: '"Look up" means to search for information in a reference book or database.',
        topicTag: 'Information Search',
      },
      {
        id: 'pv-7',
        question: 'The plane could not ___ off on schedule due to severe fog.',
        options: ['take', 'get', 'fly', 'run'],
        correctIndex: 0,
        explanation: 'For an aircraft, "take off" means to leave the ground and begin flight.',
        topicTag: 'Travel & Aviation',
      },
      {
        id: 'pv-8',
        question: 'Who will ___ after your dog while you are on holiday?',
        options: ['look', 'take', 'watch', 'see'],
        correctIndex: 0,
        explanation: '"Look after" means to care for or supervise someone or a pet.',
        topicTag: 'Care & Supervision',
      },
      {
        id: 'pv-9',
        question: 'I cannot ___ up with this constant noise from the construction site anymore!',
        options: ['put', 'take', 'stand', 'keep'],
        correctIndex: 0,
        explanation: '"Put up with" is a three-word phrasal verb meaning to tolerate an unpleasant situation.',
        topicTag: 'Tolerance',
      },
      {
        id: 'pv-10',
        question: 'After a thirty-minute debate, they finally ___ up with a brilliant solution.',
        options: ['came', 'went', 'brought', 'turned'],
        correctIndex: 0,
        explanation: '"Come up with" means to invent, produce, or suggest an idea or plan.',
        topicTag: 'Problem Solving',
      },
    ],
  },

  // 8. B1 Grammar Test
  {
    slug: 'b1-english-grammar-test',
    categorySlug: 'english-level-practice',
    title: 'B1 Intermediate English Grammar Test',
    shortDescription:
      'Evaluate your grasp of intermediate verb tenses, modal verbs, comparatives, and relative clauses.',
    fullDescription:
      'This comprehensive B1 diagnostic test assesses whether your grammar foundation is solid across modal verbs of deduction, past continuous vs simple, passive voice basics, and defining relative clauses.',
    level: 'B1',
    estimatedMinutes: 9,
    relatedQuizSlugs: ['present-perfect-vs-past-simple', 'b2-english-grammar-practice', 'english-conditionals-quiz'],
    educationalContent: {
      overview:
        'CEFR Level B1 marks the threshold of independent English usage. Learners at this level can communicate comfortably in most daily situations and describe experiences, reasons, and opinions.',
      targetAudience: 'Intermediate learners preparing for Cambridge B1 Preliminary or IELTS 4.5–5.5.',
      keyRules: [
        { rule: 'Passive Voice formation', example: 'The letter was sent yesterday. (be + past participle)' },
        { rule: 'Defining Relative Clauses', example: 'The person who called you left a message. (who for people, which for things)' },
      ],
      commonMistakes: [
        {
          incorrect: 'He must to be tired.',
          correct: 'He must be tired.',
          reason: 'Modal auxiliary verbs take the bare infinitive (without "to").',
        },
      ],
    },
    questions: [
      {
        id: 'b1-1',
        question: 'While I ___ home from work, it suddenly started to snow heavily.',
        options: ['was walking', 'walked', 'have walked', 'am walking'],
        correctIndex: 0,
        explanation:
          'We use the Past Continuous ("was walking") for an action in progress in the past that was interrupted by a shorter action in the Past Simple ("started").',
        topicTag: 'Past Continuous vs Simple',
      },
      {
        id: 'b1-2',
        question: 'She has been working here for six years, so she ___ know how the system operates.',
        options: ['must', 'can', 'shall', 'ought'],
        correctIndex: 0,
        explanation:
          '"Must" expresses strong logical deduction or certainty based on clear evidence (six years of experience).',
        topicTag: 'Modals of Deduction',
      },
      {
        id: 'b1-3',
        question: 'The Eiffel Tower ___ by Gustave Eiffel’s engineering firm in 1889.',
        options: ['was built', 'has been built', 'built', 'is built'],
        correctIndex: 0,
        explanation:
          'For a historical event at a specific past date ("in 1889"), the Past Simple Passive ("was built") is required.',
        topicTag: 'Passive Voice',
      },
      {
        id: 'b1-4',
        question: 'That is the woman ___ daughter won the international piano competition.',
        options: ['whose', 'who', 'whom', 'which'],
        correctIndex: 0,
        explanation: '"Whose" is the possessive relative pronoun used to indicate ownership or family relationship.',
        topicTag: 'Relative Clauses',
      },
      {
        id: 'b1-5',
        question: 'This electric car is far ___ than my previous petrol vehicle.',
        options: ['more economical', 'economicaler', 'most economical', 'as economical'],
        correctIndex: 0,
        explanation:
          'Long adjectives (three syllables or more) form their comparative with "more": more economical than.',
        topicTag: 'Comparatives',
      },
      {
        id: 'b1-6',
        question: 'You ___ touch that wire; it is live and extremely dangerous!',
        options: ["mustn't", "don't have to", "might not", "should"],
        correctIndex: 0,
        explanation:
          '"Mustn\'t" expresses strong prohibition (do not do this). "Don\'t have to" merely indicates absence of obligation.',
        topicTag: 'Prohibition vs Obligation',
      },
      {
        id: 'b1-7',
        question: 'I will call you as soon as I ___ at the hotel.',
        options: ['arrive', 'will arrive', 'arrived', 'am arriving'],
        correctIndex: 0,
        explanation:
          'In future time clauses introduced by "as soon as", "when", or "before", use the Present Simple to refer to the future.',
        topicTag: 'Future Time Clauses',
      },
      {
        id: 'b1-8',
        question: 'He is not used to ___ up so early in the morning.',
        options: ['waking', 'wake', 'woke', 'woken'],
        correctIndex: 0,
        explanation:
          '"Be used to" means to be accustomed to and is followed by a noun or gerund (-ing): "used to waking up".',
        topicTag: 'Used to vs Be used to',
      },
      {
        id: 'b1-9',
        question: 'By the time the rescue team arrived, the hikers ___ a shelter.',
        options: ['had built', 'have built', 'built', 'were building'],
        correctIndex: 0,
        explanation:
          'The Past Perfect ("had built") is used for an action completed before another past event ("arrived").',
        topicTag: 'Past Perfect',
      },
      {
        id: 'b1-10',
        question: 'She asked me where ___ during my holiday in Rome.',
        options: ['I had stayed', 'had I stayed', 'did I stay', 'have I stayed'],
        correctIndex: 0,
        explanation:
          'In reported questions, word order is affirmative (Subject + Verb: "I had stayed"), and tenses shift back.',
        topicTag: 'Reported Speech',
      },
    ],
  },

  // 9. B2 Grammar Practice
  {
    slug: 'b2-english-grammar-practice',
    categorySlug: 'english-level-practice',
    title: 'B2 Upper-Intermediate English Grammar Practice',
    shortDescription:
      'Challenge yourself with advanced structures: inversion, cleft sentences, mixed conditionals, and modal idioms.',
    fullDescription:
      'Upper-intermediate English requires nuanced command of emphasis, formal inversion, wishes, regrets, and subjunctive forms. Test your readiness for Cambridge B2 First or IELTS 6.0–7.0.',
    level: 'B2',
    estimatedMinutes: 10,
    relatedQuizSlugs: ['b1-english-grammar-test', 'english-conditionals-quiz'],
    educationalContent: {
      overview:
        'CEFR B2 represents upper-intermediate independence. At this stage, learners move beyond basic communication to express shades of meaning, stylistic emphasis, and formal discourse.',
      targetAudience: 'Upper-intermediate learners preparing for academic study or professional certification.',
      keyRules: [
        { rule: 'Negative Inversion', example: 'Rarely have I seen such dedication. (Negative adverb + auxiliary + subject)' },
        { rule: 'Wishes about the past', example: 'I wish I had accepted that offer. (wish + past perfect)' },
      ],
      commonMistakes: [
        {
          incorrect: 'Hardly I had entered the room when the phone rang.',
          correct: 'Hardly had I entered the room when the phone rang.',
          reason: 'Negative adverbials at the start of a sentence require subject-auxiliary inversion.',
        },
      ],
    },
    questions: [
      {
        id: 'b2-1',
        question: 'Rarely ___ such extraordinary teamwork in all my years as a director.',
        options: ['have I witnessed', 'I have witnessed', 'did I witness', 'I witnessed'],
        correctIndex: 0,
        explanation:
          'When negative or restrictive adverbs (rarely, seldom, scarcely, never) are placed at the beginning for emphasis, we must invert the subject and auxiliary verb: "Rarely have I witnessed...".',
        topicTag: 'Negative Inversion',
      },
      {
        id: 'b2-2',
        question: 'I wish I ___ that harsh comment during yesterday’s meeting.',
        options: ["hadn't made", "didn't make", "wouldn't make", "haven't made"],
        correctIndex: 0,
        explanation:
          'To express a regret about a completed past action, we use "wish + Past Perfect" ("hadn\'t made").',
        topicTag: 'Wishes & Regrets',
      },
      {
        id: 'b2-3',
        question: 'The committee demanded that the executive ___ an immediate explanation.',
        options: ['provide', 'provides', 'provided', 'would provide'],
        correctIndex: 0,
        explanation:
          'In formal English, verbs expressing urgency, demand, or recommendation take the present subjunctive (base form of the verb for all persons): "demanded that he provide".',
        topicTag: 'Subjunctive Mood',
      },
      {
        id: 'b2-4',
        question: 'It was only after reading the contract carefully that he ___ the hidden clause.',
        options: ['noticed', 'did notice', 'had noticed', 'noticing'],
        correctIndex: 0,
        explanation:
          'This cleft sentence structure uses standard past tense in the main clause: "It was only after... that he noticed...".',
        topicTag: 'Cleft Sentences',
      },
      {
        id: 'b2-5',
        question: 'He walked into the office soaked to the bone; he ___ an umbrella.',
        options: ['should have taken', 'must take', 'could take', 'would take'],
        correctIndex: 0,
        explanation:
          '"Should have + past participle" expresses a sensible action in the past that was not performed (a past criticism or recommendation).',
        topicTag: 'Past Modal Criticism',
      },
      {
        id: 'b2-6',
        question: 'Having ___ the final report, Elena submitted it to the board for review.',
        options: ['completed', 'completing', 'been completed', 'complete'],
        correctIndex: 0,
        explanation:
          'The perfect participle clause ("Having completed...") indicates that the action in the participle clause occurred before the main verb ("submitted").',
        topicTag: 'Participle Clauses',
      },
      {
        id: 'b2-7',
        question: 'No sooner had we arrived at the cabin ___ the storm knocked out the electricity.',
        options: ['than', 'when', 'that', 'then'],
        correctIndex: 0,
        explanation:
          '"No sooner... than" is a paired correlative construction (unlike "hardly... when"). Example: "No sooner had we arrived than...".',
        topicTag: 'Correlative Inversion',
      },
      {
        id: 'b2-8',
        question: 'I would rather you ___ anyone about this confidential matter.',
        options: ["didn't tell", "not tell", "wouldn't tell", "haven't told"],
        correctIndex: 0,
        explanation:
          'When "would rather" refers to someone else\'s action in the present or future, we use the Past Simple ("would rather you didn\'t tell").',
        topicTag: 'Preferences (Would Rather)',
      },
      {
        id: 'b2-9',
        question: 'The company is believed ___ over two million units last quarter.',
        options: ['to have sold', 'to sell', 'selling', 'having sold'],
        correctIndex: 0,
        explanation:
          'When reporting a past event with a passive reporting verb in the present ("is believed"), we use the perfect infinitive ("to have sold").',
        topicTag: 'Passive Reporting Structures',
      },
      {
        id: 'b2-10',
        question: 'Much ___ I appreciate your offer, I must decline due to prior commitments.',
        options: ['as', 'though', 'although', 'like'],
        correctIndex: 0,
        explanation:
          'The concession phrase "Much as I [verb]..." means "Although I [verb] very much..." and introduces a polite contrast.',
        topicTag: 'Advanced Concessions',
      },
    ],
  },

  // 10. Business English Vocabulary Test
  {
    slug: 'business-english-vocabulary-test',
    categorySlug: 'business-english',
    title: 'Business English Vocabulary & Communication Test',
    shortDescription:
      'Practise professional communication, modern workplace idioms, email phrasing, and meeting vocabulary.',
    fullDescription:
      'From boardroom negotiations and formal emails to agile project terminology and diplomatic phrasing, test your ability to communicate effectively in international business environments.',
    level: 'B2',
    estimatedMinutes: 8,
    relatedQuizSlugs: ['phrasal-verbs-test', 'b2-english-grammar-practice'],
    educationalContent: {
      overview:
        'Professional English requires a balance of clarity, polite diplomacy, and appropriate corporate vocabulary. Navigating meetings, negotiations, and formal correspondence requires mastering authentic workplace idioms and tone.',
      targetAudience: 'Professionals and students preparing for interviews, internships, or multinational corporate roles.',
      keyRules: [
        { rule: 'Diplomatic phrasing over blunt commands', example: '"Could we consider an alternative?" rather than "Your idea is bad."' },
        { rule: 'Clear action-oriented email signoffs', example: '"Please let me know if you need any further information."' },
      ],
      commonMistakes: [
        {
          incorrect: 'I write to ask for...',
          correct: 'I am writing to enquire about...',
          reason: 'Formal email openings use the present continuous and polite vocabulary.',
        },
      ],
    },
    questions: [
      {
        id: 'biz-1',
        question: 'Let’s ___ this topic for our next meeting so we can focus on today’s main agenda.',
        options: ['table', 'floor', 'desk', 'bench'],
        correctIndex: 0,
        explanation:
          'In business English, to "table" a topic means to postpone discussion of it until a later time (common US usage) or to present it for formal consideration.',
        topicTag: 'Meeting Terminology',
      },
      {
        id: 'biz-2',
        question: 'Please find ___ the financial statement for the fourth quarter.',
        options: ['attached', 'enclosed', 'joined', 'bound'],
        correctIndex: 0,
        explanation:
          'In digital email correspondence, files are "attached" ("Please find attached..."). "Enclosed" is traditionally used for physical paper letters in envelopes.',
        topicTag: 'Email Etiquette',
      },
      {
        id: 'biz-3',
        question: 'We need to keep our ___ down if we want to stay profitable during the slow season.',
        options: ['overheads', 'overviews', 'outlooks', 'overturns'],
        correctIndex: 0,
        explanation:
          '"Overheads" (or overhead costs) refers to regular operational business expenses like rent, utilities, and insurance that are not directly tied to producing goods.',
        topicTag: 'Financial Terms',
      },
      {
        id: 'biz-4',
        question: 'Could we set up a quick 15-minute call to ___ base regarding the client proposal?',
        options: ['touch', 'hit', 'strike', 'make'],
        correctIndex: 0,
        explanation:
          '"Touch base" is a widespread professional idiom meaning to contact someone briefly to exchange updates.',
        topicTag: 'Workplace Idioms',
      },
      {
        id: 'biz-5',
        question: 'I would appreciate it if you could send me your feedback by Friday, close of ___.',
        options: ['business', 'office', 'work', 'market'],
        correctIndex: 0,
        explanation:
          '"Close of business" (often abbreviated COB) is the standard professional phrase for the end of the working day, usually 5:00 PM.',
        topicTag: 'Deadlines',
      },
      {
        id: 'biz-6',
        question: 'Both departments need to be on the same ___ before we present to the CEO.',
        options: ['page', 'paper', 'line', 'sheet'],
        correctIndex: 0,
        explanation:
          '"On the same page" is a widely used idiom meaning in agreement and sharing the same understanding.',
        topicTag: 'Collaboration',
      },
      {
        id: 'biz-7',
        question: 'The management team has identified several key ___ that we must achieve this quarter.',
        options: ['milestones', 'headstones', 'pavements', 'cornerstones'],
        correctIndex: 0,
        explanation:
          'A "milestone" in project management is a significant stage, event, or goal in the development or completion of a project.',
        topicTag: 'Project Management',
      },
      {
        id: 'biz-8',
        question: 'To be diplomatic: "With respect, I am not entirely ___ that this strategy will work."',
        options: ['convinced', 'thinking', 'agreeing', 'decided'],
        correctIndex: 0,
        explanation:
          '"I am not entirely convinced" is a diplomatic, polite way to express disagreement or skepticism without being confrontational in a meeting.',
        topicTag: 'Diplomatic Language',
      },
      {
        id: 'biz-9',
        question: 'We are looking for candidates who can think outside the ___ to solve novel logistics problems.',
        options: ['box', 'room', 'circle', 'wall'],
        correctIndex: 0,
        explanation:
          '"Think outside the box" is a standard metaphor for thinking creatively, unconventionally, and from a fresh perspective.',
        topicTag: 'Creative Problem Solving',
      },
      {
        id: 'biz-10',
        question: 'Due to unforeseen market headwinds, the board voted to ___ the launch date by two weeks.',
        options: ['push back', 'pull up', 'knock out', 'bring down'],
        correctIndex: 0,
        explanation:
          '"Push back" in a business context means to delay or postpone a deadline or event.',
        topicTag: 'Business Phrasal Verbs',
      },
    ],
  },
];

export function getQuizBySlug(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug);
}

export function getQuizzesByCategory(categorySlug: string): Quiz[] {
  return quizzes.filter((q) => q.categorySlug === categorySlug);
}
