<!DOCTYPE html>
<html>
<head>
  @yield('head')
</head>
<body>
  <header>
    <div class="h_parent">
      <div class="h_title">
        <div class="top_icon">
          
        </div>
        <div class="top_title">
          <p class="upper">そういえば</p>
          <p class="downer">ギャラリー</p>
        </div>
      </div>
    </div>
  </header>
  <div id="wrapper">
    @yield('content')
  </div>
  <footer>
      <!-- 省略 -->
  </footer>
</body>
</html>