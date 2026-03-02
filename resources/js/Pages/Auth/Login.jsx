import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="flex min-h-screen bg-white font-sans text-[#2E352C]">
            <Head title="Log In Admin - Al-Hijrah" />

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
                        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">Selamat Datang</h1>
                        <p className="text-gray-500 text-sm">Silakan Log In untuk mengelola data jamaah.</p>
                    </div>

                    {/* Session Status (if any) */}
                    {status && <div className="mb-4 font-medium text-sm text-green-600 text-center">{status}</div>}

                    {/* Toggle Switch (Sign In / Sign Up) */}
                    <div className="flex bg-gray-50 p-1.5 rounded-2xl mb-10 border border-gray-100 shadow-inner">
                        <div className="w-1/2 text-center py-3 rounded-xl text-sm font-bold bg-white text-[#166534] shadow-sm border border-gray-100">
                            Sign In
                        </div>
                        <Link href={route('register')} className="w-1/2 text-center py-3 rounded-xl text-sm font-bold text-gray-500 hover:text-[#166534] transition-colors">
                            Sign Up
                        </Link>
                    </div>

                    {/* Form */}
                    <form onSubmit={submit} className="space-y-5">
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
                                    autoComplete="username"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>}
                        </div>

                        {/* Password Input */}
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
                                    autoComplete="current-password"
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.password}</p>}
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="rounded border-gray-300 text-[#166534] shadow-sm focus:ring-[#166534] focus:ring-opacity-50"
                                />
                                <span className="ml-2 text-sm text-gray-500">Remember me</span>
                            </label>
                            {canResetPassword && (
                                <Link href={route('password.request')} className="text-sm text-gray-500 hover:text-[#166534] transition-colors">
                                    Forgot Password?
                                </Link>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-3">
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
                        Hanya Admin resmi Al-Hijrah Travel yang diperbolehkan mengakses sistem ini. Segala bentuk aktivitas ilegal akan dicatat.
                    </p>
                </div>
            </div>

            {/* Right Column: Image/Graphic Section */}
            <div className="hidden lg:flex w-1/2 bg-[#166534] relative items-center justify-center overflow-hidden">
                {/* Overlay Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#166534]/95 to-[#0A2E17]/98 z-10"></div>
                
                {/* Background Image (Kaaba/Mecca) - Foto Pilihan dari Unsplash */}
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
                    <h2 className="font-serif text-4xl font-bold mb-6 leading-tight text-[#F0EBE1]">Akses Terpusat <br/> Data Jamaah</h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                        Masuk ke dashboard untuk memantau pendaftaran terbaru, mengelola jadwal keberangkatan, dan memverifikasi dokumen calon jamaah.
                    </p>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-black/20 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}