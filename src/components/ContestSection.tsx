
import React, { useState } from 'react';
import { Trophy, Edit, Send, CheckCircle, Calendar, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContestSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    city: '',
    title: '',
    essay: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки эссе
    console.log('Essay submitted:', formData);
    setIsSubmitted(true);
  };

  const contestInfo = [
    {
      icon: Calendar,
      title: 'Сроки подачи',
      description: 'До 31 декабря 2024 года',
      color: 'from-primary to-primary/80'
    },
    {
      icon: Users,
      title: 'Возрастные категории',
      description: '14-18 лет, 19-25 лет, 26+ лет',
      color: 'from-secondary to-amber-400'
    },
    {
      icon: Award,
      title: 'Призовой фонд',
      description: '1 000 000 тенге',
      color: 'from-emerald-500 to-emerald-400'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contest" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Эссе успешно отправлено!</h2>
            <p className="text-muted-foreground mb-6">
              Спасибо за участие в конкурсе. Результаты будут объявлены в январе 2025 года.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
            >
              Написать новое эссе
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contest" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 font-medium text-sm mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            Конкурс эссе
          </div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="kz-text-gradient">Конституция</span> в моей жизни
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Поделитесь своим видением роли Конституции в современном Казахстане и жизни молодого поколения
          </p>
        </div>

        {/* Contest Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contestInfo.map((info, index) => (
            <Card key={info.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{info.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contest Form */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Edit className="w-5 h-5 mr-2" />
                Форма участия в конкурсе
              </CardTitle>
              <CardDescription>
                Заполните все поля и напишите эссе объемом 500-1500 слов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя и фамилия *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Возраст *</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      min="14"
                      max="100"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      placeholder="Ваш возраст"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Город *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Ваш город"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="title">Название эссе *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    placeholder="Придумайте название для вашего эссе"
                  />
                </div>

                <div>
                  <Label htmlFor="essay">Текст эссе *</Label>
                  <Textarea
                    id="essay"
                    name="essay"
                    value={formData.essay}
                    onChange={handleInputChange}
                    required
                    rows={12}
                    placeholder="Напишите ваше эссе здесь... (500-1500 слов)
                    
Примерные темы для размышления:
• Как Конституция влияет на вашу повседневную жизнь?
• Какие права и свободы наиболее важны для молодого поколения?
• Как вы видите развитие конституционных принципов в будущем?
• Роль молодежи в укреплении конституционного строя"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Количество слов: {formData.essay.split(' ').filter(word => word.length > 0).length}
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full kz-gradient text-white"
                  disabled={formData.essay.split(' ').filter(word => word.length > 0).length < 50}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Отправить эссе на конкурс
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contest Rules */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Правила конкурса</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Требования к эссе:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Объем: 500-1500 слов</li>
                    <li>• Оригинальность текста</li>
                    <li>• Соответствие теме</li>
                    <li>• Грамотность изложения</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Критерии оценки:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Понимание темы (30%)</li>
                    <li>• Творческий подход (25%)</li>
                    <li>• Аргументация (25%)</li>
                    <li>• Языковое оформление (20%)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContestSection;
