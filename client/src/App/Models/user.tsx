export interface User {
    _id: string;
    username: string;
    password: string;
    localAccount?: boolean;
    accounts?: any,
    secret?: string;
}
