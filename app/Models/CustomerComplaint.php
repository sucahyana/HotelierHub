<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class CustomerComplaint extends Model
{
    use HasFactory;
    public $incrementing = false;

    protected $keyType = 'string';
    protected $fillable = ['customer_id', 'complaint', 'resolution', 'status'];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getKeyName()} = Uuid::generate()->string;
        });
    }
}
