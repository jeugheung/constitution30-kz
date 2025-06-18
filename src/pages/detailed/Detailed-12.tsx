// src/pages/DetailedArticle.tsx
import ornamentBg from '../../components/assets/kz-flag.jfif'
import flag from '../../components/assets/flag.mp4'
import eagle from '../../components/assets/kzSymbols.svg'
import { useEffect } from 'react';
import backIcon from '../../components/assets/back.svg'
import Marquee from 'react-fast-marquee';
import ornamentBg2 from '../../components/assets/ornamentAnimated.svg'
import { Fade, Slide } from 'react-awesome-reveal';

const DetailedTwelve = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative hero-pattern pb-8">
      {/* <Header /> */}
      <div className="relative w-full h-1">
        {/* Полупрозрачный фон */}
        <div className="absolute inset-0 pointer-events-none z-0" />

        {/* Содержимое поверх — полностью непрозрачное */}
        <div className="relative z-10 bg-[#1681B8]">
          <Marquee gradient={true} speed={50} gradientColor={"#1681B8"}>
            <img src={ornamentBg2} className="h-10 w-auto" alt="ornament" />
            <img src={ornamentBg2} className="h-10 w-auto" alt="ornament" />
            <img src={ornamentBg2} className="h-10 w-auto" alt="ornament" />
            <img src={ornamentBg2} className="h-10 w-auto" alt="ornament" />
            <img src={ornamentBg2} className="h-10 w-auto" alt="ornament" />
            <img src={ornamentBg2} className="h-10 w-auto" alt="ornament" />
          </Marquee>
        </div>
      </div>

      <div className="w-full h-[350px] bg-cover " />

      <video
        className="absolute top-10 left-0 w-full h-[200px] object-fill sm:h-[300px]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={flag} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      <div className="absolute top-2 left-0 w-full h-[250px] sm:h-[300px] z-10 flex items-center justify-center">
        <Fade cascade damping={0.15} triggerOnce>
          <div className="px-6 py-4 rounded-xl text-white text-2xl sm:text-4xl font-bold shadow-lg backdrop-blur-sm">
           12. Права и свободы человека
          </div>
        </Fade>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto -mt-[140px] bg-card p-6 rounded-xl border border-border shadow-lg overflow-hidden">
        <Slide direction="left" duration={400} triggerOnce>
          <button
            onClick={() => window.history.back()}
            className="relative z-10 mb-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors cursor-pointer flex gap-2"
          >
            <img src={backIcon} width={8} alt="назад" />
            Назад
          </button>
        </Slide>

        <p className="mb-4 text-foreground leading-relaxed text-lg">
          Права и свободы человека принадлежат каждому от рождения. Конституция
          гарантирует равенство всех граждан перед законом.
        </p>

        <p className="mb-4 text-foreground leading-relaxed">
          Права и свободы человека в Республике Казахстан — это основополагающие
          принципы, лежащие в основе конституционного строя и правового
          государства. Они закреплены в Разделе II Конституции Республики
          Казахстан (статьи 12–39) и отражают стремление государства обеспечить
          достоинство, свободу и равенство каждого человека.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Основные положения
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          1. Природный характер прав и свобод
        </h3>
        <p className="mb-2">
          <strong>Статья 12 Конституции РК:</strong>
          <br />
          "В Республике Казахстан признаются и гарантируются права и свободы
          человека и гражданина согласно Конституции. Права и свободы человека
          принадлежат каждому от рождения, признаются абсолютными и
          неотчуждаемыми."
        </p>
        <p className="mb-4">
          <em>Что это означает:</em> Человек обладает правами с момента
          рождения, и государство не дает ему их — оно признает и охраняет эти
          права. Они неотъемлемы и не могут быть произвольно ограничены.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          2. Равенство перед законом
        </h3>
        <p className="mb-2">
          <strong>Статья 14 Конституции РК:</strong>
          <br />
          "Все равны перед законом и судом. Никто не может подвергаться
          какой-либо дискриминации по мотивам происхождения, социального,
          должностного и имущественного положения, пола, расы, национальности,
          языка, отношения к религии, убеждений, места жительства или иным
          обстоятельствам."
        </p>
        <p className="mb-2">Государство гарантирует:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Равные права для мужчин и женщин.</li>
          <li>Запрет любой формы дискриминации.</li>
          <li>Право на защиту со стороны независимого и справедливого суда.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Основные права и свободы, закрепленные в Конституции
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          Гражданские (личные) права:
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Право на жизнь (ст.15)</li>
          <li>Право на свободу и личную неприкосновенность (ст.16)</li>
          <li>Неприкосновенность жилища (ст.18)</li>
          <li>Свобода совести и вероисповедания (ст.22)</li>
          <li>Свобода слова и творчества (ст.20)</li>
          <li>
            Право на судебную защиту, презумпцию невиновности (ст.13, ст.77)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          Политические права:
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Право участвовать в управлении государством (ст.33)</li>
          <li>Право избирать и быть избранным (ст.33)</li>
          <li>Право на мирные собрания (ст.32)</li>
          <li>Право на объединение (создание партий, НПО — ст.23)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          Социально-экономические права:
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Право на труд и свободный выбор профессии (ст.24)</li>
          <li>Право на отдых (оплачиваемый отпуск, ст.24)</li>
          <li>Право на социальное обеспечение (ст.28)</li>
          <li>Право на образование (ст.30)</li>
          <li>Право на охрану здоровья (ст.29)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          Культурные права:
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Право на участие в культурной жизни</li>
          <li>
            Право на пользование родным языком и свободный выбор языка общения
            (ст.19)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Гарантии прав и свобод
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Обеспечивать судебную защиту прав (ст.13)</li>
          <li>Обеспечивать реальное равенство прав</li>
          <li>Гарантировать право на обращение в госорганы (ст.33)</li>
          <li>
            Не допускать отмены или ограничения прав даже в условиях
            чрезвычайного положения, за исключением строго определённых случаев
            (ст.39)
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Права и свободы человека в Казахстане:
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Принадлежат каждому от рождения</li>
          <li>Являются основой всей правовой системы</li>
          <li>
            Гарантированы Конституцией и международными договорами (например,
            Всеобщей декларацией прав человека)
          </li>
        </ul>

        <p className="mb-6">
          Они направлены на защиту достоинства личности, развитие гражданского
          общества и построение справедливого государства.
        </p>

        <img
          src={eagle}
          className="absolute inset-0 w-full h-full object-cover opacity-[0.07] z-0 pointer-events-none"
        ></img>
      </div>

      <div className="absolute inset-0 top-10 bg-black opacity-15 z-0 pointer-events-none h-[200px] sm:h-[300px]" />
    </div>
  );
};

export default DetailedTwelve;
