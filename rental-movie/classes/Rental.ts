import Movie from './Movie';

class Rental {
    private _movie: Movie;
    private _daysRented: number;

    public constructor( movie: Movie, daysRented: number ) {
        this._movie = movie;
        this._daysRented = daysRented;
    }

    public getDaysRented(): number {
        return this._daysRented;
    }

    public getMovie(): Movie {
        return this._movie;
    }

    public getCharge(): number {
        return this._movie.getCharge( this._daysRented );
    }
    public getFrequentRenterPoints(): number {
        return this._movie.getFrequentRenterPoints( this._daysRented );
    }
}

export default Rental;
