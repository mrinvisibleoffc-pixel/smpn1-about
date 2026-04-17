/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Users, 
  BookOpen, 
  CheckCircle2,
  Clock,
  Instagram,
  Facebook,
  Globe
} from 'lucide-react';

// --- Constants ---
const SCHOOL_NAME = "SMP Negeri 1 Rejang Lebong";
const HERO_IMAGE = "https://gangalink.vercel.app/i/5p7081fc.jpg";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Profil", href: "#about" },
    { name: "Visi Misi", href: "#vision" },
    { name: "Fasilitas", href: "#facilities" },
    { name: "Hubungi", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-school-navy/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-school-gold rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            1
          </div>
          <span className={`font-serif font-bold text-xl tracking-tight ${isScrolled ? 'text-school-navy' : 'text-white text-shadow-elegant'}`}>
            SMPN 1 Rejang Lebong
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase hover:text-school-gold transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-white opacity-90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-school-gold hover:bg-school-gold/90 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg transition-all active:scale-95">
            PPDB
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-school-navy p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-school-navy' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 flex flex-col p-6 gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-slate-800 hover:text-school-gold py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-school-navy text-white py-4 rounded-xl font-bold uppercase tracking-widest mt-2">
              Daftar Sekarang
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div id="home" className="relative overflow-hidden selection:bg-school-gold selection:text-white">
      <Navbar />

      {/* --- Section: Hero --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-school-navy">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={HERO_IMAGE} 
            alt="SMP Negeri 1 Rejang Lebong Front View" 
            className="w-full h-full object-cover object-center opacity-40 grayscale-[20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-school-navy/60 via-transparent to-school-navy/80" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 bg-school-gold/20 backdrop-blur-sm border border-school-gold/30 rounded-full text-school-gold text-xs font-bold uppercase tracking-[0.2em]">
              Sejak 1951 — Tradisi Keunggulan
            </span>
            <h1 className="font-serif text-5xl md:text-8xl text-white mb-6 leading-[1.1] text-shadow-elegant">
              Mendidik Karakter,<br />
              <span className="serif-italic font-normal">Mengukir Prestasi.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
              Selamat datang di SMP Negeri 1 Rejang Lebong, institusi pendidikan terkemuka yang mengutamakan integritas dan kecerdasan masa depan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-school-gold hover:bg-school-gold/90 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest shadow-2xl transition-all hover:translate-y-[-2px] active:scale-95 group">
                Jelajahi Profil
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all">
                Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* --- Section: Stats --- */}
      <section className="bg-white py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Siswa Aktif", value: "850+", icon: Users },
              { label: "Guru Profesional", value: "60+", icon: Award },
              { label: "Ruang Kelas", value: "28", icon: BookOpen },
              { label: "Tahun Berdiri", value: "1951", icon: Clock },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-slate-50 w-16 h-16 rounded-3xl flex items-center justify-center mb-4 text-school-gold border border-slate-100 shadow-sm">
                  <stat.icon size={28} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-school-navy mb-1">{stat.value}</h3>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section: About --- */}
      <section id="about" className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/school-prestige/800/1000" 
                  alt="School Heritage" 
                  className="w-full h-full object-cover grayscale-[30%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-school-gold p-8 rounded-[2rem] shadow-xl text-white hidden lg:block max-w-[280px]">
                <p className="font-serif italic text-xl mb-2">"Pendidikan adalah senjata paling mematikan."</p>
                <p className="text-xs uppercase tracking-widest opacity-80 font-bold">— Nelson Mandela</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-school-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Sejarah & Tradisi</span>
              <h2 className="font-serif text-4xl md:text-5xl text-school-navy mb-8 leading-tight">
                Pilar Pendidikan di <span className="serif-italic">Bumi Rejang.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                SMP Negeri 1 Rejang Lebong telah berdiri kokoh selama lebih dari tujuh dekade, menjadi saksi bisu perkembangan pendidikan di Kabupaten Rejang Lebong. Kami bukan sekadar sekolah, melainkan rumah bagi para pemimpi dan pemimpin masa depan.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 italic">
                Dengan akreditasi 'A' dan kurikulum yang terus bertransformasi, kami berkomitmen menjaga standar kualitas akademik tanpa melupakan nilai-nilai kearifan lokal.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Kurikulum Merdeka", 
                  "Fasilitas Lab Modern", 
                  "Lingkungan Hijau", 
                  "Prestasi Nasional",
                  "Ekstrakurikuler Beragam",
                  "Integrasi Teknologi"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-school-gold" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="border-b-2 border-school-navy pb-1 font-bold text-school-navy hover:text-school-gold hover:border-school-gold transition-all">
                Selengkapnya Tentang Kami
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section: Visi Misi --- */}
      <section id="vision" className="py-32 bg-school-navy relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-school-gold rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-school-blue rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-school-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Tujuan Kami</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white">Visi & <span className="serif-italic font-normal">Misi</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-school-gold/20 rounded-2xl flex items-center justify-center text-school-gold mb-8 group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <h3 className="font-serif text-3xl text-white mb-6 italic">Visi Sekolah</h3>
              <p className="text-white/70 text-xl leading-relaxed font-light">
                "Terwujudnya insan pendidikan yang bertaqwa, berkarakter, cerdas, terampil, dan peduli lingkungan yang berwawasan global."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-school-blue/20 rounded-2xl flex items-center justify-center text-school-blue mb-8 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-serif text-3xl text-white mb-6 italic">Misi Sekolah</h3>
              <ul className="space-y-4">
                {[
                  "Menumbuhkan penghayatan terhadap ajaran agama.",
                  "Melaksanakan pembelajaran dan bimbingan secara efektif.",
                  "Meningkatkan pengelolaan perpustakaan yang representatif.",
                  "Menciptakan lingkungan sekolah yang bersih, asri dan nyaman."
                ].map((misi, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/70">
                    <span className="text-school-gold font-bold mt-1.5">•</span>
                    <span className="text-lg leading-relaxed">{misi}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section: Facilities --- */}
      <section id="facilities" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-school-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Eksplorasi</span>
              <h2 className="font-serif text-4xl md:text-5xl text-school-navy">Fasilitas <span className="serif-italic">& Lingkungan.</span></h2>
            </div>
            <p className="text-slate-500 max-w-sm">Dukungan infrastruktur terbaik untuk memaksimalkan potensi akademik dan non-akademik setiap siswa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[700px] md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 relative group overflow-hidden rounded-[2.5rem]"
            >
              <img src="https://picsum.photos/seed/school-lib/1200/800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                <h4 className="text-white font-serif text-2xl mb-2 italic">Perpustakaan Digital</h4>
                <p className="text-white/70 text-sm">Ribuan koleksi literatur untuk mendukung riset siswa.</p>
              </div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
              className="md:col-span-4 relative group overflow-hidden rounded-[2.5rem]"
            >
              <img src="https://picsum.photos/seed/school-lab/600/800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-white font-serif text-xl mb-1 italic">Laboratorium IPA</h4>
              </div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
              className="md:col-span-4 relative group overflow-hidden rounded-[2.5rem]"
            >
              <img src="https://picsum.photos/seed/school-court/600/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-white font-serif text-xl mb-1 italic">Area Olahraga</h4>
              </div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
              className="md:col-span-8 relative group overflow-hidden rounded-[2.5rem]"
            >
              <img src="https://picsum.photos/seed/school-field/1200/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-white font-serif text-xl mb-1 italic">Auditorium Terbuka</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section: CTA / Admission --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-school-gold rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 relative z-10 italic">Mari Bergabung Bersama Kami.</h2>
            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed font-light">
              Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 telah dibuka. Amankan kursi untuk masa depan gemilang anak Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button className="bg-white text-school-gold px-12 py-5 rounded-full font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all">
                Daftar PPDB Online
              </button>
              <button className="bg-school-navy text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest transition-all">
                Download Brosur
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section: Contact --- */}
      <footer id="contact" className="bg-school-navy pt-32 pb-12 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-school-gold rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
                <span className="font-serif font-bold text-2xl tracking-tight">SMPN 1 Rejang Lebong</span>
              </div>
              <p className="text-white/60 mb-10 text-lg leading-relaxed max-w-md">
                Sekolah unggulan yang melahirkan generasi cerdas berkarakter kuat. Terpercaya sejak tahun 1951 di Provinsi Bengkulu.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Globe].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-school-gold hover:border-school-gold transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-serif text-xl mb-8 italic">Informasi Kontak</h4>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-school-gold shrink-0" size={24} />
                    <p className="text-white/70 leading-relaxed">Jl. Basuki Rahmat No. 1, Rejang Lebong, Bengkulu 39112</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Phone className="text-school-gold shrink-0" size={24} />
                    <p className="text-white/70">+62 732 123456</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Mail className="text-school-gold shrink-0" size={24} />
                    <p className="text-white/70">hubungi@smpn1rl.sch.id</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-8 italic">Tautan Cepat</h4>
                <ul className="space-y-4">
                  {["Visi Misi", "Struktur Organisasi", "Info PPDB", "Kalender Akademik", "Berita Sekolah"].map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-white/60 hover:text-school-gold flex items-center gap-2 group transition-colors">
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs font-medium tracking-widest uppercase">
            <p>© 2026 SMP Negeri 1 Rejang Lebong.Website By Zenzo/Ripki Dibuat Lewat Domain Vercel , Dengan Keamanan Rendah!!!.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
