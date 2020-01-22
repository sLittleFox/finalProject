Post = function(tag, title, imageUrl, description) {
    this.tag = tag;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
};

let postArray = [postContent, postContent1, postContent2, postContent3, postContent4, postContent5, postContent6, postContent7, postContent8];




var counter = postArray.length;
console.log(counter);
var addButton = document.getElementById('addPost');




window.onload = function() {
addButton.addEventListener('click', function() {

    let dropDownSelect = document.getElementById('dropDownSelect').value;

    let newPostTitle = document.getElementById('newPostTitle').value;

    let newImg = document.getElementById('inputImg').files[0];

    let newPostDescription = document.getElementById('newPostDescription').value;



    newPost = new Post(dropDownSelect, newPostTitle, "../src/img/"+newImg.name, newPostDescription);
    console.log(newPost);
    postArray.push(newPost);
    postArray.forEach(createPost);
    
});



let notesOnPage = 3;

let parentLi = document.getElementById('pagination');

let elements = document.querySelectorAll('#pagination li');


for (let element of elements) {
    element.addEventListener('click', function(){
        showPage(this);
    }); 
} 
showPage(elements[0]);


    function showPage(item){
        let pageNum = +item.innerHTML;

        let start = (pageNum - 1) * notesOnPage;

        let end = start + notesOnPage;

        let notes = postArray.slice(start, end);


        let parentNewPost = document.getElementById('blogPost');
        parentNewPost.innerHTML = '';
        for (let note of notes) {
            postArray.forEach(createPost);

        function createPost(index, item) {
           
            let childNewPost = `
            <div class="postOuter">
                <div class="post">
                    <div class="postTop">  
                        <span class="postCat"> 
                            <a href="#"> ${notes[item].tag} 
                            </a>  
                        </span>   
                        <h2 class="postTitle entryTitle"> 
                            <a href="#"> ${notes[item].title} 
                            </a> 
                        </h2> 
                        <div id="metaPost">  
                            <span class="author-link vcard"></span> 
                            <a class="timestamp-link" href="#" rel="bookmark" title="permanent link"><abbr class="published" itemprop="datePublished dateModified" title="March 17, 2016">Some date</abbr></a> 
                            </div> 
                        </div>  
                        <div class="blockImage">  
                            <div class="thumb" > 
                                <a class="img-overlay" id="img-overlay-${item}"  href="#"> 
                                <img src="${notes[item].imageUrl}" alt="img">
                                </a>  
                                </div>   
                                </div> 
                            <div class="postArticle"> 
                                <div class="dateHeader">
                                    <p class="post-snippet">${notes[item].description}</p>
                                    </div> 
                                    <div class="readMore"> 
                                        <a href="#">Continue Reading</a> 
                                    </div> 
                                    <div class="shareMore">
                                    <ul> 
                                        <li><a href="#" class="sb"><i class="fa fa-facebook"></i></a></li> 
                                        <li><a href="#" class="sb"><i class="fa fa-twitter"></i></a></li> 
                                        <li><a href="#" class="sb"><i class="fa fa-linkedin"></i></a></li> 
                                        <li><a href="#" class="sb"><i class="fa fa-pinterest"></i></a></li> 
                                        <li><a href="#" class="sb"><i class="fa fa-google-plus"></i></a></li>      
                                        </ul> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div>`;
            parentNewPost.insertAdjacentHTML('beforeend', childNewPost);
            }
         }

    }
};

