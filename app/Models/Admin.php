<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class Admin extends Model
{
    use HasFactory;
    public $incrementing = false;

    protected $keyType = 'string';
    protected $fillable = ['name', 'email', 'phone_number', 'address','super'];

    public function users(){
        return $this->hasOne(User::class);
    }
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getKeyName()} = Uuid::generate()->string;
        });
    }
}
