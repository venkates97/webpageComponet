import { useState } from 'react'
import { Navigation } from './componets/Navigation'
import { Masthead } from './componets/Masthead'
import { IconGrid } from './componets/IconGrid'
import { ImageShowcase } from './componets/ImageShowcase'
import { Testimonial } from './componets/Testimonial'
import { CalltoAction } from './componets/CalltoAction'
import { Footer } from './componets/Footer'

function App() {





  return (
    <>

      {/* <!-- Navigation--> */}
      <Navigation />

      {/* <!-- Masthead--> */}
      <Masthead />

      {/* <!-- Icons Grid--> */}
      <IconGrid />

      {/* <!-- Image Showcases--> */}
      <ImageShowcase />

      {/* <!-- Testimonials--> */}
      <Testimonial />

      {/* <!-- Call to Action--> */}
      <CalltoAction />

      {/* <!-- Footer--> */}
      <Footer />

        

    </>
  )
}

export default App