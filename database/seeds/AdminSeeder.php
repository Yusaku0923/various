<?php

use Illuminate\Database\Seeder;
use app\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::query()->create([
            'email'     => 'nakayama8039@gmail.com',
            'password'  => \Illuminate\Support\Facades\Hash::make('sksk14'),
            'name'      => 'yusaku',
        ]);
    }
}