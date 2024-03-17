<?php

namespace App\Http\Controllers;

use App\Feature\RegisterFeature;
use App\Feature\LoginFeature;
use App\Feature\LogoutFeature;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    use ResponseTrait;

    public function register(Request $request)
    {
        $registerFeature = new RegisterFeature();
        return $registerFeature->register($request->all());
    }

    public function login(Request $request)
    {
        try {
            $credentials = $request->only('username', 'password');
            $this->validateLogin($credentials);



            if (Auth::attempt($credentials, $request->has('remember'))) {
                $user = Auth::user();

                // Menyimpan informasi pengguna yang relevan di session
                $request->session()->put('user', $user);

                return $this->successResponse('Login berhasil!', $user)->header('Access-Control-Allow-Credentials', 'true');
            } else {
                return $this->badRequestResponse('Username atau password salah', null, null);
            }
        } catch (ValidationException $e) {
            return $this->badRequestResponse('Data tidak valid', $e->errors(), null);
        } catch (\Exception $e) {
            return $this->serverErrorResponse('Terjadi kesalahan server', $e->getMessage(), null);
        }
    }


    public function logout(Request $request)
    {

        $user = request()->cookies->get('hotelierhub_session');


        $logoutFeature = new LogoutFeature();

        return $logoutFeature->logout($user);
    }

    private function validateLogin($credentials)
    {

        $validator = Validator::make($credentials, [
            'username' => 'required|string|max:255',
            'password' => 'required|string|max:255|min:8',
        ]);
        if ($validator->fails()) {
            return $this->badRequestResponse(
                'Validation failed',
                $validator->errors(),
                [
                    null
                ]
            );
        } else {
            return $validator = ['username' => $credentials['username'], 'password' => $credentials['password']];
        }
    }
}