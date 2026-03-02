<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request; // INI YANG BENAR
use Inertia\Inertia;
use App\Models\Package;
use App\Models\Booking;
use App\Http\Controllers\ProfileController;


// ... (lanjutan route di bawahnya)

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'packages' => App\Models\Package::all(),
        // Tambahkan baris ini untuk menangkap pesan sukses
        'flash' => [
            'success' => session('success')
        ]
    ]);
});

Route::get('/booking', function (Request $request) {
    $packages = App\Models\Package::all();
    
    return Inertia::render('Booking', [
        'packages' => $packages,
        // Kita tangkap ID paket dari URL untuk dikirim ke React
        'preselectedPackage' => $request->query('package_id') 
    ]);
})->name('booking.form');

// Route sementara untuk menangani submit form (Nanti kita buatkan logic simpannya)
Route::post('/booking', function (Request $request) {
    // 1. Validasi data yang masuk
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'phone' => 'required|string|max:20',
        'email' => 'nullable|email|max:255',
        'package_id' => 'required|exists:packages,id',
        'notes' => 'nullable|string',
    ]);

    // 2. Simpan ke database
    Booking::create($validated);

    // 3. Kembalikan ke halaman depan dengan pesan sukses
    // (Pesan sukses ini nantinya bisa kita tangkap di React)
    return redirect('/')->with('success', 'Alhamdulillah! Pendaftaran Anda berhasil diterima. Tim kami akan segera menghubungi nomor WhatsApp Anda.');
})->name('booking.submit');

// Pastikan use App\Models\Booking; ada di bagian paling atas file jika belum ada

Route::get('/dashboard', function () {
    // Mengambil semua data booking, diurutkan dari yang paling baru, 
    // beserta relasi nama paketnya
    $bookings = App\Models\Booking::with('package')->latest()->get();

    return Inertia::render('Dashboard', [
        'bookings' => $bookings
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');


// Rute untuk mengupdate status pendaftaran
Route::patch('/bookings/{booking}/status', function (\Illuminate\Http\Request $request, App\Models\Booking $booking) {
    // Validasi data yang masuk
    $request->validate(['status' => 'required|string']);
    
    // Update status di database
    $booking->update(['status' => $request->status]);
    
    // Kembalikan ke halaman dashboard tanpa refresh
    return back();
})->middleware(['auth', 'verified']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';