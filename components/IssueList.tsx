import React from 'react';
import { Issue } from '../Issues/types';

interface IssueListProps {
  issues: Issue[];
  onIssueClick: (issue: Issue) => void;
}

const IssueList: React.FC<IssueListProps> = ({ issues, onIssueClick }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'text-red-600 dark:text-red-400';
      case 'high':
        return 'text-orange-600 dark:text-orange-400';
      case 'medium':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'low':
        return 'text-green-600 dark:text-green-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white/95 dark:bg-gray-800/95 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Issues
            </h2>
            
            <ul className="space-y-1">
              {issues.map((issue, index) => (
                <li
                  key={issue.id}
                  className="group relative p-4 rounded-xl border border-transparent cursor-pointer transition-all duration-200 hover:bg-gray-50/80 dark:hover:bg-gray-700/50 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
                  onClick={() => onIssueClick(issue)}
                >
                  {/* Subtle left border indicator */}
                  <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Type with enhanced styling */}
                      <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {issue.type}
                      </span>
                      
                      <span className="text-gray-400">•</span>
                      
                      {/* Severity with color coding */}
                      <span className={`font-medium ${getSeverityColor(issue.severity)}`}>
                        {issue.severity}
                      </span>
                      
                      <span className="text-gray-400">•</span>
                      
                      {/* Location with modern styling */}
                      <span className="text-sm text-gray-600 dark:text-gray-300 font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md">
                        {issue.location}
                      </span>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg 
                        className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueList;