
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { sampleArticles } from '@/data/sampleData';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = sampleArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
          <Link to="/blog">
            <Button className="mt-4" variant="outline">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const articleContent = `
    <p>When it comes to getting a good night's sleep, your mattress plays a crucial role. With so many options available, choosing the perfect mattress can feel overwhelming. This comprehensive guide will walk you through everything you need to know to make an informed decision.</p>

    <h2>Understanding Your Sleep Style</h2>
    <p>Before diving into mattress types, it's important to understand your personal sleep preferences:</p>
    <ul>
      <li><strong>Sleep Position:</strong> Side, back, or stomach sleepers have different support needs</li>
      <li><strong>Temperature:</strong> Do you sleep hot or cold?</li>
      <li><strong>Motion Sensitivity:</strong> Are you easily disturbed by your partner's movements?</li>
      <li><strong>Firmness Preference:</strong> Do you prefer a soft, medium, or firm feel?</li>
    </ul>

    <h2>Types of Mattresses</h2>
    
    <h3>Memory Foam</h3>
    <p>Memory foam mattresses conform to your body shape, providing excellent pressure relief and motion isolation. They're ideal for side sleepers and couples who don't want to be disturbed by their partner's movements.</p>

    <h3>Innerspring</h3>
    <p>Traditional innerspring mattresses offer good support and airflow, making them suitable for hot sleepers. They tend to be more responsive and have a bit of bounce.</p>

    <h3>Hybrid</h3>
    <p>Hybrid mattresses combine the best of both worlds, featuring memory foam or latex layers on top of innerspring coils. They offer the contouring of foam with the support and breathability of springs.</p>

    <h3>Latex</h3>
    <p>Natural latex mattresses are durable, responsive, and naturally cooling. They're an excellent choice for those seeking an eco-friendly option with good support.</p>

    <h2>Factors to Consider</h2>
    
    <h3>Firmness Level</h3>
    <p>Mattress firmness is typically rated on a scale of 1-10, with 1 being the softest and 10 being the firmest:</p>
    <ul>
      <li><strong>Soft (3-4):</strong> Best for side sleepers under 150 lbs</li>
      <li><strong>Medium (5-6):</strong> Good for combination sleepers and couples</li>
      <li><strong>Firm (7-8):</strong> Ideal for back and stomach sleepers over 200 lbs</li>
    </ul>

    <h3>Size Considerations</h3>
    <p>Make sure to choose the right size for your space and needs:</p>
    <ul>
      <li><strong>Twin/Twin XL:</strong> Single sleepers, kids, or guest rooms</li>
      <li><strong>Full/Queen:</strong> Couples who want more space</li>
      <li><strong>King/California King:</strong> Maximum space for couples or families</li>
    </ul>

    <h2>Budget Guidelines</h2>
    <p>Quality mattresses typically range from $500 to $3000+. Remember that you spend about a third of your life sleeping, so investing in a good mattress is investing in your health and well-being.</p>

    <h2>Testing and Trial Periods</h2>
    <p>Most reputable mattress stores and online retailers offer sleep trials ranging from 90 to 365 nights. Take advantage of these trials to ensure your new mattress is the perfect fit.</p>

    <h2>Conclusion</h2>
    <p>Choosing the perfect mattress is a personal decision that depends on your individual needs, preferences, and budget. Take your time, do your research, and don't be afraid to test different options. A good mattress is an investment in your health, comfort, and quality of life.</p>
  `;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/blog">
          <Button variant="outline" className="mb-6 flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Button>
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          
          <div className="p-8">
            <Badge className="bg-red-100 text-red-800 mb-4">
              {article.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between mb-8 pb-6 border-b">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.publishDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 font-medium">
                {article.excerpt}
              </p>
              
              <div 
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: articleContent }}
              />
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleArticles.filter(a => a.id !== id).slice(0, 2).map((relatedArticle) => (
              <div key={relatedArticle.id} className="bg-white rounded-lg shadow p-6">
                <Badge className="bg-red-100 text-red-800 mb-2">
                  {relatedArticle.category}
                </Badge>
                <Link to={`/blog/${relatedArticle.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors">
                    {relatedArticle.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm">{relatedArticle.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
