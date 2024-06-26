var rect = document.querySelector(".rectangle");

rect.addEventListener("mousemove", function(details){
    var rectangleLocation = rect.getBoundingClientRect();
    var insideRectanglval = details.clientX   - rectangleLocation.left;
    
    if(insideRectanglval < rectangleLocation.width/2){
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectanglval);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        })
    }
    else{
        var blueColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRectanglval);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        })
    }
});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor : "white",
    })
})