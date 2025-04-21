import React, { useState } from 'react';

// ジョブカードのデータ構造（暫定）
const jobs = [
  {
    id: 1,
    company: 'Photosnap',
    logo: '/logos/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    // tag群
    tags: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
    // TODO：skills（詳細スキール）とexperience（経験年数）を追加予定
  },
  {
    id: 2,
    company: 'Manage',
    logo: '/logos/manage.svg',
    new: true,
    featured: false,
    position: 'Fullstack Developer',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    tags: ['Fullstack', 'Midweight', 'Python', 'React'],
  },
];

const JobBoard: React.FC = () => {
  // フィルター用のタグ管理
  const [tagFilters, setTagFilters] = useState<string[]>([]);

  // タグでフィルター追加
  const addFilter = (tag: string) => {
    if (!tagFilters.includes(tag)) {
      setTagFilters([...tagFilters, tag]);
    }
  };

  // タグでフィルター除去
  const removeFilter = (tag: string) => {
    setTagFilters(tagFilters.filter(f => f !== tag));
  };

  // フィルターをリセット
  const clearFilters = () => setTagFilters([]);

  // 一つか複数のタグに当てはまる結果だけ残す、なければ全件表示
  const filteredJobs = tagFilters.length
    ? jobs.filter(job => tagFilters.every(f => job.tags.includes(f)))
    : jobs;

  return (
    <main className="bg-light-cyan min-h-screen px-6 py-10 font-sans">
      {/* Filter bar フィルターバー */}
      {tagFilters.length > 0 && (
        <section className="bg-white shadow-md rounded p-4 mb-8 flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {tagFilters.map(tag => (
              <span key={tag} className="flex items-center bg-desaturated-dark-cyan text-white px-3 py-1 rounded">
                {tag}
                <button
                  onClick={() => removeFilter(tag)}
                  className="ml-2 bg-dark-cyan text-white rounded-full w-5 h-5 text-xs"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <button onClick={clearFilters} className="text-sm text-dark-cyan underline mt-2 md:mt-0">
            Clear
          </button>
        </section>
      )}

      {/* Job Cards ジョブカード */}
      <section className="space-y-6">
        {filteredJobs.map(job => (
          <div
            key={job.id}
            className={`bg-white rounded shadow-md p-6 flex flex-col md:flex-row md:items-center justify-between ${
              job.featured ? 'border-l-4 border-desaturated-dark-cyan' : ''
            }`}
          >
            {/* Left: Company Info */}
            <div className="flex items-center gap-6">
              <img src={job.logo} alt={job.company} className="w-14 h-14" />
              <div>
                <div className="flex items-center gap-3 text-sm text-desaturated-dark-cyan font-bold">
                  {job.company}
                  {job.new && (
                    <span className="bg-desaturated-dark-cyan text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                      New!
                    </span>
                  )}
                  {job.featured && (
                    <span className="bg-dark-cyan text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                      Featured
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-dark-cyan mt-1 hover:text-desaturated-dark-cyan cursor-pointer">
                  {job.position}
                </h2>
                <div className="text-sm text-gray-500 mt-1 space-x-3">
                  <span>{job.postedAt}</span>
                  <span>•</span>
                  <span>{job.contract}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            {/* Right: Tags 右側のタグ群 */}
            {/* {TODO: タグが一定の長さ超過すると下に並び変えるように} */}
            {/* {TODO: 詳細スキールと経験年数タグの追加は、現在のタグ群とは上下に配置にして色と表現を変える} */}
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0 md:justify-end">
              {job.tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => addFilter(tag)}
                  className="bg-light-cyan text-desaturated-dark-cyan font-bold px-3 py-1 rounded hover:bg-desaturated-dark-cyan hover:text-white transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default JobBoard;
