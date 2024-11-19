<?php

namespace App\Http\Controllers;

use App\Models\DataPanen;
use App\Models\Desa;
use App\Models\User;
use Illuminate\Http\Request;

class DataPanenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $dataPanen = DataPanen::with('desa', 'user')->orderBy('created_at', 'DESC')->orderBy('tahun', 'DESC');
        if ($request->user()->hasRole('petani')) {
            $dataPanen->where('user_id', $request->user()->id);
        }
        return inertia("Admin/DataPanen", ["dataPanen" => $dataPanen->get()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $desa = Desa::all();
        $users = User::role('petani')->get();
        return inertia("Admin/TambahDataPanen", ["desa" => $desa, "users" => $users]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'satuan_bibit' => ['required'],
            'satuan_pupuk' => ['required'],
        ]);

        $data = $request->all();
        $data['user_id'] = auth()->id();

        if ($request->user()->hasRole('admin')) {
            $data['user_id'] = $request->user_id;
        }

        DataPanen::create($data);
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
        $dataPanen = DataPanen::find($id);
        $desa = Desa::all();
        return inertia("Admin/EditDataPanen", ["desa" => $desa, "datapanen" => $dataPanen]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        DataPanen::find($id)->update($request->all());
        return redirect('/data-panen');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DataPanen $dataPanen)
    {
        $dataPanen->delete();
    }
}
