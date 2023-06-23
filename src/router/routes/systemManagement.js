export default [
    {
        path: '/SystemManagement/ManagerList',
        name: 'SystemManagement-ManagerList',
        component: () => import('@/views/system-management/ManagerList.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    // {
    //     path: '/SystemManagement/ManagerCreate',
    //     name: 'SystemManagement-ManagerCreate',
    //     component: () => import('@/views/system-management/ManagerCrud.vue'),
    //     meta: {
    //         requiresAuth: true,
    //     },
    // },
]
