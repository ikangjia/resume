window.onload = function () {
  setFavicon();
  setTitle();
};

function setFavicon() {
  const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = './favicon.png';
  document.getElementsByTagName('head')[0].appendChild(link);
}

function setTitle() {
  document.title = '康佳的简历';
}
