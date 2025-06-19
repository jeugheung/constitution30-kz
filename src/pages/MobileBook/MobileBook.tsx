import HTMLFlipBook from "react-pageflip";
import gerb from '../../components/assets/gerb.png';
import styles from '../EbookPage.module.css';

const MobileBook = ({ expandedPages, bookRef, handleFlip }) => (
  <HTMLFlipBook
    ref={bookRef}
    width={550}
    height={650}
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
        <img src={gerb} alt="Конституция РК" className={styles.pokemonLogo} />
        <h2 className="text-2xl md:text-4xl font-bold drop-shadow-sm">Конституция</h2>
        <h2 className="text-2xl md:text-3xl font-bold drop-shadow-sm">Республики Казахстан</h2>
        <div className="w-16 h-1 bg-yellow-500 rounded-full" />
        <p className="text-sm md:text-base text-white max-w-xs md:max-w-sm opacity-80">
          Основной закон страны, отражающий волю народа и принципы государственного устройства.
        </p>
        <span className="text-xs text-white/60 italic">Принята 30 августа 1995 24341311года</span>
      </div>
    </div>

    {expandedPages.map((article) => (
      <div key={article.title} className={styles.page}>
        <div className={styles.pageContent}>
          <div className={styles.pokemonInfo}>
            <h2 className={styles.pokemonName}>{article.title}</h2>
            <p className={styles.pokemonDescription}>{article.content}</p>
          </div>
        </div>
      </div>
    ))}
  </HTMLFlipBook>
);

export default MobileBook;
