This app was made to allow users to view Star Wars characters and add characters to a favorites list.
When a character is added to favorites, genders of all characters are shown in the bottom side of the app. A button was implemented to remove all characters from favorites.
Users can navigate to another screen by pressing on a card, they will be moved to a screen with detailed information about chosen character.
React navigation was used to implement multiple screens, redux toolkit was used for global state management and api calls(thunks), react paper was used as a ui library of choice.

CharacterCard.tsx - a component that serves as characters card displayed on list screen. It renders with memo to not allow all character cards to rerender each time a global state containing characters is updated. Has a button that allows users to toggle characters in and out of favorites.
CharacterDetails.tsx - a component that serves as a sole component of app's details screen, it recieves a character object as props, displaying detailed information about a chosen character.
CharacterList.tsx - a component that serves as a list of all character cards, character cards are rendered with flatlists and has pagination logic implemented by making additional API calls, if possible, when user reaches the end of the list.
FavoritesDisplay.tsx - a component that serves as a display for genders of characters that are currently favorites. It displays genders by using a global state. Has a button that allows app's user to remove all characters from favorites.
LoadinIndicator - a component that serves as a loading indicator at the top side of the screen to let user know an API call is being made.

charactersSlice.ts - a redux toolkit driven file that handles all API call logic. It was used to separate business logic from UI components.
favortiesSlice.ts - a redux toolkit driven file that handles a global state of favorited characters.
hooks.ts - a file containing information about useDispatch and useSelector from redux toolkit, allows for easier implementation of said functions with typescript.

DetailsScreen.tsx - a component that serves as a secondary screen that users can navigate to by pressing a character card. Displays CharacterDetails.tsx.
ListScreen - a component that serves as an initional screen for the app. An initial API call is called from this component. Displays all other components, other than CharacterDetails.tsx.

store.ts - redux toolkit driven file that stores information about app's global states.

types.ts - a typescript-related file where app's typescript interfaces and types are listed. These types are used all across the app's logic.

App.tsx - serves as an entry point to the program.
