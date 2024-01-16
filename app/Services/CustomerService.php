<?php

namespace App\Services;

use App\Models\Customer;

class CustomerService
{

    public function CreateCustomer($userId, $name, $email)
    {
        try {
            return Customer::create([
                'user_id' => $userId,
                'name' => $name,
                'email' => $email,
            ]);

        } catch (\Exception $e) {
            throw new \Exception('Failed to create Customer: ' . $e->getMessage());
        }

    }

}
