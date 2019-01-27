import Movie from "./Movie";

abstract class Price {
    public abstract getPriceCode(): number;
    public abstract getCharge( daysRented: number ): number;
    public getFrequentRentaerPoints( daysTented: number ): number {
        return 1;
    }
}

export class ChildrenPrice extends Price {
    getPriceCode(): number {
        return Movie.CHILDREN;
    }

    getCharge( daysRented: number ): number {
        let result = 1.5;
        if( daysRented > 3 ) {
            result += ( daysRented - 3 ) * 1.5;
        }
        return result;
    }
}

export class NewReleasePrice extends Price {
    getPriceCode(): number {
        return Movie.NEW_RELEASE;
    }

    getCharge( daysRented: number ): number {
        return daysRented * 3;
    }

    getFrequentRentaerPoints( daysRented: number ): number {
        return ( daysRented > 1) ? 2: 1;
    }
}

export class RegularPrice extends Price {
    getPriceCode(): number {
        return Movie.REGULAR;
    }

    getCharge( daysRented: number ): number {
        let result = 2;
        if( daysRented > 2) {
            result += ( daysRented - 2 ) * 1.5;
        }
        return result;
    }
}

export default Price;