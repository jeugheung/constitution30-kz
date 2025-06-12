
import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const TimelineSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);

  const timelineEvents = [
    {
      year: 1995,
      date: '30 августа',
      title: 'Принятие Конституции',
      description: 'Принята действующая Конституция Республики Казахстан на всенародном референдуме.',
      details: 'Конституция была принята 89,6% голосов участников референдума. Это стало важнейшим шагом в становлении независимого Казахстана.',
      quote: '"Мы, народ Казахстана, объединенный общей исторической судьбой..."',
      image: '/placeholder.svg'
    },
    {
      year: 1998,
      date: '21 октября',
      title: 'Первые поправки',
      description: 'Внесены изменения, касающиеся сроков полномочий Президента и Парламента.',
      details: 'Срок полномочий Президента увеличен с 5 до 7 лет, а депутатов Мажилиса — с 4 до 5 лет.',
      quote: '"Стабильность власти — основа развития государства"',
      image: '/placeholder.svg'
    },
    {
      year: 2007,
      date: '18 мая',
      title: 'Демократические реформы',
      description: 'Расширены полномочия Парламента и политических партий.',
      details: 'Введены новые принципы формирования правительства с участием парламентского большинства.',
      quote: '"Развитие демократических институтов — наш приоритет"',
      image: '/placeholder.svg'
    },
    {
      year: 2017,
      date: '10 марта',
      title: 'Конституционная реформа',
      description: 'Перераспределение полномочий между ветвями власти.',
      details: 'Усилена роль Парламента в формировании правительства и контроле за его деятельностью.',
      quote: '"Новый этап демократического развития Казахстана"',
      image: '/placeholder.svg'
    },
    {
      year: 2022,
      date: '5 июня',
      title: 'Новый Казахстан',
      description: 'Масштабные конституционные изменения для построения Нового Казахстана.',
      details: 'Принято 33 поправки, направленные на демократизацию политической системы и защиту прав человека.',
      quote: '"Справедливый Казахстан — наша общая цель"',
      image: '/placeholder.svg'
    }
  ];

  const nextEvent = () => {
    setSelectedEvent((prev) => (prev + 1) % timelineEvents.length);
  };

  const prevEvent = () => {
    setSelectedEvent((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
  };

  return (
    <section id="timeline" className="py-20 ornament-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Интерактивная хроника
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            30 лет конституционного развития
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изучите ключевые моменты развития Основного закона Казахстана
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-12">
          <div className="flex justify-between items-center overflow-x-auto pb-4">
            {timelineEvents.map((event, index) => (
              <button
                key={event.year}
                onClick={() => setSelectedEvent(index)}
                className={`flex-shrink-0 mx-2 p-4 rounded-xl transition-all duration-300 ${
                  selectedEvent === index
                    ? 'bg-[#00AFCA] text-white shadow-lg scale-105'
                    : 'bg-white text-foreground hover:bg-primary/10 border border-border'
                }`}
              >
                <div className="text-2xl font-bold mb-1">{event.year}</div>
                <div className="text-sm opacity-80">{event.date}</div>
              </button>
            ))}
          </div>
          
          {/* Progress Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-border -z-10">
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${((selectedEvent + 1) / timelineEvents.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <div className="text-primary font-semibold text-lg mb-2">
                  {timelineEvents[selectedEvent].year} • {timelineEvents[selectedEvent].date}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {timelineEvents[selectedEvent].title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {timelineEvents[selectedEvent].description}
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  {timelineEvents[selectedEvent].details}
                </p>
                
                {/* Quote */}
                <blockquote className="border-l-4 border-secondary pl-4 italic text-muted-foreground">
                  {timelineEvents[selectedEvent].quote}
                </blockquote>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevEvent}
                  className="flex items-center px-4 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Предыдущее
                </button>
                
                <div className="text-sm text-muted-foreground">
                  {selectedEvent + 1} из {timelineEvents.length}
                </div>
                
                <button
                  onClick={nextEvent}
                  className="flex items-center px-4 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  Следующее
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="bg-[#bdbdbd33] from-primary/10 to-secondary/10 flex items-center justify-center p-8 lg:p-12">
              <div className="w-full max-w-md">
                <div className="aspect-square bg-white/50 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-4">
                      {timelineEvents[selectedEvent].year}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {timelineEvents[selectedEvent].date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
