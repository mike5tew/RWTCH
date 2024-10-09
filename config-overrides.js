module.exports = function override(config, env) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, { 
        "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "http": require.resolve("stream-http") ,
        "timers": require.resolve("timers-browserify"),
        fs: require.resolve("fs"),
        net: false
    });
    config.resolve.fallback = fallback;
    return config;
}
