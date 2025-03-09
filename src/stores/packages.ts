import { ref } from 'vue'
import { defineStore } from 'pinia'

import ines from '../assets/Images/Komprimerad package-ines_2560x1440_jpg (1).jpg'
import thesiren from '../assets/Images/Komprimerad package-the-siren_2560x1440_jpg (1).jpg'
import poseidontemple from '../assets/Images/Komprimerad package-poseidons-temple_2560x1440_jpg (1).jpg'
import thebluelagoon from '../assets/Images/Komprimerad package-the-blue-lagoon_2560x1440_jpg (1).jpg'

interface Ipackages {
  text: { header: string; subheader: string; subtext: string; features: string[] }
  image: string
  id: number
}

export const usePackageStore = defineStore('packages', () => {
  const packages = ref<Ipackages[]>([])

  const initializePackages = () => {
    packages.value = [
      {
        text: {
          header: 'Inés',
          subheader: 'A Pure and Elegant Stay',
          subtext:
            'For those who love timeless beauty, the Inès suite is a white-themed sanctuary, offering a peaceful and luxurious retreat. This package features:',
          features: [
            'A minimalist yet elegant suite with floor-to-ceiling ocean views',
            'A personalized wellness program, including yoga and meditation',
            'Afternoon tea with ocean-inspired delicacies',
            'Access to our exclusive infinity pool & relaxation lounge',
          ],
        },

        image: ines,
        id: 0,
      },
      {
        text: {
          header: 'The Siren',
          subheader: 'A Romantic Retreat',
          subtext:
            'Perfect for couples, this package offers an enchanting getaway in an elegant, ocean-inspired suite. You’ll enjoy:',
          features: [
            'A luxury sea-view suite with soft, shimmering décor',
            'A candlelit dinner for two at The Pearl Restaurant',
            'A private sunset cruise with champagne',
            'Couples’ massage at The Tidal Spa',
          ],
        },
        image: thesiren,
        id: 1,
      },
      {
        text: {
          header: 'Poseidon’s Temple',
          subheader: 'A Royal Experience',
          subtext:
            'Live like the god of the sea in our most grand and opulent suite, designed to reflect Poseidon’s legendary palace. This exclusive package includes:',
          features: [
            'A spacious royal suite with golden accents and panoramic ocean views',
            'VIP access to all hotel amenities',
            'A 5-course gourmet dining experience with a private chef',
            'A deep-sea diving excursion to Atlantis hidden ruins',
          ],
        },
        image: poseidontemple,
        id: 2,
      },
      {
        text: {
          header: 'The Blue Lagoon',
          subheader: 'A Tranquil Escape',
          subtext:
            'Stay in a beautifully designed blue-themed room, inspired by the serene waters of the lagoon. This package includes:',
          features: [
            'A guided snorkeling tour through Atlantis’ coral gardens',
            'A deluxe ocean-view room',
            'Daily breakfast at Neptune’s Feast',
            'Access to the Tidal Spa & Thermal Pools',
          ],
        },
        image: thebluelagoon,
        id: 3,
      },
    ]
  }

  initializePackages()

  return { packages, initializePackages }
})

// !!!Gör så här för att använda i en komponent (specifika element som div span etc kan självklart bytas ut)!!!

// <script setup lang="ts">
// import { usePackageStore } from '@/stores/packages'
// import { storeToRefs } from 'pinia'

// const packageStore = usePackageStore()
// const { packages } = storeToRefs(packageStore)
// </script>

// <template>
//   <div class="">
//     <div v-for="packageItem in packages" :key="packageItem.id" class="">
//       <img :src="packageItem.image" alt="" />
//       <h2>{{ packageItem.text.header }}</h2>
//       <h3>{{ packageItem.text.subheader }}</h3>
//       <p>{{ packageItem.text.subtext }}</p>
//       <ul>
//         <li v-for="(feature, index) in packageItem.text.features" :key="index">
//           <span>{{ feature }}</span>
//         </li>
//       </ul>
//     </div>
//   </div>
// </template>
