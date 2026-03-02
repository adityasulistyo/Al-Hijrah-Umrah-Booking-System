import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Booking({ packages, preselectedPackage }) {
    // Menggunakan Inertia useForm untuk manajemen form yang rapi
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        phone: '',
        email: '',
        package_id: preselectedPackage || '',
        notes: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mengirim data ke route POST /booking
        post('/booking');
    };

    return (
        <div className="bg-[#FCFCF9] min-h-screen font-sans text-[#2E352C] flex flex-col">
            <Head title="Form Pendaftaran Umroh - Al-Hijrah" />

            {/* Simple Navbar */}
            <nav className="max-w-6xl w-full mx-auto px-6 py-6 flex justify-between items-center">
                <Link href="/" className="font-serif font-bold text-2xl flex items-center gap-2">
                    <svg className="w-8 h-8 text-[#166534]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
                    Al-Hijrah
                </Link>
                <Link href="/" className="text-sm font-medium text-gray-500 hover:text-[#166534] flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Kembali ke Beranda
                </Link>
            </nav>

            {/* Main Content */}
            <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                
                {/* Left Column: Info & Trust Elements */}
                <div className="lg:w-5/12 pt-8 lg:sticky lg:top-12">
                    <div className="inline-block bg-[#F0EBE1] text-[#166534] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
                        Pendaftaran Mudah & Aman
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#2E352C]">
                        Langkah awal menuju <br/> Baitullah.
                    </h1>
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                        Lengkapi data diri Anda. Tim konsultan kami akan segera menghubungi Anda untuk proses konfirmasi kursi, penjelasan detail jadwal, dan panduan pembayaran DP.
                    </p>

                    {/* Trust Badges */}
                    <div className="space-y-6 border-t border-gray-200 pt-8">
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-[#166534]/10 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#2E352C] mb-1">Data Anda Terlindungi</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">Kami mematuhi standar privasi data. Dokumen Anda dienkripsi dan hanya digunakan untuk keperluan visa dan tiket.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-[#166534]/10 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#2E352C] mb-1">Tanpa Biaya Tersembunyi</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">Pembayaran dilakukan secara bertahap melalui Rekening Resmi Perusahaan (Bukan rekening pribadi agen).</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: The Form */}
                <div className="lg:w-7/12 w-full">
                    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Pilihan Paket */}
                            <div>
                                <label className="block text-sm font-bold text-[#2E352C] mb-2">Pilih Paket Umroh <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select 
                                        value={data.package_id}
                                        onChange={e => setData('package_id', e.target.value)}
                                        className="w-full appearance-none bg-[#FCFCF9] border border-gray-200 text-gray-700 py-4 px-5 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-[#166534] focus:ring-1 focus:ring-[#166534] transition-colors"
                                        required
                                    >
                                        <option value="" disabled>-- Silakan Pilih Paket --</option>
                                        {packages.map(pkg => (
                                            <option key={pkg.id} value={pkg.id}>
                                                {pkg.name} (Rp {pkg.price / 1000000} Juta)
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Nama Lengkap */}
                            <div>
                                <label className="block text-sm font-bold text-[#2E352C] mb-2">Nama Lengkap (Sesuai KTP) <span className="text-red-500">*</span></label>
                                <input 
                                    type="text" 
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    className="w-full bg-[#FCFCF9] border border-gray-200 text-gray-700 py-4 px-5 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-[#166534] focus:ring-1 focus:ring-[#166534] transition-colors placeholder-gray-400"
                                    placeholder="Contoh: Budi Santoso"
                                    required
                                />
                            </div>

                            {/* Kontak Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-[#2E352C] mb-2">No. WhatsApp <span className="text-red-500">*</span></label>
                                    <input 
                                        type="tel" 
                                        value={data.phone}
                                        onChange={e => setData('phone', e.target.value)}
                                        className="w-full bg-[#FCFCF9] border border-gray-200 text-gray-700 py-4 px-5 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-[#166534] focus:ring-1 focus:ring-[#166534] transition-colors placeholder-gray-400"
                                        placeholder="0812xxxx..."
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#2E352C] mb-2">Alamat Email</label>
                                    <input 
                                        type="email" 
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full bg-[#FCFCF9] border border-gray-200 text-gray-700 py-4 px-5 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-[#166534] focus:ring-1 focus:ring-[#166534] transition-colors placeholder-gray-400"
                                        placeholder="budi@email.com"
                                    />
                                </div>
                            </div>

                            {/* Catatan */}
                            <div>
                                <label className="block text-sm font-bold text-[#2E352C] mb-2">Catatan Khusus (Opsional)</label>
                                <textarea 
                                    value={data.notes}
                                    onChange={e => setData('notes', e.target.value)}
                                    rows="3"
                                    className="w-full bg-[#FCFCF9] border border-gray-200 text-gray-700 py-4 px-5 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-[#166534] focus:ring-1 focus:ring-[#166534] transition-colors placeholder-gray-400 resize-none"
                                    placeholder="Misal: Saya berangkat bersama orang tua yang menggunakan kursi roda..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className="w-full bg-[#166534] text-white font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {processing ? 'Memproses...' : 'Kirim Form Pendaftaran'}
                                    {!processing && (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    )}
                                </button>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    Dengan menekan tombol di atas, Anda menyetujui Syarat & Ketentuan dari Al-Hijrah Travel.
                                </p>
                            </div>

                        </form>
                    </div>
                </div>

            </main>
        </div>
    );
}