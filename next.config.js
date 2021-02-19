module.exports = {
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        })
        return config
    },
    env: {
        wa: 'https://wa.me/44988345099',
        mail: 'mailto:evsengenharia@outlook.com'
    }
}
