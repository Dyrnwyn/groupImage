let children = document.querySelectorAll(".children");
let children_div = document.getElementById('children_name');
let card_div = document.getElementById('close_div');
let card_name_div = document.getElementById('card_name');
let card_student_foto_img = document.getElementById('card_student_foto');
let card_message_div = document.getElementById('card_message');
let close_button = document.getElementById('close-button');
let open_archive_button = document.getElementById('open-archive-button');
let open_groupfoto_button = document.getElementById('open-groupfoto-button');
let close_order_archive = document.getElementById("close-order-archive");
let new_order_archive = document.getElementById("new-order-archive");
let new_order_groupfoto = document.getElementById("new-order-groupfoto");
let close_order_groupfoto = document.getElementById("close-order-groupfoto");
let preview_image_archive_foto = document.querySelectorAll(".imagearchivefoto");
let close_fotogallery = document.getElementById("close-fotogallery");


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
close_button.addEventListener('click', function(){
    card_div.style.display = 'none';
});

preview_image_archive_foto.forEach((item)=>{
    item.addEventListener('click', ()=>{
        let event_id = item.dataset.archiveid;
        let blackscreen = document.getElementById("blackscreen");
        let fotogallery = document.getElementById("fotogallery");
        let preview_foto = document.getElementById("preview-foto");
        fotogallery.style.display = 'grid';
        blackscreen.style.display = 'block';
        let dict_of_event_foto = new Map();
        dict_of_event_foto.set("inClass", ['eburg1836a/fotoEvent/В классе/8200.jpg', 'eburg1836a/fotoEvent/В классе/8206.jpg',
                                           'eburg1836a/fotoEvent/В классе/8215.jpg', 'eburg1836a/fotoEvent/В классе/8232.jpg',
                                           'eburg1836a/fotoEvent/В классе/8785.jpg', 'eburg1836a/fotoEvent/В классе/8795.jpg',
                                           'eburg1836a/fotoEvent/В классе/8806.jpg', 'eburg1836a/fotoEvent/В классе/8816.jpg',
                                           'eburg1836a/fotoEvent/В классе/8823.jpg', 'eburg1836a/fotoEvent/В классе/8825.jpg'])
                          .set("biatlon", ["eburg1836a/fotoEvent/Поход на биатлонку/IMG-20160911-WA0007.jpg", "eburg1836a/fotoEvent/Поход на биатлонку/IMG-20160911-WA0015.jpg",
                               "eburg1836a/fotoEvent/Поход на биатлонку/IMG-20160911-WA0021.jpg", "eburg1836a/fotoEvent/Поход на биатлонку/IMG-20160911-WA0028.jpg",
                               "eburg1836a/fotoEvent/Поход на биатлонку/IMG-20160911-WA0042.jpg", "eburg1836a/fotoEvent/Поход на биатлонку/IMG-20160911-WA0054.jpg",
                               "eburg1836a/fotoEvent/Поход на биатлонку/IMG-20160911-WA0057.jpg", "eburg1836a/fotoEvent/Поход на биатлонку/IMG-20160924-WA0002.jpg",
                               "eburg1836a/fotoEvent/Поход на биатлонку/IMG-20160911-WA0017.jpg"])
                          .set("travelInPark", ["eburg1836a/fotoEvent/Поход на стлобы/IMG-20171026-WA0016.jpg", "eburg1836a/fotoEvent/Поход на стлобы/IMG-20180308-WA0004.jpg",
                               "eburg1836a/fotoEvent/Поход на стлобы/IMG-20180308-WA0011.jpg", "eburg1836a/fotoEvent/Поход на стлобы/IMG-20180318-WA0004.jpg",
                               "eburg1836a/fotoEvent/Поход на стлобы/IMG-20180318-WA0006.jpg", "eburg1836a/fotoEvent/Поход на стлобы/IMG-20180318-WA0020.jpg",
                               "eburg1836a/fotoEvent/Поход на стлобы/IMG-20180318-WA0026.jpg", "eburg1836a/fotoEvent/Поход на стлобы/IMG-20180318-WA0028.jpg"]);
        let list_foto_from_event = dict_of_event_foto.get(event_id);
        full_view_foto = document.querySelector("#full-view-foto>img");
        full_view_foto.setAttribute("src", list_foto_from_event[0]);
        for (let path in list_foto_from_event){
            let foto_img = document.createElement('img');
            foto_img.className = "img-preview-foto";
            foto_img.src = list_foto_from_event[path];
            preview_foto.append(foto_img);
        }
        let fotogallery_img_preview_foto = document.querySelectorAll(".img-preview-foto");
        fotogallery_img_preview_foto.forEach((item)=>{
            item.addEventListener('click', ()=>{
                full_view_foto = document.querySelector("#full-view-foto>img");
                img_src = item.getAttribute("src");
                full_view_foto.setAttribute("src", img_src);
            });
        });
    });
});

// fotogallery_img_preview_foto.forEach((item)=>{
//     item.addEventListener('click', ()=>{
//         full_view_foto = document.getElementById("full-view-foto");
//         img_src = item.getAttribute("src");
//         full_view_foto.setAttribute("src", img_src);
//     });
// });

close_fotogallery.addEventListener('click', ()=>{
    let fotogallery = document.getElementById('fotogallery');
    let blackscreen = document.getElementById("blackscreen");
    fotogallery.style.display = 'none';
    blackscreen.style.display = 'none';
    let preview_foto = document.querySelectorAll("#preview-foto img");
    preview_foto.forEach((item)=>{
        item.remove();
    });
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
close_order_archive.addEventListener('click',()=>{
    let blackscreen = document.getElementById("blackscreen");
    let order_archive = document.getElementById("order-archive");
    blackscreen.style.display = "none";
    order_archive.style.display = "none";
});
new_order_archive.addEventListener('click', ()=>{
    let blackscreen = document.getElementById("blackscreen");
    let order_archive = document.getElementById("order-archive");
    blackscreen.style.display = "block";
    order_archive.style.display = "grid";  
});

close_order_groupfoto.addEventListener('click',()=>{
    let blackscreen = document.getElementById("blackscreen");
    let order_archive = document.getElementById("order-groupfoto");
    blackscreen.style.display = "none";
    order_archive.style.display = "none";
});
new_order_groupfoto.addEventListener('click', ()=>{
    let blackscreen = document.getElementById("blackscreen");
    let order_archive = document.getElementById("order-groupfoto");
    blackscreen.style.display = "block";
    order_archive.style.display = "grid";  
});


// document.addEventListener('click', function(event){
//     let div_foto = document.getElementById("foto")
//     console.log(div_foto.offsetTop + ' ' + div_foto.offsetLeft)
//     console.log(event.clientY + ' ' + event.clientX)
//     console.log((event.clientX - div_foto.offsetLeft) + ' ' + (event.clientY - div_foto.offsetTop))
// });
