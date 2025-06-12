// src/pages/DetailedArticle.tsx
import ornamentBg from '../../components/assets/kz-flag.jfif'
import flag from '../../components/assets/flag.mp4'
import eagle from '../../components/assets/kzSymbols.svg'
import { useEffect } from 'react';
import backIcon from '../../components/assets/back.svg'

const DetailedThirty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative hero-pattern pl-2 pr-2 pb-8' >

      <div className="w-full h-[350px] bg-cover " />

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
          30. Право на образование
        </h1>

        <p className="mb-4 text-foreground leading-relaxed text-lg">
          Граждане имеют право на образование. Среднее образование обязательно. Государство гарантирует доступность образования для всех граждан.
        </p>

        <p className="mb-4 text-foreground leading-relaxed">
          Право на образование в Республике Казахстан — одно из важнейших социальных прав, закреплённых в Конституции и регулируемых отраслевыми законами. Оно гарантирует каждому гражданину возможность получить образование вне зависимости от социального положения, национальности, вероисповедания и других признаков.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">Конституционная основа</h2>
        <p className="mb-4">
          <strong>Статья 30 Конституции Республики Казахстан:</strong><br />
          1. Граждане имеют право на образование.<br />
          2. Среднее образование обязательно.<br />
          3. Государство гарантирует бесплатность среднего образования в государственных учебных заведениях.<br />
          4. Граждане имеют право на получение на конкурсной основе бесплатного высшего образования в государственных учебных заведениях.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">Что включает в себя право на образование</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">1. Обязательность среднего образования</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>В Казахстане среднее образование — обязательно.</li>
          <li>Оно включает начальное, основное среднее и общее среднее образование.</li>
          <li>Родители обязаны обеспечить обучение своих детей до завершения полного среднего образования.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">2. Доступность образования</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Образование должно быть доступным и открытым для всех без дискриминации.</li>
          <li>Государство создаёт условия для получения образования:
            <ul className="list-disc pl-6 mt-2">
              <li>в сельской местности и отдалённых регионах,</li>
              <li>детьми с особыми образовательными потребностями,</li>
              <li>малообеспеченными и социально уязвимыми группами.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">3. Бесплатность государственного образования</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Образование в государственных школах и колледжах — бесплатное.</li>
          <li>Высшее образование может быть бесплатным на конкурсной основе (по грантам).</li>
          <li>Существуют меры поддержки: стипендии, питание, транспорт, учебники, льготы для инвалидов, сирот, многодетных семей и др.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">Законы и гарантии</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Конституция РК (ст. 30)</li>
          <li>Закон РК «Об образовании»</li>
          <li>Государственная программа развития образования</li>
          <li>Международные договоры, ратифицированные Казахстаном (например, Конвенция ООН о правах ребёнка)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">Уровни образования в Казахстане</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border border-border text-left text-sm">
            <thead className="bg-muted text-foreground">
              <tr>
                <th className="px-4 py-2 border border-border">Уровень образования</th>
                <th className="px-4 py-2 border border-border">Обязательность</th>
                <th className="px-4 py-2 border border-border">Оплата</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-border">Дошкольное</td>
                <td className="px-4 py-2 border border-border">Нет</td>
                <td className="px-4 py-2 border border-border">Частично платное / бесплатное</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-border">Начальное (1–4 классы)</td>
                <td className="px-4 py-2 border border-border">Да</td>
                <td className="px-4 py-2 border border-border">Бесплатное (в гос. школах)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-border">Основное среднее (5–9)</td>
                <td className="px-4 py-2 border border-border">Да</td>
                <td className="px-4 py-2 border border-border">Бесплатное (в гос. школах)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-border">Общее среднее (10–11/12)</td>
                <td className="px-4 py-2 border border-border">Да</td>
                <td className="px-4 py-2 border border-border">Бесплатное (в гос. школах)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-border">Техническое и проф.</td>
                <td className="px-4 py-2 border border-border">Нет</td>
                <td className="px-4 py-2 border border-border">Бесплатное (по грантам)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-border">Высшее образование</td>
                <td className="px-4 py-2 border border-border">Нет</td>
                <td className="px-4 py-2 border border-border">Бесплатное (по грантам) или платное</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-foreground">Государственная поддержка образования</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Государственные образовательные гранты</li>
          <li>Стипендии и общежития для студентов</li>
          <li>Инклюзивное образование (для детей с инвалидностью)</li>
          <li>Школьное питание, обеспечение учебниками</li>
          <li>Цифровизация образования: платформы Daryn, BilimLand, OpenU.kz</li>
        </ul>

        <p className="mb-6">
          <strong>Право на образование в Казахстане:</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>Гарантирует равный доступ к знаниям и развитию способностей.</li>
            <li>Обеспечивает обязательное и бесплатное среднее образование.</li>
            <li>Создает основу для личного и профессионального роста граждан.</li>
            <li>Поддерживается государственной политикой и социальными мерами.</li>
          </ul>
        </p>

        <img src={eagle} className='absolute inset-0 w-full h-full object-cover opacity-[0.07] z-0'></img>
      </div>

      <div className="absolute inset-0 bg-black opacity-15 z-0 pointer-events-none h-[200px] sm:h-[300px]" />
    </div>
  );
};

export default DetailedThirty;
