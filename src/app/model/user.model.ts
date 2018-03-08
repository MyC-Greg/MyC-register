export class User {
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public interest: string,
                public country?: string,
                public city?: string
            ) {
    }
}
