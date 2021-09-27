@extends('layouts.app')

@section('content')
<div id="territory-viewer" data-user="{{ $user }}" data-tree='@json($result)'></div>
@endsection
