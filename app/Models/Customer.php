<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class Customer extends Model
{
    use HasFactory;
    public $incrementing = false;

    protected $keyType = 'string';
    protected $fillable = ['name', 'email', 'phone_number', 'address'];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function complaints()
    {
        return $this->hasMany(CustomerComplaint::class);
    }
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getKeyName()} = Uuid::generate()->string;
        });
    }
}
