<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    /**
     * Create a new user.
     *
     * @param array $userRequest Array of user data with the following keys:
     *                           - name: string (required)
     *                           - username: string (required)
     *                           - email: string (required)
     *                           - password: string (required)
     *
     * @return User|null The created user object, or null if creation failed.
     */

    public function createUser($userRequest)
    {
        try {
            return User::create([
                'username' => $userRequest['username'],
                'email' => $userRequest['email'],
                'password' => $userRequest['password'],
            ]);
        } catch (\Exception $e) {
            throw new \Exception('Failed to create User: ' . $e->getMessage());
        }

    }
}
