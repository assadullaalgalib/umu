import { useState, useEffect } from "react";
import { newsAPI } from "../services/dataService";

export function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadNews = async () => {
    try {
      setLoading(true);
      const allNews = await newsAPI.getAllNews();
      const enabledNews = allNews.filter(n => n.enabled === true);
      setArticles(enabledNews);
      setError(null);
    } catch (err) {
      setError('Failed to load news');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
    
    // Poll for changes every 2 seconds
    const interval = setInterval(loadNews, 2000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section id="news" className="page-section">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading news...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="news" className="page-section">
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="page-section">
      <div className="bg-gray-100 py-12 text-center border-b">
        <h1 className="text-4xl font-black text-primary">
          News Portal
        </h1>
        <p className="text-gray-500 mt-2">
          Latest updates from our organization ({articles.length} articles)
        </p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No news articles available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <span className="text-xs font-bold text-primary bg-primary bg-opacity-10 px-3 py-1 rounded-full">
                    {article.category || 'news'}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.summary}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>By {article.author || 'Admin'}</span>
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default NewsPage;