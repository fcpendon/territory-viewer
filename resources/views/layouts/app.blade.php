<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Territory Viewer</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body style="margin: 100px auto">
    <!-- React root DOM -->
    @yield('content')

    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>