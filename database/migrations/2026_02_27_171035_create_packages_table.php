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
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Contoh: Reguler, Plus Turki
            $table->text('description'); // Penjelasan singkat paket
            $table->integer('price'); // Harga paket (contoh: 28000000)
            $table->boolean('is_popular')->default(false); // Untuk label "Paling Diminati"
            $table->json('features'); // Menyimpan list fasilitas (array)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
