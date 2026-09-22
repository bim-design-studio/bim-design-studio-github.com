import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HSection4() {
  // 1. Placeholder data (Replace this with an API fetch if you have a backend)
  const [latestPosts, setLatestPosts] = useState([
    {
      id: 1,
      title: "Mastering Revit Families",
      excerpt: "Learn how to create parametric families for complex architectural elements...",
      date: "Oct 24, 2023",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=400",
    },
    {
      id: 2,
      title: "BIM Best Practices 2024",
      excerpt: "Top 10 workflows to improve collaboration in large-scale construction projects...",
      date: "Nov 12, 2023",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400",
    },
    {
      id: 3,
      title: "Revit Updates You Missed",
      excerpt: "A deep dive into the latest features released in the newest Revit update...",
      date: "Dec 05, 2023",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=400",
    },
  ]);

  // 2. UNCOMMENT THIS if you are fetching from an API:
  useEffect(() => {
    fetch("your-api-endpoint/blogs")
      .then((res) => res.json())
      .then((data) => setLatestPosts(data.slice(0, 3))) // Get only the first 3
      .catch((err) => console.log(err));
  }, []); 

  return (
    <div className="flex flex-col items-center bg-slate-200 py-10 px-5">
      <h1 className="font-bold text-slate-700 text-3xl mb-4">
        Latest Blog Posts
      </h1>
      <p className="w-full md:w-3/5 font-semibold text-slate-500 mb-10 text-center">
        BIM Design Studio offers top-notch blogs full of Revit tutorials,
        tips, tricks, and updates. Stay ahead with the latest industry trends.
      </p>

      {/* 3. Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-10">
        {latestPosts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-slate-300"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="text-xs font-bold text-[#ff7a7a] uppercase tracking-wider">
                {post.date}
              </span>
              <h2 className="text-xl font-bold text-slate-800 mt-2 mb-3 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-slate-600 text-sm mb-5 line-clamp-3">
                {post.excerpt}
              </p>
              <Link 
                to={`/blogs/${post.id}`} 
                className="text-slate-700 font-bold hover:text-[#ff7a7a] transition-colors inline-flex items-center"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Link to="blogs">
        <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
          Explore All Blogs
        </button>
      </Link>
    </div>
  );
}