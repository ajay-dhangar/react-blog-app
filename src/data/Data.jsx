import React from 'react';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
// import Bolly7 from "./images/bollywood/bolly-1.jpg";

import Bolly3 from "./images/bollywood/bolly-1.jpg";
import Bolly4 from "./images/bollywood/bolly-1.jpg";
import Bolly5 from "./images/bollywood/bolly-1.jpg";

// Bollywood Images

import img12 from "./images/bollywood/bolly-8.jpg";
import img13 from "./images/bollywood/bolly-9.jpg";
import img14 from "./images/bollywood/bolly-6.jpg";
import img15 from "./images/bollywood/bolly-7.jpg";

//  Tech Images 

import img24 from "./images/technology/tech-1.jpg";
import img25 from "./images/technology/tech-2.jpg";
import img26 from "./images/technology/tech-3.jpg";
import img27 from "./images/technology/tech-4.jpg";
import img28 from "./images/technology/tech-5.jpg";

//  Hollywood Images

import img36 from "./images/hollywood/holly-5.jpg";
import img37 from "./images/hollywood/holly-6.jpg";
import img38 from "./images/hollywood/holly-7.jpg";
import img39 from "./images/hollywood/holly-8.jpg";

// Fitness Images

import img48 from "./images/fitness/fitness-1.jpg";
import img49 from "./images/fitness/fitness-2.jpg";
import img50 from "./images/fitness/fitness-3.jpg";
import img51 from "./images/fitness/fitness.jpg";

// Food Images

import img61 from "./images/food/food-1.jpg";
import img62 from "./images/food/food-2.jpg";
import img63 from "./images/food/food-3.jpg";
import img64 from "./images/food/food-4.jpg";
import img65 from "./images/food/food-5.jpg";



export const ContextData = createContext();

