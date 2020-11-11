<nav>
	<a class="navbar-brand" href="{{ url('/') }}">{{ config('app.name', 'Laravel') }}</a>
		<ul class="navbar-nav ml-auto">
		@guest
			<li class="nav-item"><a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a></li>
			@if (Route::has('register'))
			<li class="nav-item"><a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a></li>
			@endif
			@else
			<li class="nav-item dropdown">
				<a href="#" role="button" >{{ Auth::user()->name }}</a>
				<a class="dropdown-item" href="{{ route('logout') }}"
						onclick="event.preventDefault();
													document.getElementById('logout-form').submit();">
						{{ __('Logout') }}
				</a>
				<form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
						@csrf
				</form>
			</li>
		@endguest
		</ul>
	</nav>