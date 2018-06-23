window.onload = function() {
  const video = document.getElementById('video');
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const tracker = new tracking.ObjectTracker('face');
  const dogSelector = document.getElementById('dog');

  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);

  tracking.track('#video', tracker, { camera: true });

  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (!event.data.length && dogSelector.classList.contains('happy')) {
      dogSelector.classList.remove('happy');
    }

    event.data.forEach(function(rect) {
      if (!dogSelector.classList.contains('happy')) {
        dogSelector.classList.add('happy');
      }
      context.strokeStyle = '#a64ceb';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });
  });
};
