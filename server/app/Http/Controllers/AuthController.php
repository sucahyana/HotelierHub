<?php

namespace App\Http\Controllers;
use App\Feature\RegisterFeature;
use App\Feature\LoginFeature;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    use ResponseTrait;

    public function register(Request $request)
    {
        $registerFeature = new RegisterFeature();
        return $registerFeature->register($request->all());
    }

    public function login(Request $request){

        $credentials = $request->only('username','password');

        $loginFeature = new LoginFeature();
        return $loginFeature->login($credentials);

    }
}