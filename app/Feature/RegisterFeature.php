<?php

namespace App\Feature;

use App\Models\Role;
use App\Services\CustomerService;
use App\Services\RoleService;
use App\Services\UserService;
use App\Traits\ResponseTrait;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class RegisterFeature
{
    use ResponseTrait;

    public function register($userRequest)
    {
        $validatorRegisterResult = $this->validatorRegister($userRequest);
        if ($validatorRegisterResult) {
            return $validatorRegisterResult;
        }

        try {
            DB::beginTransaction();

            $userService = app()->make(UserService::class);
            $user = $userService->createUser($userRequest);

            $customerService = app()->make(CustomerService::class);
            $customer = $customerService->createCustomer(
                $user->id,
                $userRequest['name'],
                $userRequest['email']
            );

            $roleService = app()->make(RoleService::class);
            $role = $roleService->createRoleUser($user->id);

            DB::commit();

            return $this->createdResponse(
                'User created successfully',
                [
                    'name' => $customer->name,
                    'username' => $user->username,
                    'email' => $user->email,
                ]
            );
        } catch (\Exception $e) {
            DB::rollBack();

            return $this->badRequestResponse(
                'Failed to create user',
                $e->getMessage(),
                $userRequest
            );
        }
    }

    protected function validatorRegister($request)
    {
        $validator = Validator::make($request, [
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
                    'email' => $request['email']
                ]
            );
        }
    }
}
