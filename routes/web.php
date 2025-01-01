<?php

use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\ImageController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return ['Laravel' => app()->version()];
// });

Route::get('/student/getPosition', [EtudiantController::class, 'index']);
Route::post('/insertNote1', [EtudiantController::class, 'insertNote1']);
Route::post('/insertNote2', [EtudiantController::class, 'insertNote2']);
Route::get('/getStaistique', [EtudiantController::class, 'index']);


Route::post('/upload-image', [ImageController::class, 'uploadImage']);
Route::get('/getImages', [ImageController::class, 'index']);


require __DIR__.'/auth.php';
