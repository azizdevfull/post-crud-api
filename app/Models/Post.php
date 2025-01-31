<?php

namespace App\Models;

use ApiPlatform\Metadata\ApiResource;
use Illuminate\Database\Eloquent\Model;

#[ApiResource]
class Post extends Model
{
    protected $fillable = ['title', 'description', 'image'];
}
