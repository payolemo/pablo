window.onload = function() {
  var buttonContainer = document.getElementById('hamburguerContainer');
  var getPanel = document.getElementById('menu');
  var getLayer = document.getElementById('layer');
  function toggleNav() {
    buttonContainer.addEventListener("click",   function() {
      getPanel.style.width = '290px'
      getPanel.style.transitionDuration = '.2s'
      getLayer.style.transitionDelay = '.2s'
      getLayer.style.transitionDuration = '.2s'
      getLayer.style.animationDirection = 'normal'
      getLayer.style.width = '100vw'
      function unToggleNav() {
        getLayer.addEventListener("click", function() {
          getLayer.style.width = '0vw'
          getLayer.style.animationDirection = 'reverse'
          getLayer.style.transitionDuration = '.2s'
          getLayer.style.transitionDelay = '.2s'
          getPanel.style.width = '0'
          getPanel.style.transitionDuration = '.2s'
        });
      }
      unToggleNav();
    });
  }
  toggleNav();
}
