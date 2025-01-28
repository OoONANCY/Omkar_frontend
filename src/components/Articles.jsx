function Articles() {
  const articles = [
    {
      title: 'Understanding User Segmentation',
      description: 'Learn how to effectively segment your users for better targeting.',
      category: 'Analytics'
    },
    {
      title: 'Advanced Segmentation Strategies',
      description: 'Deep dive into advanced user segmentation techniques.',
      category: 'Strategy'
    },
    {
      title: 'Behavioral Segmentation',
      description: 'How to segment users based on their behavior patterns.',
      category: 'Analytics'
    },
    {
      title: 'Geographic Segmentation',
      description: 'Targeting users based on their location and regional preferences.',
      category: 'Strategy'
    },
    {
      title: 'Demographic Segmentation',
      description: 'Understanding user segments based on demographic data.',
      category: 'Analytics'
    },
    {
      title: 'Psychographic Segmentation',
      description: 'Segment users based on psychological characteristics.',
      category: 'Psychology'
    }
  ];

  return (
    <div className="articles-container">
      <h1>Learn About Segmentation</h1>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <span className="article-category">{article.category}</span>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button className="article-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Articles