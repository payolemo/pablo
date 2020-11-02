window.onload = function() {
  var buttonContainer = document.getElementById('hamburguerContainer');
  var getPanel = document.getElementById('menu');
  var getLayer = document.getElementById('layer');

  function toggleNav() {
    buttonContainer.addEventListener("click", function() {
      getLayer.style.opacity = '28%'
      getLayer.style.transitionDuration = '.5s'
      getLayer.style.display = 'block'
      getPanel.style.width = '290px'
      getPanel.style.transitionDuration = '.5s'
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
//NOW APPLY THIS TO ALL NAVICO ID'S
  var eventTrigger = document.getElementsByClassName('nav-svg');
  var eventTarget = document.getElementById('infoContainer');

  for (var i = 0; i <= eventTrigger.length; i++) {
    var elements = eventTrigger[i]
    elements.addEventListener('click', function() {
      eventTarget.style.width = '0%'
      eventTarget.style.transitionDuration = '1s'
      eventTarget.style.minWidth = '0%'
      setTimeout(function minWidthDecider() {
        eventTarget.style.width = '51%'
        eventTarget.style.transitionDuration = '1s'
        var maxRes = window.matchMedia('(max-width: 650px)');
        if(maxRes.matches) {
          eventTarget.style.minWidth = '88%'
        }
        else {
          eventTarget.style.minWidth = '0%'
        }
        maxRes.addListener(minWidthDecider);
      },1500)
    });
  }
  //NOW APPLY THIS TO ALL NAVICO ID'S
}

