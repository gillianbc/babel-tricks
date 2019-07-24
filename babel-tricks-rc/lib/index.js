const aprom = word => {
    return Promise.resolve().then(function () {
        return console.log('I promise to say ' + word);
    }).then(function () {
        console.log('Done');
    });
};
//# sourceMappingURL=index.js.map