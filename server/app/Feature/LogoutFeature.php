<?php

namespace App\Feature;
use App\Traits\ResponseTrait;


class LogoutFeature
{
    use ResponseTrait;

    public function logout($request)
    {
        try {
            $user = $request;

            if ($user) {

                $user->tokens()->delete();

                return $this->noContentResponse('User logged out successfully.');
            } else {
                return $this->badRequestResponse('User not found', null, null);
            }
        } catch (\Exception $e) {

            if ($e instanceof \Illuminate\Database\Eloquent\ModelNotFoundException) {
                return $this->badRequestResponse('User not found', null, null);
            } else {
                return $this->serverErrorResponse('Failed to logout', $e, null);
            }
        }
    }
}