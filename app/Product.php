<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
	protected $table = 'products';
	public $incrementing = false;
	public $fillable = [
		"product_id",
		"completed",
		"empty_values",
		"land_lieferant",
		"sprache",
		"hauptlieferant",
		"lieferantennummer",
		"kontakt_lieferant",
		"artikelnummer_heine",
		"artikelbeschreibung",
		"1_langbeschreibung",
		"2_langbeschreibung",
		"artikelbeschreibung_englisch",
		"1_langbeschreibung_englisch",
		"2_langbeschreibung_englisch",
		"einheit",
		"einheit_deutsch",
		"einheit_englisch",
		"artikelnummer_lieferant",
		"gewicht_je_einheit",
		"ursprungsland",
		"zolltarifnummer"
	];

	public function complete(){
		$this->completed = true;
		$this->save();
	}
}