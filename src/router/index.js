import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from '@/components/HelloWorld.vue'
import Calculator from '@/components/Calculator.vue'

const routes = [
    {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
    },
    {
    path: "/calcu",
    name: "Calculator",
    component: Calculator,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;