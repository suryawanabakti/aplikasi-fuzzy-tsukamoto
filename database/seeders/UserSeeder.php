<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'admin@admin',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('admin');

        \App\Models\User::create([
            'name' => 'Yusuf',
            'email' => 'yusuf',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => 'Paulus',
            'email' => 'paulus',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => 'Rapa',
            'email' => 'rapa',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => 'Paruak',
            'email' => 'paruak',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => 'Matius',
            'email' => 'matius',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => "Pau'",
            'email' => 'pau',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => "Osse'",
            'email' => 'osse',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => "Pakiwa",
            'email' => 'pakiwa',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => "Silas",
            'email' => 'silas',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => "Maliku",
            'email' => 'maliku',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => "Belo",
            'email' => 'belo',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => "Pattola",
            'email' => 'pattola',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => "Rumae",
            'email' => 'rumae',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => "illang",
            'email' => 'illang',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');

        \App\Models\User::create([
            'name' => "bongga",
            'email' => 'bongga',
            'password' => Hash::make("password"),
            'gender' => 'male',
            'date_of_birth' => now()->format('Y-m-d'),
        ])->assignRole('petani');
    }
}
