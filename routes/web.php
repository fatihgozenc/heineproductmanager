<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
	return view('welcome');
});

Route::get('/products/{email}', 'ProductsController@index');
Route::put('/products/{id}/update', 'ProductsController@update');
Route::get('/import', 'ProductsController@importCsv');