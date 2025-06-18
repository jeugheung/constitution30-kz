// src/pages/DetailedArticle40.tsx
import ornamentBg from '../../components/assets/kz-flag.jfif'
import flag from '../../components/assets/flag.mp4'
import eagle from '../../components/assets/kzSymbols.svg'
import { useEffect } from 'react';
import backIcon from '../../components/assets/back.svg'
import Marquee from 'react-fast-marquee';
import ornamentBg2 from '../../components/assets/ornamentAnimated.svg'
import { Fade, Slide } from 'react-awesome-reveal';

const DetailedArticle40 = () => {
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

      {/* <div className="absolute top-2 left-0 w-full h-[250px] sm:h-[300px] z-10 flex items-center justify-center">
        <div className=" px-6 py-4 rounded-xl text-white text-2xl sm:text-4xl font-bold shadow-lg backdrop-blur-sm">
          40. Президент Республики
        </div>
      </div> */}

      <div className="absolute top-2 left-0 w-full h-[250px] sm:h-[300px] z-10 flex items-center justify-center">
        <Fade cascade damping={0.15} triggerOnce>
          <div className="px-6 py-4 rounded-xl text-white text-2xl sm:text-4xl font-bold shadow-lg backdrop-blur-sm">
            40. Президент Республики
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

        {/* <h1 className="text-3xl font-bold mb-6 text-foreground">
          40. Президент Республики
        </h1> */}

        <p className="mb-4 text-foreground leading-relaxed text-lg">
          Президент является главой государства, его высшим должностным лицом.
          Президент определяет основные направления внутренней и внешней
          политики.
        </p>

        <p className="mb-4 text-foreground leading-relaxed">
          Президент Республики Казахстан — это глава государства, символ
          единства народа и гарант Конституции. Он обладает высшими полномочиями
          в системе органов государственной власти и играет ключевую роль в
          формировании внутренней и внешней политики страны.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Конституционные основы
        </h2>
        <p className="mb-4">
          <strong>Статья 40 Конституции Республики Казахстан:</strong>
          <br />
          1. Президент Республики Казахстан является главой государства, его
          высшим должностным лицом, определяющим основные направления внутренней
          и внешней политики государства и представляющим Казахстан внутри
          страны и в международных отношениях.
          <br />
          2. Президент — символ и гарант единства народа, государственной
          власти, неприкосновенности Конституции, прав и свобод человека и
          гражданина.
          <br />
          3. Президент обеспечивает согласованное функционирование всех ветвей
          государственной власти и ответственность органов перед народом.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Основные полномочия Президента РК
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          1. Формирование внутренней политики
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Определяет стратегические направления развития страны</li>
          <li>Инициирует государственные реформы</li>
          <li>Издаёт указы, имеющие силу закона (в определённых случаях)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          2. Формирование внешней политики
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Представляет Казахстан на международной арене</li>
          <li>Подписывает международные договоры</li>
          <li>Назначает и отзывает послов</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          3. Назначения и контроль
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Назначает Премьер-Министра (с согласия Мажилиса)</li>
          <li>
            Назначает министров, акимов областей и города республиканского
            значения
          </li>
          <li>Назначает судей Верховного Суда (с согласия Сената)</li>
          <li>
            Назначает и освобождает от должности председателя Нацбанка,
            Генпрокурора, председателя КНБ
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">
          4. Гарантия стабильности и правопорядка
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Президент — Верховный Главнокомандующий Вооружёнными силами</li>
          <li>Может вводить чрезвычайное или военное положение</li>
          <li>Принимает меры по обеспечению государственной безопасности</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Избрание Президента
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Выборы — всеобщие, равные, прямые, при тайном голосовании</li>
          <li>Срок полномочий — 7 лет, без права переизбрания</li>
          <li>
            Требования к кандидату:
            <ul className="list-disc pl-6 mt-2">
              <li>Гражданин РК по рождению</li>
              <li>Возраст — не моложе 40 лет</li>
              <li>Свободное владение государственным языком</li>
              <li>Постоянное проживание в РК не менее 15 лет</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Президент и система сдержек и противовесов
        </h2>
        <p className="mb-4">
          Хотя Президент обладает широкими полномочиями, его деятельность
          ограничена Конституцией, а также:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Парламентским контролем</li>
          <li>Независимостью судебной власти</li>
          <li>Деятельностью Конституционного Суда</li>
          <li>Обществом через выборы, СМИ и гражданский сектор</li>
        </ul>

        <p className="mb-6">
          <strong>Президент Республики Казахстан:</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>Является верховным представителем народа и государства</li>
            <li>Определяет стратегический курс страны</li>
            <li>Гарантирует единство, стабильность и соблюдение Конституции</li>
            <li>Обеспечивает слаженность работы всех ветвей власти</li>
          </ul>
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

export default DetailedArticle40;
