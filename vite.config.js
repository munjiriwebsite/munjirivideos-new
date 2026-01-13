import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        portfolio: path.resolve(__dirname, 'video-production-portfolio.html'),
        creativevideoproductions: path.resolve(__dirname, 'creative-video-productions.html'),
        charityvideoproduction: path.resolve(__dirname, 'charity-video-production.html'),
        naturevideoproduction: path.resolve(__dirname, 'nature-video-production.html'),
        blog: path.resolve(__dirname, 'blog.html'),
        services: path.resolve(__dirname, 'video-content-packages.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        africanbatconservationmunjirivideos: path.resolve(__dirname, 'african-bat-conservation-munjiri-videos.html'),
        brandstoryvideoguide: path.resolve(__dirname, 'brand-story-video-guide.html'),
        brandvideoproduction: path.resolve(__dirname, 'brand-video-production.html'),
        brandvideos: path.resolve(__dirname, 'brand-videos.html'),
        charityvideographer: path.resolve(__dirname, 'charity-videographer.html'),
        charlestonhouse: path.resolve(__dirname, 'charleston-house.html'),
        coimbravideoproduction: path.resolve(__dirname, 'coimbra-video-production.html'),
        collingwoodnorrisknitwearmunjirivideos: path.resolve(__dirname, 'collingwood-norris-knitwear-munjiri-videos.html'),
        commonmistakessocialmediavideoproduction: path.resolve(__dirname, 'common-mistakes-social-media-video-production.html'),
        dehyecollectivecapetown: path.resolve(__dirname, 'dehye-collective-cape-town.html'),
        dronevideographerportugal: path.resolve(__dirname, 'drone-videographer-portugal.html'),
        videoproductioncapetown: path.resolve(__dirname, 'video-production-cape-town.html'),
        videoproductionkenya: path.resolve(__dirname, 'video-production-kenya.html'),
        videoproductionportugal: path.resolve(__dirname, 'video-production-portugal.html'),
        videoproductionsouthafrica: path.resolve(__dirname, 'video-production-south-africa.html'),
        videographerportugal: path.resolve(__dirname, 'videographer-portugal.html'),
      }
    }
  }
})
