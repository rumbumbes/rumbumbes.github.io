var bar = new ProgressBar.Circle(progressbar_2, {
  color: '#333333',
 
  strokeWidth: 8,
  trailWidth: 7,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleProgressbar_2: false
  },
  from: { color: '#aaa', width: 3 },
  to: { color: '#00ccff', width: 8 },
 
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value +'%');
    }

  }
});
bar.text.style.fontFamily = '"Lato"';
bar.text.style.fontSize = '30px';
bar.text.style.fontWeight = '700';

bar.animate(0.75);  