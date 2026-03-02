<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'email',
        'notes',
        'package_id',
        'status',
    ];

    // Relasi: 1 Booking punya 1 Paket
    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}