export const ProvideInfo = (props) => {
  ProvideInfo.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [data, setData] = useState([
    // home & sports data is here (id: 1 - 12)

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
      category: 'sports',
      name: 'stanserhorn',
      image: 'data:image/jpeg;base64,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',
      content: `Take it from us, sport can be a Game Changer.Taking part in sport can help us feel fitter, healthier and mentally strong, and that is just the start of it. Sport can also be fun, especially when played as part of a team or with family or friends. As we have seen through our Club Game Changers campaign, sport can also develop great leaders and be an opportunity for individuals to shine, whether it is playing for a local grassroots club or at an international level.If you’re considering signing yourself or family member up for a sport and need some encouragement, then it’s worth keeping in mind the many benefits.`,
      details:
        'Health benifits for playing sports.Latest research article report here',
      height: '1898m',
    },
    {
      id: 5,
      category: 'sports',
      name: 'stanserhorn',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgh2VyJs9Z6uMRE8vb3ncN_0XjVp8fpnvag&usqp=CAU',
      content: `Take it from us, sport can be a Game Changer.Taking part in sport can help us feel fitter, healthier and mentally strong, and that is just the start of it. Sport can also be fun, especially when played as part of a team or with family or friends. As we have seen through our Club Game Changers campaign, sport can also develop great leaders and be an opportunity for individuals to shine, whether it is playing for a local grassroots club or at an international level.If you’re considering signing yourself or family member up for a sport and need some encouragement, then it’s worth keeping in mind the many benefits.`,
      details:
        'Health benifits for playing sports.Latest research article report here',
      height: '1898m',
    },

    {
      id: 6,
      category: 'home',
      name: 'stanserhorn',
      image: './images/bollywood/bolly-1.jpg',
      height: '1898m',
    },

    {
      id: 7,
      category: 'sports',
      name: 'Baseball',
      image: 'data:image/jpeg;base64,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',
      content: `Take it from us, sport can be a Game Changer.Taking part in sport can help us feel fitter, healthier and mentally strong, and that is just the start of it. Sport can also be fun, especially when played as part of a team or with family or friends. As we have seen through our Club Game Changers campaign, sport can also develop great leaders and be an opportunity for individuals to shine, whether it is playing for a local grassroots club or at an international level.If you’re considering signing yourself or family member up for a sport and need some encouragement, then it’s worth keeping in mind the many benefits.`,
      details:
        'Health benifits for playing sports.Latest research article report here',
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
    },

    // Bollywood (id: 12 - 24)
    {
      id: 12,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'bollywood',
      name: 'Shershaah',
      desc: "Vikram Batra, a young man, dreams of becoming a soldier and falls in love with Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in the Kargil war.",
      image: img12,
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
      image:img13,
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
      image:img14,
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
      image: img15,
      release: '12th August,2021',
      imdb: '8.9/10',
      content:
        "In his youth Captain Vikram Batra saw the show Param Veer Chakra running on Doordarshan in his neighbour's house and decided to become a soldier. Years later an adult Vikram is part of the Indian Army and in love with Dimple a Sikh preponderance at which her father rejects their relationship and Vikram decides to join the Merchant Navy for her although has changes in his plans. Vikram gets posted to Kashmir which is a sensitive area where every civilian is a suspect though he became friendly with many. During an operation Vikram inspires many of his senior officers and becomes one of the best officers in the team. Vikram further is posted to a war stricken Kargil area where he leads many successful operations.",
    },
    {
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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
      id: 21,
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
      id: 22,
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
      id: 23,
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
      id: 24,
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
      image: img24,
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
      image: img25,
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
      image: img26,
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
      image: img27,
      details: 'The Rise of Full Stack Freelancing',
      content:
        'A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. They are something of a swing, ready to assist wherever needed in the process.Full Stack Developers are highly intelligent people who have trained through their education or through years in related fields on the job force. These jobs are in high demand, but employers don’t want to trust their web development to just anyone. There are certain standards of education and work experience that Full Stack Developers have to meet to be hired. These vary from employer to employer, but here are some good bets.',
    },
    {
      id: 28,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'technology',
      name: 'Full Stack',
      image: img28,
      details: 'The Rise of Full Stack Freelancing',
      content:
        'A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. They are something of a swing, ready to assist wherever needed in the process.Full Stack Developers are highly intelligent people who have trained through their education or through years in related fields on the job force. These jobs are in high demand, but employers don’t want to trust their web development to just anyone. There are certain standards of education and work experience that Full Stack Developers have to meet to be hired. These vary from employer to employer, but here are some good bets.',
    },
    {
      id: 29,
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
      id: 30,
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
      id: 31,
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
      id: 32,
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
      id: 33,
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
      id: 34,
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
      id: 8,
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
      image: img36,
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
      image: img37,
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
      image: img38,
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
      image: img39,
      name: 'Harry Potter',
      content:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy.[1] A series of many genres, including fantasy, drama, coming of age, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references.[2] According to Rowling, the main theme is death.[3] Other major themes in the series include prejudice, corruption, and madness.",
    },
    {
      id: 40,
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
      id: 41,
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
      id: 42,
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
      id: 43,
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
      id: 44,
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
      id: 45,
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
      id: 46,
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
      id: 48,
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
      id: 47,
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
      image: img48,
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
      image: img49,
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
      image: img50,
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
      image: img51,
      content:
        'The lunge is a popular leg-strengthening exercise with a multitude of variations to add variety to your workout. In addition, varying your technique allows you to emphasize different muscles or parts of those muscles.This exercise is beneficial for injury prevention, as well as rehabilitation after injuries occur. It’s often part of a foundational strength program or rehab protocol, allowing athletes and exercisers to return to their sport or activity of interest as quickly as possible.For instance, it’s a common position people assume to get up from the ground, and it mimics many of the movements and muscle-activation patterns of daily activities, such as walking and running and ascending or descending stairs.',
    },
    {
      id: 52,
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
      id: 53,
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
      id: 54,
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
      id: 55,
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
      id: 56,
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
      id: 57,
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
      id: 58,
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
      id: 60,
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
      id: 61,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      details: 'Have a quick bite today & refresh your mood',
      category: 'food',
      image: img61,
      name: 'Pizza Hut',
      content:
        'Pizza Hut was founded on June 15, 1958, by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[7] Six months later they opened a second outlet and within a year they had six Pizza Hut restaurants. The brothers began franchising in 1959. The iconic Pizza Hut building style was designed in 1963 by Chicago architect George Lindstrom[8] and was implemented in 1969.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.Before closing in 2015, the oldest continuously operating Pizza Hut was in Manhattan, Kansas, in a shopping and tavern district known as Aggieville near Kansas State University. The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.',
    },
    {
      id: 62,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      details: 'Have a quick bite today & refresh your mood',
      category: 'food',
      image:img62,
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
      image: img63,
      name: 'Pizza Hut',
      content:
        'Pizza Hut was founded on June 15, 1958, by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[7] Six months later they opened a second outlet and within a year they had six Pizza Hut restaurants. The brothers began franchising in 1959. The iconic Pizza Hut building style was designed in 1963 by Chicago architect George Lindstrom[8] and was implemented in 1969.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.Before closing in 2015, the oldest continuously operating Pizza Hut was in Manhattan, Kansas, in a shopping and tavern district known as Aggieville near Kansas State University. The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.',
    },
    {
      id: 64,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      details: 'Have a quick bite today & refresh your mood',
      category: 'food',
      image:img64,
      name: 'Pizza Hut',
      content:
        'Pizza Hut was founded on June 15, 1958, by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[7] Six months later they opened a second outlet and within a year they had six Pizza Hut restaurants. The brothers began franchising in 1959. The iconic Pizza Hut building style was designed in 1963 by Chicago architect George Lindstrom[8] and was implemented in 1969.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.Before closing in 2015, the oldest continuously operating Pizza Hut was in Manhattan, Kansas, in a shopping and tavern district known as Aggieville near Kansas State University. The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.',
    },
    {
      id: 65,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      details: 'Have a quick bite today & refresh your mood',
      category: 'food',
      image:img65,
      name: 'Pizza Hut',
      content:
        'Pizza Hut was founded on June 15, 1958, by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas.[7] Six months later they opened a second outlet and within a year they had six Pizza Hut restaurants. The brothers began franchising in 1959. The iconic Pizza Hut building style was designed in 1963 by Chicago architect George Lindstrom[8] and was implemented in 1969.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.PepsiCo acquired Pizza Hut in November 1977.[10][11] Twenty years later, Pizza Hut (alongside Taco Bell and Kentucky Fried Chicken) were spun off by PepsiCo on May 30, 1997, and all three restaurant chains became part of a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.Before closing in 2015, the oldest continuously operating Pizza Hut was in Manhattan, Kansas, in a shopping and tavern district known as Aggieville near Kansas State University. The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.',
    },
    {
      id: 66,
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
      id: 67,
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
      id: 68,
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
      id: 69,
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
      id: 70,
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
      id: 71,
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
      id: 72,
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
    <ContextData.Provider value={[data, setData]}>
      {props.children}
    </ContextData.Provider>
  );
};
