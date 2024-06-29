<?php

namespace App\Http\Controllers;

use App\Models\Perhitungan;
use Illuminate\Http\Request;

class HistoryController extends Controller
{

    public function index()
    {
        $perhitungan = Perhitungan::orderBy('created_at', 'desc')->get()->map(function ($data) {
            return [
                "id" => $data->id,
                "luas_lahan" => $data->luas_lahan,
                "bibit" => $data->bibit,
                "pupuk" => $data->pupuk,
                "hasil" => $data->hasil,
                "created_at" => $data->created_at->format('d M Y')
            ];
        });
        return inertia("Admin/History", ["perhitungan" => $perhitungan]);
    }

    public function show(Perhitungan $perhitungan)
    {
        return inertia("Admin/HistoryDetail", ["perhitungan" => $perhitungan]);
    }

    public function destroy(Perhitungan $perhitungan)
    {
        $perhitungan->delete();
        return back();
    }
}
