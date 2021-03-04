@extends('template')

@section('title','そういえばギャラリー')
@section('description','ディスクリプション')
@include('head')

@section('content')
{{--
    <h1>やること</h1>
    <p>デザインの方向性を決める</p>
    <p>laravelMixを使ってみる&調べる</p>
    <a href="https://dream-lab.work/">この辺りどう?</a>
    <a href="https://sg-g.jp/">この辺りどう?</a> --}}
    <div class="top_body">
        {{-- <div class="sub_title">
            <nav>
                <ul>
                    <li class="current"><a href="#">Home</a></li>
                    <li><a href=”#”>News</a></li>
                    <li><a href=”#”>About</a></li>
                    <li><a href=”#”>Access</a></li>
                    <li><a href=”#”>Blog</a></li>
                </ul>
            </nav>
        </div> --}}
        <div class="content">
            <div class="top_comment">
                <img class="left_upper_tape" src="./img/mt04_others004_256x64.png" alt="マスキング">
                <h2>About This Site</h2>
                <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                <img class="left_downer_tape" src="./img/mt04_others004_256x64.png" alt="マスキング">
            </div>
        </div>
    </div>


@endsection
