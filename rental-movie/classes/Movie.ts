class Movie {
    public static readonly CHILDREN = 2;
    public static readonly REGULAR = 0;
    public static readonly NEW_RELEASE = 1;

    private _title: string;
    private _priceCode: number;

    public constructor( title: string, priceCode: number ) {
        this._title = title;
        this._priceCode = priceCode;
    }

    public getPriceCode(): number {
        return this._priceCode;
    }

    public setPriceCode( arg: number ): void {
        this._priceCode = arg;
    }

    public getTitle(): string {
        return this._title;
    }
}

export default Movie;
