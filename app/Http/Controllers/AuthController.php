<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Role;
use App\Models\RoleUser;
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


        $user = User::create([
            'username' => $userRequest['username'],
            'email' => $userRequest['email'],
            'password' => $userRequest['password'],
        ]);

        if (!$user) {
            return $this->badRequestResponse(
                'Failed to create user',
                null,
                $userRequest
            );
        }


        $customer = Customer::create([
            'user_id' => $user->id,
            'name' => $userRequest['name'],
            'email' => $userRequest['email'],
        ]);

        if (!$customer) {

            $user->delete();
            return $this->badRequestResponse(
                'Failed to create customer',
                null,
                $userRequest
            );
        }


        $roleId = Role::where('name', 'User')->first();
        $role = $roleId->id;

        if (!$role) {

            $user->delete();
            $customer->delete();
            return $this->badRequestResponse(
                'Role "User" not found',
                null,
                $userRequest
            );
        }

        $roleUser = RoleUser::create([
            'user_id' => $user->id,
            'role_id' => $role,
        ]);

        if (!$roleUser) {

            $user->delete();
            $customer->delete();
            return $this->badRequestResponse(
                'Failed to assign role to user',
                null,
                $userRequest
            );
        }

        return $this->createdResponse(
            'User created successfully',
            [
                'name' => $user->name,
                'username' => $user->username,
                'email' => $user->email,
            ]
        );
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
                $request->only('name', 'username', 'email')
            );
        }
    }
}
