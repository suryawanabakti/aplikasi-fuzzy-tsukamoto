<?php

namespace Database\Seeders;

use App\Models\DataPanen;
use App\Models\Desa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DataPanenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $batupapan = Desa::create([
            'nama' => "Desa Batupapan",
            'luas_lahan' => 15.75
        ]);


        $masewe = Desa::create([
            'nama' => "Desa Masewe",
            'luas_lahan' => 19.23
        ]);

        $minangaBarat = Desa::create([
            'nama' => "Desa Minanga Barat",
            'luas_lahan' => 26.7
        ]);

        $minangaTimur = Desa::create([
            'nama' => 'Desa Minanga Timur',
            'luas_lahan' => 19,
        ]);

        $siwi = Desa::create([
            'nama' => "Desa Siwi",
            'luas_lahan' => 14.5
        ]);

        $siwi = Desa::create([
            'nama' => "Desa Parinding",
            'luas_lahan' => 16
        ]);
    }
}
