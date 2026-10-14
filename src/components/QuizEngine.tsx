import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Share2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Quiz, QuizQuestion } from '../types';

interface QuizEngineProps {
  quiz: Quiz;
  onNavigateCategory?: () => void;
  onNavigateQuiz?: (slug: string) => void;
}

export function QuizEngine({ quiz, onNavigateCategory, onNavigateQuiz }: QuizEngineProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  // AI Tutor explanation modal state
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const questions = quiz.questions;
  const currentQ: QuizQuestion = questions[currentIndex];

  const handleStart = () => {
    setHasStarted(true);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setUserAnswers([]);
    setIsFinished(false);
    setIsReviewMode(false);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || isAnswerChecked) return;
    setIsAnswerChecked(true);
    setUserAnswers((prev) => [...prev, selectedOption]);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setAiExplanation(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    handleStart();
  };

  // Score calculation
  const correctCount = userAnswers.reduce((acc, userAns, idx) => {
    return userAns === questions[idx]?.correctIndex ? acc + 1 : acc;
  }, 0);
  const totalCount = questions.length;
  const scorePercent = Math.round((correctCount / totalCount) * 100);

  // Encourage feedback message
  const getEncouragement = () => {
    if (scorePercent === 100) return 'Outstanding work! You demonstrated an exceptional grasp of this topic.';
    if (scorePercent >= 80) return 'Great job! You have a solid command of this material with only minor areas to polish.';
    if (scorePercent >= 60) return 'Good effort! Review the explanations below to strengthen your understanding of key patterns.';
    return 'Valuable practice! English rules take repetition. Study the explanations below and try retaking the quiz.';
  };

  // Native share or clipboard fallback
  const handleShare = async () => {
    const shareData = {
      title: `${quiz.title} - Clear English Quiz`,
      text: `I scored ${correctCount}/${totalCount} (${scorePercent}%) on the ${quiz.title}! Practise English for free on Clear English Quiz.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareFeedback('Shared successfully!');
        setTimeout(() => setShareFeedback(null), 3000);
      } catch (err) {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(
          `${shareData.text} ${shareData.url}`
        );
        setShareFeedback('Result link copied to clipboard!');
        setTimeout(() => setShareFeedback(null), 3000);
      } catch (err) {
        setShareFeedback('Copy failed. You can copy the URL directly.');
      }
    }
  };

  // AI Tutor Explain Call
  const handleAskAiTutor = async (q: QuizQuestion, userAnsIndex: number) => {
    setIsLoadingAi(true);
    setAiError(null);
    try {
      const res = await fetch('/api/ai-explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q.question,
          userAnswer: q.options[userAnsIndex] || 'None',
          correctAnswer: q.options[q.correctIndex],
          ruleTopic: q.topicTag || quiz.title,
        }),
      });

      if (!res.ok) throw new Error('Could not connect to AI service');
      const data = await res.json();
      setAiExplanation(data.explanation || 'Review the grammar rule context and example sentences.');
    } catch (err: any) {
      // Graceful pedagogical fallback
      setAiExplanation(
        `Why "${q.options[q.correctIndex]}" works: This follows standard English usage for ${q.topicTag || 'this topic'}. Remember: pay close attention to time markers and noun agreement.`
      );
    } finally {
      setIsLoadingAi(false);
    }
  };

  // 1. Initial Start Card
  if (!hasStarted) {
    return (
      <div className="bg-[#FFFFFF] border-2 border-emerald-100 rounded-3xl p-6 sm:p-10 shadow-md">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Interactive Practice Quiz</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B28] tracking-tight">
            Ready to test your knowledge?
          </h2>

          <p className="text-sm sm:text-base text-[#69736D] leading-relaxed">
            This quiz features {totalCount} carefully crafted multiple-choice questions with immediate explanations. Choose the best answer for each question and receive a complete score review at the end.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#252B28] pt-2">
            <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 py-1.5 rounded-xl font-bold">
              🎯 Level: {quiz.level}
            </span>
            <span className="bg-sky-50 border border-sky-200 text-sky-800 px-3.5 py-1.5 rounded-xl font-bold">
              ⏱️ Time: ~{quiz.estimatedMinutes} minutes
            </span>
            <span className="bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1.5 rounded-xl font-bold">
              📝 Questions: {totalCount}
            </span>
          </div>

          <div className="pt-4">
            <button
              onClick={handleStart}
              className="bg-gradient-to-r from-[#245747] via-emerald-700 to-teal-800 hover:from-[#1b4336] hover:to-teal-900 text-[#FAF9F6] font-extrabold text-base px-9 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-emerald-400 active:scale-95"
            >
              Start Quiz Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Results Screen
  if (isFinished) {
    return (
      <div className="bg-[#FFFFFF] border border-[#E7E9E5] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header & Score */}
          <div className="text-center space-y-3 pb-6 border-b border-[#E7E9E5]">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#DCE9DF] flex items-center justify-center text-[#245747]">
              <Award className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252B28]">
              Quiz Completed!
            </h2>

            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#245747]">
                {correctCount} / {totalCount}
              </span>
              <span className="text-base sm:text-lg font-bold text-[#69736D] bg-[#FAF9F6] border border-[#E7E9E5] px-3 py-1 rounded-lg">
                {scorePercent}%
              </span>
            </div>

            <p className="text-sm text-[#252B28] font-medium max-w-lg mx-auto">
              {getEncouragement()}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 bg-[#245747] text-[#FAF9F6] hover:bg-[#1b4336] px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors focus:ring-2 focus:ring-[#245747]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 bg-[#FAF9F6] text-[#252B28] hover:bg-[#E7E9E5] border border-[#E7E9E5] px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                <Share2 className="w-4 h-4 text-[#245747]" />
                <span>Share Results</span>
              </button>

              <button
                onClick={() => setIsReviewMode(!isReviewMode)}
                className="inline-flex items-center gap-1.5 bg-[#DCE9DF]/60 text-[#245747] hover:bg-[#DCE9DF] px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                {isReviewMode ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                <span>{isReviewMode ? 'Hide Review' : 'Review Answers'}</span>
              </button>
            </div>

            {shareFeedback && (
              <p className="text-xs text-[#245747] font-semibold animate-fade-in pt-1">
                {shareFeedback}
              </p>
            )}
          </div>

          {/* Review Answers Accordion Mode */}
          {isReviewMode && (
            <div className="space-y-4 pt-2">
              <h3 className="text-base font-bold text-[#252B28]">
                Detailed Question Review ({totalCount} Questions)
              </h3>
              {questions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border text-sm space-y-2 ${
                      isCorrect
                        ? 'bg-[#F2F7F4] border-[#C5D9CA]'
                        : 'bg-[#FFF7F5] border-[#F2C4BC]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-xs uppercase tracking-wide text-[#69736D]">
                        Question {idx + 1} • {q.topicTag}
                      </span>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#245747]">
                          <CheckCircle2 className="w-4 h-4" /> Correct
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#B93826]">
                          <XCircle className="w-4 h-4" /> Incorrect
                        </span>
                      )}
                    </div>

                    <p className="font-semibold text-[#252B28]">{q.question}</p>

                    <div className="text-xs space-y-1">
                      <p>
                        Your Answer:{' '}
                        <span className={isCorrect ? 'font-bold text-[#245747]' : 'font-bold text-[#B93826]'}>
                          {q.options[userAns]}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p>
                          Correct Answer:{' '}
                          <span className="font-bold text-[#245747]">{q.options[q.correctIndex]}</span>
                        </p>
                      )}
                    </div>

                    <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#E7E9E5]/80 text-xs text-[#252B28] leading-relaxed">
                      <strong>Explanation:</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Recommended Next Step */}
          {quiz.relatedQuizSlugs.length > 0 && (
            <div className="pt-4 border-t border-[#E7E9E5]">
              <h3 className="text-sm font-bold text-[#252B28] mb-3">
                Recommended Next Quizzes:
              </h3>
              <div className="flex flex-wrap gap-2">
                {quiz.relatedQuizSlugs.map((slug) => (
                  <button
                    key={slug}
                    onClick={() => onNavigateQuiz && onNavigateQuiz(slug)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#245747] bg-[#FAF9F6] border border-[#E7E9E5] hover:bg-[#DCE9DF]/50 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>{slug.replace(/-/g, ' ')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 3. Active Quiz Question View
  return (
    <div className="bg-[#FFFFFF] border border-[#E7E9E5] rounded-2xl p-5 sm:p-8 shadow-xs">
      <div className="max-w-2xl mx-auto space-y-5">
        {/* Progress & Live Region */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-[#69736D]">
            <span aria-live="polite">
              Question {currentIndex + 1} of {totalCount}
            </span>
            <span className="text-[11px] bg-[#FAF9F6] border border-[#E7E9E5] px-2.5 py-0.5 rounded-full text-[#252B28]">
              {currentQ.topicTag || quiz.title}
            </span>
          </div>

          <div
            className="w-full bg-[#E7E9E5] h-2.5 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={currentIndex + 1}
            aria-valuemin={1}
            aria-valuemax={totalCount}
          >
            <div
              className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / totalCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Text */}
        <fieldset className="space-y-4">
          <legend className="text-base sm:text-xl font-extrabold text-[#252B28] leading-snug">
            {currentQ.question}
          </legend>

          {/* Options */}
          <div className="space-y-2.5" role="radiogroup" aria-label="Answer options">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectAnswer = idx === currentQ.correctIndex;

              let buttonStyle = 'bg-[#FAF9F6] border-[#E7E9E5] text-[#252B28] hover:border-emerald-500 hover:bg-emerald-50/20';
              if (isSelected && !isAnswerChecked) {
                buttonStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-2 ring-emerald-600/30';
              } else if (isAnswerChecked) {
                if (isCorrectAnswer) {
                  buttonStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold ring-2 ring-emerald-500';
                } else if (isSelected && !isCorrectAnswer) {
                  buttonStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold ring-2 ring-rose-400';
                } else {
                  buttonStyle = 'bg-[#FAF9F6]/60 border-[#E7E9E5]/60 text-[#69736D] opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerChecked}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all text-sm sm:text-base flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${buttonStyle}`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-extrabold ${
                      isSelected && !isAnswerChecked
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : isAnswerChecked && isCorrectAnswer
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : isAnswerChecked && isSelected
                        ? 'bg-rose-600 text-white border-rose-600'
                        : 'bg-white text-zinc-600 border-zinc-200'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </span>

                  {isAnswerChecked && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerChecked && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Action Button: Check Answer or Next */}
        {!isAnswerChecked ? (
          <div className="pt-2">
            <button
              onClick={handleCheckAnswer}
              disabled={selectedOption === null}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-xs ${
                selectedOption === null
                  ? 'bg-[#E7E9E5] text-[#A3ABA5] cursor-not-allowed'
                  : 'bg-[#245747] hover:bg-[#1b4336] text-[#FAF9F6] focus:ring-2 focus:ring-[#245747]'
              }`}
            >
              Check Answer
            </button>
          </div>
        ) : (
          <div className="space-y-4 pt-2">
            {/* Answer Explanation Banner */}
            <div
              className={`p-4 rounded-xl border text-sm leading-relaxed space-y-2 ${
                selectedOption === currentQ.correctIndex
                  ? 'bg-[#EDF6EE] border-[#C5D9CA]'
                  : 'bg-[#FDF0EE] border-[#F2C4BC]'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wide">
                {selectedOption === currentQ.correctIndex ? (
                  <span className="text-[#1E4620] flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> That's correct!
                  </span>
                ) : (
                  <span className="text-[#8F1D1D] flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Not quite right
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#252B28]">
                <strong>Explanation:</strong> {currentQ.explanation}
              </p>

              {/* Free AI Tutor Deep Dive Option */}
              <div className="pt-2 border-t border-black/5 flex flex-wrap items-center justify-between gap-2">
                <button
                  onClick={() => handleAskAiTutor(currentQ, selectedOption ?? 0)}
                  disabled={isLoadingAi}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#245747] hover:underline"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {isLoadingAi ? 'Consulting AI Tutor...' : 'Ask AI Tutor for deeper explanation'}
                  </span>
                </button>
              </div>

              {aiExplanation && (
                <div className="p-3 bg-[#FFFFFF] rounded-lg border border-[#E7E9E5] text-xs text-[#252B28] space-y-1.5 animate-fade-in">
                  <div className="flex items-center gap-1 font-bold text-[#245747]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Tutor Note:</span>
                  </div>
                  <p className="whitespace-pre-line leading-relaxed">{aiExplanation}</p>
                </div>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextQuestion}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#245747] hover:bg-[#1b4336] text-[#FAF9F6] px-8 py-3 rounded-xl font-semibold text-sm transition-all focus:ring-2 focus:ring-[#245747]"
            >
              <span>{currentIndex + 1 < totalCount ? 'Next Question' : 'View Final Score'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
