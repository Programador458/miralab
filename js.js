// Small script to add animations on scroll and smooth interactions
(function(){
  // IntersectionObserver for reveal animations
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        // If you want each element to animate only once uncomment next line
        // observer.unobserve(entry.target)
      }
    })
  },{threshold:0.15})

  document.querySelectorAll('[data-animate]').forEach(el=>observer.observe(el))

  // Smooth scroll for internal links (extra safety)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href')
      if(!href || href==='#') return
      const el = document.querySelector(href)
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}) }
    })
  })

  // Small tweak: collapse navbar on link click (mobile)
  document.querySelectorAll('.navbar-collapse .nav-link').forEach(link=>{
    link.addEventListener('click', ()=>{
      const bsCollapse = document.querySelector('.navbar-collapse')
      if(bsCollapse && bsCollapse.classList.contains('show')){
        new bootstrap.Collapse(bsCollapse).hide()
      }
    })
  })

})();
