<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminRegisterRequest;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function store(AdminRegisterRequest $request)
    {
        // Récupérer le rôle d'administrateur
        $adminRole = Role::where('name', 'admin')->first();

        if (!$adminRole) {
            return response()->json(['error' => 'Role admin not found'], 404);
        }

        // Créer un nouvel utilisateur avec le rôle d'administrateur
        $admin = new User();
        $admin->name = $request->input('name');
        $admin->email = $request->input('email');
        $admin->password = Hash::make($request->input('password'));
        $admin->role_id = $adminRole->id;
        $admin->save();

        return response()->json([
            'message' => 'Administrateur créé avec succès.',
            'admin' => $admin
        ], 201);
    }
}



