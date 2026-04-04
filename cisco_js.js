let movies = [
];


while (true){
    let movie_input = {
        movie_name: prompt("Movie name: "),
        movie_rating: Number(prompt("Movie rating: ")),
    }
    movies.push(movie_input);

    if (movie_input.movie_name === null || movie_input.movie_rating === null) {
        console.log("Movies with Ratings Above 7");
        movies.forEach(element => {
        if (element.movie_rating > 7){
            console.log(element.movie_name + ": " + element.movie_rating); 
        }
        });

        console.log("Movies with Ratings below 7");
        movies.forEach(element => {
        if (element.movie_rating < 7){
            console.log(element.movie_name + ": " + element.movie_rating); 
        }
        });

        return;
    }
}
