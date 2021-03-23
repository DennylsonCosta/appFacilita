<?php

namespace App\Http\Controllers\problems;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;
use App\Models\Books as Book;

class TwoController extends Controller
{
    public function index(Request $request){
        $user = User::findOrFail($request->user);
        $book = Book::findOrFail($request->book);

        return response(
            [$user, $book],
            200
        )->header('Content-Type', 'application/json');
    }

    public function users(){
        return response(
            User::get(),
            200
        )->header('Content-Type', 'application/json');
    }

    public function books(){
        return response(
            Book::get(),
            200
        )->header('Content-Type', 'application/json');
    }
}
