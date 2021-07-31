{
  name: 'Auto update plugins from psqq/anything-plugins',
  run() {
    cordovaFetch('https://api.github.com/repos/psqq/anything-plugins/contents/plugins')
      .then((res) => {
        return res.json();
      })
      .then(async (files) => {
        let promises = [];
        for(let file of files) {
          promises.push(a.download_plugin(file.download_url));
        }
        await Promise.all(promises);
        update_list_of_plugins();
      });
  }
}
