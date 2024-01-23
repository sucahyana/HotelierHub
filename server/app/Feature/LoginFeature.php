<?php

namespace App\Feature;

use App\Models\User;
use App\Traits\ResponseTrait;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginFeature
{
    use ResponseTrait;

    public function login($credentialsRequest)
    {
        
        $user = User::where('username', $credentialsRequest['username'])->first();
        if ($user && $user->tokens->isNotEmpty()) {
            $user->tokens()->delete();
        }

        if (Auth::attempt(['username' => $credentialsRequest['username'], 'password' => $credentialsRequest['password']], true)) {
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->plainTextToken;
            $success['name'] = $user->name;

            return $this->successResponse('User login successfully.', null);
        } else {
            return $this->badRequestResponse('error', 'Invalid credentials', null);
        }
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