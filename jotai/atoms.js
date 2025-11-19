import { atom } from 'jotai';

// Holds the user refres and dynamic sign in mutation
export const userState = atom(false);

// Holds the user refres and dynamic sign in mutation
export const tokenState = atom(false);

// Determines whether Loading Screen Renders or not
export const loadingState = atom(false);

// Determines the active Tab
export const tabBarState = atom(false);

// Determines what Main Directory you are in
export const directoryDataState = atom(false);

// Determines what Main Directory you are in
export const activeTabDataState = atom(false);
