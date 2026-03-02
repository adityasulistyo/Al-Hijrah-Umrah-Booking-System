<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Package;

class PackageSeeder extends Seeder
{
    public function run(): void
    {
        Package::create([
            'name' => 'Reguler',
            'description' => 'Paket hemat dengan fasilitas bintang 4 yang nyaman.',
            'price' => 28000000,
            'is_popular' => false,
            'features' => [
                'Hotel Bintang 4 (Makkah & Madinah)',
                'Tiket Pesawat Economy PP',
                'Bus Full AC selama di Saudi',
                'Makan 3x Sehari (Menu Indonesia)',
                'Mutawwif Berpengalaman'
            ]
        ]);

        Package::create([
            'name' => 'Plus Turki',
            'description' => 'Ibadah sekaligus tadabbur alam di Cappadocia.',
            'price' => 36000000,
            'is_popular' => true,
            'features' => [
                'Hotel Bintang 5 (Makkah & Madinah)',
                'City Tour Istanbul & Cappadocia',
                'Tiket Kereta Cepat Haramain',
                'Makan Fullboard (Buffet Hotel)',
                'Free Bosphorus Cruise'
            ]
        ]);

        Package::create([
            'name' => 'VVIP Premium',
            'description' => 'Fasilitas eksklusif untuk privasi dan kenyamanan ekstra.',
            'price' => 45000000,
            'is_popular' => false,
            'features' => [
                'Hotel Bintang 5 Ring 1 (Pelataran Masjid)',
                'Penerbangan Direct (Tanpa Transit)',
                'Transportasi Private Car GMC',
                'VIP Airport Handling',
                'Mutawwif Khusus Per Keluarga'
            ]
        ]);
    }
}