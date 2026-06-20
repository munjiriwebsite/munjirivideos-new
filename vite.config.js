import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        blog: path.resolve(__dirname, 'blog/index.html'),
        fieldnotes: path.resolve(__dirname, 'blog/field-notes/index.html'),
        nyikanationalparktravelguide: path.resolve(__dirname, 'blog/nyika-national-park-travel-guide/index.html'),
        pickingdamsonsjamrecipe: path.resolve(__dirname, 'blog/field-notes/picking-damsons-jam-recipe/index.html'),
        wanderingthecederberg: path.resolve(__dirname, 'blog/wandering-the-cederberg/index.html'),
        skills: path.resolve(__dirname, 'blog/skills/index.html'),
        howtobemoreconfidentoncamera: path.resolve(__dirname, 'blog/how-to-be-more-confident-on-camera/index.html'),
        videoadvicecomposition: path.resolve(__dirname, 'blog/video-advice-composition/index.html'),
        videoadvicenaturallight: path.resolve(__dirname, 'blog/video-advice-natural-light/index.html'),
        strategy: path.resolve(__dirname, 'blog/strategy/index.html'),
        thebestwaytouploadvideoonyoutube: path.resolve(__dirname, 'blog/the-best-way-to-upload-video-on-youtube/index.html'),
        contact: path.resolve(__dirname, 'contact/index.html'),
        learn: path.resolve(__dirname, 'learn/index.html'),
        learnvideomaking: path.resolve(__dirname, 'learn/learn-video-making/index.html'),
        locations: path.resolve(__dirname, 'locations/index.html'),
        videoproductionkenya: path.resolve(__dirname, 'locations/kenya/index.html'),
        videographerportugal: path.resolve(__dirname, 'locations/portugal/index.html'),
        videographercoimbra: path.resolve(__dirname, 'locations/portugal/coimbra/index.html'),
        videographerlisbon: path.resolve(__dirname, 'locations/portugal/lisbon/index.html'),
        videographersouthafrica: path.resolve(__dirname, 'locations/south-africa/index.html'),
        videographercapetown: path.resolve(__dirname, 'locations/south-africa/cape-town/index.html'),
        videographeruk: path.resolve(__dirname, 'locations/uk/index.html'),
        videographerlondon: path.resolve(__dirname, 'locations/uk/london/index.html'),
        portfolio: path.resolve(__dirname, 'portfolio/index.html'),
        africanbatconservation: path.resolve(__dirname, 'blog/african-bat-conservation/index.html'),
        charlestonhouse: path.resolve(__dirname, 'blog/charleston-house/index.html'),
        collingwoodnorrisknitwearmunjirivideos: path.resolve(__dirname, 'blog/collingwood-norris-knitwear/index.html'),
        evelynbertrand: path.resolve(__dirname, 'blog/evelyn-bertrand/index.html'),
        katerayguidedwellbeing: path.resolve(__dirname, 'blog/kate-ray-guided-wellbeing/index.html'),
        kewgardenspalmhouse: path.resolve(__dirname, 'blog/kew-gardens-palm-house/index.html'),
        mayamikoameaningfulwardrobe: path.resolve(__dirname, 'blog/mayamiko-a-meaningful-wardrobe/index.html'),
        natashaminyonsaletheadorned: path.resolve(__dirname, 'blog/nastasha-minyon-sale-the-adorned/index.html'),
        souldesignjewellery: path.resolve(__dirname, 'blog/soul-design-jewellery/index.html'),
        sourfigjamrecipe: path.resolve(__dirname, 'blog/sour-fig-jam-recipe/index.html'),
        services: path.resolve(__dirname, 'services/index.html'),
        brandvideoproduction: path.resolve(__dirname, 'services/brand-videographer/index.html'),
        charityvideographer: path.resolve(__dirname, 'services/charity-videographer/index.html'),
        dronevideographer: path.resolve(__dirname, 'services/drone-videographer/index.html'),
        eventvideographer: path.resolve(__dirname, 'services/event-videographer/index.html'),
        socialmediavideograper: path.resolve(__dirname, 'services/social-media-videographer/index.html'),
        travelvideographer: path.resolve(__dirname, 'services/travel-videographer/index.html'),
      }
    }
  }
})
