({
    id: 'anything-plugins-updater',
    author: 'psqq',
    tags: ['psqq-plugins-group'],
    name: 'Auto update plugins from psqq/anything-plugins',
    run() {
        cordovaFetch('https://api.github.com/repos/psqq/anything-plugins/contents/plugins')
            .then((res) => {
                return res.json();
            })
            .then(async (files) => {
                let plugins = [];
                for (let file of files) {
                    plugins.push(a.just_download_plugin(file.download_url));
                }
                await Promise.all(plugins);
                console.log(plugins);
                for (let p of plugins) {
                    var i = a.plugins.findIndex(p => p.author == 'psqq' && p.tags.includes('psqq-plugins-group') && p.id === p.id);
                    if (i < 0) i = a.add_plugin(p);
                    else a.plugins[i] = p;
                    p.___meta.saved = true;
                }
                a.save_plugins();
                a.ui.render_list_of_plugins();
            });
    }
})
