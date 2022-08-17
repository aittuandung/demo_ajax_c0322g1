
//call đến API để lấy DL.
$.ajax({
    type: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    url: "http://localhost:8080/blogs",
    //xử lý khi thành công
    success: function (data) {
        console.log(data.content)
        show(data.content);
    },
    error: function (err) {
        console.log(err)
    }
})

function pages() {
    let page = $('#page').val();
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/blogs?page=" + page,
        //xử lý khi thành công
        success: function (data) {
            show(data.content)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function dlt(id){
    $.ajax({
        type: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/blogs/" + id,
        //xử lý khi thành công
        success: function (data) {
            location.href = "index.html";
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function show(data) {
    let str = "";
    for (let i = 0; i < data.length; i++) {
        str += `<div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1000ms" >
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6">
                                <div class="single-blog-thumbnail">
                                    <img src="${data[i].img}" alt="">
                                    <div class="post-date">
                                        <a href="#">12 <span>march</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <!-- Blog Content -->
                                <div class="single-blog-content">
                                    <div class="line"></div>
                                    <a href="#" class="post-tag">${data[i].title}</a>
                                    <h4><a href="#" class="post-headline">Party people in the house</a></h4>
                                    <p>${data[i].content}</p>
                                    <div class="post-meta">
                                        <p>By <a href="#">${data[i].date}</a></p>
                                        <p>3 comments</p>
                                    </div>
                                </div>
                                <div>
                                    <button  class="btn btn-warning">Edit</button>
                                    <button onclick="dlt(${data[i].id})" class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
`
    }
    document.getElementById("show").innerHTML = str;
}
