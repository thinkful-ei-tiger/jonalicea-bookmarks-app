
const initialBookmarkTemplateView = function (bookmark) {
  let bookmarkTitle = `<a href="#" class="app-link"><h2><span>${bookmark.title}</span></h2></a>`;
  let totalRating = '';
  let i = 0;
  while (bookmark.rating > i) {
    totalRating += '⭐';
    i++;
  }

  let bookmarkRaiting = `<div class="bookmark-raiting">${totalRating}</div>`;
  let bookmarkDescription = `<p class="bookmark-description">${bookmark.desc}</p>`;
  let bookmarkExpanded = '';
  let bookmarkAdd = '';
  //look at the state of the bookmark list
  if(bookmark.expanded === true) {
    bookmarkExpanded = `<div class="expanded-controls">
                                <a class="visit-website" href="${bookmark.url}" target="_blank">Open 🔗</a>
                                <button class="delete-bookmark">Delete</button>
                            </div>
                                ${bookmarkDescription}
                            <!--<div class="edit">
                             <button class="edit-bookmark">Edit</button> 
                            </div>-->`;
  }
    
  return `<div class="bookmark" data-bookmark="${bookmark.id}">
                ${bookmarkTitle}
                ${bookmarkAdd}
                ${bookmarkExpanded}
                ${bookmarkRaiting}
             </div>`;
};

const generateBookmarkHTMLstring = function (bookmarks) {
  const bookmarksString = bookmarks.map((bookmark) => initialBookmarkTemplateView(bookmark));
  return bookmarksString.join('');
};


const addNewBookmarkTemplateView = function (){

  //you have to find the one to edit by using id
  let titleH2 = 'Create Bookmark';
  const bookmarkAdd = `<h2>${titleH2}</h2>
                          <form class="add-new-bookmark">
                              <div class="error error-show"></div>
                              <label class="hide-label" for="title">Enter Title</label>
                              <!-- <input type="text" title="Enter Title" name="title" id="title" placeholder="Enter Title"> -->
                              <input type="text" title="Enter Title" name="title" id="title" placeholder="Enter Title">
                              <label class="hide-label" for="url">Enter URL</label>
                              <!-- <input type="text" title="Enter URL" name="url" value="https://" id="url" placeholder="https://website.com"> -->
                              <input type="text" title="Enter URL" name="url" value="https://" id="url" placeholder="https://website.com">
                              <label class="hide-label" for="desc">Enter Description</label>
                              <textarea title="Enter Description" name="desc" id="desc" placeholder="Enter Description"></textarea>

                              <div class="add-raiting">
                                  <fieldset class="rating">
                                  <legend>Enter Rating</legend>
                                      <input type="radio" id="star5" name="rating" value="5" /><label for="star5">5 Stars</label>
                                      <input type="radio" id="star4" name="rating" value="4" /><label for="star4">4 Stars</label>
                                      <input type="radio" id="star3" name="rating" value="3" /><label for="star3">3 Stars</label>
                                      <input type="radio" id="star2" name="rating" value="2" /><label for="star2">2 Stars</label>
                                      <input type="radio" id="star1" name="rating" value="1" /><label for="star1">1 Star</label>
                                  </fieldset>
                              
                              </div>
                                  <button id="save-bookmark">Save 🔖</button>
                                  <button id="cancel-bookmark">Cancel</button>
                              </div>
                          </form>`;
  return bookmarkAdd;
};
  
const editBookmarkTemplateView = function (){
  let titleH2 = 'Edit Bookmark';
  let title = db.bookmarks.title;
  
  const bookmarkEdit = `<h2>${titleH2}</h2>
                          <form class="add-new-bookmark">
                              <input type="text" name="title" id="title" placeholder="Title" value="${title}" required>
                              <input type="text" name="url" id="url" placeholder="https://website.com" required>
                              <textarea name="description" id="description" placeholder="Description"></textarea>
                              <div class="add-raiting">
                                  <fieldset class="rating">
                                      <input type="radio" id="star5" name="rating" value="5" /><label for="star5">5 Stars</label>
                                      <input type="radio" id="star4" name="rating" value="4" /><label for="star4">4 Stars</label>
                                      <input type="radio" id="star3" name="rating" value="3" /><label for="star3">3 Stars</label>
                                      <input type="radio" id="star2" name="rating" value="2" /><label for="star2">2 Stars</label>
                                      <input type="radio" id="star1" name="rating" value="1" /><label for="star1">1 Star</label>
                                  </fieldset>
                              </div>
                                  <button type="submit" id="save-edited-bookmark">Save 🔖</button>
                                  <button id="cancel-bookmark">Cancel</button>
                              </div>
                          </form>`;
  return bookmarkEdit;
  
};

export default {
  initialBookmarkTemplateView,
  generateBookmarkHTMLstring,
  addNewBookmarkTemplateView,
  editBookmarkTemplateView
};