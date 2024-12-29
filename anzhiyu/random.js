var posts=["0.html","84f1.html","0.html","8f72.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };