export default function testImage(url, fallbackUrl, el) {
    return new Promise((resolve, reject) => {
        const imgElement = new Image()
        imgElement.src = url

        imgElement.addEventListener('load', () => {
            console.log('inside evenet lisnte load', el)
            resolve({ url, el })
        })
        imgElement.addEventListener('error', () => {
            reject({ fallbackUrl, el })
        })
    })
}
