import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  // 1. Initial State with some default posts
  const [posts, setPosts] = useState([
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

  // State for the "Publish" form
  const [newPost, setNewPost] = useState({ title: "", excerpt: "", image: "" });
  const [showForm, setShowForm] = useState(false);

  // 2. Function to handle input changes
  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  // 3. Function to Publish a Blog
  const handlePublish = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.excerpt) return alert("Please fill in fields");

    const postToAdd = {
      id: Date.now(), // Unique ID
      title: newPost.title,
      excerpt: newPost.excerpt,
      date: new Date().toLocaleDateString("en-US", { 
        month: 'short', day: 'numeric', year: 'numeric' 
      }),
      image: newPost.image || "https://via.placeholder.com/400x250?text=BIM+Studio",
    };

    setPosts([postToAdd, ...posts]); // Add new post to the top
    setNewPost({ title: "", excerpt: "", image: "" }); // Reset form
    setShowForm(false); // Hide form
  };

  return (
    <div className="bg-slate-200 min-h-screen pb-20">
      {/* Header */}
      <div className="flex flex-col items-center py-10">
        <h1 className="font-bold text-slate-700 text-4xl p-2">Our Blogs</h1>
        <p className="text-slate-500 mb-6 font-medium">Read more, learn more, build better.</p>
        
        {/* Toggle Publish Form Button */}
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-slate-700 text-white px-6 py-2 rounded-full hover:bg-[#ff7a7a] transition-colors duration-300 shadow-md"
        >
          {showForm ? "Close Form" : "Create New Post +"}
        </button>
      </div>

      {/* 4. Publish Form (Visible when toggled) */}
      {showForm && (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl mb-12 border-t-4 border-[#ff7a7a]">
          <h2 className="text-xl font-bold mb-4 text-slate-700">Publish a New Blog</h2>
          <form onSubmit={handlePublish} className="flex flex-col gap-4">
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={newPost.title}
              onChange={handleInputChange}
              className="p-3 border border-slate-300 rounded-lg focus:outline-[#ff7a7a]"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL (Unsplash link, etc.)"
              value={newPost.image}
              onChange={handleInputChange}
              className="p-3 border border-slate-300 rounded-lg focus:outline-[#ff7a7a]"
            />
            <textarea
              name="excerpt"
              placeholder="Short description..."
              rows="3"
              value={newPost.excerpt}
              onChange={handleInputChange}
              className="p-3 border border-slate-300 rounded-lg focus:outline-[#ff7a7a]"
            />
            <button 
              type="submit"
              className="bg-[#ff7a7a] text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Publish Post
            </button>
          </form>
        </div>
      )}

      {/* 5. Blogs Grid (Aligned with HSection4) */}
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-[#ff7a7a] mb-2">{post.date}</span>
                <h2 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/blogs/${post.id}`} 
                    className="text-slate-800 font-bold border-b-2 border-[#ff7a7a] pb-1 hover:text-[#ff7a7a] transition-all"
                  >
                    Read Full Story
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {posts.length === 0 && (
          <p className="text-center text-slate-500 py-20">No blogs published yet.</p>
        )}
      </div>
    </div>
  );
}