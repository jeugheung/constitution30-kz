import React, { useState, useEffect } from 'react';
import { BookOpen, Award, CheckCircle, Download } from 'lucide-react';

const EducationSection = () => {
  const [activeTab, setActiveTab] = useState('articles');
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Listen for custom events from HeroSection buttons
  useEffect(() => {
    const handleTabActivation = (event) => {
      setActiveTab(event.detail);
      // Reset quiz state when switching tabs
      if (event.detail === 'quiz') {
        setQuizStarted(false);
        setCurrentQuestion(0);
        setAnswers([]);
        setQuizCompleted(false);
      }
    };

    window.addEventListener('activateEducationTab', handleTabActivation);
    
    return () => {
      window.removeEventListener('activateEducationTab', handleTabActivation);
    };
  }, []);

  const articles = [
    {
      number: 1,
      title: 'Основы конституционного строя',
      content: 'Республика Казахстан утверждает себя демократическим, светским, правовым и социальным государством.',
      explanation: 'Эта статья определяет основные принципы государственного устройства Казахстана.'
    },
    {
      number: 10,
      title: 'Государственная символика',
      content: 'Республика Казахстан имеет государственные символы - Флаг, Герб и Гимн.',
      explanation: 'Государственные символы отражают суверенитет и независимость нашего государства.'
    },
    {
      number: 12,
      title: 'Права и свободы человека',
      content: 'Права и свободы человека принадлежат каждому от рождения.',
      explanation: 'Конституция гарантирует равенство всех граждан перед законом.'
    },
    {
      number: 33,
      title: 'Право на образование',
      content: 'Граждане имеют право на образование. Среднее образование обязательно.',
      explanation: 'Государство гарантирует доступность образования для всех граждан.'
    },
    {
      number: 40,
      title: 'Президент Республики',
      content: 'Президент является главой государства, его высшим должностным лицом.',
      explanation: 'Президент определяет основные направления внутренней и внешней политики.'
    }
  ];

  const quizQuestions = [
    {
      question: 'В каком году была принята действующая Конституция Казахстана?',
      options: ['1993', '1995', '1997', '1991'],
      correct: 1
    },
    {
      question: 'Сколько статей содержит Конституция РК?',
      options: ['95', '98', '100', '102'],
      correct: 1
    },
    {
      question: 'Какой принцип НЕ закреплен в Конституции как основа государственного строя?',
      options: ['Демократический', 'Светский', 'Монархический', 'Правовой'],
      correct: 2
    },
    {
      question: 'На какой срок избирается Президент РК согласно действующей Конституции?',
      options: ['5 лет', '6 лет', '7 лет', '4 года'],
      correct: 2
    },
    {
      question: 'Сколько палат имеет Парламент Казахстана?',
      options: ['Одну', 'Две', 'Три', 'Четыре'],
      correct: 1
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correct ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Образовательный раздел
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Изучайте Конституцию
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ключевые статьи с пояснениями и интерактивный тест
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted rounded-xl p-1">
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'articles'
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Статьи Конституции
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'quiz'
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Квиз
            </button>
          </div>
        </div>

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.number} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold mr-3">
                    {article.number}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{article.title}</h3>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  {article.content}
                </p>
                <p className="text-sm text-muted-foreground">
                  {article.explanation}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="max-w-2xl mx-auto">
            {!quizStarted ? (
              <div className="text-center bg-card rounded-2xl p-8 border border-border">
                <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Тест на знание Конституции
                </h3>
                <p className="text-muted-foreground mb-8">
                  Проверьте свои знания и получите цифровой сертификат
                </p>
                <button
                  onClick={() => setQuizStarted(true)}
                  className="bg-secondary text-white px-8 py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Начать тест
                </button>
              </div>
            ) : quizCompleted ? (
              <div className="text-center bg-card rounded-2xl p-8 border border-border">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Тест завершен!
                </h3>
                <div className="text-4xl font-bold text-secondary mb-4">
                  {calculateScore()}/{quizQuestions.length}
                </div>
                <p className="text-muted-foreground mb-8">
                  Вы правильно ответили на {calculateScore()} из {quizQuestions.length} вопросов
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Скачать сертификат
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="border border-border text-foreground px-6 py-3 rounded-xl font-semibold hover:bg-muted transition-colors"
                  >
                    Пройти еще раз
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-muted-foreground">
                    Вопрос {currentQuestion + 1} из {quizQuestions.length}
                  </span>
                  <div className="w-32 h-2 bg-muted rounded-full">
                    <div 
                      className="h-full bg-secondary rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {quizQuestions[currentQuestion].question}
                </h3>
                
                <div className="space-y-3 mb-8">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left rounded-xl border transition-all ${
                        answers[currentQuestion] === index
                          ? 'border-secondary bg-secondary/10 text-secondary'
                          : 'border-border text-foreground hover:border-secondary/50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={nextQuestion}
                  disabled={answers[currentQuestion] === undefined}
                  className="w-full bg-secondary text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/90 transition-colors"
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'Завершить тест' : 'Следующий вопрос'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
