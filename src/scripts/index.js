import 'normalize.css';
import '../css/index.css';
import $ from 'jquery';

const db = {
  bookmarks: [
    {
      id: 'x56w',
      title: 'Google',
      rating: 5,
      url: 'http://www.title1.com',
      description: 'lorem ipsum dolor sit',
      expanded: false
    },
    {
      id: '6ffw',
      title: 'Amazon',
      rating: 2,
      url: 'http://www.title2.com',
      description: 'dolorum tempore deserunt',
      expanded: false
    },
    {
      id: '33xz',
      title: 'eBay',
      rating: 4,
      url: 'http://www.title2.com',
      description: 'dolorum tempore deserunt',
      expanded: false
    } 
  ],
  adding: false,
  error: null,
  filter: 0
};

// const generateBookmarkHTMLtemplate = function () {

// };

// const generateBookmarkHTMLstring = function (db) {

//   const bookmarks = db.map((bookmark) => generateBookmarkHTMLtemplate(bookmark));
//   return bookmarks.join('');
// };



// const render = function () {

//   const bookmarks = db.bookmarks;
//   debugger;
//   console.log(bookmarks);

//   //render the initial bookmarks to the initial view
//   const bookmarksHTMLString = generateBookmarkHTMLstring(bookmarks);
//   $('#all-bookmarks').html(bookmarksHTMLString);
    

// };

// const addBookmark = function (bookmark) {

    
// };
// const app = function (){
//   render();



// };

// $(app);