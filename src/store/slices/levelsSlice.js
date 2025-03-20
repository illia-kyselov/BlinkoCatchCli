import { createSlice } from '@reduxjs/toolkit';

import Level1ModalIcon from '../../assets/levels/Level1SVG.jsx';
import Level2ModalIcon from '../../assets/levels/Level2SVG.jsx';
import Level3ModalIcon from '../../assets/levels/Level3SVG.jsx';
import Level4ModalIcon from '../../assets/levels/Level4SVG.jsx';
import Level5ModalIcon from '../../assets/levels/Level5SVG.jsx';
import Level6ModalIcon from '../../assets/levels/Level6SVG.jsx';
import Level7ModalIcon from '../../assets/levels/Level7SVG.jsx';
import Level8ModalIcon from '../../assets/levels/Level8SVG.jsx';
import Level9ModalIcon from '../../assets/levels/Level9SVG.jsx';
import Level10ModalIcon from '../../assets/levels/Level10SVG.jsx';
import Level11ModalIcon from '../../assets/levels/Level11SVG.jsx';
import Level12ModalIcon from '../../assets/levels/Level12SVG.jsx';

import Level1HeaderIcon from '../../assets/levels/headers/Level1SVG.jsx';
import Level2HeaderIcon from '../../assets/levels/headers/Level2SVG.jsx';
import Level3HeaderIcon from '../../assets/levels/headers/Level3SVG.jsx';
import Level4HeaderIcon from '../../assets/levels/headers/Level4SVG.jsx';
import Level5HeaderIcon from '../../assets/levels/headers/Level5SVG.jsx';
import Level6HeaderIcon from '../../assets/levels/headers/Level6SVG.jsx';
import Level7HeaderIcon from '../../assets/levels/headers/Level7SVG.jsx';
import Level8HeaderIcon from '../../assets/levels/headers/Level8SVG.jsx';
import Level9HeaderIcon from '../../assets/levels/headers/Level9SVG.jsx';
import Level10HeaderIcon from '../../assets/levels/headers/Level10SVG.jsx';
import Level11HeaderIcon from '../../assets/levels/headers/Level11SVG.jsx';
import Level12HeaderIcon from '../../assets/levels/headers/Level12SVG.jsx';

const initialLevels = [
    {
        id: 1,
        title: 'Collect 5 red balls',
        requirements: { red: 5 },
        modalIcon: Level1ModalIcon,
        headerIcon: Level1HeaderIcon,
        goals: 5,
        completed: false,
    },
    {
        id: 2,
        title: 'Collect 5 balls of different colors',
        requirements: { red: 1, pink: 1, green: 1, yellow: 1, purple: 1, black: 1, white: 1 },
        modalIcon: Level2ModalIcon,
        headerIcon: Level2HeaderIcon,
        goals: 5,
        completed: false,
    },
    {
        id: 3,
        title: 'Collect 3 blue and 5 pink balls',
        requirements: { purple: 3, pink: 5 },
        modalIcon: Level3ModalIcon,
        headerIcon: Level3HeaderIcon,
        goals: 8,
        completed: false,
    },
    {
        id: 4,
        title: 'Collect 6 yellow balls',
        requirements: { yellow: 6 },
        modalIcon: Level4ModalIcon,
        headerIcon: Level4HeaderIcon,
        goals: 6,
        completed: false,
    },
    {
        id: 5,
        title: 'Collect 4 green and 4 blue balls',
        requirements: { green: 4, purple: 4 },
        modalIcon: Level5ModalIcon,
        headerIcon: Level5HeaderIcon,
        goals: 8,
        completed: false,
    },
    {
        id: 6,
        title: 'Collect 7 red balls',
        requirements: { red: 7 },
        modalIcon: Level6ModalIcon,
        headerIcon: Level6HeaderIcon,
        goals: 7,
        completed: false,
    },
    {
        id: 7,
        title: 'Collect 5 pink and 5 yellow balls',
        requirements: { pink: 5, yellow: 5 },
        modalIcon: Level7ModalIcon,
        headerIcon: Level7HeaderIcon,
        goals: 10,
        completed: false,
    },
    {
        id: 8,
        title: 'Collect 8 white balls',
        requirements: { white: 8 },
        modalIcon: Level8ModalIcon,
        headerIcon: Level8HeaderIcon,
        goals: 8,
        completed: false,
    },
    {
        id: 9,
        title: 'Collect 10 blue balls',
        requirements: { purple: 10 },
        modalIcon: Level9ModalIcon,
        headerIcon: Level9HeaderIcon,
        goals: 10,
        completed: false,
    },
    {
        id: 10,
        title: 'Collect 6 green and 6 red balls',
        requirements: { green: 6, red: 6 },
        modalIcon: Level10ModalIcon,
        headerIcon: Level10HeaderIcon,
        goals: 12,
        completed: false,
    },
    {
        id: 11,
        title: 'Collect 12 balls of any type except black ones',
        requirements: { red: 1, pink: 1, green: 1, yellow: 1, purple: 1, white: 1 },
        modalIcon: Level11ModalIcon,
        headerIcon: Level11HeaderIcon,
        goals: 12,
        completed: false,
    },
    {
        id: 12,
        title: 'Collect 15 white balls',
        requirements: { white: 15 },
        modalIcon: Level12ModalIcon,
        headerIcon: Level12HeaderIcon,
        goals: 15,
        completed: false,
    },
];

const initialState = {
    levels: initialLevels,
    currentLevelId: 1,
    isLevelModalVisible: false,
};

const levelsSlice = createSlice({
    name: 'levels',
    initialState,
    reducers: {
        setCurrentLevel(state, action) {
            state.currentLevelId = action.payload;
        },
        nextLevel(state) {
            const currentIndex = state.levels.findIndex(
                (lvl) => lvl.id === state.currentLevelId
            );
            if (currentIndex < state.levels.length - 1) {
                state.currentLevelId = state.levels[currentIndex + 1].id;
            }
        },
        setLevelModalVisible(state, action) {
            state.isLevelModalVisible = action.payload;
        },
        markLevelCompleted(state, action) {
            const level = state.levels.find((lvl) => lvl.id === action.payload);
            if (level) {
                level.completed = true;
            }
        },
    },
});

export const {
    setCurrentLevel,
    nextLevel,
    setLevelModalVisible,
    markLevelCompleted,
} = levelsSlice.actions;

export default levelsSlice.reducer;
