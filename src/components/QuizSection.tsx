
import React, { useState } from 'react';
import { Clock, CheckCircle, X, RotateCcw, Award, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QuizSection = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 минут
  const [quizActive, setQuizActive] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "В каком году была принята действующая Конституция Республики Казахстан?",
      options: ["1993", "1995", "1997", "1991"],
      correctAnswer: 1,
      explanation: "Конституция Республики Казахстан была принята на республиканском референдуме 30 августа 1995 года."
    },
    {
      id: 2,
      question: "Сколько разделов содержит Конституция РК?",
      options: ["7", "8", "9", "10"],
      correctAnswer: 2,
      explanation: "Конституция РК состоит из 9 разделов и 98 статей."
    },
    {
      id: 3,
      question: "Кто является гарантом Конституции в Республике Казахстан?",
      options: ["Премьер-министр", "Председатель Сената", "Президент", "Конституционный совет"],
      correctAnswer: 2,
      explanation: "Согласно статье 40 Конституции, Президент является гарантом Конституции, прав и свобод человека и гражданина."
    },
    {
      id: 4,
      question: "С какого возраста граждане РК имеют право участвовать в выборах?",
      options: ["16 лет", "17 лет", "18 лет", "21 год"],
      correctAnswer: 2,
      explanation: "Согласно статье 33 Конституции, граждане РК имеют право участвовать в управлении делами государства непосредственно и через своих представителей, участвовать в республиканских и местных референдумах с 18 лет."
    },
    {
      id: 5,
      question: "Какой язык является государственным в Республике Казахстан?",
      options: ["Казахский", "Русский", "Казахский и русский", "Английский"],
      correctAnswer: 0,
      explanation: "Согласно статье 7 Конституции, государственным языком в Республике Казахстан является казахский язык."
    },
    {
      id: 6,
      question: "На какой срок избирается Президент РК?",
      options: ["4 года", "5 лет", "6 лет", "7 лет"],
      correctAnswer: 3,
      explanation: "Согласно статье 41 Конституции, Президент избирается на семь лет."
    },
    {
      id: 7,
      question: "Сколько депутатов в Мажилисе Парламента РК?",
      options: ["77", "98", "107", "125"],
      correctAnswer: 1,
      explanation: "Согласно статье 50 Конституции, Мажилис состоит из девяноста восьми."
    },
    {
      id: 8,
      question: "Какой орган осуществляет конституционный контроль в РК?",
      options: ["Верховный суд", "Конституционный суд", "Конституционный совет", "Парламент"],
      correctAnswer: 2,
      explanation: "Конституционный контроль в РК осуществляет Конституционный совет согласно разделу 6 Конституции."
    },
    {
      id: 9,
      question: "Может ли быть ограничено право на жизнь согласно Конституции РК?",
      options: ["Да, в военное время", "Да, при чрезвычайном положении", "Нет, никогда", "Да, по решению суда"],
      correctAnswer: 2,
      explanation: "Согласно статье 15 Конституции, право на жизнь является неотчуждаемым и не может быть ограничено."
    },
    {
      id: 10,
      question: "В какой день отмечается День Конституции в Казахстане?",
      options: ["16 декабря", "1 мая", "30 августа", "9 мая"],
      correctAnswer: 2,
      explanation: "День Конституции отмечается 30 августа - в день принятия Конституции РК в 1995 году."
    }
  ];

  // Таймер
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (quizActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setShowResults(true);
            setQuizActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizActive, timeLeft]);

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizActive(true);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setTimeLeft(600);
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishQuiz = () => {
    setShowResults(true);
    setQuizActive(false);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setTimeLeft(600);
    setQuizActive(false);
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index]?.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!quizStarted) {
    return (
      <section id="quiz" className="py-20 ornament-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 text-violet-600 font-medium text-sm mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Викторина
            </div>
            <h2 className="text-4xl font-bold mb-6 text-[#333333]">
              <span className="text-[#00AFCA]">Проверьте</span> свои знания
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Пройдите тест на знание Конституции Республики Казахстан и узнайте свой уровень
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Timer className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Викторина по Конституции РК</CardTitle>
                <CardDescription>
                  Тест состоит из 10 вопросов. На прохождение дается 10 минут.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-muted">
                    <div className="text-2xl font-bold text-primary">10</div>
                    <div className="text-sm text-muted-foreground">вопросов</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <div className="text-2xl font-bold text-primary">10</div>
                    <div className="text-sm text-muted-foreground">минут</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Правила викторины:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• На каждый вопрос есть только один правильный ответ</li>
                    <li>• Вы можете вернуться к предыдущим вопросам</li>
                    <li>• Время ограничено - 10 минут на все вопросы</li>
                    <li>• После завершения вы увидите результаты и правильные ответы</li>
                  </ul>
                </div>

                <Button 
                  onClick={startQuiz}
                  className="w-full bg-[#00AFCA] text-white"
                  size="lg"
                >
                  Начать викторину
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <section id="quiz" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  percentage >= 70 ? 'bg-emerald-500' : percentage >= 50 ? 'bg-amber-500' : 'bg-red-500'
                }`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Результаты викторины</CardTitle>
                <CardDescription>
                  Вы ответили правильно на {score} из {questions.length} вопросов ({percentage}%)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 kz-text-gradient">
                    {percentage}%
                  </div>
                  <div className="text-lg">
                    {percentage >= 90 ? 'Отлично! Вы знаток Конституции!' :
                     percentage >= 70 ? 'Хорошо! Неплохие знания' :
                     percentage >= 50 ? 'Удовлетворительно. Есть над чем поработать' :
                     'Рекомендуем изучить Конституцию внимательнее'}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Разбор ответов:</h3>
                  {questions.map((question, index) => {
                    const userAnswer = selectedAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;
                    
                    return (
                      <div key={question.id} className="p-4 rounded-lg border">
                        <div className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                            isCorrect ? 'bg-emerald-500' : 'bg-red-500'
                          }`}>
                            {isCorrect ? 
                              <CheckCircle className="w-4 h-4 text-white" /> : 
                              <X className="w-4 h-4 text-white" />
                            }
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">{question.question}</h4>
                            {userAnswer !== undefined && (
                              <div className="mb-2">
                                <span className="text-sm text-muted-foreground">Ваш ответ: </span>
                                <span className={isCorrect ? 'text-emerald-600' : 'text-red-600'}>
                                  {question.options[userAnswer]}
                                </span>
                              </div>
                            )}
                            {!isCorrect && (
                              <div className="mb-2">
                                <span className="text-sm text-muted-foreground">Правильный ответ: </span>
                                <span className="text-emerald-600">
                                  {question.options[question.correctAnswer]}
                                </span>
                              </div>
                            )}
                            <p className="text-sm text-muted-foreground">{question.explanation}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-4 justify-center">
                  <Button onClick={resetQuiz} variant="outline">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Пройти еще раз
                  </Button>
                  <Button onClick={() => window.location.hash = '#education'}>
                    Изучить Конституцию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="quiz" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header with timer and progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-muted-foreground">
                Вопрос {currentQuestion + 1} из {questions.length}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span className={timeLeft <= 60 ? 'text-red-500 font-bold' : 'text-muted-foreground'}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{currentQ.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <div className="w-3 h-3 bg-white rounded-full" />
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-6">
                <Button
                  onClick={previousQuestion}
                  variant="outline"
                  disabled={currentQuestion === 0}
                >
                  Назад
                </Button>

                <div className="flex gap-2">
                  {currentQuestion === questions.length - 1 ? (
                    <Button 
                      onClick={finishQuiz}
                      className="kz-gradient text-white"
                      disabled={selectedAnswers[currentQuestion] === undefined}
                    >
                      Завершить тест
                    </Button>
                  ) : (
                    <Button
                      onClick={nextQuestion}
                      disabled={selectedAnswers[currentQuestion] === undefined}
                    >
                      Далее
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
