import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GYM } from '../constants/gymData';

const MESSAGES = ['Powering Up...', 'Loading Your Gym...', "Let's Go 💪"];

export default function LoadingScreen() {
  const [msgIdx, setMsgIdx] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const intervals = [0, 900, 1800].map((delay, i) =>
      setTimeout(() => setMsgIdx(i), delay)
    );
    const exitTimer = setTimeout(() => setExiting(true), 2300);
    return () => {
      intervals.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080808] overflow-hidden"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Heartbeat pulse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, transparent 70%)',
          animation: 'heartbeat 2s ease-in-out infinite',
        }}
      />

      {/* Logo */}
      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Daya Fitness Club Logo Emblem */}
        <div className="mb-5 relative flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-60"
            style={{ background: 'var(--primary)' }}
          />
          <img
            src="/logo-icon.png"
            alt={GYM.name}
            className="w-24 h-24 object-contain relative z-10"
            style={{ filter: 'drop-shadow(0 0 25px rgba(220,38,38,0.65))' }}
          />
        </div>
        <h1
          className="text-white text-4xl tracking-widest text-center"
          style={{ fontFamily: "'Bebas Neue', cursive" }}
        >
          {GYM.name}
        </h1>
        <p className="text-[var(--primary)] text-xs tracking-[0.25em] uppercase mt-1 text-center"
           style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {GYM.tagline}
        </p>
      </motion.div>

      {/* Progress bar */}
      <div className="relative w-64 h-[2px] bg-white/10 rounded-full overflow-visible">
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ background: 'var(--primary)' }}
          initial={{ width: '0%' }}
          animate={{ width: exiting ? '100%' : '95%' }}
          transition={{ duration: 2.1, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 h-3 w-3 rounded-full bg-white -translate-y-1/2"
          style={{ boxShadow: '0 0 12px #F97316, 0 0 24px rgba(249,115,22,0.5)' }}
          initial={{ left: '0%' }}
          animate={{ left: exiting ? '98%' : '93%' }}
          transition={{ duration: 2.1, ease: 'easeInOut' }}
        />
      </div>

      {/* Cycling text */}
      <motion.p
        key={msgIdx}
        className="mt-6 text-sm tracking-[0.12em] text-[#A0A0A0]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {MESSAGES[msgIdx]}
      </motion.p>
    </motion.div>
  );
}
