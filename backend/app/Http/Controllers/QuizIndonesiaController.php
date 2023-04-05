<?php

namespace App\Http\Controllers;

use App\Models\QuizIndonesia;
use Illuminate\Http\Request;

class QuizIndonesiaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $quiz = QuizIndonesia::create([
            'question' => $request->question,
            'a_answer' => $request->a_answer,
            'a_correct' => $request->a_correct,
            'b_answer' => $request->b_answer,
            'b_correct' => $request->b_correct
        ]);

        return response()->json([
            'message' => 'Data Successfully Stored',
            'data' => $quiz
        ]);
        
    }

    public function store_many(Request $request){
        $data = $request->all();
        $final_array = array();


        foreach ($data as $key => $value) {
            array_push($final_array, array(
                'question' => $value['question'],
                'a_answer' => $value['a']['answer'],
                'a_correct' => $value['a']['correct'],
                'b_answer' => $value['b']['answer'],
                'b_correct' => $value['b']['correct'],
            ));
            # code...
        }
        $quizzes = QuizIndonesia::insert($final_array);

        return response()->json([
            'message' => 'all data is inserted',
            'data' => $quizzes,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(QuizIndonesia $quizIndonesia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(QuizIndonesia $quizIndonesia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, QuizIndonesia $quizIndonesia)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(QuizIndonesia $quizIndonesia)
    {
        //
    }
}
