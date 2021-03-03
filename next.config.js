module.exports = {
    async headers() {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    }
                ]
            }
        ]
    }
}
