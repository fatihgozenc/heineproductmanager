<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
		/**
		 * Run the migrations.
		 *
		 * @return void
		 */
		public function up()
		{
			Schema::create('products', function (Blueprint $table) {
				$table->id();
				$table->string('product_id');
				$table->boolean('completed');
				$table->string('empty_values');
				$table->timestamps();
				$table->string('land_lieferant');
				$table->string('sprache');
				$table->text('hauptlieferant');
				$table->string('lieferantennummer');
				$table->string('kontakt_lieferant');
				$table->string('artikelnummer_heine');
				$table->text('artikelbeschreibung');
				$table->text('1_langbeschreibung');
				$table->text('2_langbeschreibung');
				$table->text('artikelbeschreibung_englisch');
				$table->text('1_langbeschreibung_englisch');
				$table->text('2_langbeschreibung_englisch');
				$table->text('einheit');
				$table->string('einheit_deutsch');
				$table->string('einheit_englisch');
				$table->string('artikelnummer_lieferant');
				$table->string('gewicht_je_einheit');
				$table->text('ursprungsland');
				$table->text('zolltarifnummer');
			});
		}

		/**
		 * Reverse the migrations.
		 *
		 * @return void
		 */
		public function down()
		{
				Schema::dropIfExists('products');
		}
}
