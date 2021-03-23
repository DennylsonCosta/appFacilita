<?php

namespace App\Http\Controllers\problems;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OneController extends Controller
{
    public function index(){
        $personOne = 1.50;
        $personTwo = 1.20;

        $years = 0;

        while ($personTwo < $personOne) {
            $personOne = $personOne + 0.02;
            $personTwo = $personTwo + 0.03;

            $years = $years + 1;
        }

        return response(
            '{"data": true, "time": '. $years .'}',
            200
        )->header('Content-Type', 'application/json');
    }
}
