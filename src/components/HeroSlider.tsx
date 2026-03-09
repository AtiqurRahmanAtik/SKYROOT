import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import heroImg1 from '../assets/Hero/1.jpeg';
import heroImg2 from '../assets/Hero/2.jpeg';
import heroImg3 from '../assets/Hero/3.jpeg';

const slides = [
  {
    id: 1,
    image: heroImg1,
    subtitle: "আমরা বিশ্বাসে মাটিতে দাঁড়িয়ে",
    title: " আকাশ ছোঁয়ার  ",
    highlight: "স্বপ্ন দেখি",
    titleEnd: "",
    description: "Rooted in Trust, Rising to the Sky"
  },
  {
    id: 2,
    image: heroImg2,
    subtitle: "কাঠামোগত দৃঢ়তা",
    title: "টেকসইভাবে",
    highlight: "নির্মিত",
    titleEnd: "",
    description: "প্রাচীন স্থাপত্যের দীর্ঘস্থায়ী শক্তির দ্বারা অনুপ্রাণিত হয়ে আমাদের ভিত্তিগুলো এমনভাবে তৈরি করা হয়েছে, যা সময়ের পরীক্ষায় টিকে থাকবে।"
  },
  {
    id: 3,
    image: heroImg3,
    subtitle: "আধুনিক জীবনযাপন",
    title: "অভ্যন্তরীণ",
    highlight: "আভিজাত্য",
    titleEnd: "",
    description: "সমসাময়িক পারিবারিক জীবনযাপনের জন্য ডিজাইন করা প্রশস্ত ও আলো ঝলমলে অন্দরমহল, যেখানে রয়েছে প্রিমিয়াম ফিনিশিং এবং স্মার্ট হোম সুবিধা।"
  }
];

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-neutral">
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            src={slides[current].image}
            alt="Hero Background"
            className="w-full h-full object-cover brightness-50"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 7, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white/80 font-bold uppercase tracking-widest mb-4">
              {slides[current].subtitle}
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              {/* FIXED: Replaced text-secondary with text-primary */}
              {slides[current].title} <span className="text-primary">{slides[current].highlight}</span> {slides[current].titleEnd}
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              {slides[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                // FIXED: Replaced bg-secondary with bg-primary
                current === index ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
                }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};