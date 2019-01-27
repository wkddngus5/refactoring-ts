import Price, { RegularPrice, ChildrenPrice, NewReleasePrice } from "./Price";

class Movie {
    public static readonly CHILDREN = 2;
    public static readonly REGULAR = 0;
    public static readonly NEW_RELEASE = 1;

    private _title: string;
    private _price: Price;

    public constructor( title: string, priceCode: number ) {
        this._title = title;
        this.setPriceCode( priceCode );
    }

    public getPriceCode(): number {
        return this._price.getPriceCode();
    }

    public setPriceCode( arg: number ): void {
        switch( arg ) {
            case Movie.REGULAR:
                this._price = new RegularPrice();
                break;
            case Movie.CHILDREN:
                this._price = new ChildrenPrice();
                break;
            case Movie.NEW_RELEASE:
                this._price = new NewReleasePrice();
                break;
        }
    }

    public getTitle(): string {
        return this._title;
    }

    public getCharge( daysRented:number ): number {
        return this._price.getCharge( daysRented );
    }

    public getFrequentRenterPoints( dayRented:number ): number {
        return this._price.getFrequentRentaerPoints( dayRented );
    }
}

export default Movie;
