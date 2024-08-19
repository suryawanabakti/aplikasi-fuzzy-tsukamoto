<?php

namespace App\Http\Controllers;

use App\Models\Perhitungan;
use Illuminate\Http\Request;

class PerhitunganController extends Controller
{
    public function index()
    {
        return inertia("Admin/Perhitungan");
    }
    public function store(Request $request)
    {
        // Diketahui : 
        $luasLahanTertinggi = 27;
        $luasLahanTerkecil = 14;

        $bibitTertinggi = 5;
        $bibitTerkecil = 2;

        $pupukTertinggi = 10;
        $pupukTerkecil = 3;

        $produksiTertinggi = 261;
        $produksiTerkecil = 81;

        // Cari Derajat Keangotaan Luas lahan
        $derajatLahanTerkecil = round(($luasLahanTertinggi - $request->luas_lahan) / ($luasLahanTertinggi - $luasLahanTerkecil), 2);
        $derajatLahanTertinggi = round(($request->luas_lahan - $luasLahanTerkecil) / ($luasLahanTertinggi - $luasLahanTerkecil), 2);

        // Cari Derajat Keanggotaan Bibit
        $derajatBibitTerkecil = round(($bibitTertinggi - $request->bibit) / ($bibitTertinggi - $bibitTerkecil), 2);
        $derajatBibitTertinggi = round(($request->bibit - $bibitTerkecil) / ($bibitTertinggi - $bibitTerkecil), 2);

        // Cari Derajat Keanggotaan Pupuk
        $derajatPupukTerkecil = round(($pupukTertinggi - $request->pupuk) / ($pupukTertinggi - $pupukTerkecil), 2);
        $derajatPupukTertinggi = round(($request->pupuk - $pupukTerkecil) / ($pupukTertinggi - $pupukTerkecil), 2);

        // Produksi berkurang
        // return [
        //     "derajatLahanTerkecil" => $derajatLahanTerkecil,
        //     "derajatLahanTertinggi" => $derajatLahanTertinggi,
        //     "derajatBibitTerkecil" => $derajatBibitTerkecil,
        //     "derajatBibitTertinggi" => $derajatBibitTertinggi,
        //     "derajatPupukTerkecil" => $derajatPupukTerkecil,
        //     "derajatPupukTertinggi" => $derajatPupukTertinggi,
        // ];

        $a1 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z1 = round($produksiTertinggi - ($a1 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a2 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z2 = round($produksiTertinggi - ($a2 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a3 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z3 = round($produksiTertinggi - ($a3 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a4 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTertinggi);
        $z4 = round($produksiTertinggi - ($a4 * ($produksiTertinggi - $produksiTerkecil)), 2);

        // Produksi bertambah
        $a5 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z5 = round(($a5 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a6 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z6 = round(($a6 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a7 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z7 = round(($a7 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a8 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTertinggi);
        $z8 = round(($a8 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        // Produksi berkurang
        $a9 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z9 = round($produksiTertinggi - ($a9 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a10 = min($derajatLahanTertinggi, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z10 = round($produksiTertinggi - ($a10 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a11 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z11 = round($produksiTertinggi - ($a11 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a12 = min($derajatLahanTertinggi, $derajatBibitTertinggi, $derajatPupukTertinggi);
        $z12 = round($produksiTertinggi - ($a12 * ($produksiTertinggi - $produksiTerkecil)), 2);

        // Produksi bertambah
        $a13 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z13 = round(($a13 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a14 = min($derajatLahanTertinggi, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z14 = round(($a14 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a15 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z15 = round(($a15 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a16 = min($derajatLahanTertinggi, $derajatBibitTertinggi, $derajatPupukTertinggi);
        $z16 = round(($a16 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        // Perhitungan akhir (Defuzzifikasi)
        $hasil = round(
            (($a1 * $z1) + ($a2 * $z2) + ($a3 * $z3) + ($a4 * $z4) + ($a5 * $z5) + ($a6 * $z6) + ($a7 * $z7) + ($a8 * $z8) +
                ($a9 * $z9) + ($a10 * $z10) + ($a11 * $z11) + ($a12 * $z12) + ($a13 * $z13) + ($a14 * $z14) + ($a15 * $z15) +
                ($a16 * $z16)) /
                ($a1 + $a2 + $a3 + $a4 + $a5 + $a6 + $a7 + $a8 + $a9 + $a10 + $a11 + $a12 + $a13 + $a14 + $a15 + $a16),
            2
        );

        // Simpan data dan hasil
        $data = $request->all();
        $data['hasil'] = $hasil;

        // Menambahkan data tambahan ke array untuk debug atau keperluan lain
        $data['derajat_lahan_terkecil'] = $derajatLahanTerkecil;
        $data['derajat_lahan_tertinggi'] = $derajatLahanTertinggi;
        $data['derajat_bibit_terkecil'] = $derajatBibitTerkecil;
        $data['derajat_bibit_tertinggi'] = $derajatBibitTertinggi;
        $data['derajat_pupuk_terkecil'] = $derajatPupukTerkecil;
        $data['derajat_pupuk_tertinggi'] = $derajatPupukTertinggi;

        $data['a1'] = $a1;
        $data['z1'] = $z1;
        $data['a2'] = $a2;
        $data['z2'] = $z2;
        $data['a3'] = $a3;
        $data['z3'] = $z3;
        $data['a4'] = $a4;
        $data['z4'] = $z4;
        $data['a5'] = $a5;
        $data['z5'] = $z5;
        $data['a6'] = $a6;
        $data['z6'] = $z6;
        $data['a7'] = $a7;
        $data['z7'] = $z7;
        $data['a8'] = $a8;
        $data['z8'] = $z8;
        $data['a9'] = $a9;
        $data['z9'] = $z9;
        $data['a10'] = $a10;
        $data['z10'] = $z10;
        $data['a11'] = $a11;
        $data['z11'] = $z11;
        $data['a12'] = $a12;
        $data['z12'] = $z12;
        $data['a13'] = $a13;
        $data['z13'] = $z13;
        $data['a14'] = $a14;
        $data['z14'] = $z14;
        $data['a15'] = $a15;
        $data['z15'] = $z15;
        $data['a16'] = $a16;
        $data['z16'] = $z16;

        Perhitungan::create($data);
        return redirect(route("riwayat.index"));
    }
    public function store2(Request $request)
    {
        // Diketahui : 
        $luasLahanTertinggi = 27;
        $luasLahanTerkecil = 14;

        $bibitTertinggi = 5;
        $bibitTerkecil = 2;

        $pupukTertinggi = 10;
        $pupukTerkecil = 3;

        $produksiTertinggi = 261;
        $produksiTerkecil = 81;

        // Cari Derajat Keangotaan Luas lahan
        $derajatLahanTerkecil = round(($luasLahanTertinggi - $request->luas_lahan) / ($luasLahanTertinggi - $luasLahanTerkecil), 2);

        $derajatLahanTertinggi = round(($request->luas_lahan - $luasLahanTerkecil) / ($luasLahanTertinggi - $luasLahanTerkecil), 2);


        //Cari Derajat Keanggotaan Bibit
        $derajatBibitTerkecil = round(($bibitTertinggi - $request->bibit) / ($bibitTertinggi - $bibitTerkecil), 2);

        $derajatBibitTertinggi = round(($request->bibit - $bibitTerkecil) / ($bibitTertinggi - $bibitTerkecil), 2);
        //Cari Derajat Keanggotaan Pupuk
        $derajatPupukTerkecil = round(($pupukTertinggi - $request->pupuk) / ($pupukTertinggi - $pupukTerkecil), 2);
        $derajatPupukTertinggi = round(($request->pupuk - $pupukTerkecil) / ($pupukTertinggi - $pupukTerkecil), 2);

        //Produksi berkurang
        $a1 =  round(min($derajatLahanTerkecil, $derajatBibitTerkecil, $pupukTerkecil), 2);
        $z1 = round($produksiTertinggi - ($a1 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a2 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z2 = round($produksiTertinggi - ($a2 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a3 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z3 = round($produksiTertinggi - ($a3 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a4 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTertinggi);
        $z4 = round($produksiTertinggi - ($a4 * ($produksiTertinggi - $produksiTerkecil)), 2);

        // Produksi bertambah
        $a5 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z5  =   round(($a5 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a6 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z6  =   round(($a6 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a7 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z7  =   round(($a7 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a8 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTertinggi);
        $z8  =   round(($a8 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        // Produksi berkurang
        $a9 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z9 = round($produksiTertinggi - ($a9 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a10 = min($derajatLahanTertinggi, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z10 = round($produksiTertinggi - ($a10 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a11 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z11 =  round($produksiTertinggi - ($a11 * ($produksiTertinggi - $produksiTerkecil)), 2);

        $a12 = min($derajatLahanTertinggi, $derajatBibitTertinggi, $derajatPupukTertinggi);
        $z12 = round($produksiTertinggi - ($a12 * ($produksiTertinggi - $produksiTerkecil)), 2);

        // Produksi bertambah
        $a13 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z13  =   round(($a13 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a14 = min($derajatLahanTertinggi, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z14  =  round(($a14 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a15 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z15  =  round(($a15 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);

        $a16 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z16  =   round(($a16 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil, 2);
        $hasil = ($a1 * $z1) + ($a2 * $z2) + ($a3 * $z3) + ($a4 * $z4) + + ($a5 * $z5) + + ($a6 * $z6) + ($a7 * $z7) + ($a8 * $z8) + ($a9 * $z9) + ($a10 * $z10) + ($a11 * $z11) + ($a12 * $z12) + ($a13 * $z13) + ($a14 * $z14) + ($a15 * $z15) + ($a16 * $z16) /  ($a1 + $a2 + $a3 + $a4 + $a5 + $a6 + $a7 + $a8 + $a9 + $a10 + $a11 + $a12 + $a13 + $a14 + $a15 + $a16);
        // $hasil = (($a1 * $z1) + ($a2 * $z2) + ($a3 * $z3) + ($a4 * $z4) + ($a5 * $z5) + ($a6 * $z6) + ($a7 * $z7) + ($a8 * $z8) + ($a9 * $z9) + ($a11 * $z11) + ($a12 * $z12) + ($a13 * $z13) + ($a14 * $z14) + ($a15 * $z15) + ($a16 * $z16)) / ($a1 + $a2 + $a3 + $a4 + $a5 + $a6 + $a7 + $a8 + $a9 + $a10 + $a11 + $a12 + $a13 + $a14 + $a15 + $a16);

        $data = $request->all();
        $data['hasil'] = $hasil;
        $data['derajat_lahan_terkecil'] = $derajatLahanTerkecil;
        $data['derajat_lahan_tertinggi'] = $derajatLahanTertinggi;
        $data['derajat_bibit_terkecil'] = $derajatBibitTerkecil;
        $data['derajat_bibit_tertinggi'] = $derajatBibitTertinggi;
        $data['derajat_pupuk_terkecil'] = $derajatPupukTerkecil;
        $data['derajat_pupuk_tertinggi'] = $derajatPupukTertinggi;

        $data['a1'] = $a1;
        $data['z1'] = $z1;
        $data['a2'] = $a2;
        $data['z2'] = $z2;
        $data['a3'] = $a3;
        $data['z3'] = $z3;
        $data['a4'] = $a4;
        $data['z4'] = $z4;
        $data['a5'] = $a5;
        $data['z5'] = $z5;
        $data['a6'] = $a6;
        $data['z6'] = $z6;
        $data['a7'] = $a7;
        $data['z7'] = $z7;
        $data['a8'] = $a8;
        $data['z8'] = $z8;
        $data['a9'] = $a9;
        $data['z9'] = $z9;
        $data['a10'] = $a10;
        $data['z10'] = $z10;
        $data['a11'] = $a11;
        $data['z11'] = $z11;
        $data['a12'] = $a12;
        $data['z12'] = $z12;
        $data['a13'] = $a13;
        $data['z13'] = $z13;
        $data['a14'] = $a14;
        $data['z14'] = $z14;
        $data['a15'] = $a15;
        $data['z15'] = $z15;
        $data['a16'] = $a16;
        $data['z16'] = $z16;
        Perhitungan::create($data);
        return redirect(route("riwayat.index"));
    }
    // Fungsi keanggotaan
    function hitungDerajatKeanggotaan($x, $min, $max, $type)
    {
        if ($type == 'semakin') {
            if ($x <= $min) {
                return 0;
            } elseif ($x >= $max) {
                return 1;
            } else {
                return ($x - $min) / ($max - $min);
            }
        } elseif ($type == 'semakinSedikit') {
            if ($x <= $min) {
                return 1;
            } elseif ($x >= $max) {
                return 0;
            } else {
                return ($max - $x) / ($max - $min);
            }
        }
    }

    public function store3(Request $request)
    {
        // PURE DARI
        // Diketahui : 
        $luasLahanTertinggi = 27;
        $luasLahanTerkecil = 14;

        $bibitTertinggi = 5;
        $bibitTerkecil = 2;

        $pupukTertinggi = 10;
        $pupukTerkecil = 3;

        $produksiTertinggi = 261;
        $produksiTerkecil = 81;

        // Fuzzifikasi
        // Contoh input user
        $luasLahan = $request->luas_lahan;
        $bibit = $request->bibit;
        $pupuk = $request->pupuk;

        $derajatLuasSempit = $this->hitungDerajatKeanggotaan($luasLahan, $luasLahanTerkecil, $luasLahanTertinggi, 'semakinSedikit');
        $derajatLuasLuas = $this->hitungDerajatKeanggotaan($luasLahan, $luasLahanTerkecil, $luasLahanTertinggi, 'semakin');

        $derajatBibitSedikit = $this->hitungDerajatKeanggotaan($bibit, $bibitTerkecil, $bibitTertinggi, 'semakinSedikit');
        $derajatBibitBanyak = $this->hitungDerajatKeanggotaan($bibit, $bibitTerkecil, $bibitTertinggi, 'semakin');

        $derajatPupukSedikit = $this->hitungDerajatKeanggotaan($pupuk, $pupukTerkecil, $pupukTertinggi, 'semakinSedikit');
        $derajatPupukBanyak = $this->hitungDerajatKeanggotaan($pupuk, $pupukTerkecil, $pupukTertinggi, 'semakin');

        // Inferensi
        $prediksi = [];

        // Rule 1
        $alphaPrediksi = min($derajatLuasSempit, $derajatBibitSedikit, $derajatPupukSedikit);
        $produksiZ = $produksiTerkecil + $alphaPrediksi * ($produksiTertinggi - $produksiTerkecil);
        $prediksi[] = $produksiZ;

        // Rule 2
        $alphaPrediksi = min($derajatLuasSempit, $derajatBibitBanyak, $derajatPupukSedikit);
        $produksiZ = $produksiTerkecil + $alphaPrediksi * ($produksiTertinggi - $produksiTerkecil);
        $prediksi[] = $produksiZ;

        // Rule 3
        $alphaPrediksi = min($derajatLuasSempit, $derajatBibitSedikit, $derajatPupukBanyak);
        $produksiZ = $produksiTerkecil + $alphaPrediksi * ($produksiTertinggi - $produksiTerkecil);
        $prediksi[] = $produksiZ;

        // Rule 4
        $alphaPrediksi = min($derajatLuasSempit, $derajatBibitBanyak, $derajatPupukBanyak);
        $produksiZ = $produksiTerkecil + $alphaPrediksi * ($produksiTertinggi - $produksiTerkecil);
        $prediksi[] = $produksiZ;

        // Rule 5
        $alphaPrediksi = min($derajatLuasSempit, $derajatBibitSedikit, $derajatPupukSedikit);
        $produksiZ = $produksiTertinggi - $alphaPrediksi * ($produksiTertinggi - $produksiTerkecil);
        $prediksi[] = $produksiZ;

        // Rule 6
        $alphaPrediksi = min($derajatLuasSempit, $derajatBibitBanyak, $derajatPupukSedikit);
        $produksiZ = $produksiTertinggi - $alphaPrediksi * ($produksiTertinggi - $produksiTerkecil);
        $prediksi[] = $produksiZ;

        // Rule 7
        $alphaPrediksi = min($derajatLuasSempit, $derajatBibitSedikit, $derajatPupukBanyak);
        $produksiZ = $produksiTertinggi - $alphaPrediksi * ($produksiTertinggi - $produksiTerkecil);
        $prediksi[] = $produksiZ;

        // Rule 8
        $alphaPrediksi = min($derajatLuasSempit, $derajatBibitBanyak, $derajatPupukBanyak);
        $produksiZ = $produksiTertinggi - $alphaPrediksi * ($produksiTertinggi - $produksiTerkecil);
        $prediksi[] = $produksiZ;

        // Rule 9-16 (similar structure)
        // Rule 9
        $alphaPrediksi = min($derajatLuasLuas, $derajatBibitSedikit, $derajatPupukSedikit);
        $produksiZ = $produksiTerkecil + $alphaPrediksi * ($produksiTertinggi - $produksiTerkecil);
        $prediksi[] = $produksiZ;

        // Continue with the remaining rules...

        // Defuzzifikasi
        $totalAlphaZ = array_sum($prediksi);
        $totalAlpha = count($prediksi);

        $hasilPrediksi = $totalAlphaZ / $totalAlpha;

        return "Hasil Prediksi Produksi Terong Belanda: " . $hasilPrediksi . " kg";
    }
}
