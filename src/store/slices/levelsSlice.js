import { createSlice } from '@reduxjs/toolkit';

const initialLevels = [
    {
        id: 1,
        title: 'Collect 5 red balls',
        requirements: { red: 5 },
        modalIcon: 'Level1',
        headerIcon: 'Level1',
        goals: 5,
        completed: false,
    },
    {
        id: 2,
        title: 'Collect 5 balls of different colors',
        requirements: { red: 1, pink: 1, green: 1, yellow: 1, purple: 1, black: 1, white: 1 },
        modalIcon: 'Level2',
        headerIcon: 'Level2',
        goals: 5,
        completed: false,
    },
    {
        id: 3,
        title: 'Collect 3 blue and 5 pink balls',
        requirements: { purple: 3, pink: 5 },
        modalIcon: 'Level3',
        headerIcon: 'Level3',
        goals: 8,
        completed: false,
    },
    {
        id: 4,
        title: 'Collect 6 yellow balls',
        requirements: { yellow: 6 },
        modalIcon: 'Level4',
        headerIcon: 'Level4',
        goals: 6,
        completed: false,
    },
    {
        id: 5,
        title: 'Collect 4 green and 4 blue balls',
        requirements: { green: 4, purple: 4 },
        modalIcon: 'Level5',
        headerIcon: 'Level5',
        goals: 8,
        completed: false,
    },
    {
        id: 6,
        title: 'Collect 7 red balls',
        requirements: { red: 7 },
        modalIcon: 'Level6',
        headerIcon: 'Level6',
        goals: 7,
        completed: false,
    },
    {
        id: 7,
        title: 'Collect 5 pink and 5 yellow balls',
        requirements: { pink: 5, yellow: 5 },
        modalIcon: 'Level7',
        headerIcon: 'Level7',
        goals: 10,
        completed: false,
    },
    {
        id: 8,
        title: 'Collect 8 white balls',
        requirements: { white: 8 },
        modalIcon: 'Level8',
        headerIcon: 'Level8',
        goals: 8,
        completed: false,
    },
    {
        id: 9,
        title: 'Collect 10 blue balls',
        requirements: { purple: 10 },
        modalIcon: 'Level9',
        headerIcon: 'Level9',
        goals: 10,
        completed: false,
    },
    {
        id: 10,
        title: 'Collect 6 green and 6 red balls',
        requirements: { green: 6, red: 6 },
        modalIcon: 'Level10',
        headerIcon: 'Level10',
        goals: 12,
        completed: false,
    },
    {
        id: 11,
        title: 'Collect 12 balls of any type except black ones',
        requirements: { red: 1, pink: 1, green: 1, yellow: 1, purple: 1, white: 1 },
        modalIcon: 'Level11',
        headerIcon: 'Level11',
        goals: 12,
        completed: false,
    },
    {
        id: 12,
        title: 'Collect 15 white balls',
        requirements: { white: 15 },
        modalIcon: 'Level12',
        headerIcon: 'Level12',
        goals: 15,
        completed: false,
    },
];

const initialState = {
    levels: initialLevels,
    currentLevelId: 3,
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
