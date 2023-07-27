import React from 'react';
import { createContext, useState } from 'react';
// import mountainBig from "./img/mountain.jpg";
// import mountainSmall from "./img/mountainSmall.jpg";
// import sports1 from "./img/sports1.jpg";
// import badminton from "./img/badminton.jpg";
// import tableTennis from "./img/tableTennis.jpg";

export const ContextData = createContext();

export const ProvideInfo = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      category: 'mountain',
      image: mountainBig,
      name: 'rigi',
      height: '1798m',
    },

    {
      id: 2,
      category: 'mountain',
      name: 'stanserhorn',
      image: mountainSmall,
      height: '1898m',
    },

    {
      id: 3,
      category: 'sports',
      name: 'Baseball',
      image: sports1,
      content: `Take it from us, sport can be a Game Changer.Taking part in sport can help us feel fitter, healthier and mentally strong, and that is just the start of it. Sport can also be fun, especially when played as part of a team or with family or friends. As we have seen through our Club Game Changers campaign, sport can also develop great leaders and be an opportunity for individuals to shine, whether it is playing for a local grassroots club or at an international level.If you’re considering signing yourself or family member up for a sport and need some encouragement, then it’s worth keeping in mind the many benefits.`,
      details:
        'Health benifits for playing sports.Latest research article report here',
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
    },
    {
      id: 4,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'sports',
      name: 'Badminton',
      image: badminton,
      details:
        'PV Sindhu, Kidambi Srikanth Lead Indian Challenge in German Open',

      content:
        ' Two-time Olympic medallist P V Sindhu and world championship medal-winners Kidambi Srikanth and Lakshya Sen will be the top Indian contenders at the German Open Super 300 badminton tournament starting here on Tuesday.While Sindhu eased to a title win at Syed Modi International and Lakshya grabbed his maiden Super 500 trophy at Indian Open in January, Srikanth saw the momentum of the World Championships fizzle out a bit after withdrew from the Delhi due to COVID-19 infection.',
    },
    {
      id: 5,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'sports',
      name: 'Table Tennis',
      image: tableTennis,
      details: 'Walker beaten in the first Grand Smash Event,bids retirement',
      content:
        'Sam Walker’s first experience of the WTT Grand Smash ended in defeat in a deciding game to Iran’s Amir Hossein Hodaei in Singapore today. Walker led his opponent 2-1, but was unable to convert the lead into a victory as his opponent, ranked 152 in the world, came back to win 3-2 (11-7, 9-11, 9-11, 11-7, 11-6) in their second qualifying round tie.England’s only other representative at the inaugural Grand Smash event is Liam Pitchford, who has been seeded through to the main draw, which begins on Friday. He will face Marcelo Aguirre of Paraguay (WR 53) in the last 64.',
    },
    {
      id: 6,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'technology',
      name: 'IOT',
      image:
        'https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg',
      details: 'Iot Explained.What it is, How it works, Why it matters',
      content:
        'The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.A thing in the internet of things can be a person with a heart monitor implant, a farm animal with a biochip transponder, an automobile that has built-in sensors to alert the driver when tire pressure is low or any other natural or man-made object that can be assigned an Internet Protocol (IP) address and is able to transfer data over a network.Increasingly, organizations in a variety of industries are using IoT to operate more efficiently, better understand customers to deliver enhanced customer service, improve decision-making and increase the value of the business.',
    },
    {
      id: 7,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'technology',
      name: 'Data Science',
      image:
        'https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg',
      details: 'Data Science vs Big Data vs Data Analytics',
      content:
        'Data science continues to evolve as one of the most promising and in-demand career paths for skilled professionals. Today, successful data professionals understand that they must advance past the traditional skills of analyzing large amounts of data, data mining, and programming skills. In order to uncover useful intelligence for their organizations, data scientists must master the full spectrum of the data science life cycle and possess a level of flexibility and understanding to maximize returns at each phase of the process.The term “data scientist” was coined as recently as 2008 when companies realized the need for data professionals who are skilled in organizing and analyzing massive amounts of data.1 In a 2009 McKinsey&Company article, Hal Varian, Google’s chief economist and UC Berkeley professor of information sciences, business, and economics, predicted the importance of adapting to technology’s influence and reconfiguration of different industries.',
    },
    {
      id: 8,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'technology',
      name: 'Full Stack',
      image:
        'https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png',
      details: 'The Rise of Full Stack Freelancing',
      content:
        'A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. They are something of a swing, ready to assist wherever needed in the process.Full Stack Developers are highly intelligent people who have trained through their education or through years in related fields on the job force. These jobs are in high demand, but employers don’t want to trust their web development to just anyone. There are certain standards of education and work experience that Full Stack Developers have to meet to be hired. These vary from employer to employer, but here are some good bets.',
    },

    {
      id: 9,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'bollywood',
      desc: 'After dominating the Asian underworld, Don sets his eyes on the European criminal market. Caught between the Berlin mafia and law enforcement, Don tries to escape treachery and betrayal.',
      name: 'DON 2',
      image:
        'https://m.media-amazon.com/images/M/MV5BMzNiYWYxNWYtZDYzMC00MzA0LTkzY2UtNDAwNDhiYmVjNmEwXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
      imdb: '7.2/10',
      release: '23th December,2011',
      content:
        'After eluding police in India for many years, Don extends his tentacles in Asia, and is all set to spread them in Europe - much to the chagrin of established gangsters. He then rather dramatically surrenders himself to Vishal Malik and his soon-to-be-successor, Roma, in Kuala Lumpur, and is held in a penitentiary, waiting for the death sentence to be carried out. With the help of a one-time rival, Vardhaan, the duo dramatically escape and head for Zurich and then Berlin. Roma and Vishal find out and follow them closely - little knowing the challenges they will soon be confronted with - after Don himself becomes a victim of treachery and betrayal at the hands of not one but several of his associates.',
    },
    {
      id: 10,
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
      id: 11,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'bollywood',
      name: 'Kal Ho Na Ho',
      desc: 'Naina, a girl living a dreary life, finds a new meaning to her life when she meets Aman. Even though she loves him, Aman claims to be a married man and convinces Rohit, her friend, to woo her.',
      image: 'https://i.ytimg.com/vi/tVMAQAsjsOU/maxresdefault.jpg',
      release: '28th November,2003',
      content:
        "Naina Kapur is the eldest of three and currently doing an MBA course in New York City. Her coursemate Rohit is a playboy wannabe who fails more than he succeeds, and the two befriend each other since she's one of the few women he doesn't plan to court. Naina lives with her mother and her paternal grandmother who, in essence, is your stereotypical mother-in-law. Not everything is going smoothly for the family. Their restaurant business is constantly in the red and family squabbles between the two in-laws are constant. However, the Kapur family still maintains their status quo, even if the children are unhappy about it. Enter Naina's new neighbour, Aman Mathur - a charismatic busybody who gets into everyone's face and then gets away with it. He brings a new life to the neighbourhood and slowly but surely begins to change the lives of everyone around him. He pushes people to become the best that they can be, and even gets Rohit spurred on enough to court Naina seriously. That is, until he realises that he's falling hard for Naina as well. And to complicate matters, Naina has also fallen for him.",
      imdb: '8/10',
    },

    {
      id: 12,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'bollywood',
      name: 'Kahani',
      desc: 'Vidya Bagchi, a pregnant woman, travels to Kolkata from London to search for her missing husband. When all clues lead to a dead end, she realises that there is more than what meets the eye.',
      image:
        'https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/84/12/0_i5ijlaj1_1557497777105_l_medium.jpg',
      content:
        "A poison-gas attack on a Kolkata Metro Rail compartment kills the passengers on board. Two years later Vidya Bagchi, a pregnant British-Indian software engineer, arrives in Kolkata from London during the Durga Puja festivities in search of her missing husband, Arnab Bagchi. A police officer, Satyaki Rana Sinha, offers to help. Although Vidya claims that Arnab went to Kolkata on an assignment for the National Data Center (NDC), initial investigations suggest that no such person was employed by the NDC.Agnes D'Mello, the NDC's head of human resources, suggests to Vidya that her husband resembled former employee Milan Damji, whose file is probably kept in the old NDC office. Before Agnes can provide any further help she is killed by Bob Biswas, an assassin working undercover as a life insurance agent. Agnes is shot at the entrance of her house before which she is seen enjoying some music. Vidya and Rana break into the NDC office and find Damji's file, barely escaping an encounter with Bob, who is searching for the same information. Meanwhile, the attempts to obtain Damji's records have attracted the attention of two Intelligence Bureau officials in Delhi—the chief Bhaskaran K. and his deputy Khan. Khan arrives in Kolkata and reveals that Damji was a rogue IB agent responsible for the poison-gas attack. In spite of Khan's warnings, Vidya continues her search, fearing that Arnab's resemblance to Damji may have led him into trouble.",
      imdb: '8.1/10',
      release: '9th March,2012',
    },
    {
      id: 13,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'fitness',
      details: 'Twenty five pushups a day keep a doctor away',
      name: 'Pushups',
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/images/slideshow2/classic-483x350-1-1492801201.jpg?resize=480:*',
      content:
        'A push-up (sometimes called a press-up in British English) is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole. Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training. They are also a common form of punishment used in the military, school sport, and some martial arts disciplines.According to the study published in Journal of Strength and Conditioning Research, the test subjects supported with their hands, on average, 69.16% of their body mass in the up position, and 75.04% in the down position during the traditional push-ups. In modified push-ups, where knees are used as the pivot point, subjects supported 53.56% and 61.80% of their body mass in up and down positions, respectively.',
    },
    {
      id: 14,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'fitness',
      details: 'Reduce your belly in one week and become confident',
      name: 'Squats',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qyCtH8HT-hbECXit_Hb0HidlrnofMRFPrw&usqp=CAU',
      content:
        'The movement begins from a standing position. Weight is often added; typically in the form of a loaded barbell, but dumbbells and kettlebells may also be used. When a barbell is used, it may be braced across the upper trapezius muscle, which is termed a high bar squat, or held lower across the rear deltoids, termed a low bar squat.[3] The movement is initiated by moving the hips back and bending the knees and hips to lower the torso and accompanying weight, then returning to the upright position.As the body descends, the hips and knees undergo flexion, the ankle extends (dorsiflexes) and muscles around the joint contract eccentrically, reaching maximal contraction at the bottom of the movement while slowing and reversing descent. The muscles around the hips provide the power out of the bottom. If the knees slide forward or cave in then tension is taken from the hamstrings, hindering power on the ascent. Returning to vertical contracts the muscles concentrically, and the hips and knees undergo extension while the ankle plantarflexes.Common errors of squat form include descending too rapidly and flexing the torso too far forward. Rapid descent risks being unable to complete the lift or causing injury. This occurs when the descent causes the squatting muscles to relax and tightness at the bottom is lost as a result. Over-flexing the torso greatly increases the forces exerted on the lower back, risking a spinal disc herniation.[3] Another error is when the knee is not aligned with the direction of the toes, entering a valgus position, which can adversely stress the knee joint. An additional common error is the raising of heels off the floor, which reduces the contribution of the gluteus muscles.',
    },
    {
      id: 15,
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
      id: 16,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'fitness',
      details: 'Tips to improve your body balance and posture',
      image:
        'data:image/jpeg;base64,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',
      name: 'Plank',
      content:
        'The plank is an excellent abdominal and core exercise. To ensure you keep your core strong and stable, add the plank to your ab workout program.Strengthening the core is an important aspect of any workout regimen. A strong and solid core looks and feels good. But more importantly, it helps to stabilize, balance, and power the body during just about every other activity.Core strength is the basis for all coordinated and powerful athletic movements. A strong core can reduce stress on the joints and allow you to achieve better posture.',
    },

    {
      id: 17,
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
      id: 18,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'food',
      details: 'Feeling hungry,Grab a bite today',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/18/32/77/f0/photo0jpg.jpg',
      name: 'Burger King',
      content:
        "The predecessor to Burger King was founded in 1953 in Jacksonville, Florida, as Insta-Burger King.[8] After visiting the McDonald brothers' original store location in San Bernardino, California, the founders and owners (Keith J. Kramer and his wife's uncle Matthew Burns), who had purchased the rights to two pieces of equipment called Insta-machines, opened their first restaurants. Their production model was based on one of the machines they had acquired, an oven called the Insta-Broiler. This strategy proved to be so successful that they later required all of their franchises to use the device.[9][10] After the company faltered in 1959, it was purchased by its Miami, Florida, franchisees, James McLamore and David R. Edgerton. They initiated a corporate restructuring of the chain, first renaming the company Burger King. They ran the company as an independent entity for eight years (eventually expanding to over 250 locations in the United States), before selling it to the Pillsbury Company in 1967.",
    },
    {
      id: 19,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      details: 'Remove your hunger in just 2 mins',
      category: 'food',
      image:
        'https://api.time.com/wp-content/uploads/2015/06/maggi-noodles.jpg',
      name: 'Maggi',
      content:
        "The company originated in Switzerland in 1884, when Julius Maggi took over his father's mill. He quickly became a pioneer of industrial food production, aiming to improve the nutritional intake of worker families. Maggi was the first to bring protein-rich legume meals to the market, and followed up with a ready-made soup based on legume meals in 1886. After that Julius Maggi introduced bouillon concentrates, first in capsules, then in cubes. In 1897, Julius Maggi founded the company Maggi GmbH in Singen, Germany.In 1947, following several changes in ownership and corporate structure, Maggis holding company merged with the Nestlé company to form Nestlé-Alimentana S.A., currently known in its francophone home base as Nestlé S.A.",
    },
    {
      id: 20,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      category: 'food',
      details: 'Mouth watering food to lift your mood',
      image: 'https://i.ytimg.com/vi/jLUuaFpEQkM/maxresdefault.jpg',
      name: 'Idli',
      content:
        'A precursor of the modern idli is mentioned in several ancient Indian works. Vaddaradhane, a 920 CE Kannada language work by Shivakotiacharya mentions iddalige, prepared only from a black gram batter. Chavundaraya II, the author of the earliest available Kannada encyclopedia, Lokopakara (c.1025 CE), describes the preparation of this food by soaking black gram in buttermilk, ground to a fine paste, and mixed with the clear water of curd and spices.[1] The Western Chalukya king and scholar Someshwara III, reigning in the area now called Karnataka, included an idli recipe in his encyclopedia, Manasollasa (1130 CE). This Sanskrit-language work describes the food as iḍḍarikā. In Karnataka, the Idli in 1235 CE is described as being light, like coins of high value, which is not suggestive of a rice base.[2] The food prepared using this recipe is now called uddina idli in Karnataka.The recipe mentioned in these ancient Indian works leaves out three key aspects of the modern idli recipe: the use of rice (not just black gram), the long fermentation of the mix, and the steaming for fluffiness. The references to the modern recipe appear in the Indian works only after 1250 CE. Food historian K. T. Achaya speculates that the modern idli recipe might have originated in present-day Indonesia, which has a long tradition of fermented food. According to him, the cooks employed by the Hindu kings of the Indianised kingdoms might have invented the steamed idli there, and brought the recipe back to India during 800–1200 CE',
    },
    {
      id: 21,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      imdb: '5.8/10',
      category: 'hollywood',
      release: '12th November,2009',
      image:
        'http://gonewiththetwins.com/new/wp-content/uploads/2014/01/2012.jpg',
      name: '2012',
      content:
        "In 2009, American geologist Adrian Helmsley visits astrophysicist Satnam Tsurutani in India and learns that an exotic new type of neutrinos from a huge solar flare are heating the Earth's core. In Washington, D.C., Helmsley presents his information to White House Chief of Staff Carl Anheuser, who brings him to meet U.S. President Thomas Wilson.In 2010, Wilson and other world leaders begin a secret project to ensure humanity's survival. China and the G8 nations begin building nine arks, each capable of carrying 100,000 people, in the Himalayas near Cho Ming, Tibet. Nima, a Buddhist monk, is evacuated and his brother Tenzin joins the ark project. Funding is raised by secretly selling tickets to the rich and famous for €1 billion per person. By 2011, valuable art is moved to the arks but art expert and First Daughter Laura Wilson is told it is being sent to the Alps for preservation.",
    },

    {
      id: 22,
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
      id: 23,
      avatar:
        'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
      release: '31th March,1999',
      imdb: '8.7/10',
      category: 'hollywood',
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-matrix-1574173308.jpg',
      name: 'Matrix',
      content:
        "The Matrix is a 1999 science fiction action film[5][6] written and directed by the Wachowskis.[a] It is the first installment in The Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, which intelligent machines have created to distract humans while using their bodies as an energy source.[7] When computer programmer Thomas Anderson, under the hacker alias Neo, uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix.The Matrix is an example of the cyberpunk subgenre of science fiction.[8] The Wachowskis' approach to action scenes was influenced by Japanese animation[9] and martial arts films, and the film's use of fight choreographers and wire fu techniques from Hong Kong action cinema influenced subsequent Hollywood action film productions. ",
    },

    {
      id: 24,
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
  ]);

  return (
    <ContextData.Provider value={[data, setData]}>
      {props.children}
    </ContextData.Provider>
  );
};
