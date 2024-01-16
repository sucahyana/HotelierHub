<?php

namespace App\Providers;

use App\Models\Role;
use App\Services\CustomerService;
use App\Services\RoleService;
use App\Services\UserService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */

    public function register()
    {
        $this->app->bind(UserService::class, function () {
            return new UserService();
        });

        $this->app->bind(CustomerService::class, function () {
            return new CustomerService();
        });

        $this->app->bind(RoleService::class, function () {
            return new RoleService();
        });
    }


    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
