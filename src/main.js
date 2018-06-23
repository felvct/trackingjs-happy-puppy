window.onload = function() {
  const tracker = new tracking.ObjectTracker('face');
  const dogSelector = document.getElementById('dog');

  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);

  tracking.track('#video', tracker, { camera: true });

  tracker.on('track', function(event) {

    if (!event.data.length && dogSelector.classList.contains('happy')) {
      dogSelector.classList.remove('happy');
    }

    event.data.forEach(function(rect) {
      if (!dogSelector.classList.contains('happy')) {
        dogSelector.classList.add('happy');
      }
    });
  });
};
