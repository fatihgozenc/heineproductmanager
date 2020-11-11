<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductsController;

Route::get('/', [HomeController::class, 'index']);
Route::get('/products/{email}', [ProductsController::class, 'index']);
Route::put('/products/{id}/update', [ProductsController::class, 'update']);
Route::get('/import', [ProductsController::class, 'importCsv']);
Auth::routes();