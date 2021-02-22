@section('head')
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <meta name="description" content="@yield('description')">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="{{ mix('js/loading.js') }}"></script>
    <!-- あとで考える -->
@endsection
