<?php

namespace App\Http\Controllers;

use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    use ResponseTrait;

    public function profile (request $request)
    {
        try {
            // Memeriksa apakah session pengguna ada
            if ($request->session()->has('user')) {
                // Mendapatkan informasi pengguna dari session
                $user = $request->session()->get('user');

                // Lakukan operasi yang sesuai dengan informasi pengguna

                return $this->successResponse('Informasi pengguna ditemukan!', $user)->header('Access-Control-Allow-Credentials', 'true');
            } else {
                return $this->unauthorizedResponse('Unauthorized', null, null);
            }
        } catch (\Exception $e) {
            return $this->serverErrorResponse('Terjadi kesalahan server', $e->getMessage(), null);
        }
    }
}