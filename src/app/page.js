'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 30 days from now
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotifyMe = () => {
    if (email && email.includes('@')) {
      alert("Thank you! We'll notify you when we launch.");
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNotifyMe();
    }
  };

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="absolute bg-white/10 rounded-full animate-pulse"
      style={{
        width: `${Math.random() * 5 + 2}px`,
        height: `${Math.random() * 5 + 2}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${Math.random() * 4 + 4}s`
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden flex items-center justify-center p-8">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
      </div>

      <main className="text-center text-white z-10 relative max-w-4xl mx-auto">
        {/* Logo */}
        <div className="w-32 h-32 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-lg border-2 border-white/20 animate-pulse">
          <svg className="w-16 h-16 fill-white" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
          </svg>
        </div>

        {/* Main heading with gradient text */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-fade-in-up">
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-6 opacity-90 animate-fade-in-up animation-delay-200">
          We are crafting something extraordinary
        </p>
        
        <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          Our team is working hard to bring you an amazing experience. 
          Stay tuned for something that will revolutionize the way you think about web applications.
        </p>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up animation-delay-600">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item) => (
            <div key={item.label} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20 min-w-[100px]">
              <span className="text-3xl md:text-4xl font-bold block text-cyan-300">
                {item.value}
              </span>
              <span className="text-sm uppercase tracking-wider opacity-80">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-12 animate-fade-in-up animation-delay-700">
          <div className="text-lg mb-4 opacity-90">Development Progress: 75%</div>
          <div className="w-full max-w-md mx-auto h-3 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full relative overflow-hidden animate-progress-fill">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Email Signup */}
        <div className="mb-8 animate-fade-in-up animation-delay-800">
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/15 backdrop-blur-lg border-2 border-transparent text-white placeholder-white/70 outline-none focus:border-white/30 focus:bg-white/20 transition-all duration-300"
            />
            <button
              onClick={handleNotifyMe}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
            >
              Notify Me
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-900">
          {[
            {
              name: 'Twitter',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              )
            },
            {
              name: 'LinkedIn',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              )
            },
            {
              name: 'GitHub',
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              )
            }
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white border-2 border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress-fill {
          from { width: 0%; }
          to { width: 75%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
          opacity: 0;
        }

        .animate-progress-fill {
          animation: progress-fill 3s ease-out 1s forwards;
          width: 0%;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}