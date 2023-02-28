import React from 'react';
import StoriesElement from "./StoriesElement";
import {StoryModel} from "../../../models";

interface StoriesListProps {
    stories: Array<StoryModel>
}

const StoriesList = (props: StoriesListProps) => {
    return (
        <>
            {props.stories.map(story => <StoriesElement story={story} />)}
        </>
    );
};

export default StoriesList;