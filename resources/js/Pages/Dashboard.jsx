import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function Dashboard({ auth, bookings }) {
    
    // Fungsi untuk mengirim perubahan status ke backend
    const handleStatusChange = (bookingId, newStatus) => {
        router.patch(`/bookings/${bookingId}/status`, { status: newStatus }, {
            preserveScroll: true, // Mencegah halaman scroll ke atas saat loading
        });
    };

    // Fungsi untuk memberikan warna berbeda pada setiap status
    const getStatusColor = (status) => {
        switch(status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'dihubungi': return 'bg-blue-100 text-blue-800';
            case 'dp_lunas': return 'bg-purple-100 text-purple-800';
            case 'lunas': return 'bg-green-100 text-green-800';
            case 'batal': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-serif font-bold text-2xl text-[#2E352C] leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Dashboard - Admin Al-Hijrah" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8">
                    
                    {/* Welcome Card & Stats */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-3xl border border-gray-100 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h3 className="font-bold text-[#166534] text-xl mb-1">Ahlan wa Sahlan, {auth.user.name}!</h3>
                            <p className="text-gray-500 text-sm">Pantau dan kelola data pendaftaran calon jamaah umroh di sini.</p>
                        </div>
                        <div className="bg-[#F0EBE1] text-[#166534] px-6 py-4 rounded-2xl flex items-center gap-4 text-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">Total Pendaftar</p>
                                <p className="font-serif text-3xl font-bold">{bookings.length} <span className="text-sm font-sans font-medium opacity-80">Jamaah</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-3xl border border-gray-100">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h4 className="font-bold text-[#2E352C] text-lg">Pendaftaran Terbaru</h4>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#FCFCF9] text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                                        <th className="p-4 font-bold">Tgl Daftar</th>
                                        <th className="p-4 font-bold">Nama Jamaah</th>
                                        <th className="p-4 font-bold">Kontak</th>
                                        <th className="p-4 font-bold">Paket Pilihan</th>
                                        <th className="p-4 font-bold">Status</th>
                                        <th className="p-4 font-bold text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {bookings.length > 0 ? (
                                        bookings.map((booking) => (
                                            <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                                <td className="p-4 text-gray-500">
                                                    {new Date(booking.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                </td>
                                                <td className="p-4 font-bold text-[#2E352C]">
                                                    {booking.name}
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex flex-col">
                                                        <span className="font-medium text-[#166534]">{booking.phone}</span>
                                                        <span className="text-xs text-gray-400">{booking.email || '-'}</span>
                                                    </div>
                                                </td>
                                                <td className="p-4">
                                                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                                        {booking.package?.name || 'Paket Dihapus'}
                                                    </span>
                                                </td>
                                                
                                                {/* Kolom Status (Sekarang jadi Dropdown) */}
                                                <td className="p-4">
                                                    <select
                                                        value={booking.status}
                                                        onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                                                        className={`px-3 py-1.5 rounded-full text-xs font-bold border-0 cursor-pointer focus:ring-2 focus:ring-[#166534] appearance-none text-center pr-8 shadow-sm transition-colors ${getStatusColor(booking.status)}`}
                                                        style={{ 
                                                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, 
                                                            backgroundPosition: 'right 0.5rem center', 
                                                            backgroundSize: '1.2em 1.2em', 
                                                            backgroundRepeat: 'no-repeat' 
                                                        }}
                                                    >
                                                        <option value="pending">PENDING</option>
                                                        <option value="dihubungi">DIHUBUNGI</option>
                                                        <option value="dp_lunas">DP LUNAS</option>
                                                        <option value="lunas">LUNAS</option>
                                                        <option value="batal">BATAL</option>
                                                    </select>
                                                </td>

                                                <td className="p-4 text-center">
                                                    <a href={`https://wa.me/${booking.phone.replace(/^0/, '62')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[#166534] bg-[#166534]/10 hover:bg-[#166534] hover:text-white px-3 py-1.5 rounded-lg transition-colors text-xs font-bold">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                                        Hubungi
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="p-8 text-center text-gray-500">
                                                Belum ada pendaftar saat ini.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}