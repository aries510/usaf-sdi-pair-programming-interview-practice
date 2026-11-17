class Blog {
  constructor() {
    this.posts = []
  };

  getBlogPosts() {
    if(this.posts.length === 0) {
      return "There are 0 blog posts"
    };
  };


}

module.exports = Blog