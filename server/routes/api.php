<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\CustomerComplaintController;
use App\Http\Controllers\ReportController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/
Route::prefix('v1')->group(function () {
    Route::prefix('/auth')->group(function () {
        Route::post('/register', [AuthController::class, 'register']); //Done
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
    });

// Manajemen Kamar
    Route::middleware(['auth:sanctum', 'role:admin,kasir'])->group(function () {
        Route::get('/rooms', [RoomController::class, 'index']);
        Route::post('/rooms', [RoomController::class, 'store']);
        Route::get('/rooms/{room}', [RoomController::class, 'show']);
        Route::put('/rooms/{room}', [RoomController::class, 'update']);
        Route::delete('/rooms/{room}', [RoomController::class, 'destroy']);
    });

// Pemesanan
    Route::middleware(['auth:sanctum', 'role:admin,kasir'])->group(function () {
        Route::get('/bookings', [BookingController::class, 'index']);
        Route::post('/bookings', [BookingController::class, 'store']);
        Route::get('/bookings/{booking}', [BookingController::class, 'show']);
        Route::put('/bookings/{booking}', [BookingController::class, 'update']);
        Route::delete('/bookings/{booking}', [BookingController::class, 'destroy']);
    });

// Pembayaran
    Route::middleware(['auth:sanctum', 'role:admin,kasir'])->group(function () {
        Route::post('/payments', [PaymentController::class, 'store']);
        Route::get('/payments/{payment}', [PaymentController::class, 'show']);
    });

// Keluhan Pelanggan
    Route::middleware(['auth:sanctum', 'role:admin,kasir'])->group(function () {
        Route::get('/complaints', [CustomerComplaintController::class, 'index']);
        Route::post('/complaints', [CustomerComplaintController::class, 'store']);
        Route::put('/complaints/{complaint}', [CustomerComplaintController::class, 'update']);
    });

// Laporan
    Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {
        Route::get('/reports', [ReportController::class, 'index']);
        Route::post('/reports', [ReportController::class, 'store']);
    });
});
