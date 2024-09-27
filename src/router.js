import { createRouter, createWebHistory } from "vue-router";
import AreaTrapeze from "./components/exercicios/AreaTrapeze.vue";
import CircleArea from "./components/exercicios/CircleArea.vue";
import EquilateralTriangle from "./components/exercicios/EquilateralTriangle.vue";
import Home from "./components/HomePage.vue";
import SobreNos from "./components/SobreNos.vue";

const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/AreaTrapeze',
        name: 'Trapeze',
        component: AreaTrapeze
    },
    {
        path: '/CircleArea',
        name: 'Circle',
        component: CircleArea
    },
    {
        path: '/EquilateralTriangle',
        name: 'Triângulo Equilatero',
        component: EquilateralTriangle
    },
    {
        path: '/SobreNos',
        name: 'Sobre Nós',
        component: SobreNos
    },
    /*{
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/loop',
        name: 'Loop',
        component: LoopComponent
    }*/

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;