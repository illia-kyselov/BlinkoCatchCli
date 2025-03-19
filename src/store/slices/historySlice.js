import { createSlice } from '@reduxjs/toolkit';

const images = {
    TheLegendofMrPlinko: require('../../assets/history/TheLegendofMrPlinko.png'),
    PlinkopolisCity: require('../../assets/history/PlinkopolisCity.png'),
    PlinkoTournaments: require('../../assets/history/PlinkoTournaments.png'),
    Howdidthecoloredballsappear: require('../../assets/history/Howdidthecoloredballsappear.png'),
    PlinkoandAncientCivilizations: require('../../assets/history/PlinkoandAncientCivilizations.png'),
    leftMan: require('../../assets/history/leftMan.png'),
    rightMan: require('../../assets/history/rightMan.png'),
};

const initialState = {
    items: [
        {
            id: '1',
            title: 'The Legend of Mr Plinko',
            description: "They say that long ago there lived a mysterious inventor named Mr. Plinko. He was obsessed with gravity, chance, and movement. Legend has it that he once created a device in which balls would fall, bounce, and find their way into mysterious pockets of fate. No one knows whether he was a magician, a scientist, or just a genius, but his ball-dropping mechanics changed the world forever.",
            image: images.TheLegendofMrPlinko,
            sideImage: images.leftMan,
            isLeft: true,
            isRight: false,
        },
        {
            id: '2',
            title: 'Plinkopolis City',
            description: "At the center of the Plinko world is the legendary city of Plinkopolis. Here, everything obeys the laws of gravity and probability. Houses are built so that their roofs resemble slanted boards, and the roads are strewn with springs and bumpers. The inhabitants of the city believe that their fate is sealed the moment they fall, but only the most skilled can control their flight.",
            image: images.PlinkopolisCity,
            sideImage: images.rightMan,
            isLeft: false,
            isRight: true,
        },
        {
            id: '3',
            title: 'Plinko Tournaments',
            description: "Every year, Plinkopolis hosts a grand competition – the Plinko Tournaments. The best players from all over the world gather to demonstrate their dexterity and ability to control the falling balls. The winners receive not only awards, but also the respect of the entire city, because catching a ball is an art that requires calculations, patience and a little luck.",
            image: images.PlinkoTournaments,
            sideImage: images.leftMan,
            isLeft: true,
            isRight: false,
        },
        {
            id: '4',
            title: 'How did the colored balls appear?',
            description: "According to myths, once upon a time all the balls were the same – colorless. But one day powerful forces gave them colors. The blue ball symbolizes wisdom, the red one – passion and risk, the green one – luck, and the gold one – the highest reward. It is said that the colored balls carry the power of the ancient gods of chance, and only the chosen ones can fully unleash their potential.",
            image: images.Howdidthecoloredballsappear,
            sideImage: images.rightMan,
            isLeft: false,
            isRight: true,
        },
        {
            id: '5',
            title: 'Plinko and Ancient Civilizations',
            description: "Some researchers believe that the Plinko mechanics existed thousands of years ago. Archaeologists have found strange engravings depicting falling balls and complex mazes reminiscent of modern game boards. Perhaps ancient civilizations used Plinko not only for entertainment, but also to predict the future. Who knows, maybe fate itself is just one big ball that falls, bounces, and inevitably finds its way?",
            image: images.PlinkoandAncientCivilizations,
            sideImage: images.leftMan,
            isLeft: true,
            isRight: false,
        },
    ],
};

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {},
});

export default historySlice.reducer;
