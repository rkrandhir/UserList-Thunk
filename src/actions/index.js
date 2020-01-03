import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => 
    async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');
    
    dispatch(
        {
            type: 'FETCH_POSTS',
            payload: response.data
        }        
    ) 
  };  


/*
Actions must be plain objects
Use custom middleware for async actions

ROLE OF MIDDLEWARE (THUNK) -  to deal with async action creator
*/