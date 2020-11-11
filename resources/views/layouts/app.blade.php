<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Heine Product Manager') }}</title>
		@yield('reactscript')
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
	<header>@include('layouts/header')</header>
  <main id="app"></main>
   @yield('content')
</body>
</html>
