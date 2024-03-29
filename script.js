function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  const tech1 = document.getElementById('tech1');
  const ba = document.getElementById('ba');
 const b = document.getElementById('b')
 const n = document.getElementById('n')
 const close= document.getElementById('close')



  if(tech1){
    tech1.addEventListener('hover',() =>{
        ba.classList.add('active')
    })
  }
  if(b){
    b.addEventListener('click', () =>{
      n.classList.add('active')
    })
  }
  if(close){
    close.addEventListener('click', ()=>{
        n.classList.remove('active')
      })
  }
