<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('data_panens', function (Blueprint $table) {
            $table->enum('satuan_luas_lahan', ['Ha', 'm2'])->default('Ha');
            $table->enum('satuan_bibit', ['ton', 'kilogram', 'gram'])->default('kilogram');
            $table->enum('satuan_pupuk', ['ton', 'kilogram', 'gram'])->default('ton');
            $table->enum('satuan_hasil_panen', ['ton', 'kilogram', 'gram'])->default('kilogram');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('data_panens', function (Blueprint $table) {
            //
        });
    }
};
