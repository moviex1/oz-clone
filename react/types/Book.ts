export interface Book {
    id: number
    title: string
    authors: [
        {
            id: number
            firstName: string
            lastName: string
            birthDate: string
            pfpUrl: string
        },
        {
            id: number
            firstName: string
            lastName: string
            birthDate: string
            pfpUrl: string
        },
    ]
    releaseDate: string
    pages: number
    description: string
    tags: [
        {
            id: number
            name: string
        },
    ]
    photos: [
        {
            id: number
            url: string
        },
        {
            id: number
            url: string
        },
    ]
    price: string
}
