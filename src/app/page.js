'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days from now
    
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

        {/* WhatsApp Link */}
        <div className="flex justify-center animate-fade-in-up animation-delay-900">
          <a
            href="https://wa.me/923265929677"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500/80 backdrop-blur-lg rounded-full flex items-center justify-center text-white border-2 border-green-400/50 hover:bg-green-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            title="Contact us on WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
            </svg>
          </a>
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