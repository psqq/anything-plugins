{
  name: 'Auto update plugins from psqq/anything-plugins',
  run() {
    cordovaFetch('https://api.github.com/repos/psqq/anything-plugins/contents/plugins')
      .then((res) => {
        return res.json();
      })
      .then(async (files) => {
        a.plugins = [];
        let promises = [];
        for(let file of files) {
          promises.push(a.download_plugin(file.download_url));
        }
        await Promise.all(promises);
        for(let plugin of a.plugins) 
        update_list_of_plugins();
      });
  }
}
