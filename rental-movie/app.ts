import Movie from './classes/Movie';
import Rental from './classes/Rental';
import Customer from './classes/Customer';

const ironMan: Movie = new Movie( 'Iron Man (2008)', Movie.REGULAR );
const hulk: Movie = new Movie( 'The Incredible Hulk (2008)', Movie.REGULAR );
const thor: Movie = new Movie( 'Thor (2011)', Movie.CHILDREN );
const antMan: Movie = new Movie( 'Ant-Man and the Wasp (2018)', Movie.NEW_RELEASE );

const rental1: Rental = new Rental( ironMan, 7 );
const rental2: Rental = new Rental( hulk, 5 );
const rental3: Rental = new Rental( thor, 5 );
const rental4: Rental = new Rental( antMan, 5 );

const customer = new Customer( 'customer' );

customer.addRental( rental1 );
customer.addRental( rental2 );
customer.addRental( rental3 );
customer.addRental( rental4 );

console.log( customer.statement() );
