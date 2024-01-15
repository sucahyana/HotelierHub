<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = new Role();
        $admin->name = 'Admin';
        $admin->save();

        $admin = new Role();
        $admin->name = 'Kasir';
        $admin->save();

        $user = new Role();
        $user->name = 'User';
        $user->save();
    }
}
