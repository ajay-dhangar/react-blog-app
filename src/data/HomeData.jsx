import React from 'react';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
// import Bolly7 from "./images/bollywood/bolly-1.jpg";
import Bolly3 from "./images/bollywood/bolly-1.jpg";
import Bolly4 from "./images/bollywood/bolly-1.jpg";
import Bolly5 from "./images/bollywood/bolly-1.jpg";
// import Bolly6 from "./images/bollywood/bolly-1.jpg";

export const ContextHomeData = createContext();

export const ProvideHomeInfo = (props) => {
  ProvideHomeInfo.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [data, setData] = useState([
    // home data is here (id: 1 - 12)
    {
      id: 1,
      category: 'home',
      image: './images/bollywood/bolly-1.jpg',
      name: 'rigi',
      height: '1798m',
    },

    {
      id: 2,
      category: 'home',
      name: 'stanserhorn',
      image: Bolly3,
      height: '1898m',
    },
    {
      id: 3,
      category: 'home',
      name: 'stanserhorn',
      image: Bolly4,
      height: '1898m',
    },
    {
      id: 4,
      category: 'home',
      name: 'stanserhorn',
      image: Bolly5,
      height: '1898m',
    },

    // Bollywood (id: 12 - 24)
    {
      id: 12,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'bollywood',
      name: 'Shershaah',
      desc: "Vikram Batra, a young man, dreams of becoming a soldier and falls in love with Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in the Kargil war.",
      image:
        'https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2021/7/16/shershah-movie.jpg',
      release: '12th August,2021',
      imdb: '8.9/10',
      content:
        "In his youth Captain Vikram Batra saw the show Param Veer Chakra running on Doordarshan in his neighbour's house and decided to become a soldier. Years later an adult Vikram is part of the Indian Army and in love with Dimple a Sikh preponderance at which her father rejects their relationship and Vikram decides to join the Merchant Navy for her although has changes in his plans. Vikram gets posted to Kashmir which is a sensitive area where every civilian is a suspect though he became friendly with many. During an operation Vikram inspires many of his senior officers and becomes one of the best officers in the team. Vikram further is posted to a war stricken Kargil area where he leads many successful operations.",
    },
    {
      id: 13,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'bollywood',
      name: 'Shershaah',
      desc: "Vikram Batra, a young man, dreams of becoming a soldier and falls in love with Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in the Kargil war.",
      image:
        'https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2021/7/16/shershah-movie.jpg',
      release: '12th August,2021',
      imdb: '8.9/10',
      content:
        "In his youth Captain Vikram Batra saw the show Param Veer Chakra running on Doordarshan in his neighbour's house and decided to become a soldier. Years later an adult Vikram is part of the Indian Army and in love with Dimple a Sikh preponderance at which her father rejects their relationship and Vikram decides to join the Merchant Navy for her although has changes in his plans. Vikram gets posted to Kashmir which is a sensitive area where every civilian is a suspect though he became friendly with many. During an operation Vikram inspires many of his senior officers and becomes one of the best officers in the team. Vikram further is posted to a war stricken Kargil area where he leads many successful operations.",
    },
    {
      id: 14,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'bollywood',
      name: 'Shershaah',
      desc: "Vikram Batra, a young man, dreams of becoming a soldier and falls in love with Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in the Kargil war.",
      image:
        'https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2021/7/16/shershah-movie.jpg',
      release: '12th August,2021',
      imdb: '8.9/10',
      content:
        "In his youth Captain Vikram Batra saw the show Param Veer Chakra running on Doordarshan in his neighbour's house and decided to become a soldier. Years later an adult Vikram is part of the Indian Army and in love with Dimple a Sikh preponderance at which her father rejects their relationship and Vikram decides to join the Merchant Navy for her although has changes in his plans. Vikram gets posted to Kashmir which is a sensitive area where every civilian is a suspect though he became friendly with many. During an operation Vikram inspires many of his senior officers and becomes one of the best officers in the team. Vikram further is posted to a war stricken Kargil area where he leads many successful operations.",
    },
    {
      id: 15,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'bollywood',
      name: 'Shershaah',
      desc: "Vikram Batra, a young man, dreams of becoming a soldier and falls in love with Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in the Kargil war.",
      image:
        'https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2021/7/16/shershah-movie.jpg',
      release: '12th August,2021',
      imdb: '8.9/10',
      content:
        "In his youth Captain Vikram Batra saw the show Param Veer Chakra running on Doordarshan in his neighbour's house and decided to become a soldier. Years later an adult Vikram is part of the Indian Army and in love with Dimple a Sikh preponderance at which her father rejects their relationship and Vikram decides to join the Merchant Navy for her although has changes in his plans. Vikram gets posted to Kashmir which is a sensitive area where every civilian is a suspect though he became friendly with many. During an operation Vikram inspires many of his senior officers and becomes one of the best officers in the team. Vikram further is posted to a war stricken Kargil area where he leads many successful operations.",
    },

    // Technology (id: 24 - 36)
    {
      id: 24,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'technology',
      name: 'Full Stack',
      image: Bolly5,
      details: 'The Rise of Full Stack Freelancing',
      content:
        'A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. They are something of a swing, ready to assist wherever needed in the process.Full Stack Developers are highly intelligent people who have trained through their education or through years in related fields on the job force. These jobs are in high demand, but employers don’t want to trust their web development to just anyone. There are certain standards of education and work experience that Full Stack Developers have to meet to be hired. These vary from employer to employer, but here are some good bets.',
    },
    {
      id: 25,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'technology',
      name: 'Full Stack',
      image: Bolly5,
      details: 'The Rise of Full Stack Freelancing',
      content:
        'A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. They are something of a swing, ready to assist wherever needed in the process.Full Stack Developers are highly intelligent people who have trained through their education or through years in related fields on the job force. These jobs are in high demand, but employers don’t want to trust their web development to just anyone. There are certain standards of education and work experience that Full Stack Developers have to meet to be hired. These vary from employer to employer, but here are some good bets.',
    },
    {
      id: 26,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'technology',
      name: 'Full Stack',
      image: Bolly5,
      details: 'The Rise of Full Stack Freelancing',
      content:
        'A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. They are something of a swing, ready to assist wherever needed in the process.Full Stack Developers are highly intelligent people who have trained through their education or through years in related fields on the job force. These jobs are in high demand, but employers don’t want to trust their web development to just anyone. There are certain standards of education and work experience that Full Stack Developers have to meet to be hired. These vary from employer to employer, but here are some good bets.',
    },
    {
      id: 27,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'technology',
      name: 'Full Stack',
      image: Bolly5,
      details: 'The Rise of Full Stack Freelancing',
      content:
        'A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. They are something of a swing, ready to assist wherever needed in the process.Full Stack Developers are highly intelligent people who have trained through their education or through years in related fields on the job force. These jobs are in high demand, but employers don’t want to trust their web development to just anyone. There are certain standards of education and work experience that Full Stack Developers have to meet to be hired. These vary from employer to employer, but here are some good bets.',
    },
    // Hollywood (id: 36 - 48)
    {
      id: 36,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      imdb: '7.6/10',
      release: '12th April,2002',

      category: 'hollywood',
      image:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202112/harry_potter_return_to_hogwarts_1640957863.jpg',
      name: 'Harry Potter',
      content:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy.[1] A series of many genres, including fantasy, drama, coming of age, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references.[2] According to Rowling, the main theme is death.[3] Other major themes in the series include prejudice, corruption, and madness.",
    },
    {
      id: 37,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      imdb: '7.6/10',
      release: '12th April,2002',

      category: 'hollywood',
      image:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202112/harry_potter_return_to_hogwarts_1640957863.jpg',
      name: 'Harry Potter',
      content:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy.[1] A series of many genres, including fantasy, drama, coming of age, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references.[2] According to Rowling, the main theme is death.[3] Other major themes in the series include prejudice, corruption, and madness.",
    },
    {
      id: 38,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      imdb: '7.6/10',
      release: '12th April,2002',

      category: 'hollywood',
      image:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202112/harry_potter_return_to_hogwarts_1640957863.jpg',
      name: 'Harry Potter',
      content:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy.[1] A series of many genres, including fantasy, drama, coming of age, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references.[2] According to Rowling, the main theme is death.[3] Other major themes in the series include prejudice, corruption, and madness.",
    },
    {
      id: 39,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      imdb: '7.6/10',
      release: '12th April,2002',

      category: 'hollywood',
      image:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202112/harry_potter_return_to_hogwarts_1640957863.jpg',
      name: 'Harry Potter',
      content:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy.[1] A series of many genres, including fantasy, drama, coming of age, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references.[2] According to Rowling, the main theme is death.[3] Other major themes in the series include prejudice, corruption, and madness.",
    },

    // Fitness (id: 48 - 60)
    {
      id: 48,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'fitness',
      details: 'Increase your muscle mass to build up strength',
      name: 'Lunges',
      image:
        'https://experiencelife.lifetime.life/wp-content/uploads/2021/03/The_Lunge-1280x720.jpg',
      content:
        'The lunge is a popular leg-strengthening exercise with a multitude of variations to add variety to your workout. In addition, varying your technique allows you to emphasize different muscles or parts of those muscles.This exercise is beneficial for injury prevention, as well as rehabilitation after injuries occur. It’s often part of a foundational strength program or rehab protocol, allowing athletes and exercisers to return to their sport or activity of interest as quickly as possible.For instance, it’s a common position people assume to get up from the ground, and it mimics many of the movements and muscle-activation patterns of daily activities, such as walking and running and ascending or descending stairs.',
    },
    {
      id: 49,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'fitness',
      details: 'Increase your muscle mass to build up strength',
      name: 'Lunges',
      image:
        'https://experiencelife.lifetime.life/wp-content/uploads/2021/03/The_Lunge-1280x720.jpg',
      content:
        'The lunge is a popular leg-strengthening exercise with a multitude of variations to add variety to your workout. In addition, varying your technique allows you to emphasize different muscles or parts of those muscles.This exercise is beneficial for injury prevention, as well as rehabilitation after injuries occur. It’s often part of a foundational strength program or rehab protocol, allowing athletes and exercisers to return to their sport or activity of interest as quickly as possible.For instance, it’s a common position people assume to get up from the ground, and it mimics many of the movements and muscle-activation patterns of daily activities, such as walking and running and ascending or descending stairs.',
    },
    {
      id: 50,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'fitness',
      details: 'Increase your muscle mass to build up strength',
      name: 'Lunges',
      image:
        'https://experiencelife.lifetime.life/wp-content/uploads/2021/03/The_Lunge-1280x720.jpg',
      content:
        'The lunge is a popular leg-strengthening exercise with a multitude of variations to add variety to your workout. In addition, varying your technique allows you to emphasize different muscles or parts of those muscles.This exercise is beneficial for injury prevention, as well as rehabilitation after injuries occur. It’s often part of a foundational strength program or rehab protocol, allowing athletes and exercisers to return to their sport or activity of interest as quickly as possible.For instance, it’s a common position people assume to get up from the ground, and it mimics many of the movements and muscle-activation patterns of daily activities, such as walking and running and ascending or descending stairs.',
    },
    {
      id: 51,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'fitness',
      details: 'Increase your muscle mass to build up strength',
      name: 'Lunges',
      image:
        'https://experiencelife.lifetime.life/wp-content/uploads/2021/03/The_Lunge-1280x720.jpg',
      content:
        'The lunge is a popular leg-strengthening exercise with a multitude of variations to add variety to your workout. In addition, varying your technique allows you to emphasize different muscles or parts of those muscles.This exercise is beneficial for injury prevention, as well as rehabilitation after injuries occur. It’s often part of a foundational strength program or rehab protocol, allowing athletes and exercisers to return to their sport or activity of interest as quickly as possible.For instance, it’s a common position people assume to get up from the ground, and it mimics many of the movements and muscle-activation patterns of daily activities, such as walking and running and ascending or descending stairs.',
    },

    // Food (id: 60 - 70)
    {
      id: 60,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      details: 'Have a quick bite today & refresh your mood',
      category: 'food',
      image:
        'https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/one-plus-one-personal.7c69aa348df543d8ac2835d5f8fb1972.1.jpg',
      name: 'Pizza Hut',
      content:
        'Pizza Hut was founded on June 15, 1958, by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[7] Six months later they opened a second outlet and within a year they had six Pizza Hut restaurants. The brothers began franchising in 1959. The iconic Pizza Hut building style was designed in 1963 by Chicago architect George Lindstrom[8] and was implemented in 1969.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.Before closing in 2015, the oldest continuously operating Pizza Hut was in Manhattan, Kansas, in a shopping and tavern district known as Aggieville near Kansas State University. The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.',
    },
    {
      id: 61,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      details: 'Have a quick bite today & refresh your mood',
      category: 'food',
      image:
        'https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/one-plus-one-personal.7c69aa348df543d8ac2835d5f8fb1972.1.jpg',
      name: 'Pizza Hut',
      content:
        'Pizza Hut was founded on June 15, 1958, by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[7] Six months later they opened a second outlet and within a year they had six Pizza Hut restaurants. The brothers began franchising in 1959. The iconic Pizza Hut building style was designed in 1963 by Chicago architect George Lindstrom[8] and was implemented in 1969.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.Before closing in 2015, the oldest continuously operating Pizza Hut was in Manhattan, Kansas, in a shopping and tavern district known as Aggieville near Kansas State University. The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.',
    },
    {
      id: 63,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      details: 'Have a quick bite today & refresh your mood',
      category: 'food',
      image:
        'https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/one-plus-one-personal.7c69aa348df543d8ac2835d5f8fb1972.1.jpg',
      name: 'Pizza Hut',
      content:
        'Pizza Hut was founded on June 15, 1958, by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[7] Six months later they opened a second outlet and within a year they had six Pizza Hut restaurants. The brothers began franchising in 1959. The iconic Pizza Hut building style was designed in 1963 by Chicago architect George Lindstrom[8] and was implemented in 1969.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.Before closing in 2015, the oldest continuously operating Pizza Hut was in Manhattan, Kansas, in a shopping and tavern district known as Aggieville near Kansas State University. The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.',
    },

  ]);

  return (
    <ContextHomeData.Provider value={[data, setData]}>
      {props.children}
    </ContextHomeData.Provider>
  );
};
