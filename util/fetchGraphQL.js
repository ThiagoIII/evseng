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
      id
    }
  }
}
`

export async function fetchGraphQLDev() {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({ query })
        }
    ).then(response => response.json())
}

export async function fetchGraphQLProd() {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({ query })
        }
    ).then(response => response.json())
}
