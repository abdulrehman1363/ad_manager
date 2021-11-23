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

Route::group(['prefix' => 'v1' , 'middleware' =>['throttle:240,1','auth:sanctum']],function (){
    Route::get('/user', function (Request $request) {
        $user= $request->user();
        return $user;
    });
});
