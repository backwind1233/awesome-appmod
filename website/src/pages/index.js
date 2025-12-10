import React, { useState, useEffect, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

function TaskCard({ task }) {
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskHeader}>
        <div className={styles.taskTitleRow}>
          <h3 className={styles.taskTitle}>{task.title}</h3>
          {task.featured && <span className={styles.badge}>⭐ Featured</span>}
        </div>
        <p className={styles.author}>by {task.author}</p>
      </div>
      
      <p className={styles.description}>{task.description}</p>
      
      <div className={styles.tags}>
        {task.tags && task.tags.map((tag, idx) => (
          <span key={idx} className={styles.tag}>{tag}</span>
        ))}
      </div>
      
      <div className={styles.cardFooter}>
        <div className={styles.meta}>
          {task.language && <span className={styles.language}>📄 {task.language}</span>}
        </div>
        <div className={styles.actions}>
          {task.vsInstallLink && (
            <Link href={task.vsInstallLink} className={styles.installButton}>
              Install in VS Code
            </Link>
          )}
          <Link href={task.source} className={styles.sourceLink}>
            View Source →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('alphabetical');

  useEffect(() => {
    fetch('/awesome-appmod/data/tasks.json')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error loading tasks:', error));
  }, []);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set();
    tasks.forEach(task => {
      if (task.tags) {
        task.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  }, [tasks]);

  // Filter and sort tasks
  const filteredTasks = useMemo(() => {
    let filtered = tasks;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query) ||
        task.author.toLowerCase().includes(query) ||
        (task.tags && task.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(task =>
        task.tags && selectedTags.every(tag => task.tags.includes(tag))
      );
    }

    // Sort
    if (sortBy === 'alphabetical') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'newest') {
      filtered = [...filtered].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return filtered;
  }, [tasks, searchQuery, selectedTags, sortBy]);

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
  };

  return (
    <Layout
      title="Task Gallery"
      description="Discover and share Microsoft App Modernization tasks for VS Code">
      
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>App Modernization Task Library</h1>
          <p className={styles.heroSubtitle}>
            An open-source task gallery to get started with app modernization.
          </p>
          
          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search for a task or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <p className={styles.heroNote}>
            Each task is a reusable workflow designed for application modernization with VS Code.
            <br />
            New to app modernization? <Link to="/docs/faq/what-is-appmod">Learn more in our docs.</Link>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.container}>
          
          {/* Sidebar Filters */}
          <aside className={styles.sidebar}>
            <div className={styles.filterSection}>
              <h3>Filter by</h3>
              
              {selectedTags.length > 0 && (
                <button className={styles.clearButton} onClick={clearFilters}>
                  Clear filters
                </button>
              )}
              
              <div className={styles.filterGroup}>
                <h4>Tags</h4>
                {allTags.map(tag => (
                  <label key={tag} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => toggleTag(tag)}
                    />
                    <span>{tag}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Task Grid */}
          <div className={styles.content}>
            <div className={styles.resultsHeader}>
              <p className={styles.resultsCount}>
                Viewing <strong>1-{filteredTasks.length}</strong> of <strong>{filteredTasks.length}</strong> tasks
              </p>
              <div className={styles.sortContainer}>
                <label htmlFor="sort">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={styles.sortSelect}
                >
                  <option value="alphabetical">Alphabetical (A - Z)</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {filteredTasks.length > 0 ? (
              <div className={styles.taskGrid}>
                {filteredTasks.map(task => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No tasks found matching your criteria.</p>
                <button onClick={clearFilters} className={styles.clearButton}>
                  Clear filters
                </button>
              </div>
            )}

            {/* CTA Section */}
            <div className={styles.ctaSection}>
              <h2>Want to contribute your own task?</h2>
              <p>Share your app modernization tasks with the community!</p>
              <Link to="/docs/contribute" className="button button--primary button--lg">
                Submit your task!
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
