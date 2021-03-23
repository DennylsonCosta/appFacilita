<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('problem')->group(function(){
    Route::get('/one', 'problems\OneController@index');

    Route::get('/two/{user}/{book}', 'problems\TwoController@index')
                ->where(['user' => '[0-9]+', 'book' => '[0-9]+']);

    Route::get('/two/users', 'problems\TwoController@users');
    Route::get('/two/books', 'problems\TwoController@books');
                
    Route::get('/three/{min}/{max}', 'problems\ThreeController@index')
                ->where(['min' => '[0-9]+', 'max' => '[0-9]+']);
});