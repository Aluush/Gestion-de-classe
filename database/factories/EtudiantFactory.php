<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Etudiant>
 */
class EtudiantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'email' => $this->faker->unique()->safeEmail,
            'note1' => $this->faker->numberBetween(0, 20),
            'note2' => $this->faker->numberBetween(0, 20),
            'moyenne' => ($this->faker->randomFloat(1, 0, 20) + $this->faker->randomFloat(1, 0, 20)) / 2,
            'longitude' => $this->faker->longitude,
            'latitude' => $this->faker->latitude,
        ];
    }
}
