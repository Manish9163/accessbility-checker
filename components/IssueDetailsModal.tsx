'use client';
import React from 'react';
import { Issue } from '../../accessbility-checker-ui/Issues/types';

interface IssueDetailsModalProps {
  issue: Issue;
  onClose: () => void;
}

const IssueDetailsModal: React.FC<IssueDetailsModalProps> = ({ issue, onClose }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return '🚨';
      case 'high':
        return '⚠️';
      case 'medium':
        return '⚡';
      case 'low':
        return '💡';
      default:
        return '📋';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'bug':
        return '🐛';
      case 'feature':
        return '✨';
      case 'enhancement':
        return '🚀';
      case 'documentation':
        return '📚';
      case 'security':
        return '🔒';
      default:
        return '📋';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Backdrop with enhanced opacity */}
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        {/* Modal container with animation */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full relative border border-gray-200 dark:border-gray-700 transform transition-all duration-300 scale-100 animate-modal-in">
          
          {/* Header */}
          <div className="relative p-6 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center text-gray-500 hover:text-gray-800 dark:hover:text-white transition-all duration-200 group"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pr-12">
              Issue Details
            </h2>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            
            {/* Type */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <span className="text-lg">{getTypeIcon(issue.type)}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Type</span>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{issue.type}</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <span className="text-lg">📍</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Location</span>
                <div className="text-sm text-gray-700 dark:text-gray-300 font-mono bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg mt-1 break-all">
                  {issue.location}
                </div>
              </div>
            </div>

            {/* Severity */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                <span className="text-lg">{getSeverityIcon(issue.severity)}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Severity</span>
                <div className="mt-1">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(issue.severity)}`}>
                    {issue.severity}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <span className="text-lg">📝</span>
              </div>
              <div className="flex-1">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Description</span>
                <div className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                  {issue.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-modal-in {
          animation: modal-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default IssueDetailsModal;