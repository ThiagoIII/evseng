const query = `query 
{
  cardCollection {
    items {
      title
      text
      svgImage {
        url
      }
      order
    }
  }
}
`

export async function fetchGraphQLDev() {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.contentful_space_id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.contentful_access_token}`
            },
            body: JSON.stringify({ query })
        }
    ).then(response => response.json())
}
export async function fetchGraphQLProd() {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/v8pcvac25a9n`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer lHPRSH-89A-HNrFKRsQGNj2KWIIRMD4hbeC5E1Hn858`
            },
            body: JSON.stringify({ query })
        }
    ).then(response => response.json())
}

/* function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.cardCollection?.items
}

export async function getAllCards(preview) {
  const entries = await fetchGraphQL() 
  return extractPostEntries(entries)
} */
