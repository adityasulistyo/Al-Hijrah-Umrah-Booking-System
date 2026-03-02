<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone');
            $table->string('email')->nullable(); // Boleh kosong
            $table->text('notes')->nullable();   // Boleh kosong
            
            // Relasi ke tabel packages (paket yang dipilih)
            $table->foreignId('package_id')->constrained('packages')->onDelete('cascade');
            
            // Status pendaftaran: pending, dihubungi, dp_lunas, dll
            $table->string('status')->default('pending'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
