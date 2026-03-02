import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className="flex min-h-screen bg-white font-sans text-[#2E352C]">
            <Head title="Buat Akun - Al-Hijrah" />

            {/* Left Column: Form Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative">
                
                {/* Logo Top Left */}
                <div className="absolute top-8 left-8 sm:top-12 sm:left-16 lg:left-24 font-serif font-bold text-2xl flex items-center gap-2">
                    <svg className="w-8 h-8 text-[#166534]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
                    Al-Hijrah
                </div>

                <div className="mt-20 lg:mt-0 max-w-md w-full mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">Buat Akun Baru</h1>
                        <p className="text-gray-500 text-sm">Silakan lengkapi data Anda untuk mengakses Dashboard</p>
                    </div>

                    {/* Toggle Switch (Sign In / Sign Up) */}
                    <div className="flex bg-gray-50 p-1.5 rounded-2xl mb-10 border border-gray-100 shadow-inner">
                        <Link href={route('login')} className="w-1/2 text-center py-3 rounded-xl text-sm font-bold text-gray-500 hover:text-[#166534] transition-colors">
                            Sign In
                        </Link>
                        <div className="w-1/2 text-center py-3 rounded-xl text-sm font-bold bg-white text-[#166534] shadow-sm border border-gray-100">
                            Sign Up
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={submit} className="space-y-5">
                        {/* Name Input */}
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                                </div>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    placeholder="Nama Lengkap"
                                    className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-[#166534] focus:border-[#166534] transition-colors placeholder-gray-400"
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</p>}
                        </div>

                        {/* Email Input */}
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    placeholder="Alamat Email"
                                    className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-[#166534] focus:border-[#166534] transition-colors placeholder-gray-400"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>}
                        </div>

                        {/* Password Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                                    </div>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                        placeholder="Password"
                                        className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-[#166534] focus:border-[#166534] transition-colors placeholder-gray-400"
                                    />
                                </div>
                                {errors.password && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.password}</p>}
                            </div>

                            <div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                                    </div>
                                    <input
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                        placeholder="Konfirmasi"
                                        className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-[#166534] focus:border-[#166534] transition-colors placeholder-gray-400"
                                    />
                                </div>
                                {errors.password_confirmation && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.password_confirmation}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-[#166534] text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-opacity-90 transition-all disabled:opacity-70 flex justify-center items-center gap-2"
                            >
                                {processing ? 'Memproses...' : 'Continue'}
                            </button>
                        </div>
                    </form>

                    {/* Footer Text */}
                    <p className="text-center text-xs text-gray-400 mt-12 leading-relaxed">
                        Dengan mendaftar, Anda menyetujui sistem manajemen privasi dan pengelolaan data jamaah dari Al-Hijrah Travel.
                    </p>
                </div>
            </div>

            {/* Right Column: Image/Graphic Section */}
            <div className="hidden lg:flex w-1/2 bg-[#166534] relative items-center justify-center overflow-hidden">
                {/* Overlay Gradient for depth */}
                 <div className="absolute inset-0 bg-gradient-to-br from-[#166534]/95 to-[#0A2E17]/98 z-10"></div>
                
                {/* Background Image (Mecca/Islamic Geometry Vibe) */}
               <img 
                    src="https://images.unsplash.com/photo-1691566264354-88491ba17f15?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Suasana Ibadah di Makkah" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />

                {/* Content over image */}
                <div className="relative z-20 text-center text-white px-12 max-w-lg">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl mx-auto flex items-center justify-center mb-8 border border-white/20 shadow-2xl">
                        <svg className="w-12 h-12 text-[#F0EBE1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <h2 className="font-serif text-4xl font-bold mb-6 leading-tight text-[#F0EBE1]">Sistem Terpadu <br/> Biro Perjalanan</h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                        Kelola data jamaah, atur jadwal keberangkatan, dan pantau pembayaran dengan aman dalam satu ekosistem digital.
                    </p>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl z-10"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-black/20 rounded-full blur-3xl z-10"></div>
            </div>
        </div>
    );
}