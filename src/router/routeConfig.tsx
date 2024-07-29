import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import Hello from '@/views/hello';
import Characters from '@/views/characters';
import Items from '@/views/items';
import WorldStory from '@/views/worldStory';

import Resources from '@/views/resources';
import ModelRes from '@/views/resources/model';
import RadioRes from '@/views/resources/radio';
import PictureRes from '@/views/resources/picture';
import TextureRes from '@/views/resources/texture';

const routes: RouteObject[] = [
    {
        path: '/hello',
        element: <Hello />,
    },
    {
        path: '/characters',
        element: <Characters />,
    },
    {
        path: '/items',
        element: <Items />,
    },
    {
        path: '/resources',
        element: <Resources />,
        children: [
            {
                path: '/resources',
                element: <Navigate to="/resources/model" />,
            },
            {
                path: '/resources/model',
                element: <ModelRes />,
            },
            {
                path: '/resources/radio',
                element: <RadioRes />,
            },
            {
                path: '/resources/picture',
                element: <PictureRes />,
            },
            {
                path: '/resources/texture',
                element: <TextureRes />,
            },
        ],
    },
    {
        path: '/worldStory',
        element: <WorldStory />,
    },
];

export default routes;
