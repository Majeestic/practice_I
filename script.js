// let numberOfFilms;
// let howMuchFilmsRememver;

// function start() {

//     numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms  == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//       numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
//     }

//     howMuchFilmsRememver = prompt('Сколько фильмов Вы можете назвать?', '');
//     while (howMuchFilmsRememver == '' || howMuchFilmsRememver == null || isNaN(howMuchFilmsRememver)) {
//       howMuchFilmsRememver = prompt('Сколько фильмов Вы можете назвать?', '');
//     }
// }
// start();

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('произошла ошибка');
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if(genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели вовсе')
        i--;
      }else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    }); 
  },
  start: function () {
    let howMuchFilmsRememver = 0;
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    }

    howMuchFilmsRememver = prompt('Сколько фильмов Вы можете назвать?', '');
    while (
      howMuchFilmsRememver == '' ||
      howMuchFilmsRememver == null ||
      isNaN(howMuchFilmsRememver)
    ) {
      howMuchFilmsRememver = prompt('Сколько фильмов Вы можете назвать?', '');
    }
  },
  showMyDB: function (privat) {
    if (privat == false) {
      // console.log('Ok')
      console.log(personalMovieDB);
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < howMuchFilmsRememver; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
        b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat === true) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

// function rememberMyFilms () {
//   for (let i = 0; i < howMuchFilmsRememver; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//       b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//     } else {
//       console.log('error');
//       i--;
//     }
//   }
// }
// rememberMyFilms();



// function detectPersonalLevel () {
//   if (personalMovieDB.count < 10) {
//     console.log('мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
//   } else {
//     console.log('произошла ошибка');
//   }
// }
// detectPersonalLevel();

// function showMyDB(privat) {
//   if (privat == false) {
//     // console.log('Ok')
//     console.log(personalMovieDB);
//   }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }

// writeYourGenres();
// console.log(personalMovieDB);

// function toggleVisibleMyDB() {
//   if(personalMovieDB.privat === true) {
//     personalMovieDB.privat = false;
//   }else {
//     personalMovieDB.privat = true;
//   }
// }

// console.log(personalMovieDB);
// toggleVisibleMyDB();
// console.log(personalMovieDB);

// toggleVisibleMyDB();
// console.log(personalMovieDB);