<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'is_popular',
        'features',
    ];

    // Mengubah JSON di database menjadi Array saat ditarik ke Laravel/React
    protected $casts = [
        'features' => 'array',
        'is_popular' => 'boolean',
    ];
}