// src/pages/DetailedArticle.tsx
import ornamentBg from '../../components/assets/kz-flag.jfif'
import flag from '../../components/assets/flag.mp4'
import eagle from '../../components/assets/kzSymbols.svg'
import { useEffect } from 'react';
import backIcon from '../../components/assets/back.svg'

const DetailedFirst = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='relative hero-pattern pl-2 pr-2 pb-8' >

      <div
        className="w-full h-[350px] bg-cover "
      />

      <video
        className="absolute top-0 left-0 w-full h-[200px] object-fill sm:h-[300px]"
        autoPlay
        muted
        loop
        playsInline
        >
          <source src={flag} type="video/mp4" />
          Ваш браузер не поддерживает видео.
      </video>
      
      <div className="relative z-10 max-w-[1200px] mx-auto -mt-[250px] bg-card p-6 rounded-xl border border-border shadow-lg overflow-hidden">
        <button
          onClick={() => window.history.back()}
          className="relative z-10 mb-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors cursor-pointer flex gap-2"
        >
          <img src={backIcon} width={8}></img>
          Назад
        </button>

        <h1 className="text-3xl font-bold mb-6 text-foreground">
          1. Основы конституционного строя
        </h1>
        <p className="mb-4 text-foreground leading-relaxed text-lg">
          Республика Казахстан утверждает себя демократическим, светским, правовым и социальным государством.
          Эта статья определяет основные принципы государственного устройства Казахстана.
        </p>
        <p className="mb-4 text-foreground leading-relaxed">
          Основы конституционного строя Республики Казахстан — это фундаментальные принципы, на которых базируется государственная система страны. Эти принципы закреплены в Конституции Республики Казахстан — основном законе, принятым на республиканском референдуме 30 августа 1995 года. Особенно важное значение имеет статья 1 Конституции, в которой говорится:
        </p>
        <blockquote className="italic border-l-4 border-primary pl-4 mb-4">
          "Республика Казахстан утверждает себя демократическим, светским, правовым и социальным государством, высшими ценностями которого являются человек, его жизнь, права и свободы."
        </blockquote>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">1. Демократическое государство</h2>
        <p className="mb-2">Что означает:</p>
        <p className="mb-4">
          Казахстан признает власть народа как источник государственной власти. Все институты государственной власти формируются на основе волеизъявления граждан — через выборы, референдумы, участие в управлении государственными делами.
        </p>
        <p className="mb-2 font-semibold">Закреплено в:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Статья 3 Конституции РК: "Единственным источником государственной власти является народ."</li>
          <li>Избирательное законодательство РК: гарантирует проведение честных, свободных и периодических выборов.</li>
        </ul>
        <p className="mb-2 font-semibold">Формы реализации демократии:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>прямое участие (референдумы);</li>
          <li>представительная демократия (выборы депутатов в Мажилис, Маслихаты и др.);</li>
          <li>право на объединение в партии и НПО;</li>
          <li>свобода выражения мнений.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">2. Светское государство</h2>
        <p className="mb-2">Что означает:</p>
        <p className="mb-4">
          Государство отделено от религии, и ни одна религия не может устанавливаться как государственная или обязательная. При этом Казахстан признает свободу совести, обеспечивая право каждого человека исповедовать любую религию или не исповедовать никакую.
        </p>
        <p className="mb-2 font-semibold">Закреплено в:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Статья 1 Конституции — принцип светскости;</li>
          <li>Статья 22 Конституции РК — свобода совести;</li>
          <li>Закон РК "О религиозной деятельности и религиозных объединениях" (2011 г.).</li>
        </ul>
        <p className="mb-2 font-semibold">Практика:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Регистрация религиозных объединений;</li>
          <li>Запрет на религиозную пропаганду в государственных организациях;</li>
          <li>Разделение функций государства и религиозных институтов.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">3. Правовое государство</h2>
        <p className="mb-2">Что означает:</p>
        <p className="mb-4">
          Все органы власти, должностные лица и граждане обязаны соблюдать законы. В основе правового государства лежит верховенство закона, разделение властей, независимый суд, защита прав человека, и гарантии справедливости.
        </p>
        <p className="mb-2 font-semibold">Закреплено в:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Статья 1 Конституции РК — правовой характер государства;</li>
          <li>Статья 4 — законы и иные нормативные акты не должны противоречить Конституции;</li>
          <li>Статья 7 — государственные органы действуют в пределах своей компетенции;</li>
          <li>Конституционный суд РК — гарант верховенства Конституции.</li>
        </ul>
        <p className="mb-2 font-semibold">Принципы:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Законность;</li>
          <li>Правовая защита прав и свобод;</li>
          <li>Доступ к правосудию;</li>
          <li>Ответственность государства перед гражданином и наоборот.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">4. Социальное государство</h2>
        <p className="mb-2">Что означает:</p>
        <p className="mb-4">
          Казахстан берет на себя обязательства по социальной защите населения, содействию достойному уровню жизни, доступу к образованию, здравоохранению, жилью, поддержке малоимущих, инвалидов, пенсионеров, молодежи и др.
        </p>
        <p className="mb-2 font-semibold">Закреплено в:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Статья 1 Конституции РК — социальный характер государства;</li>
          <li>Статья 28 — право на социальное обеспечение;</li>
          <li>Государственные программы: "Саламатты Қазақстан", "Жайлы мектеп", "Ұлттық қор – балаларға", "Нацпроект по поддержке молодежи" и др.</li>
        </ul>
        <p className="mb-2 font-semibold">Механизмы:</p>
        <ul className="list-disc pl-6">
          <li>Пенсии, пособия, социальные выплаты;</li>
          <li>Государственные образовательные и медицинские услуги;</li>
          <li>Программы трудоустройства и социальной адаптации.</li>
        </ul>

        <p className="mt-6 text-foreground">
          Конституционный строй Республики Казахстан базируется на признании человека, его жизни, прав и свобод как высших ценностей государства. Каждый из принципов — демократичность, светскость, правовость и социальность — тесно взаимосвязан и направлен на построение устойчивого, справедливого и открытого общества.
        </p>

        <img src={eagle} className='absolute inset-0 w-full h-full object-cover opacity-[0.07] z-0'></img>
      </div>

      {/* Подложка */}
      <div className="absolute inset-0 bg-black opacity-15 z-0 pointer-events-none h-[200px] sm:h-[300px]" />

     
    </div>
  );
};

export default DetailedFirst;
