<?php

namespace App\Http\Controllers;

use App\Feature\RegisterFeature;
use App\Feature\LoginFeature;
use App\Feature\LogoutFeature;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        $credentials = $request->only('username', 'password');

        $loginFeature = new LoginFeature();
        return $loginFeature->login($credentials);
    }

    public function logout(Request $request)
    {

        $user = request()->cookies->get('hotelierhub_session');


        $logoutFeature = new LogoutFeature();

        return $logoutFeature->logout($user);
    }
}