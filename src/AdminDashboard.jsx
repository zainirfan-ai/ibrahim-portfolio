import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [data, setData] = useState({
    hero: { greeting: '', title: '', description: '' },
    about: { yearsExp: '', projectsCount: '' },
    skills: []
  });
  const [loading, setLoading] = useState(true);
  const [statusMsg, setStatusMsg] = useState('');

  // 1. PHP API se current live data fetch karna
  useEffect(() => {
    fetch('http://localhost/portfolio_api/api.php')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  // Form input handle karna
  const handleHeroChange = (e) => {
    setData({
      ...data,
      hero: { ...data.hero, [e.target.name]: e.target.value }
    });
  };

  // 2. PHP API par updated data save karna
  const handleSave = async (e) => {
    e.preventDefault();
    setStatusMsg('Saving...');
    try {
      const response = await fetch('http://localhost/portfolio_api/api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setStatusMsg('✅ Portfolio content successfully updated!');
      } else {
        setStatusMsg('❌ Failed to update content');
      }
    } catch (error) {
      console.error('Save error:', error);
      setStatusMsg('❌ Error connecting to server');
    }
  };

  if (loading) return <div className="p-10 text-white">Loading Admin Panel...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-900 text-white rounded-xl shadow-2xl my-10 border border-slate-800">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Admin Dashboard</h1>
      {statusMsg && <div className="mb-4 p-3 bg-purple-900/50 text-purple-200 rounded-lg">{statusMsg}</div>}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="bg-slate-800/50 p-4 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold text-purple-300">Hero Section</h2>
          
          <div>
            <label className="block text-sm mb-1 text-slate-400">Greeting:</label>
            <input
              type="text"
              name="greeting"
              value={data.hero?.greeting || ''}
              onChange={handleHeroChange}
              className="w-full bg-slate-900 border border-slate-700 p-2 rounded text-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-slate-400">Title:</label>
            <input
              type="text"
              name="title"
              value={data.hero?.title || ''}
              onChange={handleHeroChange}
              className="w-full bg-slate-900 border border-slate-700 p-2 rounded text-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-slate-400">Description:</label>
            <textarea
              name="description"
              value={data.hero?.description || ''}
              onChange={handleHeroChange}
              className="w-full bg-slate-900 border border-slate-700 p-2 rounded text-white h-24"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;