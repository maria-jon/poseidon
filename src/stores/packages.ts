import { ref } from 'vue'
import { defineStore } from 'pinia'

import ines from '../assets/Images/ines.jpg'
import thesiren from '../assets/Images/the-siren.jpg'
import poseidontemple from '../assets/Images/poseidons-temple.jpg'
import thebluelagoon from '../assets/Images/the-blue-lagoon.jpg'

interface Ipackages {
  text: { header: string; subheader: string; subtext: string; features: string[] }
  image: string
  id: number
  imgWidth: number
  imgHeight: number
  route: string
}

export const usePackageStore = defineStore('packages', () => {
  const packages = ref<Ipackages[]>([])

  const initializePackages = () => {
    packages.value = [
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
        imgWidth: 2560,
        imgHeight: 1440,
        route: '/booking',
      },
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
        imgWidth: 2560,
        imgHeight: 1440,
        route: '/booking',
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
        imgWidth: 2560,
        imgHeight: 1440,
        route: '/booking',
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
        imgWidth: 2560,
        imgHeight: 1440,
        route: '/booking',
      },
    ]
  }

  initializePackages()

  return { packages, initializePackages }
})
