const primColours = ['#44BF94', '#F16965', '#1589BA', '#9C56C6'];
const secdColours = ['#A3E9CD','#FF948C','#96D1E4'];

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: false,
    controlArrows: false,
    navigation: true,
	navigationPosition: 'left',
	navigationTooltips: ['When Your Getting Started', 'When Times Are Tough', 'When Its Time To Relax', 'Gallery'],
	showActiveTooltip: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    sectionsColor: ['#EDFBF7', '#FEF6F6', '#F2FCFF', '#FBF6FE'],
   


    afterRender: function(){
        // menuAnimation() 
        sectionOneAnimation() 
           
	},

    afterLoad: function(origin, destination, direction, trigger){
        setHeaderColours(destination.index) //changing header elements colours based on section
        setHomeContentColours(destination.index) //changing heading colours based on section
        setSubHeaderColours(destination.index) // changing subheading colours on content pages 
        setProgressColour(destination.index)
        sectionTwoThreeAnimations(destination.item)
    
	},


    onSlideLeave: function( section, origin, destination, direction, trigger){
        if (section.index == 0 && direction == 'right')
        {        
            animateContentSlides(destination.item)
           
        }
        else if(section.index == 1 && direction == 'right'){
            animateContentSlides(destination.item)
           
        }
        else if (section.index == 2 && direction == 'right'){
            animateContentSlides(destination.item)     
        }
	},


});


//--------------------------Menu Animation -----------------------//
function menuAnimation(){
    const tl = new TimelineLite({paused: true});

    tl.fromTo('.nav-open',0.3,{ opacity:0,x:-50,ease: "Power4.easeOut"},
    {opacity:1, x:0, onComplete:function(){
            navOpen.style.pointerEvents = 'auto';
        }
    });
    
    navButton.addEventListener('click',()=>{
        toggleTween(tl)
    })
    
    toggleTween(tween)
}

//Reverse animation 
function toggleTween(tween){
    tween.reversed()? tween.play() : tween.reverse();
}

//-------------------------------------- Home Animations ----------------------- // 
function sectionOneAnimation(){    
    const tl = new TimelineMax()

    tl.from('.svg-gs',{duration: 2, y: 50, opacity: 0, scale:1.1, ease:'sine.out'})
        .from('.header-gs-h',{duration: 1, y: 50, opacity: 0, ease:'power2.inOut'})
        .from('.btn-gs',{duration: 1, y: 50, opacity: 0, ease:'bounce.out'})
}

//-------------------------------------- Home Animations ----------------------- // 

function sectionTwoThreeAnimations(slide){
    let animation = slide.querySelectorAll('.h-svg')
    let header = slide.querySelectorAll('.h-header')
    let button = slide.querySelectorAll('.h-btn')
    
    const tl = new TimelineMax()

    tl.from(animation,{duration: 2, y: 50, opacity: 0, scale:1.1, ease:'sine.out'})
        .from(header,{duration: 1, y: 50, opacity: 0, ease:'power2.inOut'})
        .from(button,{duration: 1, y: 50, opacity: 0, ease:'bounce.out'})

}

//-------------------------------------- Slide Animations ----------------------- // 
// fnc to animate slides 
function animateContentSlides(slide){
    let slideHeading = slide.querySelectorAll('.c-header')
    let slideSubHeader = slide.querySelectorAll('.c-subheader')
    let slideTopic = slide.querySelectorAll('.c-topic')
    let slideTopic2 = slide.querySelectorAll('.c-topic2')
    let slideImg = slide.querySelectorAll('.c-img')
    let slideButton = slide.querySelectorAll('.slider')

    const tl = new TimelineMax({delay: 0.1})
    
    tl.from(slideImg,{duration: 2, y: 50, opacity: 0, ease:'power2.inOut'})
        .from(slideHeading, {duration: 1, x: 100, opacity: 0, ease: 'power2.inOut'},'-=0.8')   
        .from(slideSubHeader, {duration: 1, x: 100, opacity: 0,ease: 'power2.inOut'}, '-=0.8')  
        .from(slideTopic, {duration: 1, x: 100, opacity: 0,  ease: 'power2.inOut'},'-=0.8')
        .from(slideTopic2, {duration: 1, x: 100, opacity: 0, ease: 'power2.inOut'},'-=0.8') 
        .from(slideButton,{duration: 2, y: 50, opacity: 0, ease:'bounce.out'}) //button anm

}
//fnc to run progress bar
function startProgressBar50Animation(slide) {  
    let progressBar = slide.querySelector('.progress-bar50');  
    progressBar.classList.add('isProgressing50');  
}

function startProgressBar100Animation(slide) {  
    let progressBar = slide.querySelector('.progress-bar100');  
    progressBar.classList.add('isProgressing50');  
}


//-------------------------------------- Functions to set colors based on section index----------------------- // 

function setHeaderColours(sectionIndex) {
    document.querySelectorAll('.header i, .moneymanage-title, .info.icon').forEach(element => {
    element.style.color = primColours[sectionIndex];
    });
}

function setHomeContentColours(sectionIndex){
    document.querySelectorAll('.header-gs, .header-tt, .header-r', '.header-gal').forEach(element => {
    element.style.color = primColours[sectionIndex];
    }); 
}

function setSubHeaderColours(sectionIndex){
    document.querySelectorAll('.subheader-gs, .subheader-tt, .subheader-r').forEach(element => {
    element.style.color = secdColours[sectionIndex];
    }); 
}

function setProgressColour(sectionIndex){
    document.querySelectorAll('.progress-bar50, .progress-bar100').forEach(element =>{
    element.style.backgroundColor = primColours[sectionIndex];
    })
}



//-------------------------------------- Navigation  ----------------------- // 
// Start Phase Button - Next Slide
let nextSlideBtn = document.querySelectorAll('.start-phase-button');
nextSlideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideRight();
    })
})

let nextTopicBtn = document.querySelectorAll('.next-topic-btn');
nextTopicBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideRight();
    })
})

let backBtn = document.querySelectorAll('.back-btn');
backBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideLeft();
    })
})