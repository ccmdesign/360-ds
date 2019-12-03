document.querySelectorAll('.top-bar__menu-trigger, .off-canvas-menu__trigger').forEach(function(el) {
  el.onclick = function(){
    const offCanvasMenu = document.querySelector('.off-canvas-menu');
    offCanvasMenu.classList.toggle('off-canvas-menu--expanded');
    if (offCanvasMenu.hasAttribute('aria-hidden')) {
      offCanvasMenu.removeAttribute('aria-hidden')
    } else {
      offCanvasMenu.setAttribute('aria-hidden', '')
    }
  };
});