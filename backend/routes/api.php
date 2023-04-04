<?php

use App\Http\Controllers\QuizController;
use App\Http\Controllers\QuizIndonesiaController;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('/quiz/many', [QuizController::class, 'store_many' ]);
Route::post('/quiz-indonesia/many', [QuizIndonesiaController::class, 'store_many' ]);

Route::apiResource('quiz', QuizController::class );
Route::apiResource('quiz-indonesia', QuizIndonesiaController::class );
