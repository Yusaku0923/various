@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>写真を投稿</h1>
@stop

@section('content')
    <div class="post_form">
        <form method="POST" action="/writer" enctype="multipart/form-data">

        {{ csrf_field() }}

        <input type="file" id="file" name="file" class="form-control">

        <button type="submit">アップロード</button>

    </div>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script> console.log('Hi!'); </script>
@stop
