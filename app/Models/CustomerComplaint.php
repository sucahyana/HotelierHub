<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerComplaint extends Model
{
    use HasFactory;
    protected $fillable = ['customer_id', 'complaint', 'resolution', 'status'];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
