const disabledKeys = ["c", "C", "x", "J", "u", "I"]; // keys that will be disabled
const showAlert = e => {
e.preventDefault(); // preventing its default behaviour
return alert("Sorry, you can't view or copy source codes this way!");
}
document.addEventListener("contextmenu", e => {
showAlert(e); // calling showAlert() function on mouse right click
});
document.addEventListener("keydown", e => {
// calling showAlert() function, if the pressed key matched to disabled keys
if((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
showAlert(e);
}
});


let li = document.querySelectorAll('.style_block ul li');
let show = document.querySelectorAll('.style_block ul li .show');
let color = document.querySelector('#color');
let bgImg = document.querySelector('#image');
let block_tag = document.querySelector('.block_tag');
let tag_btn = document.querySelector('.tag_btn')
let fontFamily = document.querySelector('#fontFamily');
let box_shadow = document.querySelectorAll('.box-shadow input')
let font_weight = document.querySelector('#fontWeight')
let textTransform = document.querySelector('#textTransform')
let border = document.querySelector('#border')
let paddings = document.querySelectorAll('.paddings input')
let widthAndHeight = document.querySelectorAll('.widthAndHeight input')
let radius = document.querySelector('#radius')
li.forEach((item, index) => {
  item.setAttribute('data-id', index);
  show[index].setAttribute('data-id', index);

  item.addEventListener('click', () => {
    show.forEach((items) => {
      if (items.classList.contains('show_block')) {
        items.classList.remove('show_block');
      }
    });
    if (item.hasAttribute('data-id') === show[index].hasAttribute('data-id')) {
      const id = item.getAttribute('data-id');
     

      show[id].classList.toggle('show_block');
    }
  });
});



color.addEventListener('input',() => {
    block_tag.style.backgroundColor = color.value
});

document.querySelector('#setBg').addEventListener('click', () =>{
    block_tag.style.background = `url(${bgImg.value})`
    block_tag.style.backgroundSize = `100% 100%`
    block_tag.style.backgroundRepeat = `no-repeat`
})

radius.addEventListener('input',() => {
    block_tag.style.borderRadius = `${radius.value}%` 
    resRaduis(radius.value)
    
    
});



tag_btn.style.outline = "none"
document.querySelector('#fontSize').addEventListener('input', () => {
    tag_btn.style.fontSize = `${document.querySelector('#fontSize').value}px`
})


fontFamily.addEventListener('change', (e) =>{
    tag_btn.style.fontFamily = e.target.value
})

box_shadow.forEach(shadow => {
    shadow.addEventListener('input', (e) =>{
      tag_btn.style.boxShadow = `${box_shadow[0].value}px 
       ${box_shadow[1].value}px 
       ${box_shadow[2].value}px 
       ${box_shadow[3].value}px
       ${box_shadow[4].value}
       `
    })
})

font_weight.addEventListener('change', (e) =>{
    tag_btn.style.fontWeight = e.target.value
  
})
textTransform.addEventListener('change', (e) =>{
    tag_btn.style.textTransform = e.target.value
    
})


border.addEventListener('change', (e) =>{
    tag_btn.style.border = `1px ${e.target.value} black`
})

document.querySelector('#letter').addEventListener('input', () =>{
    tag_btn.style.letterSpacing = document.querySelector('#letter').value+'px'
})
document.querySelector('#colorElem').addEventListener('input', () =>{
    tag_btn.style.color = document.querySelector('#colorElem').value
    
})
document.querySelector('#bgColorElem').addEventListener('input', () =>{
    tag_btn.style.backgroundColor = document.querySelector('#bgColorElem').value
    
})
document.querySelector('#raduisElem').addEventListener('input', () =>{
    tag_btn.style.borderRadius = document.querySelector('#raduisElem').value+"px"
    
})


paddings.forEach(padding => {
    padding.addEventListener('input', () =>{
        tag_btn.style.padding = `${paddings[0].value}px ${paddings[1].value}px`
        
    })
})
widthAndHeight.forEach(sizeBlock => {
    sizeBlock.addEventListener('input', () =>{
        tag_btn.style.width = `${widthAndHeight[0].value}%`
        tag_btn.style.height = `${widthAndHeight[1].value}%`
       
    })
})




function getValue() {
    let box = document.createElement('div')
    box.innerHTML = `.box{</br>
        width:600px;</br>
        height:600px;</br>
        border-radius:${25}%;
             </br>
        </br>}`


    document.querySelector('.block_code').appendChild(box)
}

getValue()