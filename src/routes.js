import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes =[
    { path: '', component: Home},
    { path: '/user', component: User,
        children: [
            {path: '', component: UserStart},
            {path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                console.log('User Detail Route');
                next();
            }},
            {path: ':id/edit', component: UserEdit, name: 'useredit'}
        ]
    }
];