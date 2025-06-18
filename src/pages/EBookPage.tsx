import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import styles from './EbookPage.module.css';
import bookLogo from '../components/assets/bookLogo.svg';
import logoHover from '../components/assets/logoHover.svg';
import symbolsLogo from '../components/assets/kzSymbols.svg';
import flagHover from '../components/assets/flagHover.svg';
import freedomLogo from '../components/assets/freedomLogo.svg';
import freedomHover from '../components/assets/freedomHover.svg';
import educatinoLogo from '../components/assets/edu-logo.svg';
import eduHover from '../components/assets/eduHover.svg';
import akordaLogo from '../components/assets/akorda.svg';
import akordaHover from '../components/assets/akordaHover.svg';

const EbookPage = () => {
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  const articles = [
    {
      number: 1,
      title: 'Основы конституционного строя',
      content: 'Республика Казахстан утверждает себя демократическим, светским, правовым и социальным государством.',
      explanation: 'Эта статья определяет основные принципы государственного устройства Казахстана.',
      logo: bookLogo,
      logoHover: logoHover
    },
    {
      number: 9,
      title: 'Государственная символика',
      content: 'Республика Казахстан имеет государственные символы - Флаг, Герб и Гимн.',
      explanation: 'Государственные символы отражают суверенитет и независимость нашего государства.',
      logo: symbolsLogo,
      logoHover: flagHover
    },
    {
      number: 12,
      title: 'Права и свободы человека',
      content: 'Права и свободы человека принадлежат каждому от рождения.',
      explanation: 'Конституция гарантирует равенство всех граждан перед законом.',
      logo: freedomLogo,
      logoHover: freedomHover
    },
    {
      number: 30,
      title: 'Право на образование',
      content: 'Граждане имеют право на образование. Среднее образование обязательно.',
      explanation: 'Государство гарантирует доступность образования для всех граждан.',
      logo: educatinoLogo,
      logoHover: eduHover
    },
    {
      number: 40,
      title: 'Президент Республики',
      content: 'Президент является главой государства, его высшим должностным лицом.',
      explanation: 'Президент определяет основные направления внутренней и внешней политики.',
      logo: akordaLogo,
      logoHover: akordaHover
    }
  ];

  const totalPages = articles.length + 1;

  const nextPage = () => bookRef.current.pageFlip().flipNext();
  const prevPage = () => bookRef.current.pageFlip().flipPrev();
  const handleFlip = (e) => setCurrentPage(e.data);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.bookWrapper}>
          <div className={styles.backButton} onClick={() => window.history.back()}>
            ⬅ Назад
          </div>


          <HTMLFlipBook
            ref={bookRef}
            width={480}
            height={650}
            size="stretch"
            minWidth={300}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1000}
            
            drawShadow={true}
            maxShadowOpacity={0.5}
            showCover={true}
            onFlip={handleFlip}
            // className={styles.book}
          >
            <div className={`${styles.page} ${styles.cover}`}>
              <div className={styles.pageContent}>
                <img src={logoHover} alt="Конституция РК" className={styles.pokemonLogo} />
                <h2 style={{ color: 'white' }} className="text-2xl">Конституция Республики Казахстан</h2>
              </div>
            </div>

            {articles.map((article) => (
              <div key={article.number} className={styles.page}>
                <div className={styles.pageContent}>
                  <div className={styles.pokemonContainer}>
                    <img src={article.logo} alt={`Article ${article.number}`} />
                    <div className={styles.pokemonInfo}>
                      <h2 className={styles.pokemonName}>Статья {article.number}: {article.title}</h2>
                      <p className={styles.pokemonDescription}><strong>Содержание:</strong> {article.content}</p>
                      <p className={styles.pokemonDescription}><strong>Пояснение:</strong> {article.explanation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </HTMLFlipBook>

          <div className={styles.controls}>
            <button onClick={prevPage} className={styles.navButton}>⬅ Назад</button>
            <span className={styles.pageCount}>
              Страница {currentPage + 1} / {totalPages}
            </span>
            <button onClick={nextPage} className={styles.navButton}>Вперёд ➡</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookPage;
