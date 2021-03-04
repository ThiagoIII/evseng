export default function testImage(url, fallbackUrl, el) {
    return new Promise((resolve, reject) => {
        const imgElement = new Image()
        imgElement.src = url
        console.log('outside the listeners, all params:', url, fallbackUrl, el)
        imgElement.addEventListener('load', () => {
            /* console.log('inside evenet listener load el', el)
            console.log('inside evenet listener load url', url)
            console.log('inside evenet listener load fallback', fallbackUrl) */

            resolve({ url, el })
        })
        imgElement.addEventListener('error', () => {
            reject({ fallbackUrl, el })
        })
    })
}
