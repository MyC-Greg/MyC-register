export class Article {
    constructor(public _id: number,
                public title: string,
                public subtitle: string,
                public author: string,
                public pilar: string,
                public content: string,
                public url?: string,
            ) {
    }
}
