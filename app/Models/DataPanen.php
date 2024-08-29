<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataPanen extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function desa()
    {
        return $this->belongsTo(Desa::class, 'desa_id', 'id');
    }
}
