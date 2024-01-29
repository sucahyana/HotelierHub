<?php

namespace App\Feature;

use App\Models\User;
use App\Traits\ResponseTrait;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class LoginFeature
{
    use ResponseTrait;

    public function login($credentialsRequest)
    {
        try {
            $this->validateLogin($credentialsRequest);

            $user = User::where('username', $credentialsRequest['username'])->first();

            if ($user && $user->tokens->isNotEmpty()) {
                $user->tokens()->delete();
            }

            if (Auth::attempt(['username' => $credentialsRequest['username'], 'password' => $credentialsRequest['password']], true)) {

                $success['token'] = $user->createToken('HotelierHub', ['*'], now()->addMonth())->plainTextToken;
                $success['name'] = $user->name;
                $userData = $user->all();

                return $this->successResponse('Login berhasil!', $userData);
            } else {
                return $this->badRequestResponse('Username atau password salah', null, null);
            }
        } catch (ValidationException $e) {
            return $this->badRequestResponse('Data tidak valid', $e->errors(), null);
        } catch (\Exception $e) {
            return $this->serverErrorResponse('Terjadi kesalahan server', $e->getMessage(), null); // Berikan detail error untuk debugging
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
