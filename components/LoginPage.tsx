'use client';

import React, { useState, useEffect } from 'react';
import { Check, Link2, Eye, Target, FileText, TrendingUp } from 'lucide-react';
import './loginPage.css';

interface LoginPageProps {
  onSubmit?: (url: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; size: number; delay: number; duration: number }>>([]);

  // Generate floating particles
  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 20,
      duration: Math.random() * 10 + 15,
    }));
    setParticles(particleArray);
  }, []);

  const handleSubmit = async () => {
    if (!url.trim()) {
      alert('Please enter a website URL');
      return;
    }

    // Validate URL
    try {
      new URL(url);
    } catch {
      alert('Please enter a valid URL (e.g., https://example.com)');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (onSubmit) {
        onSubmit(url);
      } else {
        alert(`Starting accessibility analysis for: ${url}\n\nThis would redirect to your dashboard with the analysis results.`);
      }
      setIsLoading(false);
    }, 3000);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim();
    
    // Auto-add https:// if no protocol specified
    if (value && !value.match(/^https?:\/\//i)) {
      if (!value.includes('://')) {
        value = 'https://' + value;
      }
    }
    
    setUrl(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSubmit();
    }
  };

  const features = [
    { icon: Check, text: 'WCAG 2.1 AA Compliance Check' },
    { icon: FileText, text: 'Detailed Issue Reporting' },
    { icon: Target, text: 'Actionable Recommendations' },
    { icon: TrendingUp, text: 'Priority-Based Issue Classification' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute bg-white/10 rounded-full animate-float-${Math.floor(particle.duration)}`}
            data-particle-x={particle.x}
            data-particle-size={particle.size}
            data-particle-delay={particle.delay}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md">

        <div className="animate-slide-up bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] transform-gpu">
          
          {/* Logo Section */}
          <div className="text-center mb-8 animate-fade-in-1">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:animate-pulse transition-all duration-300 cursor-pointer hover:scale-110">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold  mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent- text-white">
              AccessCheck
            </h1>
            <p className="text-white/80 text-lg">Comprehensive Website Accessibility Analysis</p>
          </div>

          {/* Input Section */}
          <div className="space-y-6">
            <div className="animate-fade-in-3">
              <label htmlFor="websiteUrl" className="block text-white/90 font-semibold mb-2 text-sm">
                Website URL
              </label>
              <div className="relative group">
                <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5 group-focus-within:text-white transition-colors duration-300" />
                <input
                  type="url"
                  id="websiteUrl"
                  value={url}
                  onChange={handleUrlChange}
                  onKeyPress={handleKeyPress}
                  placeholder="https://example.com"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/60 focus:border-indigo-400 focus:bg-white/15 focus:outline-none focus:ring-4 focus:ring-indigo-400/20 transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:-translate-y-0.5 transform-gpu"
                  disabled={isLoading}
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="animate-fade-in-4 w-full py-4 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden hover:animate-shimmer transform-gpu"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Analyzing Website...
                </div>
              ) : (
                'Start Accessibility Check'
              )}
            </button>
          </div>

          {/* Features List */}
          <div className="mt-8 space-y-3 animate-fade-in-5">
            <div className="text-white/60 text-xs uppercase tracking-wider font-semibold mb-4">
              What you get:
            </div>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center text-white/80 text-sm hover:text-white transition-all duration-200 hover:translate-x-1 transform-gpu cursor-default"
              >
                <feature.icon className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-pulse"></div>
        </div>

        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-pulse opacity-70"></div>
        
        <div className="absolute top-1/3 -left-8 w-12 h-12 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-1/3 -right-8 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-rose-500/20 rounded-full animate-bounce blur-sm"></div>
      </div>

      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse animate-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-delay-2000"></div>
    </div>
  );
};

export default LoginPage;