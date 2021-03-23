<?php

namespace App\Http\Controllers\problems;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ThreeController extends Controller
{
    public function index(Request $request){
        $matriz = [];

        for ($i = count($matriz) ; $i  <= 4; $i++) { 
            for ($j = 0; $j <= 4; $j++) { 
                $matriz[$i][$j] = random_int($request->min, $request->max);   
            }
        }

        $matrizPar = [];
        $matrizImpar = [];

        foreach ($matriz as $value) {
            foreach ($value as $v) {
                if(($v % 2) == 0 ){
                    array_push($matrizPar, $v);
                }else{
                    array_push($matrizImpar, $v);
                }
            }
        }

        return response(
            [$matriz, $matrizPar, $matrizImpar],
            200
        )->header('Content-Type', 'application/json');
    }
}
