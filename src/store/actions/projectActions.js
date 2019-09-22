export const createProject = (project) => {
    return (dispatch, getState) => {
        // async call to DB 
        dispatch({ type: 'CREATE_PROJECT', project });
    }
};