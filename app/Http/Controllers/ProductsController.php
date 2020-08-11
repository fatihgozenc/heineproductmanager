<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Product;

class ProductsController extends Controller
{
	// LIST ALL PRODUCTS RELATED TO EMAIL ADDRESS
	public function index($email){
		$products = \DB::table('products')->where('kontakt_lieferant', $email)->get();
		return $products;
	}

	//Show the form for creating a new resource.
	public function create()
	{
			//
	}
	
	// Store a newly created resource in storage.
	public function store(Request $request)
	{
			//
	}

	//Display the specified resource.
	public function show($id)
	{
			//
	}

	// Show the form for editing the specified resource.
	public function edit($id)
	{
			//
	}

	// Update the specified resource in storage.
	public function update(Request $request, $id)
	{
		$product = Product::find($id);
		$data = $request->formData;
		foreach($data as $key => $value){
			$product->$key = $value;
		};
		$product->save();
		return [
			"en" => "Product information has been successfully updated.", 
			"de" => "Produktinformationen wurden erfolgreich aktualisiert."
		];
	}

	// Remove the specified resource from storage.
	public function destroy($id)
	{
			//
	}

	// CSV TO ARRAY CONVERSION FN
	function csvToArray($filename = '', $delimiter = ';'){ 
		if (!file_exists($filename) || !is_readable($filename)) return false;

		$header = null;
		$data = array();
		if (($handle = fopen($filename, 'r')) !== false){
			while (($row = fgetcsv($handle, 1000, $delimiter)) !== false){
				if (!$header)
					$header = $row;
				else
					$data[] = array_combine($header, $row);
				}
			fclose($handle);
		}
		return $data;
	}

	// CSV TO ARRAY CONVERSION CONTROLLER
	public function importCsv(){
		$file = public_path('file/products.csv');
		$productArr = $this->csvToArray($file);
		// dd($productArr);
		foreach($productArr as $i => $item){
			// GETTING ORIGINAL PRODUCT NUMBER
			$product_id = preg_replace("/[^0-9]/", "", $item['artikelnummer_heine']);
			// CHECK EMPTY FIELDS
			$emptyFields = [];
			foreach($item as $key => $child){
				if($child == "0" | $child == ""){
					$emptyFields[] = $key;
				}
			}
			// IF ITEM HAS EMPTY FIELDS SET COMPLETED
			$completed = count($emptyFields) > 0 ? false : true;

			// FILL DATA
			Product::firstOrCreate(
				[
					'product_id' => $product_id,
					'completed' => $completed,
					'empty_values' => implode(", ",$emptyFields),
					'land_lieferant' => strval($item['land_lieferant']),
					'sprache' => $item['sprache'],
					'hauptlieferant' => $item['hauptlieferant'],
					'lieferantennummer' => $item['lieferantennummer'],
					'kontakt_lieferant' => $item['kontakt_lieferant'],
					'artikelnummer_heine' => $item['artikelnummer_heine'],
					'artikelbeschreibung' => $item['artikelbeschreibung'],
					'1_langbeschreibung' => $item['1_langbeschreibung'],
					'2_langbeschreibung' => $item['2_langbeschreibung'],
					'artikelbeschreibung_englisch' => $item['artikelbeschreibung_englisch'],
					'1_langbeschreibung_englisch' => $item['1_langbeschreibung_englisch'],
					'2_langbeschreibung_englisch' => $item['2_langbeschreibung_englisch'],
					'einheit' => $item['einheit'],
					'einheit_deutsch' => $item['einheit_deutsch'],
					'einheit_englisch' => $item['einheit_englisch'],
					'artikelnummer_lieferant' => $item['artikelnummer_lieferant'],
					'gewicht_je_einheit' => $item['gewicht_je_einheit'],
					'ursprungsland' => $item['ursprungsland'],
					'zolltarifnummer' => $item['zolltarifnummer']
				]
			);
		}
		// FOR MEMORY ISSUES WITHOUT TIMESTAMP
		// \DB::table('products')->insert($productArr);
		return 'Successfully import to database.';
	}
}
