<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class Report extends Model
{
    use HasFactory;
    public $incrementing = false;

    protected $keyType = 'string';
    protected $fillable = ['report_type', 'date_range_start', 'date_range_end', 'content'];
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getKeyName()} = Uuid::generate()->string;
        });
    }

}
