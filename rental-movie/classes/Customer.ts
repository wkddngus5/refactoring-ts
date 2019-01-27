import Rental from './Rental';

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
        let result: string = 'Rental Record for ' + this.getName() + '\n';

        this._rentals.forEach( each => {
            result += '\t' + each.getMovie().getTitle() + '\t' + this.amountFor( each ) + '\n';
        });

        result += 'Amount owed is ' + this.getTotalCharge() + '\n';
        result += 'You earned ' + this.getTotalFrequentRenterPoints(); + 'frequent renter points';
        return result;
    }

    public htmlStatement(): string {
        let result: string = '<h1>Rentals for <em>' + this.getName() + '</em></h1><p>\n';
        
        this._rentals.forEach( each => {
            result += each.getMovie().getTitle() + ': ' + each.getCharge() + '<br>\n';
        });

        result += '<p>You owe <em>' + this.getTotalCharge() + '</em><p>\n';
        result += 'On this rental you earned <em>' + this.getTotalFrequentRenterPoints() + '</em> frequent renter points<p>';
        return result;
    }

    private amountFor( aRental: Rental ): number {
        return aRental.getCharge(); 
    }

    private getTotalCharge(): number {
        let result: number = 0;
        this._rentals.forEach( each => {
            result += each.getCharge();
        });
        return result;
    }

    private getTotalFrequentRenterPoints(): number {
        let result: number = 0;
        this._rentals.forEach( each => {
            result += each.getFrequentRenterPoints();
        });
        return result;
    }
}

export default Customer;
