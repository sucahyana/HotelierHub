<?php

namespace App\Feature;

use App\Models\User;
use App\Traits\ResponseTrait;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Hash;

class LoginFeature
{
    use ResponseTrait;

    public function login($credentials)
    {


        $username = $credentials['username'];
        $password = $credentials['password'];

        $user = User::where('username', $username)->first();

        if ($user && Hash::check($password, $user->password)) {
            // Loginkan pengguna
            Auth::login($user);

            // Buat cookie untuk menyimpan token autentikasi
            $token = Auth::user()->createToken('Laravel API')->accessToken;
            setcookie('auth_token', $token, time() + (60 * 60 * 24 * 30), '/');

            return response()->json([
                'status' => 'success'
            ]);
        } else {
            // Kembalikan error
            return response()->json([
                'error' => 'Username atau password salah.',
            ], 401);
        }
    }
}
