// src/pages/DetailedArticle.tsx
import ornamentBg from '../../components/assets/kz-flag.jfif'
import flag from '../../components/assets/flag.mp4'
import eagle from '../../components/assets/kzSymbols.svg'
import { useEffect } from 'react';
import backIcon from '../../components/assets/back.svg'
import Marquee from 'react-fast-marquee';
import ornamentBg2 from '../../components/assets/ornamentAnimated.svg'
import { Fade, Slide } from 'react-awesome-reveal';

const DetailedNine = () => {
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
            9. Государственная символика
          </div>
        </Fade>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto -mt-[140px] bg-card p-6 rounded-xl border border-border shadow-lg overflow-hidden">
        <Slide direction="left"  duration={400}  triggerOnce>
          <button
            onClick={() => window.history.back()}
            className="relative z-10 mb-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors cursor-pointer flex gap-2"
          >
            <img src={backIcon} width={8} alt="назад" />
            Назад
          </button>
        </Slide>

        {/* <h1 className="text-3xl font-bold mb-6 text-foreground">
          9. Государственная символика
        </h1> */}

        <p className="mb-4 text-foreground leading-relaxed text-lg">
          Республика Казахстан имеет государственные символы — Флаг, Герб и
          Гимн. Государственные символы отражают суверенитет и независимость
          нашего государства.
        </p>

        <p className="mb-4 text-foreground leading-relaxed">
          Государственная символика Республики Казахстан является важнейшей
          частью идентичности и суверенитета страны. Согласно статье 9
          Конституции Республики Казахстан, государственными символами являются:
          Государственный флаг, Государственный герб и Государственный гимн. Эти
          символы воплощают исторические традиции, национальные ценности и
          идеалы независимого Казахстана, подчеркивая его суверенитет и статус
          как полноценного участника международного сообщества.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Государственный флаг Республики Казахстан
        </h2>
        <p className="mb-2 font-semibold">Описание:</p>
        <p className="mb-4">
          Государственный флаг представляет собой прямоугольное полотнище
          голубого цвета с изображением в центре золотого солнца с 32 лучами,
          под которым — парящий орел (беркут). У древка размещен национальный
          орнамент “қошқар мүйіз” золотого цвета.
        </p>
        <p className="mb-2 font-semibold">Символика:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Голубой цвет — символ мира, ясного неба, единства народов
            Казахстана.
          </li>
          <li>
            Солнце — источник жизни и энергии, символ богатства и изобилия.
          </li>
          <li>Орел — символ свободы, силы и независимости.</li>
          <li>
            Орнамент — отображение культурных и художественных традиций
            казахского народа.
          </li>
        </ul>
        <p className="mb-4">
          <strong>Автор флага:</strong> Шакен Ниязбеков.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Государственный герб Республики Казахстан
        </h2>
        <p className="mb-2 font-semibold">Описание:</p>
        <p className="mb-4">
          Герб имеет форму круга и изображает шанырак (верхнюю часть юрты) в
          центре, от которого исходят лучи-коси, напоминающие солнечные лучи или
          жесткие балки. По бокам изображены мифические крылатые кони — тулпары.
          Внизу — надпись “QAZAQSTAN”.
        </p>
        <p className="mb-2 font-semibold">Символика:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Шанырак — символ родного дома, единства народов, устойчивости
            государства.
          </li>
          <li>
            Тулпары — олицетворение храбрости, стремления вперед, исторического
            наследия.
          </li>
          <li>
            Звезда и золото — стремление к светлому будущему, стабильности и
            процветанию.
          </li>
        </ul>
        <p className="mb-4">
          <strong>Авторы герба:</strong> Жандарбек Малибеков и Шота Уалиханов.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Государственный гимн Республики Казахстан
        </h2>
        <p className="mb-4">
          Современная версия Гимна была утверждена 6 января 2006 года. В её
          основу легла песня “Менің Қазақстаным” (“Мой Казахстан”), написанная в
          1956 году.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Музыка: Шамши Калдаяков</li>
          <li>
            Слова: Жумекен Нажимеденов и Нурсултан Назарбаев (внёс изменения в
            текст)
          </li>
        </ul>
        <p className="mb-4">
          <strong>Тематика гимна:</strong> выражает любовь к Родине, гордость за
          достижения страны, призыв к единству и патриотизму. Он вдохновляет
          граждан на труд во благо независимого Казахстана и символизирует
          национальное достоинство.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Юридическая основа
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Конституция Республики Казахстан (статья 9) — закрепляет наличие
            государственной символики.
          </li>
          <li>
            Конституционный закон “О государственных символах Республики
            Казахстан” от 4 июня 2007 года (с изменениями) — регламентирует
            использование и защиту символов.
          </li>
          <li>
            Кодекс об административных правонарушениях РК предусматривает
            ответственность за неуважительное отношение к государственной
            символике.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">
          Значение государственной символики
        </h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Отражают независимость и суверенитет;</li>
          <li>Формируют патриотическое сознание граждан;</li>
          <li>
            Используются при официальных церемониях, в органах власти, в
            международных отношениях;
          </li>
          <li>Объединяют народ вокруг национальной идеи и ценностей.</li>
        </ul>

        <img
          src={eagle}
          className="absolute inset-0 w-full h-full object-cover opacity-[0.07] z-0 pointer-events-none"
        ></img>
      </div>

      <div className="absolute inset-0 top-10 bg-black opacity-15 z-0 pointer-events-none h-[200px] sm:h-[300px]" />
    </div>
  );
};

export default DetailedNine;
