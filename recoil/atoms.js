import { atom } from 'recoil';

// Holds the user refres and dynamic sign in mutation
export const userState = atom({
	key: 'userState',
	default: false
});

// Holds the user refres and dynamic sign in mutation
export const tokenState = atom({
	key: 'tokenState',
	default: false
});

// Determines whether Loading Screen Renders or not
export const loadingState = atom({
	key: "loadingState",
	default: false
})

// Determines whether Loading Screen Renders or not
export const tabBarState = atom({
	key: "tabBarState",
	default: false
})