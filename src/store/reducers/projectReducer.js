const initState = {
    projects: [
        {id: '1', title: 'Project One', content: 'Complete the header component'},
        {id: '2', title: 'Project Two', content: 'Complete the nav component'},
        {id: '3', title: 'Project Three', content: 'Complete the body component'},
        {id: '4', title: 'Project Four', content: 'Complete the footer component'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer