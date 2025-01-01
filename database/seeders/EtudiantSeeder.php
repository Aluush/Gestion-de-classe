<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Etudiant;

class EtudiantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Générer des données pour les étudiants
        $count = 10;
        for ($i = 0; $i < $count; $i++) {
            $longitude = $this->randomFloat(-180, 180, 7);
            $latitude = $this->randomFloat(-90, 90, 7);

            Etudiant::factory()->create([
                'longitude' => $longitude,
                'latitude' => $latitude,
            ]);
        }
    }

    private function randomFloat($min, $max, $decimals = 2) {
        return round($min + mt_rand() / mt_getrandmax() * ($max - $min), $decimals);
    }
}
