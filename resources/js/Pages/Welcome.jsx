
import { Head, Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';


export default function Welcome({ packages, flash }) {
    // State untuk mengontrol pop-up
    const [showToast, setShowToast] = useState(false);

    // State untuk Splash Screen dengan pengecekan memori browser (sessionStorage)
    const [showSplash, setShowSplash] = useState(() => {
        // Jika browser ingat user sudah melihatnya, jangan tampilkan lagi (false)
        return sessionStorage.getItem('splashSeen') ? false : true;
    });
    
    const [isClosingSplash, setIsClosingSplash] = useState(false);

    // Fungsi untuk menutup Splash
    const handleCloseSplash = () => {
        setIsClosingSplash(true);
        setTimeout(() => {
            setShowSplash(false);
            // Simpan ingatan ke browser bahwa user sudah melihat splash screen ini!
            sessionStorage.setItem('splashSeen', 'true');
        }, 700);
    };

    // Mengunci scroll website selama Splash Screen masih aktif
    useEffect(() => {
        if (showSplash) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }; // Bersihkan efek saat komponen hancur
    }, [showSplash]);

    // Efek: Jika ada pesan sukses, tampilkan pop-up lalu sembunyikan setelah 5 detik
    useEffect(() => {
        if (flash?.success) {
            setShowToast(true);
            const timer = setTimeout(() => setShowToast(false), 5000);
            return () => clearTimeout(timer); // bersihkan memori
        }
    }, [flash]);

   
    // Fungsi pintar untuk scroll ke ID bagian manapun
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100; // Offset 100px untuk navbar
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (

        

        <div className="bg-[#FCFCF9] font-sans text-[#2E352C] min-h-screen relative">
            <Head title="Al-Hijrah - Agensi Umroh & Haji Premium" />

            {/* Navbar */}
            <nav className="sticky top-4 z-50 max-w-6xl mx-auto px-6 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md mt-4 rounded-full shadow-sm border border-gray-100 transition-all">
                <div className="font-serif font-bold text-2xl flex items-center gap-2">
                    {/* Logo/Icon - Menggunakan warna Hijau Daun baru */}
                    <svg className="w-8 h-8 text-[#166534]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
                    Al-Hijrah
                </div>
                <div className="hidden md:flex items-center gap-8">
                        <a href="#paket" onClick={(e) => scrollToSection(e, 'paket')} className="text-sm font-medium text-gray-600 hover:text-[#166534] transition-colors cursor-pointer">
                            Paket Umroh
                        </a>
                        <a href="#fasilitas" onClick={(e) => scrollToSection(e, 'fasilitas')} className="text-sm font-medium text-gray-600 hover:text-[#166534] transition-colors cursor-pointer">
                            Fasilitas
                        </a>
                        <a href="#jadwal" onClick={(e) => scrollToSection(e, 'jadwal')} className="text-sm font-medium text-gray-600 hover:text-[#166534] transition-colors cursor-pointer">
                            Jadwal Keberangkatan
                        </a>
                    </div>
                <div className="flex items-center gap-4 text-sm font-medium">
                    <Link href="/login" className="text-gray-600 hover:text-[#166534]">Log in</Link>
                    {/* Button Utama - Menggunakan warna Hijau Daun baru */}
                    <Link href="/booking" className="bg-[#166534] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all">
    Pesan Sekarang
</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center flex flex-col items-center">
                {/* Badge - Menggunakan warna Hijau Daun baru */}
                <div className="bg-[#F0EBE1] text-[#2E352C] px-4 py-1.5 rounded-full text-sm font-medium mb-8 inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#166534] animate-pulse"></span>
                    Telah memberangkatkan 10,000+ jamaah mabrur
                </div>

                <h1 className="font-serif text-6xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-gray-900">
                    Perjalanan Ibadah yang <br /> Tenang dan Nyaman
                </h1>

                <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
                    Al-Hijrah memastikan setiap langkah ibadah Anda difasilitasi dengan pelayanan terbaik, mutawwif berpengalaman, dan fasilitas premium agar Anda fokus meraih mabrur.
                </p>

                {/* CTA Buttons - Menggunakan warna Hijau Daun baru */}
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Tombol Lihat Paket Umroh dengan fungsi scroll */}
                    <button 
                        onClick={(e) => scrollToSection(e, 'paket')}
                        className="bg-[#166534] text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center min-w-[200px]"
                    >
                        Lihat Paket Umroh
                    </button>
                    
                    {/* Tombol Konsultasi mengarah ke WhatsApp */}
                    <a 
                        href="https://wa.me/6281237858277" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-white text-[#166534] px-8 py-4 rounded-full font-bold border border-gray-200 hover:border-[#166534] hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center min-w-[200px]"
                    >
                        Konsultasi Gratis
                    </a>
                </div>
            </main>
            {/* Statistics & Partners Section */}
            <section className="border-y border-gray-200 bg-white">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20 divide-x divide-gray-100">
                        <div className="flex flex-col">
                            <span className="font-serif text-4xl md:text-5xl font-bold text-[#166534] mb-2">10K+</span>
                            <span className="text-sm font-medium text-gray-900 tracking-wider uppercase">Jamaah Berangkat</span>
                            <span className="text-xs text-gray-500 mt-1">Alhamdulillah Mabrur</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-4xl md:text-5xl font-bold text-[#166534] mb-2">15</span>
                            <span className="text-sm font-medium text-gray-900 tracking-wider uppercase">Tahun Pengalaman</span>
                            <span className="text-xs text-gray-500 mt-1">Sejak 2011</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-4xl md:text-5xl font-bold text-[#166534] mb-2">99%</span>
                            <span className="text-sm font-medium text-gray-900 tracking-wider uppercase">Tingkat Kepuasan</span>
                            <span className="text-xs text-gray-500 mt-1">Review Bintang 5</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif text-4xl md:text-5xl font-bold text-[#166534] mb-2">0</span>
                            <span className="text-sm font-medium text-gray-900 tracking-wider uppercase">Kasus Gagal Berangkat</span>
                            <span className="text-xs text-gray-500 mt-1">100% Amanah</span>
                        </div>
                    </div>

                    {/* Partners / Sponsors */}
                    <div className="text-center">
                        <h3 className="font-serif text-3xl font-bold text-[#2E352C] mb-4">Mitra Terbaik Kami</h3>
                        <p className="text-gray-500 mb-10 text-lg">Didukung oleh maskapai dan jaringan hotel bintang 5 kelas dunia.</p>
                        
                        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Maskapai */}
                            <div className="font-sans font-bold text-2xl tracking-tighter text-[#166534]">SAUDIA</div>
                            <div className="font-serif italic text-2xl text-blue-800">Garuda Indonesia</div>
                            <div className="font-sans font-bold text-xl uppercase text-red-600">Emirates</div>
                            
                            {/* Hotel */}
                            <div className="font-sans font-light text-2xl tracking-widest text-gray-800">PULLMAN</div>
                            <div className="font-serif text-2xl text-red-800">Mövenpick</div>
                            <div className="font-sans font-bold text-xl text-gray-600">swissôtel</div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-[#166534] text-[#FCFCF9] py-24 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column: Text & Features */}
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                            Mengapa memilih Al-Hijrah?
                        </h2>
                        <p className="text-[#F0EBE1] text-lg mb-12 opacity-90">
                            Kami memastikan setiap detail perjalanan Anda dipersiapkan dengan sempurna, agar Anda bisa fokus sepenuhnya pada ibadah.
                        </p>

                        <div className="space-y-8">
                            {/* Feature 1 */}
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full border border-[#FCFCF9]/30 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-[#F0EBE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Mutawwif Tersertifikasi</h4>
                                    <p className="text-[#F0EBE1]/70 leading-relaxed text-sm">
                                        Didampingi oleh pembimbing ibadah lulusan universitas Timur Tengah yang sangat menguasai fiqih umroh dan sejarah sirah nabawiyah.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full border border-[#FCFCF9]/30 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-[#F0EBE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Fasilitas Kelas Satu</h4>
                                    <p className="text-[#F0EBE1]/70 leading-relaxed text-sm">
                                        Perjalanan Makkah-Madinah menggunakan Kereta Cepat Haramain (HSR) dan menginap di hotel bintang 5 tepat di pelataran masjid.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full border border-[#FCFCF9]/30 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-[#F0EBE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Pasti Berangkat</h4>
                                    <p className="text-[#F0EBE1]/70 leading-relaxed text-sm">
                                        Tidak ada cerita *reschedule* sepihak. Jadwal, tiket pesawat, dan visa sudah di-booking jauh hari sebelum keberangkatan.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex gap-4">
                                <div className="shrink-0 w-8 h-8 rounded-full border border-[#FCFCF9]/30 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-[#F0EBE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Layanan Praktis & Transparan</h4>
                                    <p className="text-[#F0EBE1]/70 leading-relaxed text-sm">
                                        Sistem pendaftaran dan tracking visa bisa dilakukan secara online. Tidak ada biaya tersembunyi selama di Tanah Suci.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image with Organic Blob Shape */}
                    <div className="relative mt-10 md:mt-0">
                        {/* Blob Decorative Background */}
                        <div className="absolute inset-0 bg-[#F0EBE1]/10 transform rotate-3 rounded-[4rem] md:rounded-tl-[8rem] md:rounded-br-[8rem] scale-105 transition-transform duration-700 hover:scale-110"></div>
                        
                        {/* Main Image */}
                        <img 
                            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                            alt="Suasana Ibadah di Tanah Suci" 
                            className="relative z-10 w-full h-[500px] object-cover rounded-[4rem] md:rounded-tl-[8rem] md:rounded-br-[8rem] shadow-2xl"
                        />
                    </div>

                </div>
            </section>

            {/* Pricing / Packages Section */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="text-center mb-16" id="paket">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E352C] mb-4">Pilihan Paket Sesuai Kebutuhan Anda</h2>
                    <p className="text-gray-500 text-lg">Pilih paket perjalanan yang paling nyaman untuk Anda dan keluarga. Semua paket sudah termasuk Visa dan Asuransi.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className={`bg-white rounded-3xl p-8 border flex flex-col transition-all group ${pkg.is_popular ? 'border-2 border-[#166534] shadow-2xl relative transform md:-translate-y-4' : 'border-gray-100 shadow-sm hover:shadow-md hover:border-[#166534]/20'}`}>
                            
                            {/* Label Paling Diminati (Muncul jika is_popular = true) */}
                            {pkg.is_popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F0EBE1] text-[#166534] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-[#166534]/20">
                                    Paling Diminati
                                </div>
                            )}

                            <h3 className={`font-serif text-2xl font-bold mb-2 ${pkg.is_popular ? 'text-[#166534]' : 'text-[#2E352C] group-hover:text-[#166534]'}`}>
                                {pkg.name}
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">{pkg.description}</p>
                            
                            <div className="mb-6">
                                <span className="font-serif text-4xl font-bold text-[#2E352C]">
                                    Rp {pkg.price / 1000000}<span className="text-xl font-sans">jt</span>
                                </span>
                                <span className="text-gray-500 text-sm">/pax</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-600">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#166534] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                           <Link href={`/booking?package_id=${pkg.id}`} className={`w-full py-3 rounded-full font-medium transition-all shadow-sm flex items-center justify-center ${pkg.is_popular ? 'bg-[#166534] text-white hover:bg-opacity-90' : 'border border-[#166534] text-[#166534] hover:bg-[#166534] hover:text-white'}`}
                            >{pkg.is_popular ? 'Pilih Paket Ini' : 'Pilih Paket'}</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section: Fasilitas */}
            <section id="fasilitas" className="bg-white py-24 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#2E352C]">
                            Fasilitas Premium Kami
                        </h2>
                        <p className="text-gray-500 leading-relaxed">
                            Kami memastikan setiap aspek perjalanan Anda ditangani dengan standar tertinggi, agar Anda bisa fokus sepenuhnya pada ibadah.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Fasilitas 1 */}
                        <div className="p-8 rounded-3xl bg-[#FCFCF9] border border-gray-100 hover:shadow-md hover:border-[#166534]/20 transition-all group">
                            <div className="w-14 h-14 bg-[#166534]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#166534] transition-colors">
                                <svg className="w-7 h-7 text-[#166534] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg text-[#2E352C] mb-2">Hotel Bintang 5</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Akomodasi terbaik di Ring 1 pelataran Masjidil Haram & Nabawi.</p>
                        </div>
                        {/* Fasilitas 2 */}
                        <div className="p-8 rounded-3xl bg-[#FCFCF9] border border-gray-100 hover:shadow-md hover:border-[#166534]/20 transition-all group">
                            <div className="w-14 h-14 bg-[#166534]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#166534] transition-colors">
                                <svg className="w-7 h-7 text-[#166534] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg text-[#2E352C] mb-2">Penerbangan Direct</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Terbang langsung tanpa transit menggunakan maskapai terpercaya.</p>
                        </div>
                        {/* Fasilitas 3 */}
                        <div className="p-8 rounded-3xl bg-[#FCFCF9] border border-gray-100 hover:shadow-md hover:border-[#166534]/20 transition-all group">
                            <div className="w-14 h-14 bg-[#166534]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#166534] transition-colors">
                                <svg className="w-7 h-7 text-[#166534] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg text-[#2E352C] mb-2">Mutawwif Ahli</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Didampingi Ustadz bersertifikat yang siap membimbing ibadah Anda.</p>
                        </div>
                        {/* Fasilitas 4 */}
                        <div className="p-8 rounded-3xl bg-[#FCFCF9] border border-gray-100 hover:shadow-md hover:border-[#166534]/20 transition-all group">
                            <div className="w-14 h-14 bg-[#166534]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#166534] transition-colors">
                                <svg className="w-7 h-7 text-[#166534] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <h3 className="font-bold text-lg text-[#2E352C] mb-2">Handling Eksklusif</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Layanan VIP bandara dan pengurusan koper penuh oleh tim kami.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Jadwal Keberangkatan */}
            <section id="jadwal" className="bg-[#FCFCF9] py-24 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-[#166534]/10 text-[#166534] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4">
                            Seat Terbatas
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2E352C]">
                            Jadwal Keberangkatan Terdekat
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {/* Jadwal 1 */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <div className="bg-[#166534] text-white w-20 h-20 rounded-xl flex flex-col items-center justify-center shrink-0">
                                    <span className="text-2xl font-bold font-serif">15</span>
                                    <span className="text-xs uppercase tracking-wider">Mar 2026</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-[#2E352C] mb-1">Paket Plus Turki</h4>
                                    <p className="text-gray-500 text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        12 Hari Perjalanan
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                                <div className="text-left md:text-right">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</p>
                                    <p className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full text-sm">Sisa 4 Seat</p>
                                </div>
                                <a href="https://wa.me/6281237858277" target="_blank" rel="noreferrer" className="bg-white border-2 border-[#166534] text-[#166534] hover:bg-[#166534] hover:text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors">
                                    Booking
                                </a>
                            </div>
                        </div>

                        {/* Jadwal 2 */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <div className="bg-[#166534] text-white w-20 h-20 rounded-xl flex flex-col items-center justify-center shrink-0">
                                    <span className="text-2xl font-bold font-serif">28</span>
                                    <span className="text-xs uppercase tracking-wider">Apr 2026</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-[#2E352C] mb-1">Reguler Lailatul Qadar</h4>
                                    <p className="text-gray-500 text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        9 Hari Perjalanan
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                                <div className="text-left md:text-right">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</p>
                                    <p className="font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm">Tersedia</p>
                                </div>
                                <a href="https://wa.me/6281237858277" target="_blank" rel="noreferrer" className="bg-white border-2 border-[#166534] text-[#166534] hover:bg-[#166534] hover:text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors">
                                    Booking
                                </a>
                            </div>
                        </div>

                        {/* Jadwal 3 (Penuh) */}
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 opacity-75 grayscale-[50%]">
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <div className="bg-gray-400 text-white w-20 h-20 rounded-xl flex flex-col items-center justify-center shrink-0">
                                    <span className="text-2xl font-bold font-serif">10</span>
                                    <span className="text-xs uppercase tracking-wider">Mei 2026</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-gray-600 mb-1">VVIP Premium</h4>
                                    <p className="text-gray-400 text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        9 Hari Perjalanan
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto border-t md:border-t-0 border-gray-200 pt-4 md:pt-0">
                                <div className="text-left md:text-right">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Status</p>
                                    <p className="font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full text-sm">Penuh</p>
                                </div>
                                <button disabled className="bg-gray-200 text-gray-400 px-6 py-2.5 rounded-full text-sm font-bold cursor-not-allowed">
                                    Ditutup
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="bg-[#FCFCF9] py-24 border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-6 text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E352C] mb-4">
                        Dipercaya oleh Ribuan Jamaah
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Simak pengalaman berkesan mereka yang telah mempercayakan perjalanan sucinya bersama Al-Hijrah.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Testi 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                        {/* Quote Icon Background */}
                        <div className="absolute top-6 right-6 text-gray-100 opacity-50 group-hover:text-[#166534]/10 transition-colors">
                            <svg className="w-16 h-16 transform rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>
                        <p className="text-[#2E352C] leading-relaxed relative z-10 mb-8 font-medium">
                            "Alhamdulillah, perjalanan umroh bersama Al-Hijrah sangat berkesan. Hotelnya benar-benar di depan pelataran Masjidil Haram. Sangat memudahkan orang tua kami untuk fokus ibadah tanpa kelelahan berjalan jauh."
                        </p>
                        <div className="flex items-center relative z-10 mt-auto">
                            <img src="https://i.pravatar.cc/150?img=11" alt="H. Abdullah" className="w-12 h-12 rounded-full border-2 border-[#F0EBE1]" />
                            <div className="ml-4 text-left">
                                <h4 className="font-bold text-[#2E352C] text-sm">H. Abdullah & Keluarga</h4>
                                <p className="text-xs text-[#166534] font-medium mt-0.5">Jamaah VVIP Premium</p>
                            </div>
                        </div>
                    </div>

                    {/* Testi 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-6 right-6 text-gray-100 opacity-50 group-hover:text-[#166534]/10 transition-colors">
                            <svg className="w-16 h-16 transform rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>
                        <p className="text-[#2E352C] leading-relaxed relative z-10 mb-8 font-medium">
                            "Mutawwifnya masyaAllah sangat sabar dan berilmu. Kajian dan pendampingan selama di Madinah sangat menambah iman. Makanan juga full masakan Nusantara jadi selera makan tetap terjaga."
                        </p>
                        <div className="flex items-center relative z-10 mt-auto">
                            <img src="https://i.pravatar.cc/150?img=5" alt="Hj. Siti Aisyah" className="w-12 h-12 rounded-full border-2 border-[#F0EBE1]" />
                            <div className="ml-4 text-left">
                                <h4 className="font-bold text-[#2E352C] text-sm">Hj. Siti Aisyah</h4>
                                <p className="text-xs text-[#166534] font-medium mt-0.5">Jamaah Reguler</p>
                            </div>
                        </div>
                    </div>

                    {/* Testi 3 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-6 right-6 text-gray-100 opacity-50 group-hover:text-[#166534]/10 transition-colors">
                            <svg className="w-16 h-16 transform rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>
                        <p className="text-[#2E352C] leading-relaxed relative z-10 mb-8 font-medium">
                            "Sistem pendaftarannya praktis banget! Semua transparan dari awal. Trip ke Cappadocia benar-benar diatur rapi dan tiket kereta cepat Haramain sangat menghemat waktu. Fix bakal umroh lagi pakai Al-Hijrah."
                        </p>
                        <div className="flex items-center relative z-10 mt-auto">
                            <img src="https://i.pravatar.cc/150?img=12" alt="Budi Santoso" className="w-12 h-12 rounded-full border-2 border-[#F0EBE1]" />
                            <div className="ml-4 text-left">
                                <h4 className="font-bold text-[#2E352C] text-sm">Budi Santoso</h4>
                                <p className="text-xs text-[#166534] font-medium mt-0.5">Jamaah Plus Turki</p>
                            </div>
                        </div>
                    </div>

                    {/* Testi 4 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-6 right-6 text-gray-100 opacity-50 group-hover:text-[#166534]/10 transition-colors">
                            <svg className="w-16 h-16 transform rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>
                        <p className="text-[#2E352C] leading-relaxed relative z-10 mb-8 font-medium">
                            "Baru pertama kali umroh dan merasa sangat dijaga. Tim handling bandara sangat cekatan, koper semua aman kita tinggal bawa badan. Fasilitas lounge VVIP-nya juga sangat nyaman sambil menunggu boarding."
                        </p>
                        <div className="flex items-center relative z-10 mt-auto">
                            <img src="https://i.pravatar.cc/150?img=32" alt="Keluarga dr. Rahmat" className="w-12 h-12 rounded-full border-2 border-[#F0EBE1]" />
                            <div className="ml-4 text-left">
                                <h4 className="font-bold text-[#2E352C] text-sm">Kel. dr. Rahmat</h4>
                                <p className="text-xs text-[#166534] font-medium mt-0.5">Jamaah VVIP Premium</p>
                            </div>
                        </div>
                    </div>

                    {/* Testi 5 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-6 right-6 text-gray-100 opacity-50 group-hover:text-[#166534]/10 transition-colors">
                            <svg className="w-16 h-16 transform rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>
                        <p className="text-[#2E352C] leading-relaxed relative z-10 mb-8 font-medium">
                            "Perjalanan ke Thaif sangat menakjubkan. Bus yang dipakai sangat bersih dan nyaman, drivernya juga profesional. Mengurus visa lewat aplikasi agensi ini beneran ngga bikin pusing sama sekali."
                        </p>
                        <div className="flex items-center relative z-10 mt-auto">
                            <img src="https://i.pravatar.cc/150?img=20" alt="Ibu Farah" className="w-12 h-12 rounded-full border-2 border-[#F0EBE1]" />
                            <div className="ml-4 text-left">
                                <h4 className="font-bold text-[#2E352C] text-sm">Ibu Farah</h4>
                                <p className="text-xs text-[#166534] font-medium mt-0.5">Jamaah Reguler</p>
                            </div>
                        </div>
                    </div>

                    {/* Testi 6 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-6 right-6 text-gray-100 opacity-50 group-hover:text-[#166534]/10 transition-colors">
                            <svg className="w-16 h-16 transform rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>
                        <p className="text-[#2E352C] leading-relaxed relative z-10 mb-8 font-medium">
                            "Sangat recommended untuk keluarga muda yang bawa balita. Tour leadernya ramah dan ngerti banget ritme istirahat anak-anak. Semuanya diatur sedemikian rupa, insyaAllah Al-Hijrah makin berkah."
                        </p>
                        <div className="flex items-center relative z-10 mt-auto">
                            <img src="https://i.pravatar.cc/150?img=13" alt="Reza & Nisa" className="w-12 h-12 rounded-full border-2 border-[#F0EBE1]" />
                            <div className="ml-4 text-left">
                                <h4 className="font-bold text-[#2E352C] text-sm">Reza & Nisa</h4>
                                <p className="text-xs text-[#166534] font-medium mt-0.5">Jamaah Reguler</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <h2 className="font-serif text-4xl font-bold text-[#2E352C] text-center mb-12">
                    Pertanyaan yang Sering Diajukan
                </h2>
                
                <div className="space-y-4">
                    {/* FAQ Item 1 */}
                    <details className="group border border-gray-200 rounded-2xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-3 px-6 py-5 font-bold text-[#2E352C] cursor-pointer hover:bg-gray-50 transition-colors">
                            Apakah harga paket sudah termasuk pembuatan paspor?
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                            Harga paket tidak termasuk pembuatan paspor dan meningitis. Namun, tim kami akan membantu proses *booking* antrean di kantor imigrasi dan memberikan surat rekomendasi resmi dari agensi agar proses pembuatan paspor Anda lebih cepat dan mudah.
                        </div>
                    </details>

                    {/* FAQ Item 2 */}
                    <details className="group border border-gray-200 rounded-2xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-3 px-6 py-5 font-bold text-[#2E352C] cursor-pointer hover:bg-gray-50 transition-colors">
                            Bagaimana sistem pembayarannya? Apakah bisa dicicil?
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                            Bisa. Untuk mengamankan *seat* (seat booking), Anda cukup membayar DP sebesar Rp 5.000.000. Sisanya bisa dicicil bertahap dan wajib dilunasi maksimal 1 bulan sebelum jadwal keberangkatan.
                        </div>
                    </details>

                    {/* FAQ Item 3 */}
                    <details className="group border border-gray-200 rounded-2xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-3 px-6 py-5 font-bold text-[#2E352C] cursor-pointer hover:bg-gray-50 transition-colors">
                            Apakah aman untuk jamaah lansia atau yang memakai kursi roda?
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                            Sangat aman. Kami menyediakan mutawwif dan asisten khusus untuk membantu mendorong kursi roda jamaah lansia selama proses Tawaf dan Sa'i (ada biaya tambahan untuk penyewaan pendorong resmi dari Masjidil Haram). Pemilihan hotel ring 1 juga sangat memudahkan mobilitas lansia.
                        </div>
                    </details>

                    {/* FAQ Item 4 */}
                    <details className="group border border-gray-200 rounded-2xl bg-white overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between gap-3 px-6 py-5 font-bold text-[#2E352C] cursor-pointer hover:bg-gray-50 transition-colors">
                            Bagaimana jika saya batal berangkat secara mendadak?
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                            Kami memiliki kebijakan *refund* (pengembalian dana) yang transparan sesuai dengan syarat dan ketentuan Kemenag. Potongan biaya pembatalan akan disesuaikan dengan seberapa dekat waktu pembatalan dengan jadwal keberangkatan (terkait tiket pesawat dan visa yang hangus).
                        </div>
                    </details>
                </div>
            </section>

            {/* CTA / Bottom Hero Section */}
            <section className="max-w-6xl mx-auto px-6 pb-24 pt-6">
                {/* Menggunakan warna coklat keemasan/tembaga untuk kesan premium/padang pasir */}
                <div className="bg-[#B48455] rounded-[3rem] p-12 md:p-20 text-center shadow-lg relative overflow-hidden">
                    {/* Background Pattern/Glow */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl"></div>
                    
                    <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
                        Siap menyempurnakan <br className="hidden md:block"/> ibadah Anda?
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
                        Amankan kursi Anda sekarang. Bergabunglah dengan ribuan tamu Allah lainnya dalam perjalanan spiritual yang nyaman dan menenangkan hati.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Link href="/booking" className="bg-white text-[#B48455] px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-all shadow-md">
                            Daftar Sekarang
                        </Link>
                        <Link href="https://wa.me/6281237858277" rel="noreferrer" className="bg-transparent text-white border-2 border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                            Tanya Admin via WA
                        </Link>
                    </div>
                </div>
            </section>
            
            

            {/* Footer Section */}
            <footer className="bg-[#2E352C] text-white/80 pt-20 pb-10 border-t border-[#166534]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                        
                        {/* Kolom 1: Brand & Deskripsi */}
                        <div className="md:col-span-5">
                            <Link href="/" className="font-serif font-bold text-2xl flex items-center gap-2 text-white mb-6">
                                <svg className="w-8 h-8 text-[#166534]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
                                Al-Hijrah
                            </Link>
                            <p className="text-white/60 leading-relaxed mb-8 pr-4">
                                Biro Perjalanan Umroh & Haji Khusus resmi dan terpercaya. Berkomitmen melayani tamu Allah dengan fasilitas premium, bimbingan sesuai sunnah, dan pelayanan sepenuh hati.
                            </p>
                            {/* Izin Resmi */}
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                                    <p className="text-xs text-white/50 mb-1">Izin Umroh</p>
                                    <p className="font-bold text-white text-sm">SK Kemenag No. 123/2020</p>
                                </div>
                            </div>
                        </div>

                        {/* Kolom 2: Tautan Cepat */}
                        <div className="md:col-span-3">
                            <h4 className="font-bold text-white text-lg mb-6">Tautan Cepat</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#paket" onClick={(e) => scrollToSection(e, 'paket')} className="hover:text-[#F0EBE1] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#166534]"></span> Paket Umroh
                                    </a>
                                </li>
                                <li>
                                    <a href="#fasilitas" onClick={(e) => scrollToSection(e, 'fasilitas')} className="hover:text-[#F0EBE1] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#166534]"></span> Fasilitas Kami
                                    </a>
                                </li>
                                <li>
                                    <a href="#jadwal" onClick={(e) => scrollToSection(e, 'jadwal')} className="hover:text-[#F0EBE1] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#166534]"></span> Jadwal Keberangkatan
                                    </a>
                                </li>
                                <li>
                                    <Link href={route('login')} className="hover:text-[#F0EBE1] transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span> Portal Admin
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Kolom 3: Kontak & Alamat */}
                        <div className="md:col-span-4">
                            <h4 className="font-bold text-white text-lg mb-6">Hubungi Kami</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-white/10 p-2 rounded-lg shrink-0">
                                        <svg className="w-5 h-5 text-[#F0EBE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <p className="leading-relaxed">Gedung Al-Hijrah Tower, Jl. Jend. Sudirman Kav. 12, Jakarta Selatan, 12190</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg shrink-0">
                                        <svg className="w-5 h-5 text-[#F0EBE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <p className="font-bold text-white">+62 812-3785-8277</p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg shrink-0">
                                        <svg className="w-5 h-5 text-[#F0EBE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <p>info@alhijrah-travel.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar: Copyright & Socials */}
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-white/50">
                            &copy; {new Date().getFullYear()} Al-Hijrah Travel. Hak Cipta Dilindungi.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#166534] hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#166534] hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Pop-up Success Alert (Centered Modal) */}
            {showToast && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#2E352C]/60 backdrop-blur-sm transition-all">
                    <div className="bg-[#166534] text-white p-8 md:p-10 rounded-[2rem] shadow-2xl max-w-md w-full relative text-center border border-white/20 transform scale-100">
                        
                        {/* Tombol Close 'X' di pojok kanan atas modal */}
                        <button 
                            onClick={() => setShowToast(false)} 
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        {/* Ikon Centang Besar */}
                        <div className="mx-auto bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>

                        {/* Judul & Teks Pesan */}
                        <h4 className="font-serif text-3xl font-bold mb-4">Alhamdulillah!</h4>
                        <p className="text-white/90 leading-relaxed mb-8 text-sm md:text-base">
                            {flash.success}
                        </p>

                        {/* Tombol Tutup Utama */}
                        <button 
                            onClick={() => setShowToast(false)}
                            className="bg-white text-[#166534] px-8 py-3.5 rounded-full font-bold w-full hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Tutup Pesan
                        </button>
                    </div>
                </div>
            )}

            {/* ========================================================= */}
            {/* SPLASH SCREEN / WELCOME BUMPER */}
            {/* ========================================================= */}
            {showSplash && (
                <div className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#2E352C] transition-opacity duration-700 ease-in-out ${isClosingSplash ? 'opacity-0' : 'opacity-100'}`}>
                    
                    {/* Background Gambar Estetik (Ka'bah transparan) */}
                    <img 
                        src="https://images.unsplash.com/photo-1565552643952-b504e066a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                        alt="Background" 
                        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
                    />

                    {/* Konten Utama Splash Screen */}
                    <div className={`relative z-10 text-center transform transition-all duration-700 delay-100 ease-out flex flex-col items-center px-6 ${isClosingSplash ? 'translate-y-8 opacity-0 scale-95' : 'translate-y-0 opacity-100 scale-100'}`}>
                        
                        {/* Logo Animasi Pulse */}
                        <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center mb-8 border border-white/20 shadow-2xl animate-pulse">
                            <svg className="w-12 h-12 text-[#F0EBE1]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
                        </div>
                        
                        <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#F0EBE1] mb-4 tracking-wide drop-shadow-lg">
                            Al-Hijrah Travel
                        </h1>
                        
                        <p className="text-white/70 text-lg md:text-xl mb-12 max-w-lg mx-auto font-light leading-relaxed">
                            Melangkah dengan pasti, beribadah dengan sepenuh hati. Sambut panggilan-Nya bersama kami.
                        </p>
                        
                        <button 
                            onClick={handleCloseSplash}
                            className="bg-[#F0EBE1] text-[#166534] px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-[0_0_40px_rgba(240,235,225,0.3)] hover:shadow-[0_0_60px_rgba(240,235,225,0.5)] transform hover:-translate-y-1 flex items-center gap-3"
                        >
                            Mulai Eksplorasi
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                    </div>

                    {/* Efek Cahaya di sudut layar */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#166534] rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-900 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
                </div>
            )}
            {/* ========================================================= */}
        </div>
        
    );
}