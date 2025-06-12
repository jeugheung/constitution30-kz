// src/pages/DetailedArticle.tsx
import { useParams } from "react-router-dom";
import { articlesData } from "./ArticlesData"

const DetailedArticle = () => {
  const { id } = useParams();
  const article = articlesData.find((a) => String(a.number) === id);

  if (!article) {
    return <div className="p-8 text-xl">Статья не найдена</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-card p-6 rounded-xl border border-border">
        <h1 className="text-3xl font-bold mb-4 text-foreground">
          Статья {article.number}: {article.title}
        </h1>
        <p className="mb-6 text-foreground leading-relaxed text-lg">
          {article.content}
        </p>
        {article.explanation && (
          <p className="text-muted-foreground">{article.explanation}</p>
        )}
      </div>
    </div>
  );
};

export default DetailedArticle;
