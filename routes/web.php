<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function (\Recca0120\Olami\Client $client) {
//     return view('welcome');
// });

//Route::get('/', 'HomeController@index')->name('home');
Route::get('/{any}', 'SpaController@index')->where('any', '.*');
