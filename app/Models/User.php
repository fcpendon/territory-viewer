<?php

namespace App\Models;

use Illuminate\Support\Facades\Http;

class User
{
    public function login($username, $password)
    {
        return Http::post('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', [
            'username' => $username,
            'password' => $password,
        ]);
    }
}
