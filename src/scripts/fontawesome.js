import fontawesome from '@fortawesome/fontawesome'

import faCodepen from '@fortawesome/fontawesome-free-brands/faCodepen'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faGitlab from '@fortawesome/fontawesome-free-brands/faGitlab'
import faGoogleScholar from './icons/faGoogleScholar'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faKeybase from '@fortawesome/fontawesome-free-brands/faKeybase'
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn'
import faTelegramPlane from '@fortawesome/fontawesome-free-brands/faTelegramPlane'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'

console.log(fontawesome.icon(faGoogleScholar).abstract)

fontawesome.library.add([
  faCodepen,
  faEnvelope,
  faFacebookF,
  faGithub,
  faGitlab,
  faGoogleScholar,
  faInstagram,
  faKeybase,
  faLinkedinIn,
  faTelegramPlane,
  faTwitter,
  faYoutube
])
