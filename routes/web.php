<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\TerritoryTree;

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

Route::get('/', function () {
    $tree = new TerritoryTree;
    $data = $tree->fetchTerritories();
    $result = $tree->build($data);
    $user = session('user');

    if (!$user)
        return redirect()->route('login');

    return view('home', compact('result', 'user'));
})->name('home');

Route::get('/account/login', function () {
    return view('login');
})->name('login');

Route::post('/account/login', function (Request $request) {
    $user = new User;
    $username = $request->username;
    $password = $request->password;

    $response = $user->login($username, $password);
    $result = $response->json();

    if ($response->failed()) {
        return back()->withError($result['message']);
    }

    session(['user' => $result['displayName']]);

    return redirect()->route('home');
});


Route::get('/account/logout', function () {
    session()->forget('user');

    return redirect()->route('login');
})->name('logout');
