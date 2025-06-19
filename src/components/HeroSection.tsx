import React from 'react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Calendar,
      title: 'Интерактивная хроника',
      description: 'Изучите основные вехи конституционных реформ',
      href: '#timeline',
      color: 'from-primary to-primary/80'
    },
    {
      icon: BookOpen,
      title: 'Образование',
      description: 'Ключевые статьи Конституции с пояснениями',
      href: '#education',
      color: 'from-secondary to-amber-400'
    },
    {
      icon: Clock,
      title: 'Викторина',
      description: 'Проверьте знания на время',
      href: '#quiz',
      color: 'from-violet-500 to-violet-400'
    }
  ];

  const handleStartStudying = () => {
    const educationSection = document.getElementById('education');
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('activateEducationTab', { detail: 'articles' }));
      }, 500);
    }
  };

  const handleTakeTest = () => {
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEbook = () => {
    navigate('/ebook');
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-pattern pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">

          {/* 🔹 Заголовок + описание */}
          <Fade cascade damping={0.1} triggerOnce>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-[#00AFCA] rounded-full mr-2"></span>
              30-летие Конституции Республики Казахстан
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#00AFCA]">Конституция —</span><br />
              <span className="text-[#333333]">основа нашего будущего</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Изучайте историю конституционных реформ, проверяйте знания и участвуйте 
              в создании будущего Казахстана
            </p>
          </Fade>

          {/* 🔹 Кнопки */}
          <Slide direction="up" triggerOnce>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={handleStartStudying}
                className="bg-[#00AFCA] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center group"
              >
                Начать изучение
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleTakeTest}
                className="border-2 border-[#00AFCA] text-[#00AFCA] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00AFCA] hover:text-white transition-all duration-300"
              >
                Пройти тест
              </button>
              <button 
                onClick={handleEbook}
                className="border-2 border-[#00AFCA] text-[#00AFCA] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00AFCA] hover:text-white transition-all duration-300"
              >
                Конституция РК
              </button>
            </div>
          </Slide>

          {/* 🔹 Фичи */}
          <Zoom cascade damping={0.2} triggerOnce>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <a
                  key={feature.title}
                  href={feature.href}
                  className="group p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:scale-105 transition-all duration-300 text-left"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </a>
              ))}
            </div>
          </Zoom>

          {/* 🔹 Статистика */}
          <Slide direction="up" triggerOnce delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <CountUp end={30} duration={3} />
                </div>
                <div className="text-muted-foreground font-medium">лет Конституции</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  <CountUp end={5} duration={3} />
                </div>
                <div className="text-muted-foreground font-medium">крупных реформ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">
                  <CountUp end={99} duration={3} />
                </div>
                <div className="text-muted-foreground font-medium">статей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-violet-500 mb-2">
                  <CountUp end={20333530} duration={3} separator=" " />
                </div>
                <div className="text-muted-foreground font-medium">граждан</div>
              </div>
            </div>
          </Slide>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
