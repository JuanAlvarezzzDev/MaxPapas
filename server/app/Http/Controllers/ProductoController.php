<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductoCollection;
use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Obtener los IDs de las categorías que deseas excluir (7 y 8)
        $categoriasExcluidas = [7, 8];
    
        // Consulta para obtener los productos excluyendo las categorías 7 y 8
        $productos = Producto::where('disponible', 1)
                             ->whereNotIn('categoria_id', $categoriasExcluidas)
                             ->orderBy('id', 'ASC')
                             ->get();
    
        return new ProductoCollection($productos);
    }

    public function productosPorCategoria($categoriaId)
    {
        // Recuperar solo los productos de la categoría especificada
        $productos = Producto::where('disponible', 1)
                             ->where('categoria_id', $categoriaId)
                             ->orderBy('id', 'DESC')
                             ->get();
    
        return new ProductoCollection($productos);
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
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function show(Producto $producto)
    {
        return $producto;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Producto $producto)
    {
        //
        $producto->disponible = 0;
        $producto->save();
        return [
            'producto' => $producto
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Producto $producto)
    {
        //
    }
}
