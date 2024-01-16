<?php

namespace App\Services;

use App\Models\Role;
use App\Models\RoleUser;
use Illuminate\Database\QueryException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use InvalidArgumentException;

class RoleService
{
    public function createRoleUser($userId)
    {
        try {

            if (!is_string($userId) || strlen($userId) !== 36) {
                throw new InvalidArgumentException('Invalid user ID');
            }


            $role = Role::where('name', 'User')->firstOrFail();

            return RoleUser::create([
                'user_id' => $userId,
                'role_id' => $role->id,
            ]);
        } catch (ModelNotFoundException $e) {
            throw new \Exception('Role "User" not found');
        } catch (QueryException $e) {
            throw new \Exception('Failed to create role user: ' . $e->getMessage());
        }
    }
}
