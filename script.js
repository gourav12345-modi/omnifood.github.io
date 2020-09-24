//HAMBERGER 

let a=document.getElementsByClassName('main-nav');
let burger=document.getElementsByClassName('burger');
let nav=document.getElementsByTagName('nav');
burger[0].addEventListener('click',function(){
    // console.log('clicked')
    a[0].classList.toggle('dn');
    nav[0].classList.toggle('open');
    // document.getElementsByTagName('body')[0].classList.toggle('pf');
});



window.addEventListener('scroll',function(){
  var header=document.querySelector('nav .flex-row');
  header.classList.toggle('sticky',window.scrollY>0);
})

// for navigation 
function scrol(target,duration){
  //  for ham 
   if(document.querySelector('nav').classList.contains('open'))
   {
    a[0].classList.toggle('dn');
    nav[0].classList.toggle('open');
   }
  var logo=document.querySelector('nav .logo').getBoundingClientRect().top;
  navHeight=document.querySelector('nav .flex-row').getBoundingClientRect().height;
  var target=document.querySelector(target);
  var targetposition=target.getBoundingClientRect().top;
  var staerposition=window.pageYOffset;
  var distance=targetposition-navHeight+logo+2;
  // console.log('targetposition is'+targetposition+' and '+staerposition+" "+distance );
  var starttime=null;
function animation(currentTime){
 if(starttime==null)starttime=currentTime;
 var timeElasped=currentTime-starttime;
 var run=ease(timeElasped,staerposition,distance,duration);
 window.scrollTo(0,run);
 if(timeElasped<duration) requestAnimationFrame(animation);
}
function ease(t,b,c,d){
 t/=d/2;
 if(t<1)return c/2*t*t+b;
 t--;
 return -c/2*(t*(t-2)-1)+b;
}
requestAnimationFrame(animation);

}

// ANIMATION
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.section-feature .flex-coloumn');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.2;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
      // console.log('screenis' +scree +""+ "image"+imgpositio);
        imag.classList.remove('hero-text-box-animation');
         }
   else  if(imgposition<screem){ 
    imag.classList.add('hero-text-box-animation');
     }
   else  if(imgposition>screem){ 
    imag.classList.remove('hero-text-box-animation');
     }
  
   
}

);
// omni app
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.omnifood-app');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
        imag.style.transform='rotateY(90deg)';
         }
   else  if(imgposition<screem){ 
    imag.style.transform='rotateY(0)';
     }
   else  if(imgposition>screem){ 
    imag.style.transform='rotateY(90deg)';
     }
}

)
// omni app last
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.last');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
        imag.style.transform='translateX(200vw)';
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0)';
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(200vw)';
     }
}

)
//1 price
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.plans .plan-box:nth-child(1)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
        imag.style.transform='translateX(-200vw)';
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0)';
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(-200vw)';
     }
}

)
// 2 app last
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.plans .plan-box:nth-child(2)');
    var imag=document.querySelector('.plans .plan-box:nth-child(2)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
        imag.style.transform='translateY(50px)';
        imag.style.opacity='0';
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateY(0)';
    imag.style.opacity='1';
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateY(50px)';
    imag.style.opacity='0';
     }
}

)
// omni app last
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.plans .plan-box:nth-child(3)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
        imag.style.transform='translateX(200vw)';
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0)';
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(200vw)';
     }
}

)
// ANIMATION
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.section-feature .box-parent');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
        imag.style.opacity=0;
         }
   else  if(imgposition<screem){ 
    imag.style.opacity=1;
     }
   else  if(imgposition>screem){ 
    imag.style.opacity=0;
     }
}

)
// form
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.section-form');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
    imag.style.transform='translateX(100vw)';
    imag.style.opacity=0;
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0vw)';
    imag.style.opacity=1;
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(100vw)';
    imag.style.opacity=0;
     }
}

)
// box animatiomnm-1
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.box-parent .box:nth-child(1)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
    imag.style.transform='translateX(-100vw)';
    imag.style.opacity='0';
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0vw)';
    imag.style.opacity='1';
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(-100vw)';
    imag.style.opacity='0';
     }
}

)
// form
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.box-parent .box:nth-child(2)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
    imag.style.transform='translateX(-100vw)';
    imag.style.opacity=0;
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0vw)';
    imag.style.opacity=1;
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(-100vw)';
    imag.style.opacity=0;
     }
}

)
// form
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.box-parent .box:nth-child(3)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
    imag.style.transform='translateX(100vw)';
    imag.style.opacity=0;
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0vw)';
    imag.style.opacity=1;
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(100vw)';
    imag.style.opacity=0;
     }
}

)
// form
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.box-parent  .box:nth-child(4)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
    imag.style.transform='translateX(100vw)';
    imag.style.opacity=0;
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0vw)';
    imag.style.opacity=1;
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(100vw)';
    imag.style.opacity=0;
     }
}

)
// cities-1
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.cities  .box:nth-child(1)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
    imag.style.transform='translateX(200vw)';
    imag.style.opacity=0;
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0vw)';
    imag.style.opacity=1;
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(200vw)';
    imag.style.opacity=0;
     }
}

)
// cities-2
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.cities  .box:nth-child(2)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
    imag.style.transform='translateX(200vw)';
    imag.style.opacity=0;
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0vw)';
    imag.style.opacity=1;
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(200vw)';
    imag.style.opacity=0;
     }
}

)
// cities-3
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.cities  .box:nth-child(3)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
    imag.style.transform='translateX(-200vw)';
    imag.style.opacity=0;
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0vw)';
    imag.style.opacity=1;
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(-200vw)';
    imag.style.opacity=0;
     }
}

)
// cities-4
window.addEventListener('scroll',function(){
    var imag=document.querySelector('.cities  .box:nth-child(4)');
    var imgposition=imag.getBoundingClientRect().top;
    var imgpositio=imag.getBoundingClientRect().top+imag.getBoundingClientRect().height;
    var screem=window.innerHeight/1.5;
    var scree=window.innerHeight/8;
  if(imgpositio<scree){ 
    imag.style.transform='translateX(-200vw)';
    imag.style.opacity=0;
         }
   else  if(imgposition<screem){ 
    imag.style.transform='translateX(0vw)';
    imag.style.opacity=1;
     }
   else  if(imgposition>screem){ 
    imag.style.transform='translateX(-200vw)';
    imag.style.opacity=0;
     }
}

)
