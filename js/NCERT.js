const initBg = (autoplay = true) => {
    const bgImgsNames = ['Book1.jpg', 'Book2.jpg', 'Book3.jpg'];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $.backstretch(bgImgs, {duration: 4000, fade: 500});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}

const setBg = id => {
    $.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    $('.tm-bg').height(bgHeight);

    if(windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
                .css('border-top', `${bgHeight}px solid transparent`);                
    } else {
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
                .css('border-top', `0`);
    }
}

$(document).ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);    
    setBgOverlay();

    const bgControl = $('.tm-bg-control');            
    bgControl.click(function() {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');                
        setBg(id);
    });

    $(window).on("backstretch.after", function (e, instance, index) {        
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);        
        current.addClass('active');
    });

    $(window).resize(function() {
        setBgOverlay();
    });
});

// to load the upload the image
var loadFile = function(event) {
	var image = document.getElementById('book_dimension_pimg');
	image.src = URL.createObjectURL(event.target.files[0]);
};

$('#form1').submit(function() {
    if ($('input:checkbox', this).length == $('input:checked', this).length ) {
        window.open('end.html');
    } else {
        window.open('forms.html');
    }
});

const sendMail = () => {
    alert("The Complaint is sent to vigleg.ncert@gmail.com");
    const mailAdress = "vigleg.ncert@gmail.com";
    const subject = encodeURIComponent("Copyright infringement /piracy /plagiarism of NCERT text books.");
    const body = encodeURIComponent("The book that is purchased by the person has copyright issues.\n");
    const name = encodeURIComponent(document.getElementById('name').value);
    const phone = encodeURIComponent(document.getElementById('phone').value);
    const place = encodeURIComponent(document.getElementById('place').value);
    const  link= `mailto:${mailAdress}&subject=${subject}&body=${body,name,phone,place}`;
    window.location.href = link;
}