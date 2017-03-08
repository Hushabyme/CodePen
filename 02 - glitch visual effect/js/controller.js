(function () {
  const img = document.querySelector('img'),
        data = img.getAttribute('src'),
        maxGlitch = 100,
        offset = 2000;

  function control() {
    let corrupted,
        glitch,
        p;

    corrupted = data;

    if(Math.random() > 0.7) {
      glitch = Math.round(Math.random() * maxGlitch);

      for(let i,j = 0, ref = glitch; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j ) {
        p = offset + Math.round(Math.random() * (corrupted.length - offset -1));
        corrupted = corrupted.substring(0, p) + corrupted.charAt(p + 1) + corrupted.charAt(p) + corrupted.substring(p + 2);
      }
    }

    return img.setAttribute('src', corrupted)
  }

  setInterval(control, 1000 / 30);
}());