<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;

class ProductoSeeder extends Seeder
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
                'nombre' =>  "Max Paisa Siderense",
                'precio' => 27000,
                'imagen' => "Paisa_Siderense",
                'categoria_id' => 1,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Costillas Baby",
                'precio' => 29000,
                'imagen' => "Costillas_Baby_2",
                'categoria_id' => 1,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Mazorcada",
                'precio' => 29000,
                'imagen' => "Mazorcada_2",
                'categoria_id' => 1,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Chicharron",
                'precio' => 28000,
                'imagen' => "Chicharron",
                'categoria_id' => 1,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Chicken Pig",
                'precio' => 28000,
                'imagen' => "Chicken_Pig",
                'categoria_id' => 1,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Tocineta",
                'precio' => 28500,
                'imagen' => "Tocineta_2",
                'categoria_id' => 1,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Trifásica",
                'precio' => 19000,
                'imagen' => "Trifasica",
                'categoria_id' => 2,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Pollo Agridulce",
                'precio' => 19500,
                'imagen' => "Pollo_Agridulce",
                'categoria_id' => 2,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Cerdo a la Naranja",
                'precio' => 18500,
                'imagen' => "Cerdo_Naranja",
                'categoria_id' => 2,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Mazorcada",
                'precio' => 19000,
                'imagen' => "Mazorcada",
                'categoria_id' => 2,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Costillas Baby",
                'precio' => 19500,
                'imagen' => "Costillas_Baby_1",
                'categoria_id' => 2,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Tocineta",
                'precio' => 19000,
                'imagen' => "Tocineta",
                'categoria_id' => 2,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Bombon de Pollo",
                'precio' => 14500,
                'imagen' => "Bombon_Pollo",
                'categoria_id' => 3,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Longui",
                'precio' => 13500,
                'imagen' => "Longui",
                'categoria_id' => 3,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Salchi",
                'precio' => 8500,
                'imagen' => "Salchi",
                'categoria_id' => 3,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Kids Ranchero",
                'precio' => 13000,
                'imagen' => "Kids",
                'categoria_id' => 3,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Chicken BBQ",
                'precio' => 17000,
                'imagen' => "Chicken_BQQ",
                'categoria_id' => 4,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Búfalo Wings",
                'precio' => 22000,
                'imagen' => "Bufalo_Wings",
                'categoria_id' => 4,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Chorizo",
                'precio' => 14500,
                'imagen' => "Chorizo",
                'categoria_id' => 4,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Maicitos",
                'precio' => 17500,
                'imagen' => "Maicitos",
                'categoria_id' => 4,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Boom Granjero",
                'precio' => 79000,
                'imagen' => "Boom_Granjero",
                'categoria_id' => 5,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Crispy Chicken",
                'precio' => 32000,
                'imagen' => "Crispy_Chicken",
                'categoria_id' => 5,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Max Papas Chips",
                'precio' => 3500,
                'imagen' => "Chips",
                'categoria_id' => 6,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Papa Criolla",
                'precio' => 4500,
                'imagen' => "Criollas",
                'categoria_id' => 6,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
        ];

        DB::table('productos')->insert($datos);
    }
}
