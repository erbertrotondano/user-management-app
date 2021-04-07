import React from 'react';

const CreateUser = React.lazy(() => import('./views/users/CreateUser'));
const ListUsers = React.lazy(() => import('./views/users/ListUsers'));
const Profile = React.lazy(() => import('./views/users/Profile'));

const routes = [
  { path: '/users', exact: true,  name: 'Users', component: ListUsers },
  { path: '/profile/:id', exact: true, name: 'User Profile', component: Profile },
  { path: '/registry', exact: true, name: 'Create User', component: CreateUser }
];

export default routes;
