// Run this to generate data.json
var fs = require("fs");
var _ = require("lodash");
var Factory = require("rosie").Factory;
var Faker = require("Faker");
var db = {};

// Credit http://www.paulirish.com/2009/random-hex-color-code-snippets/
function hex() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

// Tables
db.comments = [];
db.albums = [];
db.photos = [];
db.users = [];

// Factories

Factory.define("album")
  .sequence("id")
  .attr("title", function () {
    return Faker.Lorem.sentence();
  });

Factory.define("comment")
  .sequence("id")
  .attr("name", function () {
    return Faker.Lorem.sentence();
  })
  .attr("email", function () {
    return Faker.Internet.email();
  })
  .attr("body", function () {
    return Faker.Lorem.sentences(4);
  });

Factory.define("photo")
  .sequence("id")
  .attr("title", function () {
    return Faker.Lorem.words(2);
  })
  .option("color", hex)
  .attr("url", ["color"], function (color) {
    return "http://placehold.it/600/" + color;
  })
  .attr("thumbnailUrl", ["color"], function (color) {
    return "http://placehold.it/150/" + color;
  });

Factory.define("user")
  .sequence("id")
  .after(function (user) {
    var card = Faker.Helpers.userCard();
    _.each(card, function (value, key) {
      user[key] = value;
    });
  });

// Has many relationships
// Users
_(10).times(function () {
  var user = Factory.build("user");
  db.users.push(user);

  // Albums
  _(10).times(function () {
    var album = Factory.build("album", { userId: user.id });
    db.albums.push(album);

    // Comments
    _(5).times(function () {
      var comment = Factory.build("comment", { albumId: album.id });
      db.comments.push(comment);
    });

    // Photos
    _(50).times(function () {
      var photo = Factory.build("photo", { albumId: album.id });
      db.photos.push(photo);
    });
  });
});

fs.writeFileSync("db.json", JSON.stringify(db, null, 2));
