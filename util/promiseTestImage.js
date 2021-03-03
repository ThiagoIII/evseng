export default function testImage(url, fallbackUrl) {
    return new Promise((resolve, reject) => {
        const imgElement = new Image()
        imgElement.src = url

        imgElement.addEventListener('load', () => {
            resolve(url)
        })
        imgElement.addEventListener('error', () => {
            reject(fallbackUrl)
        })
    })
}
