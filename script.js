let Detail_img=document.getElementsByClassName('ful');

function tampilkan(){
    for (var i=0;i<Detail_img.length;i+=1){
        Detail_img[i].classList.remove('hidden');
      }
}

function sembunyikan(){
    for (var i=0;i<Detail_img.length;i+=1){
        Detail_img[i].classList.add('hidden');
      }
}


console.log(klik1);

{/* <img src="./assets/image/icon-menu/full-screen.svg" width="50%" alt="">
<img src="./assets/image/icon-menu/zoom.svg" width="50%" alt="">
<img src="./assets/image/icon-menu/share.svg" width="50%" alt="">
<img src="./assets/image/icon-menu/close.svg" width="50%" alt=""> */}