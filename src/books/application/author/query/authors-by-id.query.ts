export class AuthorsByIdQuery {
    constructor(private _ids: string[]) {
    }

    get ids(): string[] {
        return this._ids;
    }
}