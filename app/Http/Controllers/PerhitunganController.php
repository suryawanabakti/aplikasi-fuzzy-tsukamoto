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
        $luasLahanTertinggi = 2000;
        $luasLahanTerkecil = 400;

        $bibitTertinggi = 5;
        $bibitTerkecil = 1;

        $pupukTertinggi = 150;
        $pupukTerkecil = 100;

        $produksiTertinggi = 975;
        $produksiTerkecil = 720;

        // Cari Derajat Keangotaan Luas lahan
        $derajatLahanTerkecil = round(($luasLahanTertinggi - $request->luas_lahan) /  ($luasLahanTertinggi - $luasLahanTerkecil), 2, PHP_ROUND_HALF_DOWN);
        $derajatLahanTertinggi = round(($request->luas_lahan - $luasLahanTerkecil) / ($luasLahanTertinggi - $luasLahanTerkecil), 2, PHP_ROUND_HALF_DOWN);
        //Cari Derajat Keanggotaan Bibit
        $derajatBibitTerkecil = round(($bibitTertinggi - $request->bibit) / ($bibitTertinggi - $bibitTerkecil), 2, PHP_ROUND_HALF_DOWN);
        $derajatBibitTertinggi = round(($request->bibit - $bibitTerkecil) / ($bibitTertinggi - $bibitTerkecil), 2, PHP_ROUND_HALF_DOWN);
        //Cari Derajat Keanggotaan Pupuk
        $derajatPupukTerkecil = round(($pupukTertinggi - $request->pupuk) / ($pupukTertinggi - $pupukTerkecil), 2, PHP_ROUND_HALF_DOWN);
        $derajatPupukTertinggi = round(($request->pupuk - $pupukTerkecil) / ($pupukTertinggi - $pupukTerkecil), 2, PHP_ROUND_HALF_DOWN);

        //Produksi berkurang
        $a1 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z1 = $produksiTertinggi - ($a1 * ($produksiTertinggi - $produksiTerkecil));

        $a2 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z2 = $produksiTertinggi - ($a2 * ($produksiTertinggi - $produksiTerkecil));

        $a3 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z3 = $produksiTertinggi - ($a2 * ($produksiTertinggi - $produksiTerkecil));

        $a4 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTertinggi);
        $z4 = $produksiTertinggi - ($a2 * ($produksiTertinggi - $produksiTerkecil));

        // Produksi bertambah
        $a5 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z5  =   ($a5 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil;

        $a6 = min($derajatLahanTerkecil, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z6  =   ($a6 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil;

        $a7 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z7  =   ($a7 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil;

        $a8 = min($derajatLahanTerkecil, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z8  =   ($a8 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil;

        // Produksi berkurang
        $a9 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z9 = $produksiTertinggi - ($a9 * ($produksiTertinggi - $produksiTerkecil));

        $a10 = min($derajatLahanTertinggi, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z10 = $produksiTertinggi - ($a10 * ($produksiTertinggi - $produksiTerkecil));

        $a11 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z11 = $produksiTertinggi - ($a11 * ($produksiTertinggi - $produksiTerkecil));

        $a12 = min($derajatLahanTertinggi, $derajatBibitTertinggi, $derajatPupukTertinggi);
        $z12 = $produksiTertinggi - ($a12 * ($produksiTertinggi - $produksiTerkecil));

        // Produksi bertambah
        $a13 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTerkecil);
        $z13  =   ($a13 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil;

        $a14 = min($derajatLahanTertinggi, $derajatBibitTertinggi, $derajatPupukTerkecil);
        $z14  =   ($a14 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil;

        $a15 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z15  =   ($a15 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil;

        $a16 = min($derajatLahanTertinggi, $derajatBibitTerkecil, $derajatPupukTertinggi);
        $z16  =   ($a16 * ($produksiTertinggi - $produksiTerkecil)) + $produksiTerkecil;

        $hasil = round((($a1 * $z1) + ($a2 * $z2) + ($a3 * $z3) + ($a4 * $z4) + ($a5 * $z5) + ($a6 * $z6) + ($a7 * $z7) + ($a8 * $z8) + ($a9 * $z9) + ($a10 * $z11) + ($a12 * $z12) + ($a13 * $z13) + ($a14 * $z14) + ($a15 * $z15) + ($a16 * $z16)) / ($a1 + $a2 + $a3 + $a4 + $a5 + $a6 + $a7 + $a8 + $a9 + $a10 + $a11 + $a12 + $a13 + $a14 + $a15 + $a16), 0, PHP_ROUND_HALF_DOWN);

        $data = $request->all();
        $data['hasil'] = $hasil;

        Perhitungan::create($data);
        return redirect(route("riwayat.index"));
    }
}
