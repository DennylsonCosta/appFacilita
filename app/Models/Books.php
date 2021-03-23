<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    protected $table        = 'books';
    protected $primaryKey   = 'id';

    protected $fillable = [
        'name',
        'bar_code'
    ];

    protected $cast = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];
}
