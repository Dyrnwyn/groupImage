let children = document.querySelectorAll(".children");
let children_div = document.getElementById('children_name');
let card_div = document.getElementById('close_div');
let card_name_div = document.getElementById('card_name');
let card_student_foto_img = document.getElementById('card_student_foto');
let card_message_div = document.getElementById('card_message');
let close_button = document.getElementById('close-button');
let open_archive_button = document.getElementById('open-archive-button');
let open_groupfoto_button = document.getElementById('open-groupfoto-button');
function viewName(item){
    let children_name = item.getAttribute('data-name');
    let coord_x = item.getAttribute('cx');
    let coord_y = item.getAttribute('cy');
    let radius = item.getAttribute('r');   
    children_div.style.display = 'block';     
    children_div.innerHTML = children_name;
    children_div.style.top = coord_y - radius - children_div.clientHeight + 'px';
    children_div.style.left = coord_x - children_div.clientWidth/2 + 'px'; 
    children_div.style.backgroundColor = 'azure';
    children_div.style.padding = '5px';
    children_div.style.border = '1px solid';
    children_div.style.borderRadius = '7px';
};

function viewCard(item){
    children_div.style.display = 'none';
    let card_name = item.getAttribute('data-name');
    let card_student_foto = item.getAttribute('data-student-foto');
    let card_message = item.getAttribute('data-message');
    let coord_x = item.getAttribute('cx');
    let coord_y = item.getAttribute('cy');
    let radius = item.getAttribute('r');              
    card_name_div.innerHTML = card_name;
    card_student_foto_img.setAttribute('src', card_student_foto);
    card_message_div.innerHTML = card_message;
    card_div.style.top = coord_y - radius - children_div.clientHeight - 50 + 'px';
    card_div.style.left = coord_x - children_div.clientWidth/2 + 35 + 'px'; 
    card_div.style.display = 'block';          
};

function removeViewName(item){
    let children_name = item.getAttribute('data-name');
    children_div.style.display = 'None';
};

children.forEach((item)=>{
    console.log("123123")
    item.addEventListener('click', function(){
        viewCard(item);       
    });
    item.addEventListener('mouseover', function(){
        viewName(item);       
    });
    item.addEventListener('mouseout', function(){
        removeViewName(item);       
    });
});
console.log(close_button);
close_button.addEventListener('click', function(){
    card_div.style.display = 'none';
});

open_archive_button.addEventListener('click', ()=>{
    archive_container = document.getElementById("archive-container");
    archive_panel = document.getElementById("archive-panel");
    close_arhive = document.getElementById("close-archive");
    open_archive = document.getElementById("open-archive");
    if (archive_container.style.display != 'none'){
        archive_container.style.display = 'none';
        archive_panel.style.gridTemplateColumns = "1vw 0";
        open_archive.style.display = "block";
        close_arhive.style.display = "none";
    }else{
        archive_container.style.display = 'grid';
        archive_panel.style.gridTemplateColumns = "1vw 8.5vw";
        open_archive.style.display = "none";
        close_arhive.style.display = "block";
    }
});

open_groupfoto_button.addEventListener('click', ()=>{
    archive_container = document.getElementById("groupfoto-container");
    archive_panel = document.getElementById("groupfoto-panel");
    close_arhive = document.getElementById("close-groupfoto");
    open_archive = document.getElementById("open-groupfoto");
    if (archive_container.style.display != 'none'){
        archive_container.style.display = 'none';
        archive_panel.style.gridTemplateColumns = "0 1vw";
        open_archive.style.display = "block";
        close_arhive.style.display = "none";
    }else{
        archive_container.style.display = 'grid';
        archive_panel.style.gridTemplateColumns = "8.5vw 1vw";
        open_archive.style.display = "none";
        close_arhive.style.display = "block";
    }
});


// document.addEventListener('click', function(event){
//     let div_foto = document.getElementById("foto")
//     console.log(div_foto.offsetTop + ' ' + div_foto.offsetLeft)
//     console.log(event.clientY + ' ' + event.clientX)
//     console.log((event.clientX - div_foto.offsetLeft) + ' ' + (event.clientY - div_foto.offsetTop))
// });
