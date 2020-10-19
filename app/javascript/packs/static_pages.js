window.onload = function() {
  var buttonContainer = document.getElementById('hamburguerContainer');
  var getPanel = document.getElementById('menu');
  var getLayer = document.getElementById('layer');
  function toggleNav() {
    buttonContainer.addEventListener("click",   function() {
      var layerDelay = getLayer.style.opacity = '25%'
      getPanel.style.width = '290px'
      getPanel.style.transitionDuration = '.2s'
      layerDelay.transitionDelay = '.5s'
      layerDelay.transitionDuration = '1s'
      getLayer.style.display = 'block'
      function unToggleNav() {
        getLayer.addEventListener("click", function() {
          var applyDuration = getLayer.style.opacity = '0%'
          var applyVisivility = getLayer.style.display = 'none'
          applyDuration.transitionDuration = '.2s'
          applyVisivility.transitionDelay = '.2s'
          getPanel.style.width = '0'
          getPanel.style.transitionDuration = '.4s'
        });
      }
      unToggleNav();
    });
  }
  toggleNav();
}
