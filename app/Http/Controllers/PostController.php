<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;
use App\Http\Requests\StorePostRequest;

class PostController extends Controller 
{
    public function index() {

        $posts = Post::with('user')->latest()->get();
        $now = now()->diffForHumans();

        return Inertia::render('Posts/Index', [
            'posts' => PostResource::collection($posts),
            'now' => $now 
        ]);  
    }

    
    public function store(StorePostRequest $request) {

        sleep(3); // Simulate slow network (remove this line in production

        auth()->user()->posts()->create($request->validated());

        return redirect()->route('posts.index')->with('success', 'Post created successfully!');
    }

}
