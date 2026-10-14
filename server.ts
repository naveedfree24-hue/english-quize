import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini SDK if API key is provided
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  aiClient = new GoogleGenAI({ apiKey });
}

// AI Quiz Generator Endpoint
app.post('/api/ai-quiz', async (req, res) => {
  try {
    const { topic = 'English Grammar', level = 'B1', count = 5 } = req.body;

    if (!aiClient) {
      return res.status(200).json({
        fallback: true,
        message: 'AI API key not configured on server. Showing standard curated practice.',
        questions: null
      });
    }

    const prompt = `You are an expert English language educator specializing in CEFR levels (A1-C1).
Generate exactly ${Math.min(Math.max(count, 3), 10)} high-quality multiple-choice questions for the topic "${topic}" at CEFR level "${level}".
Each question must have:
- An engaging sentence or dialogue context with a blank (e.g. "___") or clear question.
- Exactly 4 plausible options (letters A, B, C, D).
- The 0-based index of the correct answer (0, 1, 2, or 3).
- A thorough, warm, and clear educational explanation explaining why the correct choice is right and why common distractors are mistaken.
Return valid JSON matching the requested schema.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            topic: { type: Type.STRING },
            level: { type: Type.STRING },
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  question: { type: Type.STRING },
                  options: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  correctIndex: { type: Type.INTEGER },
                  explanation: { type: Type.STRING }
                },
                required: ['id', 'question', 'options', 'correctIndex', 'explanation']
              }
            }
          },
          required: ['topic', 'level', 'questions']
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({
      success: true,
      data: parsed
    });
  } catch (error: any) {
    console.error('Error generating AI quiz:', error);
    return res.status(500).json({
      error: 'Failed to generate quiz',
      message: error?.message || 'Unknown error'
    });
  }
});

// AI Explanation Tutor Endpoint
app.post('/api/ai-explain', async (req, res) => {
  try {
    const { question, userAnswer, correctAnswer, ruleTopic } = req.body;

    if (!aiClient) {
      return res.status(200).json({
        fallback: true,
        explanation: `The correct answer is "${correctAnswer}". When studying ${ruleTopic || 'this English rule'}, pay close attention to time markers and context.`
      });
    }

    const prompt = `You are a friendly, encouraging English language tutor.
A student was asked:
"${question}"
The student answered: "${userAnswer}"
The correct answer is: "${correctAnswer}"
Topic: "${ruleTopic || 'English Grammar'}"

Explain in 2-3 friendly, clear paragraphs:
1. Validate their effort and explain exactly why "${correctAnswer}" is correct.
2. Explain the subtle reason why "${userAnswer}" does not fit in this context (if it's different from the correct answer).
3. Provide a simple memory tip or short example sentence to help them remember for next time.
Keep language clear, approachable, and encouraging (A2-B2 friendly).`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return res.json({
      success: true,
      explanation: response.text
    });
  } catch (error: any) {
    console.error('Error in AI explanation:', error);
    return res.status(500).json({
      error: 'Failed to generate explanation',
      message: error?.message || 'Unknown error'
    });
  }
});

// Netlify form test endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message, topic } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }
  return res.json({ success: true, message: 'Thank you for reaching out! Your message was received.' });
});

// Dev or Prod Static Serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
