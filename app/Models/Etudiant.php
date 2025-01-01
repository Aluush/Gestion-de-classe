<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'note1',
        'note2',
        'moyenne',
        'longitude',
        'latitude',
    ];
}
