<?php

namespace App\Http\Controllers\Writer;

use Auth;
use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    public function index()
    {
        return view('writer.home');
    }

    public function create(Request $request)
    {
        // 名前生成
        // $name = substr(str_shuffle('1234567890abcdefghijklmnopqrstuvwxyz'), 0, 8);
        // $name .= date('_Y_m_d');
        // dd($request->file('file'));
        $path = Storage::putFile('', $request->file('file'));
        Image::query()->insert([
            'user_id' => Auth::id(),
            'image_path' => $path,
            'comment' => '',
        ]);
    }
}
