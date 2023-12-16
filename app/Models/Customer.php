<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email', 'phone_number', 'address'];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function complaints()
    {
        return $this->hasMany(CustomerComplaint::class);
    }
}
