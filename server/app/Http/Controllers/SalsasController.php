<?php

namespace App\Http\Controllers;

use App\Http\Resources\SalsaCollection;
use App\Models\Salsas;
use Illuminate\Http\Request;

class SalsasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new SalsaCollection(Salsas::where('disponible', 1)->orderBy('id', 'DESC')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Salsas  $salsas
     * @return \Illuminate\Http\Response
     */
    public function show(Salsas $salsas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Salsas  $salsas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Salsas $salsas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Salsas  $salsas
     * @return \Illuminate\Http\Response
     */
    public function destroy(Salsas $salsas)
    {
        //
    }
}
