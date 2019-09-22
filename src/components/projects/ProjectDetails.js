import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ex sunt labore asperiores consectetur inventore, nam qui facere, optio quae aliquam cupiditate omnis a in suscipit necessitatibus aperiam quis laborum!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Post by Saad Koubeissi</div>
                    <div>2nd June, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
