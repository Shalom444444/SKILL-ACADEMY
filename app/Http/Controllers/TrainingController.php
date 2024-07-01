<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Training;
use App\Http\Requests\CreateTrainingRequest;


class TrainingController extends Controller
{

    public function store(CreateTrainingRequest $request)
    {


        //Rectiifie la requête


        // // Créer la formation
        // $training = new Training();
        // $training->title = $validatedData['title'];
        // $training->description = $validatedData['description'];
        // $training->image_url = $validatedData['image_url']; // Si le champ est rempli
        // $training->creator_id = auth()->user()->id; // Utilisateur connecté comme créateur
        // $training->save();

        //return response()->json($training, 201);
    }


    public function update(Request $request, Training $training)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image_url' => 'nullable|string|url',
        ]);

        $training->title = $request->title;
        $training->description = $request->description;
        $training->image_url = $request->image_url;
        $training->save();

        return response()->json($training, 200);
    }

    public function destroy(Training $training)
    {
        $training->delete();

        return response()->json(null, 204);
    }
}
