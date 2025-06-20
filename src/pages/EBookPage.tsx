import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import styles from './EbookPage.module.css';

import gerb from '../components/assets/gerb.png';
import { wordPages } from './wordPages';
import MobileBook from "./MobileBook/MobileBook";
import { useIsMobileBook } from "./MobileBook/useMobile";
import selectIcon from '../components/assets/chevron_forward.svg'

const EbookPage = () => {
  const bookRef = useRef();
  const isMobile = useIsMobileBook();
  const [currentPage, setCurrentPage] = useState(0);
  const [bookWidth, setBookWidth] = useState(window.innerWidth < 1100 ? 1100 : 550);
  // const [expandedPages, setExpandedPages] = useState([]);

  // Разбиение длинных статей
  function splitLongArticle(article, maxChars = 1800) {
    if (article.content.length <= maxChars) return [article];

    const middle = article.content.lastIndexOf("\n", maxChars);
    const firstPart = article.content.slice(0, middle).trim();
    const secondPart = article.content.slice(middle).trim();

    return [
      {
        number: article.number,
        title: article.title,
        content: firstPart,
      },
      {
        number: article.number,
        title: `${article.title} (продолжение)`,
        content: secondPart,
      },
    ];
  }

  // useEffect(() => {
  //   const splitPages = wordPages.flatMap(article => splitLongArticle(article));
  //   setExpandedPages(splitPages);
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      const isNarrow = window.innerWidth < 1100;
      setBookWidth(isNarrow ? 550 : 1100);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = wordPages.length + 1;

  const nextPage = () => bookRef.current.pageFlip().flipNext();
  const prevPage = () => bookRef.current.pageFlip().flipPrev();
  const handleFlip = (e) => setCurrentPage(e.data);

  const handleArticleSelect = (e) => {
    const pageIndex = parseInt(e.target.value, 10);
    if (!isNaN(pageIndex)) {
      bookRef.current.pageFlip().flip(pageIndex + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.bookWrapper}>
          <div
            className={styles.backButton}
            onClick={() => window.history.back()}
          >
            ⬅ Назад
          </div>

          {/* Навигация по статьям */}

          <div className={styles.articleNav}>
            <div className={styles.selectWrapper}>
              <select
                id="articleSelect"
                onChange={handleArticleSelect}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Перейти к статье
                </option>
                {wordPages.map((article, index) => (
                  <option key={index} value={index}>
                    {article.title}
                  </option>
                ))}
              </select>
              <img src={selectIcon} alt="" className={styles.selectIcon} />
            </div>
          </div>


          {isMobile ? (
            <MobileBook
              expandedPages={wordPages}
              bookRef={bookRef}
              handleFlip={handleFlip}
            />
          ) : (
            <HTMLFlipBook
              ref={bookRef}
              width={550}
              height={700}
              size="stretch"
              minWidth={300}
              maxWidth={1100}
              minHeight={400}
              maxHeight={1000}
              drawShadow={true}
              maxShadowOpacity={0.5}
              showCover={true}
              onFlip={handleFlip}
            >
              <div className={`${styles.page} ${styles.cover}`}>
                <div className={styles.firstPageContent}>
                  <img
                    src={gerb}
                    alt="Конституция РК"
                    className={styles.pokemonLogo}
                  />
                  <h2 className="text-2xl md:text-4xl font-bold drop-shadow-sm">
                    Конституция
                  </h2>
                  <h2 className="text-2xl md:text-3xl font-bold drop-shadow-sm">
                    Республики Казахстан
                  </h2>
                  <div className="w-16 h-1 bg-yellow-500 rounded-full" />
                  <p className="text-sm md:text-base text-white max-w-xs md:max-w-sm opacity-80">
                    Основной закон страны, отражающий волю народа и принципы
                    государственного устройства.
                  </p>
                  <span className="text-xs text-white/60 italic">
                    Принята 30 августа 1995 года
                  </span>
                </div>
              </div>

              {wordPages.map((article, index) => (
                <div key={index} className={styles.page}>
                  <div className={styles.pageContent}>
                    <div className={styles.pokemonInfo}>
                      <h2 className={styles.pokemonName}>{article.title}</h2>
                      <p className={styles.pokemonDescription}>
                        {article.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </HTMLFlipBook>
          )}

          <div className={styles.controls}>
            <button onClick={prevPage} className={styles.navButton}>
              ⬅ Назад
            </button>
            <span className={styles.pageCount}>
              Страница {currentPage + 1} / {totalPages}
            </span>
            <button onClick={nextPage} className={styles.navButton}>
              Вперёд ➡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookPage;
