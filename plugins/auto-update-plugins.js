{
  name: 'Auto update plugins from psqq/anything-plugins',
  run() {
    cordovaFetch('https://api.github.com/repos/psqq/anything-plugins/contents/plugins')
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        document.body.innerHTML = `<pre>${JSON.stringify(body, null, 2)}</pre>`;
      });
  }
}
