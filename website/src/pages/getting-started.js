import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './getting-started.module.css';

function TaskCard({ task }) {
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskHeader}>
        <h3>{task.title}</h3>
        {task.featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>
      <p className={styles.taskDescription}>{task.description}</p>
      <div className={styles.taskTags}>
        {task.tags.map((tag, idx) => (
          <span key={idx} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.taskFooter}>
        <span className={styles.author}>by {task.author}</span>
        <Link to={task.repo} className={styles.viewButton}>
          View on GitHub
        </Link>
      </div>
    </div>
  );
}

export default function GettingStarted() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/awesome-appmod/data/tasks.json')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error loading tasks:', error));
  }, []);

  return (
    <Layout
      title="Getting Started"
      description="Explore App Modernization Tasks">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>App Modernization Tasks Gallery</h1>
          <p className={styles.subtitle}>
            Discover reusable Microsoft tasks and workflows for modernizing your applications
          </p>
        </header>
        
        <div className={styles.tasksGrid}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))
          ) : (
            <p>Loading tasks...</p>
          )}
        </div>

        <div className={styles.ctaSection}>
          <h2>Want to contribute your own task?</h2>
          <p>Share your app modernization tasks with the community!</p>
          <Link to="/docs/contribute" className="button button--primary button--lg">
            Learn How to Contribute
          </Link>
        </div>
      </div>
    </Layout>
  );
}
