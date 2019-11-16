import React from 'react';

import {
    StatsContent,
    Description,
    Weight,
    Height,
    TitleDescription,
    HeightName,
    HeightValue,
    WeightName,
    WeightValue
} from './styles';

export default function About({ description, height, weight }) {
    return (
        <>
            <TitleDescription>Description</TitleDescription>
            <Description>{ description }</Description>
            <StatsContent>
                <Height>
                    <HeightName>Height</HeightName>
                    <HeightValue>{ height / 10 } m</HeightValue>
                </Height>
                <Weight>
                    <WeightName>Weight</WeightName>
                    <WeightValue>{ weight / 10 } Kg</WeightValue>
                </Weight>
            </StatsContent>
        </>
    );
}