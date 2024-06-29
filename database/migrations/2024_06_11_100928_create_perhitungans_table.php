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
        Schema::create('perhitungan', function (Blueprint $table) {
            $table->id();
            $table->double('luas_lahan');
            $table->double('bibit');
            $table->double('pupuk');
            $table->double('hasil');
            $table->double('derajat_lahan_terkecil');
            $table->double('derajat_lahan_tertinggi');
            $table->double('derajat_bibit_terkecil');
            $table->double('derajat_bibit_tertinggi');
            $table->double('derajat_pupuk_terkecil');
            $table->double('derajat_pupuk_tertinggi');
            $table->double('a1');
            $table->double('z1');
            $table->double('a2');
            $table->double('z2');
            $table->double('a3');
            $table->double('z3');
            $table->double('a4');
            $table->double('z4');
            $table->double('a5');
            $table->double('z5');
            $table->double('a6');
            $table->double('z6');
            $table->double('a7');
            $table->double('z7');
            $table->double('a8');
            $table->double('z8');
            $table->double('a9');
            $table->double('z9');
            $table->double('a10');
            $table->double('z10');
            $table->double('a11');
            $table->double('z11');
            $table->double('a12');
            $table->double('z12');
            $table->double('a13');
            $table->double('z13');
            $table->double('a14');
            $table->double('z14');
            $table->double('a15');
            $table->double('z15');
            $table->double('a16');
            $table->double('z16');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perhitungans');
    }
};
