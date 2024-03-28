<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriaCollection;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index() {
        // return response()->json(['categorias' => Categoria::all()]);
        /* Categoria 7 y 8 Salsas y adiciones */
        $categorias = Categoria::whereNotIn('id', [7, 8])->get();
        return new CategoriaCollection($categorias);
    }
}
