<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRegisterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class UserController extends Controller
{
    //

    public function register(UserRegisterRequest $request){
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'message' => 'Utilisateur créé avec succès',
            'user' => $user,
        ], 201);
    
    }




    public function login(UserLoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
    
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
    
            Log::info('Utilisaeur connecté', ['id' => $user->id, 'email' => $user->email]);
    
            return response()->json([
                'message' => 'Connexion établie avec succès, l\'utilisateur est maintenant connecté.',
                'user' => $user
            ]);
        } else {
            return response()->json([
                'message' => 'Email ou mot de passe invalide. Veuillez réessayer.'
            ], 401);
        }
    }


    public function logout(Request $request)
    {
        // Déconnecte l'utilisateur
        Auth::logout();

        // Retourne une réponse JSON indiquant que l'utilisateur est déconnecté
        return response()->json(['message' => 'Utilisateur deconnecté.']);
    }
}
    
    

