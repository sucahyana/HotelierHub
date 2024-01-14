<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    use ResponseTrait;

    public function register(Request $request)
    {
        $userRequest = $request->only('name', 'username', 'email', 'password');

        $validatorRegisterResult = $this->validatorRegister($request);
        if ($validatorRegisterResult) {
            return $validatorRegisterResult;
        }

        $user = User::create($userRequest);

        if ($user) {
            return $this->createdResponse(
                'User created successfully',
                [
                    'name' => $user->name,
                    'username' => $user->username,
                    'email' => $user->email,
                ]
            );
        } else {
            return $this->badRequestResponse(
                'Failed to create user',
                null,
                [
                    'name' => $userRequest['name'],
                    'username' => $userRequest['username'],
                    'email' => $userRequest['email'],
                ]
            );
        }
    }

    protected function validatorRegister(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users,username',
            'email' => 'required|string|max:255|unique:users,email',
            'password' => 'required|string|max:255|min:8',
        ]);

        if ($validator->fails()) {
            return $this->badRequestResponse(
                'Validation failed',
                $validator->errors(),
                [
                    'name' => $request['name'],
                    'username' => $request['username'],
                    'email' => $request['email'],
                ]);
        }
    }
}
