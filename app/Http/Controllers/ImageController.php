<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{

    public function uploadImage(Request $request)
    {
        try {
            if (!$request->hasFile('image')) {
                return response()->json([
                    'message' => "No image uploaded."
                ], 400);
            }

            $file = $request->file('image');
            $imageName = Str::random(32) . '.' . $file->getClientOriginalExtension();

            // Save Image in Storage folder
            $path = $file->storeAs('images', $imageName, 'public');

            // Create Image record in database
            Image::create([
                'name' => $file->getClientOriginalName(),
                'bin_img' => $path,
                'type' => $file->getClientMimeType(),
                'size' => $file->getSize(),
            ]);

            // Return Json Response
            return response()->json([
                'message' => "Image successfully created.",
                'url' => Storage::disk('public')->url($path)
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!" . $e->getMessage()
            ], 500);
        }
    }




    public function index()
    {
        try {
            // Récupérer toutes les images depuis la base de données
            $images = Image::all();

            // Retourner les images en tant que réponse JSON
            return response()->json($images, 200);
        } catch (\Exception $e) {
            // Retourner une réponse d'erreur si quelque chose ne va pas
            return response()->json(['message' => "Something went wrong!" . $e->getMessage()], 500);
        }
    }



}
// Traiter l'image téléchargée
// if ($request->hasFile('image')) {
// $file = $request->file('image');
// $fileName = time() . '_' . $file->getClientOriginalName();
// $fileName = time() . '_' ;

// $filePath = $file->storeAs('images', $fileName, 'public');

// Enregistrer les informations de l'image en base de données
// Image::create([
//     'name' => $fileName,
//     'type' => $file->getClientMimeType(),
//     'size' => $file->getSize(),
//     'path' => $filePath,
// ]);

// return response()->json(['message' => 'Image uploaded successfully']);
// }

// return response()->json(['message' => 'No image uploaded'], 400);




// }
// 