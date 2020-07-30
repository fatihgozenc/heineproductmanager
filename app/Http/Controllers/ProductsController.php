<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class ProductsController extends Controller
{
	public function show($email){
		$products = \DB::table('products')->where('kontakt_lieferant', $email)->get();
		return $products;
		// dd($product);
	}
}
