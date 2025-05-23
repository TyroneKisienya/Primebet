import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import AmericanFootball from "./pages/AmericanFootball.vue";
import AussieRules from "./pages/AussieRules.vue";
import Bandy from "./pages/Bandy.vue";
import Basketball from "./pages/Basketball.vue";
import Boxing from "./pages/Boxing.vue";
import Cycling from "./pages/Cycling.vue";
import Darts from "./pages/Darts.vue";
import Cricket from "./pages/Cricket.vue";
import ERocketLeague from "./pages/ERocketLeague.vue";
import ECricket from "./pages/ECricket.vue";
import EFighting from "./pages/EFighting.vue";
import EShooter from "./pages/EShooter.vue";
import FifaVolta from "./pages/FifaVolta.vue";
import Floorball from "./pages/Floorball.vue";
import Handball from "./pages/Handball.vue";
import Futsal from "./pages/Futsal.vue";
import IceHockey from "./pages/IceHockey.vue";
import Kabaddi from "./pages/Kabaddi.vue";
import Mma from "./pages/Mma.vue";
import Nba2k from "./pages/Nba2k.vue";
import PenaltyShootout from "./pages/PenaltyShootout.vue";
import Promotions from "./pages/Promotions.vue";
import Rugby from "./pages/Rugby.vue";
import Soccer from "./pages/Soccer.vue";
import Specials from "./pages/Specials.vue";
import Squash from "./pages/Squash.vue";
import TableTenis from "./pages/TableTenis.vue";
import Tennis from "./pages/Tennis.vue";
import VolleyBalls from "./pages/VolleyBalls.vue";
import WaterPolo from "./pages/WaterPolo.vue";
import Wrestling from "./pages/Wrestling.vue";
import CreateAccount from "./pages/CreateAccount.vue";
import LayoutTwo from "./Layouts/LayoutTwo.vue";
import Login from "./pages/Login.vue";
import LayoutThree from "./Layouts/LayoutThree.vue";
import Dashboard from "./pages/Dashboard.vue";
import ForgotPassword from './pages/ForgotPassword.vue';
import ResetPassword from "./pages/ResetPassword.vue";


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/american-football",
      component: AmericanFootball,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/aussie-rules",
      component: AussieRules,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/bandy",
      component: Bandy,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/basketball",
      component: Basketball,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/boxing",
      component: Boxing,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/cycling",
      component: Cycling,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/cricket",
      component: Cricket,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/darts",
      component: Darts,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/ecricket",
      component: ECricket,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/efighting",
      component: EFighting,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/erocket-league",
      component: ERocketLeague,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/eshooter",
      component: EShooter,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/fifa-volta",
      component: FifaVolta,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/floorball",
      component: Floorball,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/futsal",
      component: Futsal,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/handball",
      component: Handball,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/ice-hockey",
      component: IceHockey,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/ice-hockey",
      component: IceHockey,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/kabaddi",
      component: Kabaddi,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/mma",
      component: Mma,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/nba-2k",
      component: Nba2k,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/penalty-shootout",
      component: PenaltyShootout,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/promotions",
      component: Promotions,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/rugby",
      component: Rugby,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/soccer",
      component: Soccer,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/specials",
      component: Specials,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/squash",
      component: Squash,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/table-tennis",
      component: TableTenis,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/tennis",
      component: Tennis,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/volleyball",
      component: VolleyBalls,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/waterpolo",
      component: WaterPolo,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/wrestling",
      component: Wrestling,
      meta: { title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/create-account",
      component: CreateAccount,
      meta: { layout: LayoutTwo, title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/login",
      component: Login,
      meta: { layout: LayoutTwo, title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/login",
      component: Login,
      meta: { layout: LayoutTwo, title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/dashboard",
      component: Dashboard ,
      meta: { layout: LayoutThree, title: "Oddsx - Oddsx VueJs Template" },
    },
    {
      path: "/forgot-password",
      component: ForgotPassword,
    },
    {
      path: "/reset-password/:token",
      component: ResetPassword,
    }
  ],
});
