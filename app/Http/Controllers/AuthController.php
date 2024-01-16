<?php

namespace App\Http\Controllers;
use App\Feature\RegisterFeature;
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
}
