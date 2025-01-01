<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Etudiant;
use App\Models\User;
use App\Http\Requests\StoreEtudiantRequest;
use App\Http\Requests\UpdateEtudiantRequest;
use Illuminate\Support\Facades\DB;


class EtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $etudiants = Etudiant::all();
        return response()->json($etudiants);
    }

    public function insertNote1(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        $etudiant = Etudiant::where('email', $user->email)->first();
    
        if (!$etudiant) {
            return response()->json([
                'message' => "Etudiant non trouvé."
            ], 404);
        }
    
        $etudiant->note1 = $request->note1;
        $etudiant->moyenne = ($request->note1 + $etudiant->note2) / 2;
        $etudiant->save();
    
        return response()->json([
            'message' => "Note 1 successfully updated."
        ], 200);
    }
    
    public function insertNote2(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        $etudiant = Etudiant::where('email', $user->email)->first();
    
        if (!$etudiant) {
            return response()->json([
                'message' => "Etudiant non trouvé."
            ], 404);
        }
    
        $etudiant->note2 = $request->note2;
        $etudiant->moyenne = ($etudiant->note1 + $request->note2) / 2;
        $etudiant->save();
    
        return response()->json([
            'message' => "Note 2 successfully updated."
        ], 200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreEtudiantRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEtudiantRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Etudiant  $etudiant
     * @return \Illuminate\Http\Response
     */
    public function show(Etudiant $etudiant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Etudiant  $etudiant
     * @return \Illuminate\Http\Response
     */
    public function edit(Etudiant $etudiant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateEtudiantRequest  $request
     * @param  \App\Models\Etudiant  $etudiant
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateEtudiantRequest $request, Etudiant $etudiant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Etudiant  $etudiant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Etudiant $etudiant)
    {
        //
    }
}
