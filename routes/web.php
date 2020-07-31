<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
	return view('welcome');
});

Route::get('/products/{email}', 'ProductsController@show');
Route::get('/import', 'ProductsController@importCsv');