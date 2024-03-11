import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// https://blog.bogdankostyuk.xyz/p/how-to-nuxt3-and-gsap/
export default defineNuxtPlugin(() => {
    // imported gsap and all plugins needed, then just register them
    gsap.registerPlugin(ScrollTrigger);
    // later you can use them by deconstructing useNuxtApp composable
    // but everything you put in provide will be prefixed with $ symbol to
    // prevent some collisions
    return { provide: { gsap, ScrollTrigger } };
});