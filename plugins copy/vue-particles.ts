import Particles from '@tsparticles/vue3';
import { loadSlim } from '@tsparticles/slim';
export default defineNuxtPlugin((app) => {
  app.vueApp.use(Particles, {
    init: async (engine) => {
      // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
      await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    }
  });
});
