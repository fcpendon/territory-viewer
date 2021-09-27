@extends('layouts.app')

@section('content')
<div id="territory-viewer" data-tree='@json($result)'></div>
@endsection
