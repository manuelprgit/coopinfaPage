let blogContent = document.getElementById('blogContent');

blogContent.addEventListener('click',e=>{ 

    if(e.target.closest('[data-blogid]')){

        let dataBlogId = e.target.closest('[data-blogid]').getAttribute('data-blogid');
        localStorage.setItem('data-info-blog',dataBlogId);
        getBloByID(dataBlogId);
        window.location.href = `/getBlogById`;
    }

})