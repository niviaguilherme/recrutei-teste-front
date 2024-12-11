import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationPortuguese from './portuguese/terms.json'

const resources = {
  ptBr: {
    translation: translationPortuguese,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'ptBr',
})

export default i18next
