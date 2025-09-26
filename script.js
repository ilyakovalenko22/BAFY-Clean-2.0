
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    if(a.getAttribute('href').startsWith('#')){
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    }
  });
});
function hookForm(id){
  const f=document.getElementById(id);
  if(!f) return;
  f.addEventListener('submit', e=>{
    e.preventDefault();
    const b=f.querySelector('button');
    b.disabled=true; b.textContent='Заявка отправлена ✓';
  });
}
['lead-home','lead-services','lead-tenders','lead-contacts','lead-footer'].forEach(hookForm);
