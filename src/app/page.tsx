'use client';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '../../components/ThemeProvider';
import Dashboard from '../../components/Dashboard';
import IssueList from '../../components/IssueList';
import IssueDetailsModal from '../../components/IssueDetailsModal';
import Header from '../../components/Header';
import { Issue } from '../../Issues/types';
import './globals.css';

const App: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [filters, setFilters] = useState({ severity: '', type: '', keyword: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      const newIssue: Issue = {
        id: Date.now().toString(),
        type: ['Contrast', 'ARIA', 'Alt Text'][Math.floor(Math.random() * 3)],
        location: `Line ${Math.floor(Math.random() * 100)}`,
        severity: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)] as 'Low' | 'Medium' | 'High',
        description: 'Simulated issue description.'
      };
      setIssues(prev => [newIssue, ...prev]);
    }, 5000);
    return () =>

      clearInterval(interval);
  }, []);

  const filteredIssues = issues.filter(issue => {
    return (

      (!filters.severity || issue.severity === filters.severity) &&
      (!filters.type || issue.type === filters.type) &&
      (!filters.keyword || issue.description.toLowerCase().includes(filters.keyword.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header setFilters={setFilters} />
      <main className="p-4 grid gap-4">
        <Dashboard issues={issues} />
        <IssueList issues={filteredIssues} onIssueClick={setSelectedIssue} />
        {selectedIssue && <IssueDetailsModal issue={selectedIssue} onClose={() => setSelectedIssue(null)} />}
      </main>
    </div>
  );
};

export default App;