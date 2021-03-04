<!DOCTYPE html>
<html>
<head>
  @yield('head')
</head>
<body>
  @include('loading')
  @include('header')
  <div id="wrapper">
    @yield('content')
  </div>
  <footer>
      <!-- 省略 -->
  </footer>
</body>
</html>
