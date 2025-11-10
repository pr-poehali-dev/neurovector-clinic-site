import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const services = [
    {
      icon: "Brain",
      title: "Нейроразвитие",
      description: "Комплексная диагностика и коррекция задержек психомоторного развития"
    },
    {
      icon: "Heart",
      title: "Психиатрия",
      description: "Профессиональная помощь детям с эмоциональными и поведенческими нарушениями"
    },
    {
      icon: "Users",
      title: "Психотерапия",
      description: "Индивидуальная и семейная психотерапия с доказанной эффективностью"
    },
    {
      icon: "Sparkles",
      title: "РАС",
      description: "Специализированная работа с расстройствами аутистического спектра"
    }
  ];

  const team = [
    {
      name: "Доктор Анна Соколова",
      role: "Детский психиатр, невролог",
      experience: "15 лет опыта работы с РАС"
    },
    {
      name: "Доктор Михаил Петров",
      role: "Клинический психолог",
      experience: "12 лет в детской психотерапии"
    },
    {
      name: "Доктор Елена Иванова",
      role: "Нейропсихолог",
      experience: "10 лет в нейрокоррекции"
    }
  ];

  const articles = [
    {
      title: "Ранние признаки РАС: на что обратить внимание",
      date: "15 октября 2024",
      excerpt: "Раннее выявление расстройств аутистического спектра позволяет начать коррекцию в наиболее благоприятный период развития ребенка..."
    },
    {
      title: "Как поддержать развитие речи у ребенка",
      date: "8 октября 2024",
      excerpt: "Речевое развитие - важнейший показатель общего развития ребенка. Рассказываем о методах стимуляции речи в домашних условиях..."
    },
    {
      title: "Сенсорная интеграция: что это и зачем нужна",
      date: "1 октября 2024",
      excerpt: "Сенсорная интеграция помогает детям правильно обрабатывать информацию от органов чувств и адекватно реагировать на окружающий мир..."
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Brain" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">NeuroVector</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'about' ? 'text-primary' : 'text-foreground'}`}
              >
                О клинике
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'blog' ? 'text-primary' : 'text-foreground'}`}
              >
                Блог и статьи
              </button>
            </div>
            <Button className="hidden md:flex">
              Записаться на приём
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Заботливая поддержка 
                <span className="text-primary"> развития</span> вашего ребёнка
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Специализированная клиника нейроразвития, психиатрии и психотерапии. 
                Помогаем детям с РАС и другими особенностями развития раскрыть свой потенциал.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить нам
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/d5908dd5-51f8-41d6-95f3-34a3ea7454ad/files/59797ea5-a238-4ad2-a71f-2725193f71eb.jpg" 
                alt="NeuroVector Clinic" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши направления</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к развитию и здоровью ребёнка
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/d5908dd5-51f8-41d6-95f3-34a3ea7454ad/files/3ca3e5cb-7901-401a-a05f-864a1a3b65e7.jpg" 
                alt="О клинике" 
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">О клинике NeuroVector</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы специализируемся на работе с детьми с особенностями нейроразвития, 
                включая расстройства аутистического спектра, СДВГ, задержки развития и эмоциональные нарушения.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Наш подход основан на доказательных методах и индивидуальной программе для каждого ребёнка. 
                Мы работаем в тесном контакте с семьёй, обеспечивая непрерывную поддержку и обучение родителей.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Доказательная медицина</h3>
                    <p className="text-muted-foreground">Методы с подтвержденной эффективностью</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Индивидуальный подход</h3>
                    <p className="text-muted-foreground">Программа разрабатывается для каждого ребёнка</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Поддержка семьи</h3>
                    <p className="text-muted-foreground">Обучение и консультации для родителей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">Наша команда</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={40} />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-base">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Блог и статьи</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полезная информация для родителей о развитии детей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Button variant="link" className="p-0">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Готовы начать путь к развитию?
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Запишитесь на первую консультацию и получите профессиональную оценку 
              развития вашего ребёнка и индивидуальный план работы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-foreground/5 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Brain" className="text-primary" size={28} />
                <span className="text-xl font-bold">NeuroVector</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Детская клиника нейроразвития, психиатрии и психотерапии
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary transition-colors">
                    Главная
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
                    О клинике
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('blog')} className="text-muted-foreground hover:text-primary transition-colors">
                    Блог и статьи
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@neurovector.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Режим работы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб: 10:00 - 18:00</li>
                <li>Вс: выходной</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 NeuroVector. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
