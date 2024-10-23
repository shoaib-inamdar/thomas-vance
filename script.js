const lenis = new Lenis({
  // lerp:6.3,
  // smooth:true,
  duration: 1.5,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll(".elem").forEach(elem=>{
  let image=elem.querySelector("img")
  let tl=gsap.timeline()
  let xTransform=gsap.utils.random(-100,100);
  tl
    .set(image,{
      transformOrigin:`${xTransform<0?0:'100%'}`,
    })
  .to(image,{
      scale:0,
      ease:"none",
      scrollTrigger:{
        trigger:image,
        start:"top top",
        end:"bottom top",
        scrub:true
      }
  })
  .to(elem,{
    xPercent:xTransform,
    ease:"none",
    scrollTrigger:{
      trigger:image,
      start:"top bottom",
      end:"bottom top",
      scrub:true
    }
  })
})