<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\AdminController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route for User (register | login | logout)
Route::post('/register',[UserController::class, 'register']);
Route::post('/login',[UserController::class, 'login']);
Route::post('/logout',[UserController::class, 'logout']);

//Route for Admin (register | login | logout)
Route::post('/admin', [AdminController::class, 'store']);


// use App\Http\Controllers\TrainingController;

// // Route pour créer une formation
// Route::post('/trainings', [TrainingController::class, 'store'])->middleware(['auth:api', 'admin']);

// // Routes pour mettre à jour une formation
// Route::put('/trainings/{training}', [TrainingController::class, 'update'])->middleware(['auth:api', 'admin']);
// Route::patch('/trainings/{training}', [TrainingController::class, 'update'])->middleware(['auth:api', 'admin']);

// // Route pour supprimer une formation
// Route::delete('/trainings/{training}', [TrainingController::class, 'destroy'])->middleware(['auth:api', 'admin']);
