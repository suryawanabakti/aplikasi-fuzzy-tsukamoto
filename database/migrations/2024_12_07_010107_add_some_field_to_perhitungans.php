<?php

use App\Models\DataPanen;
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

        Schema::table('perhitungan', function (Blueprint $table) {
            $luasLahanTertinggi =  DataPanen::orderBy('luas_lahan', 'desc')->first()->luas_lahan ?? 4;
            $luasLahanTerkecil =  DataPanen::orderBy('luas_lahan', 'asc')->first()->luas_lahan ?? 0.5;

            $bibitTertinggi =  DataPanen::orderBy('bibit', 'desc')->first()->bibit ?? 8;
            $bibitTerkecil =  DataPanen::orderBy('bibit', 'asc')->first()->bibit ?? 1;

            $pupukTertinggi =  DataPanen::orderBy('pupuk', 'desc')->first()->pupuk ?? 56;
            $pupukTerkecil =  DataPanen::orderBy('pupuk', 'asc')->first()->pupuk ?? 10;

            $produksiTertinggi = DataPanen::orderBy('hasil_panen', 'desc')->first()->hasil_panen ?? 700;
            $produksiTerkecil =  DataPanen::orderBy('hasil_panen', 'asc')->first()->hasil_panen ?? 100;

            $table->double('max_luas_lahan')->default($luasLahanTertinggi);
            $table->double('min_luas_lahan')->default($luasLahanTerkecil);
            $table->double('max_bibit')->default($bibitTertinggi);
            $table->double('min_bibit')->default($bibitTerkecil);
            $table->double('max_pupuk')->default($pupukTertinggi);
            $table->double('min_pupuk')->default($pupukTerkecil);
            $table->double('max_hasil')->default($produksiTertinggi);
            $table->double('min_hasil')->default($produksiTerkecil);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('perhitungan', function (Blueprint $table) {
            //
        });
    }
};
