export default function testImage(url, fallbackUrl, el) {
    return new Promise((resolve, reject) => {
        const imgElement = new Image()
        imgElement.src = url

        imgElement.addEventListener('load', () => {
            console.log(el)
            resolve(url, el)
        })
        imgElement.addEventListener('error', () => {
            reject({ fallbackUrl, el })
        })
    })
}
