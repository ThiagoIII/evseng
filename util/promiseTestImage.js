export default async function checkSupportForWebP() {
    return new Promise((resolve, reject) => {
        const imgElement = new Image()

        imgElement.src = '/wires_webpSmall30.webp'

        imgElement.addEventListener('load', () => {
            resolve('true')
        })

        imgElement.addEventListener('error', () => {
            reject('false')
        })
    })
}
