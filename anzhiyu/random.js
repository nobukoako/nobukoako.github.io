var posts=["posts/e1ee63d0/","posts/90c4c3af/","posts/cbfb82e9/","posts/be47ac28/","posts/2d5a9a16/","posts/b5c73c87/","posts/1702e957/","posts/ca51340e/","posts/bc51191d/","posts/8becf1fa/","posts/16572e88/","posts/1c4c88cd/","posts/19e3d86a/","posts/72f209ec/","posts/dc0a119c/","posts/b98dcb41/","posts/413dc002/","posts/b014d67c/","posts/c1d31f55/","posts/3f87dadf/","posts/a0feffba/","posts/c935f7a3/","posts/de402f53/","posts/ae5ce079/","posts/1c165001/","posts/10d8407c/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };