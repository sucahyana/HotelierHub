<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class Payment extends Model
{
    use HasFactory;
    public $incrementing = false;

    protected $keyType = 'string';
    protected $fillable = ['booking_id', 'amount', 'payment_method', 'payment_date'];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getKeyName()} = Uuid::generate()->string;
        });
    }
}
