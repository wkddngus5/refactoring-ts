import Rental from './Rental';
import Movie from './Movie';

class Customer {
    private _name: string;
    private _rentals: Array<Rental> = [];

    public constructor( name: string ) {
        this._name = name;
    }

    public addRental( arg: Rental ): void {
        this._rentals.push( arg );
    }

    public getName(): string {
        return this._name;
    }

    public statement(): string {
        let totalAmount: number = 0;
        let frequentRenterPoints: number = 0;
        let result: string = 'Rental Record for ' + this.getName() + '\n';

        this._rentals.forEach( each => {
            let thisAmount: number = 0;
            
            switch( each.getMovie().getPriceCode() ) {
                case Movie.REGULAR:
                    thisAmount += 2;
                    if( each.getDaysRented() > 2 ) {
                        thisAmount += (each.getDaysRented() - 2 ) * 1.5;
                    }
                    break;
                case Movie.NEW_RELEASE:
                    thisAmount += each.getDaysRented() * 3;
                    break;
                case Movie.CHILDREN:
                    thisAmount += 1.5;
                    if( each.getDaysRented() > 3 ) {
                        thisAmount += ( each.getDaysRented() - 3 ) * 1.5;
                    }
                    break;
            }

            frequentRenterPoints++;
            if( each.getMovie().getPriceCode() === Movie.NEW_RELEASE && each.getDaysRented() > 1 ) frequentRenterPoints++;
            result += '\t' + each.getMovie().getTitle() + '\t' + thisAmount + '\n';
            totalAmount += thisAmount;
        });

        result += 'Amount owed is ' + totalAmount + '\n';
        result += 'You earned ' + frequentRenterPoints + 'frequent renter points';
        return result;
    }
}

export default Customer;
