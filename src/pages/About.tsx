import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Users,
  Globe,
  Award,
  Target,
  Briefcase,
  CheckCircle,
  Languages
} from "lucide-react";
import SEO from "../components/SEO";

export const About = () => {
  // --- LANGUAGE STATE ---
  // true = Bangla (Initial), false = English
  const [isBangla, setIsBangla] = useState(true);

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      <SEO
        title="About Us"
        description="Learn about Skyyroot Real Estate Ltd. Rooted in Trust. Rising to the Sky."
      />

      {/* HERO SECTION */}
      <section className="relative py-32 lg:py-48 bg-neutral text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-wide mb-6 mt-10 lg:mt-0"
          >
            Est. 2010
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight"
          >
            Rooted in Trust <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
              Rising to the Sky
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light"
          >
            At Skyyroot Real Estate Ltd., every building we construct reflects human dreams, safety, and a strong foundation for future generations.
          </motion.p>
        </div>
      </section>

     {/* OUR STORY (Only this section translates) */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            
            {/* Header + Translate Toggle Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-4xl font-bold text-primary">
                {isBangla ? "আমাদের পথচলা" : "Our Story"}
              </h2>
              
              {/* --- NEW TOGGLE DESIGN BASED ON IMAGE --- */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1 w-fit border border-gray-200 shadow-sm">
                <button
                  onClick={() => setIsBangla(true)}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                    isBangla
                      ? "bg-[#00a2e8] text-white shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  বাংলা
                </button>
                <button
                  onClick={() => setIsBangla(false)}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                    !isBangla
                      ? "bg-[#00a2e8] text-white shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="font-semibold text-neutral">
                {isBangla ? "স্কাইরুট রিয়েল এস্টেট লিমিটেড" : "SKYYROOT REAL ESTATE LTD."}
              </p>

              <p className="text-sm text-gray-500">
                {isBangla ? "স্থাপিত ২০১০ | ৩০+ সম্পন্ন প্রকল্প | ঢাকা, বাংলাদেশ" : "Est. 2010 | 30+ Completed Projects | Dhaka, Bangladesh"}
              </p>

              <p>
                {isBangla 
                  ? "স্কাইরুট রিয়েল এস্টেট লিমিটেডে, আমরা বিশ্বাস করি যে প্রতিটি ভবন শুধু ইট এবং কংক্রিটের চেয়েও বেশি কিছু। আমাদের তৈরি প্রতিটি কাঠামো মানুষের স্বপ্নের প্রতিফলন, নিরাপত্তার নিশ্চয়তা এবং ভবিষ্যতের জন্য একটি দৃঢ় ভিত্তি।" 
                  : "At Skyyroot Real Estate Ltd., we believe that every building is more than just bricks and concrete. Each structure we raise is a reflection of human dreams, a guarantee of safety, and a firm foundation for the future."}
              </p>

              <p>
                {isBangla 
                  ? "২০১০ সাল থেকে, আমরা আমাদের গৃহীত প্রতিটি প্রকল্পে এই বিশ্বাস বহন করে আসছি। চৌদ্দ বছর ধরে, স্কাইরুট সফলভাবে ঢাকা জুড়ে ৩০টিরও বেশি প্রকল্প হস্তান্তর করেছে, যার প্রতিটি গুণমান, সততা এবং আস্থার প্রতি আমাদের উত্সর্গকে প্রতিফলিত করে।" 
                  : "Since 2010, we have carried this belief through every project we undertake. Over fourteen years, Skyyroot has successfully delivered 30+ projects across Dhaka, each reflecting our dedication to quality, integrity, and trust."}
              </p>

              <p>
                {isBangla 
                  ? "আমরা এমন ঠিকানা তৈরি করি যেখানে আকাশ-ছোঁয়া স্বপ্ন এবং বাস্তব-বিশ্বের সম্ভাবনা মিলিত হয় — যেখানে একটি পরিবারের উচ্চাকাঙ্ক্ষাকে কেবল উত্সাহিতই করা হয় না, বরং কাঠামোগতভাবে তা সম্ভব করে তোলা হয়।" 
                  : "We build addresses where sky-wide dreams and real-world possibilities meet — where a family's ambitions are not just encouraged, but structurally made possible."}
              </p>

              <p>
                {isBangla 
                  ? "ঢাকার মতো একটি গতিশীল শহরে, যেকোনো ডেভেলপারের জন্য আস্থাই হলো সবচেয়ে শক্তিশালী ভিত্তি। আমরা সততা, সময়মতো হস্তান্তর এবং প্রজন্মের পর প্রজন্ম টিকে থাকার মতো নকশা করা কাঠামোর মাধ্যমে সেই আস্থা অর্জন করেছি।" 
                  : "In a city as dynamic as Dhaka, trust is the strongest foundation any developer can build. We have earned that trust through honesty, timely delivery, and structures designed to last for generations."}
              </p>

              <p className="font-semibold text-primary">
                {isBangla ? "আমরা বিশ্বাসে মাটিতে দাঁড়িয়ে, আকাশ ছোঁয়ার স্বপ্ন দেখি।" : "Rooted in Trust. Rising to the Sky."}
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {isBangla ? "১৪+" : "14+"}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {isBangla ? "বছরের অভিজ্ঞতা" : "Years Experience"}
                </div>
              </div>

              <div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {isBangla ? "৩০+" : "30+"}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {isBangla ? "সম্পন্ন প্রকল্প" : "Completed Projects"}
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                alt="Skyyroot Building"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
              <p className="font-serif italic text-neutral text-lg">
                {isBangla 
                  ? '"আমরা প্রকৌশলীদের নির্ভুলতা এবং স্বপ্নদর্শীদের আবেগ দিয়ে নির্মাণ করি।"' 
                  : '"We build with the precision of engineers and the passion of visionaries."'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The principles that guide every decision we make and every structure we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Integrity First",
              desc: "Transparent communication and honest dealings in every project.",
              icon: Shield,
            },
            {
              title: "Design Excellence",
              desc: "Modern, functional and aesthetically refined architecture.",
              icon: Target,
            },
            {
              title: "Sustainable Living",
              desc: "Eco-friendly building practices for a better environment.",
              icon: Globe,
            },
            {
              title: "Customer Centric",
              desc: "Long-term relationships beyond project handover.",
              icon: Users,
            },
            {
              title: "Timely Delivery",
              desc: "Commitment to delivering projects on schedule.",
              icon: CheckCircle,
            },
            {
              title: "Innovation",
              desc: "Adopting modern technology for stronger, smarter buildings.",
              icon: Zap,
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-neutral text-white rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-neutral mb-3">
                {value.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to build your dream with us?
          </h2>

          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Whether it's your future home or a commercial investment, Skyyroot is ready to help you turn your vision into reality.
          </p>

          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};