<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdicionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $datos = [
            array( 
                'nombre' =>  "Tocineta",
                'precio' => 6000,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Chicharron",
                'precio' => 7500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Salchicha Ranchera",
                'precio' => 5000,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Chorizo Parrillero",
                'precio' => 5000,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Costillas Baby",
                'precio' => 7500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Longaniza",
                'precio' => 4500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Longaniza",
                'precio' => 4500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Bombon de Pollo",
                'precio' => 6000,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Salchicha Tradicional",
                'precio' => 4000,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Huevos Codorniz X3",
                'precio' => 2000,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Carne Desmechada",
                'precio' => 6500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Pollo Desmechado",
                'precio' => 6500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Croqueta Agridulce",
                'precio' => 6500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Croquetas Naranja",
                'precio' => 6500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Papa Artesanal",
                'precio' => 6500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Papa Criolla",
                'precio' => 4500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Maduritos",
                'precio' => 2500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Pico de Gallo",
                'precio' => 2500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Guacamole",
                'precio' => 2500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Mazorca",
                'precio' => 2500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Arepa con Queso",
                'precio' => 2000,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Queso Costeño",
                'precio' => 5000,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Alitas X1",
                'precio' => 2500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Maicitos",
                'precio' => 2500,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
        ];

        DB::table('adiciones')->insert($datos);
    }
}
