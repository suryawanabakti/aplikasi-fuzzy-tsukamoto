<?php

namespace App\Http\Controllers;

use App\Models\DataPanen;
use App\Models\Desa;
use Illuminate\Http\Request;

class DataPanenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dataPanen = DataPanen::with('desa')->orderBy('created_at', 'DESC')->orderBy('tahun', 'DESC')->get();
        return inertia("Admin/DataPanen", ["dataPanen" => $dataPanen]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $desa = Desa::all();
        return inertia("Admin/TambahDataPanen", ["desa" => $desa]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DataPanen::create($request->all());
        return redirect('/data-panen');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DataPanen $dataPanen)
    {
        $dataPanen->delete();
    }
}
