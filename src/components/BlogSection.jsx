import React from 'react';

const blogPosts = [
  {
    title: 'An Easy Method To Reach Simillum In Paediatric Practice (HOMOEPATHY IN PAEDIATRICS)',
    description: 'Explore how homeopathy provides a safe and effective approach for managing chronic diseases by addressing the root cause.',
    videoUrl: 'https://www.youtube.com/embed/qYC48NMEzIM',
    
  },
  {
    title: 'Paediatric Homeopathy: A Gentle Healing Path',
    description: 'Learn how homeopathy supports children with conditions like asthma, ADHD, and eczema naturally and gently.',
    videoUrl: 'https://www.youtube.com/embed/7rzGLcbRZ4Q',
  },
  {
    title: 'Mind-Body Connection in Holistic Healing',
    description: 'Dive into how mental and emotional health influence physical wellness the foundation of the Body Mind approach.',
    videoUrl: 'https://www.youtube.com/embed/ogdmjc3qlhQ',
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Latest from Our Blog</h2>
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={post.videoUrl}
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="fw-bold">{post.title}</h5>
                  <p className="text-muted">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
