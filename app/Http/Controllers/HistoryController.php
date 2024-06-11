<?php

namespace App\Http\Controllers;

use App\Models\Perhitungan;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    public function index()
    {
        $perhitungan = Perhitungan::orderBy('created_at', 'desc')->get();
        return inertia("Admin/History", ["perhitungan" => $perhitungan]);
    }

    public function show(Perhitungan $perhitungan)
    {
        return $perhitungan;
    }

    public function destroy(Perhitungan $perhitungan)
    {
        $perhitungan->delete();
        return back();
    }
}
