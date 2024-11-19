<?php

namespace App\Http\Controllers;

use App\Models\DataPanen;
use App\Models\Perhitungan;
use Illuminate\Http\Request;

class HistoryController extends Controller
{

    public function index(Request $request)
    {
        $perhitungan = Perhitungan::orderBy('created_at', 'desc')->get()->map(function ($data) {
            return [
                "id" => $data->id,
                "tahun" => $data->tahun,
                "bulan" => $data->bulan,
                "luas_lahan" => $data->luas_lahan,
                "bibit" => $data->bibit,
                "pupuk" => $data->pupuk,
                "hasil" => $data->hasil,
                "created_at" => $data->created_at->format('d M Y')
            ];
        });

        $dataPanen = DataPanen::with('desa', 'user')->orderBy('tahun', 'DESC')->orderBy('bulan', 'DESC');

        if ($request->user()->hasRole('petani')) {
            $dataPanen->where('user_id', $request->user()->id);
        }



        return inertia("Admin/History", ["perhitungan" => $perhitungan, "dataPanen" => $dataPanen->first()]);
    }

    public function show(Perhitungan $perhitungan, Request $request)
    {
        $dataPanen = DataPanen::with('desa', 'user')->orderBy('tahun', 'DESC')->orderBy('id', "DESC");
        if ($request->user()->hasRole('petani')) {
            $dataPanen->where('user_id', $request->user()->id);
        }

        $luasLahanTertinggi =  DataPanen::where('user_id', $request->user()->id)->orderBy('luas_lahan', 'desc')->first()->luas_lahan ?? 4;
        $luasLahanTerkecil =  DataPanen::where('user_id', $request->user()->id)->orderBy('luas_lahan', 'asc')->first()->luas_lahan ?? 0.5;

        $bibitTertinggi =  DataPanen::where('user_id', $request->user()->id)->orderBy('bibit', 'desc')->first()->bibit ?? 8;
        $bibitTerkecil =  DataPanen::where('user_id', $request->user()->id)->orderBy('bibit', 'asc')->first()->bibit ?? 1;

        $pupukTertinggi =  DataPanen::where('user_id', $request->user()->id)->orderBy('pupuk', 'desc')->first()->pupuk ?? 56;
        $pupukTerkecil =  DataPanen::where('user_id', $request->user()->id)->orderBy('pupuk', 'asc')->first()->pupuk ?? 10;

        $produksiTertinggi = DataPanen::where('user_id', $request->user()->id)->orderBy('hasil_panen', 'desc')->first()->hasil_panen ?? 700;
        $produksiTerkecil =  DataPanen::where('user_id', $request->user()->id)->orderBy('hasil_panen', 'asc')->first()->hasil_panen ?? 100;

        $luasLahanTertinggi =  4;
        $luasLahanTerkecil =  0.5;

        $bibitTertinggi =  8;
        $bibitTerkecil =  1;

        $pupukTertinggi =  56;
        $pupukTerkecil =  10;

        $produksiTertinggi = 700;
        $produksiTerkecil = 100;

        return inertia("Admin/HistoryDetail", ["perhitungan" => $perhitungan, "dataPanen" => $dataPanen->get(), "luas_lahan_tertinggi" => $luasLahanTertinggi, "luas_lahan_terkecil" => $luasLahanTerkecil, "bibit_tertinggi" => $bibitTertinggi, "bibit_terkecil" => $bibitTerkecil, "pupuk_tertinggi" => $pupukTertinggi, "pupuk_terkecil" => $pupukTerkecil, "produksi_tertinggi" => $produksiTertinggi, "produksi_terkecil" => $produksiTerkecil]);
    }

    public function destroy(Perhitungan $perhitungan)
    {
        $perhitungan->delete();
        return back();
    }
}
