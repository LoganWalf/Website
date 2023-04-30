let GalleryItemImageID = document.getElementById("GalleryItemImage");
let GalleryFigureCaptionID = document.getElementById("GalleryItemFigureCaption");

let GalleryForwardButton = document.getElementById("GalleryForward");
let GalleryReverseButton = document.getElementById("GalleryReverse");


let GalleryItemTemplate={
    image:"",
    alt:"",
    caption:""
}


let galleryItems = [];

function GalleryItemFactory(image, alt, caption){
    GalleryItemTemplate={image, alt, caption};
    galleryItems.push(GalleryItemTemplate);
}


GalleryItemFactory("https://media-cdn.tripadvisor.com/media/photo-s/1a/92/8c/15/great-meal-and-cocktails.jpg", "Steak", "A delicious steak with potatos and shrimp");

GalleryItemFactory("https://www.texasroadhouse.com/sites/default/files/styles/3x2_image/public/2021-09/chicken-critters-and-ribs.jpg?itok=ncp4w6xo", "Ribs", "Some juicy ribs with chicken with two sides");

GalleryItemFactory("https://i.redd.it/8gnt5b4m6j751.jpg", "Burger", "A juicy melted cheese burger with wedge fries");

GalleryItemFactory("https://www.texasroadhouse.com/sites/default/files/styles/3x2_image/public/2021-09/steak-fries.jpg?itok=h5CdmOke", "Fries", "Some crispy fries");


console.log(galleryItems);

let CurrentGalleryItem = 0;

console.log(CurrentGalleryItem);



function NextGalleryItem(){
    if(CurrentGalleryItem<3){
        CurrentGalleryItem++;
        console.log("Incremented " + CurrentGalleryItem);
    }    else{
        CurrentGalleryItem = 0;
        console.log("Cannot Increment " + CurrentGalleryItem);
    }
    GallerySlideshow(galleryItems[CurrentGalleryItem]);
   
};
function PreviousGalleryItem(){
    if(CurrentGalleryItem > 0){
        CurrentGalleryItem--;
        console.log("Decremented " + CurrentGalleryItem);
        
    }
        else{
            CurrentGalleryItem = 3;
            console.log("Cannot Decrement " + CurrentGalleryItem);
        }
        GallerySlideshow(galleryItems[CurrentGalleryItem])
};

GalleryForwardButton.addEventListener("click", NextGalleryItem);
GalleryReverseButton.addEventListener("click", PreviousGalleryItem);


function GallerySlideshow(CurrentGalleryItemInfo){
    console.log(CurrentGalleryItemInfo);
    GalleryItemImageID.src= CurrentGalleryItemInfo.image;
    GalleryItemImageID.alt=CurrentGalleryItemInfo.alt;
    GalleryFigureCaptionID.innerHTML = CurrentGalleryItemInfo.caption;
}


