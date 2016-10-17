var app = angular.module("redditClone", ['angularMoment'])
app.controller("reddit", ($scope) => {
  $scope.master = {}
  $scope.master.commentsExist = false
  $scope.master.addComment = false
  $scope.master.viewComments = false
  $scope.master.noComments = true
  $scope.master.newPost = false

  $scope.allData = [
    {
      title: "First Post",
      author: "Francis O'Connally",
      description: "Damn that dog brown cats with pink ears but sleep on keyboard, for thug cat but lie on your belly and purr when you are asleep. Fall over dead (not really but gets sypathy). Put butt in owner's face favor packaging over toy lick arm hair. Hide from vacuum cleaner lick plastic bags but scratch leg; meow for can opener to feed me, but rub face on everything, for make muffins, but vommit food and eat it again, sleep on dog bed, force dog to sleep on floor. Have secret plans. Stares at human while pushing stuff off a table find empty spot in cupboard and sleep all day and catch mouse and gave it as a present.",
      image: "https://source.unsplash.com/category/food/200x300",
      rating: 0,
      comments: [
        {
          author: 'Catie',
          comment: "cool!"
        },
        {
          author: 'Ben',
          comment: "This is a great post!"
        },
        {
          author: 'Jason',
          comment: "Nice Work!"},
        {
          author: 'Junk',
          comment: "Whatever...."}
      ],
      viewComments: false,
      commentsExist: false,
      addComment: false,
      time: new Date(),
    },
    {
      title: "Another Post",
      author: "Mitch Folks",
      description: "Stares at human while pushing stuff off a table find empty spot in cupboard and sleep all day and catch mouse and gave it as a present. If it smells like fish eat as much as you wish sit on human, run in circles chirp at birds yet brown cats with pink ears, intently stare at the same spot. Rub face on owner swat at dog. Sit in box i cry and cry and cry unless you pet me, and then maybe i cry just for fun yet toy mouse squeak roll over but i like big cats and i can not lie. Chase the pig around the house chase mice, so meow to be let out. Sit in box scream at teh bath and scamper. Meowwww.",
      image: "https://source.unsplash.com/category/nature/200x300",
      rating: 0,
      comments: [
        {
          author: 'James',
          comment: 'Neature is more like it'
        }
      ],
      viewComments: false,
      commentsExist: false,
      addComment: false,
      time: new Date().getTime()
    },
    {
      title: "Also This",
      author: "Liz Horton",
      description: "Damn thallDataat dog brown cats with pink ears but sleep on keyboard, for thug cat but lie on your belly and purr when you are asleep. Fall over dead (not really but gets sypathy). Put butt in owner's face favor packaging over toy lick arm hair. Hide from vacuum cleaner lick plastic bags but scratch leg; meow for can opener to feed me, but rub face on everything, for make muffins, but vommit food and eat it again, sleep on dog bed, force dog to sleep on floor.",
      image: "https://source.unsplash.com/category/objects/200x300",
      rating: 0,
      comments: [
        {
          author: 'Catie',
          comment: "Cool!"
        },
        {
          author: 'Ben',
          comment: "This is a great post!"
        },
        {
          author: 'Jason',
          comment: "Nice Work!"},
        {
          author: 'Junk',
          comment: "Whatever...."}
      ],
      viewComments: false,
      commentsExist: false,
      addComment: false,
      time: new Date().getTime(),
    }
  ]

  $scope.rateUp = (reddit) => {
    // console.log($scope.$watch)
    console.log("rate up");
    reddit.rating += 1
  }

  $scope.rateDown = (reddit) => {
    console.log("rate down");
    reddit.rating -= 1
  }

  $scope.viewComments = (reddit) => {
    reddit.viewComments = true
  }

  $scope.newComment = (reddit) => {
    reddit.addComment = true
  }

  $scope.newPost = () => {
    $scope.master.newPost = true
  }

  $scope.addComment = (reddit, str, auth) => {
    var comment = {
      author: auth,
      comment: str
    }
    reddit.comments.push(comment)
    reddit.viewComments = true
    reddit.addComment = false
  }

  $scope.addPost = (postTitle, auth, post, imageURL) =>{
    var newPost = {
      title: postTitle,
      author: auth,
      description: post,
      image: imageURL,
      rating: 0,
      comments: [],
      viewComments: false,
      commentsExist: false,
      addComment: false,
      time: new Date()
    }
    $scope.allData.push(newPost)
    console.log(newPost)
    $scope.master.newPost = false
  }
});
