// ─────────────────────────────────────────────────────────────────────────
// Product catalog, keyed by service slug.
//
// To add products for another service, add a new entry below using the same
// slug as the service card (see slugify in Services.jsx) and fill in `products`.
// The product page template (src/pages/ProductPage.jsx) renders any entry here
// automatically — no extra code needed.
// ─────────────────────────────────────────────────────────────────────────

export const productCatalog = {
  'fire-alarm-system': {
    title: 'Fire Alarm System',
    tagline: 'Intelligent addressable detection — early warning for smoke, heat & gas',
    description:
      'Notifier intelligent addressable fire alarm control panels, detectors and modules ' +
      'engineered for reliable, code-compliant early fire detection across enterprise facilities.',
    color: '#FF6B35',
    products: [
      { id: 1, brand: 'Notifier', title: 'NFS2-3030 Intelligent Addressable Fire Alarm Control Panel', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROoLvglo8AgBRbQ-rZ2iYDKWf_RGtIWWrERc9eBK1_wA&s=10' },
      { id: 2, brand: 'Notifier', title: 'NFS2-640 Intelligent Addressable Fire Alarm Control Panel', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKqJquRh7Jg_VASwYUxqmhDUiWMqQnFqz_RjDsrEvIw&s=10' },
      { id: 3, brand: 'Notifier', title: 'NFS-320 Intelligent Addressable Fire Alarm Control Panel', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywZWIsyiEgpmXIJ-ig4pn0k7cdROm3kU3tkg4dZyFUg&s=10' },
      { id: 4, brand: 'Notifier', title: 'FSP-951 Series Addressable Photoelectric Smoke Detectors', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJljrYZv9qCtvoPjdebHjOESDkLcrOb3peHPgUy4Awzw&s=10' },
      { id: 5, brand: 'Notifier', title: 'LCM-320 and LEM-320 Loop Control and Expander Modules', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwf5xC9BCre7lfsjMj-Sfx7ljtnUm9eDphz2buiQkeFQ&s=10' },
      { id: 6, brand: 'Notifier', title: 'CONVENTIONAL - Photoelectric Smoke Detector', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquQMFmVPIgOf6q9jbcFZQN9yYfSBMifIz_9p2H1Pcjw&s=10' },
      { id: 7, brand: 'Notifier', title: 'FMM-1(A), FMM-101(A), FZM-1(A) & FDM-1(A) Monitor Modules', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSw_Z7BONnymtRew4T3mDrXd15Xr9KJMSolPYJQ04d8TS0DqVZPklmP4&s=10' },
      { id: 8, brand: 'Notifier', title: 'FCM-1(A) & FRM-1(A) Series Control and Relay Modules', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6MFgk3XaHCFXA-4SR_4_GKqpQgzltrgeskuvtLkHLw&s=10' },
      { id: 9, brand: 'Notifier', title: 'Addressable Control Output Module', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyfK0GOtgto1m03zPfNkIC68p7QORSDC6Fi6ODVgG1tQ&s=10' },
      { id: 10, title: 'HM-MCP-GLASS-UL', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHN4xntrwsUfzuYmQ_q_7I8jWr4yd4UStAr6Noc1vZQ&s' },
    ],
  },

  'cctv-surveillance': {
    title: 'CCTV Surveillance',
    tagline: 'HD cameras and intelligent video management for every environment',
    description:
      'Honeywell MAXPRO network video recorders, video management software and high-performance ' +
      'cameras delivering scalable, end-to-end surveillance for facilities of any size.',
    color: '#059669',
    products: [
      { id: 1, brand: 'Honeywell', title: 'MAXPRO NVR SE', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LZXaBHKkxYCDGCx148c6OKDKx6ahOEhWghSSaTnX0Q&s=10' },
      { id: 2, brand: 'Honeywell', title: 'MAXPRO NVR PE', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEk1sNGCtKrR5OTJQnrptDq7KLhg7H5urmVZIQEVoOFQ&s=10' },
      { id: 3, brand: 'Honeywell', title: 'MAXPRO VMS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYd6qbAVVDnI-_uNfxpiXGFpJa9ilT7sRX248k5r13Kg&s=10' },
      { id: 4, brand: 'Honeywell', title: '35 SERIESH C35WZ2R25 HC35WZ5R30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgXMis6lP5vXy52e6OGJ-h1UTGxbWSlXT5S8ZDOcqgQ&s=10' },
      { id: 5, brand: 'Honeywell', title: 'Performance Series Embedded NVRs', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LZXaBHKkxYCDGCx148c6OKDKx6ahOEhWghSSaTnX0Q&s=10' },
    ],
  },

  'access-control-system': {
    title: 'Access Control System',
    tagline: 'Smart authentication and managed access for sensitive areas',
    description:
      'Honeywell and Lenel access control controllers, readers, credentials and locking hardware ' +
      'for secure, auditable entry management across your facility.',
    color: '#4FC3F7',
    products: [
      { id: 1, brand: 'Honeywell', title: 'PRO3000 2-Door Intelligent Controller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOv5REc7JLGFVHhGMGRrhNmIW5Te5ucpADalbo7VDzmg&s' },
      { id: 2, brand: 'Honeywell', title: 'HON-BIOEM-500TA', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkZu8Vr6pcQDF9wZ944TqWS7HE9NzR9xVfCRk51SmSQ&s=10' },
      { id: 3, brand: 'Honeywell', title: 'OmniProx Proximity Card Readers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Py0xJdasLfyVJJ8Zatb3Z11PMCFvBJjj5eBgD5n78g&s=10' },
      { id: 4, brand: 'Honeywell', title: 'MF-01 MIFARE Proximity Cards', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7k-U2rqbJJoM01Pnn5vF9HOw-r6IuXXysdL8d4b_qvA&s' },
      { id: 5, brand: 'Lenel', title: 'Lenel Access Control Panel', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShjoy4rKqIxZsXNVbpC8GukptosDmuN31XoHGTjHMMA&s=10' },
      { id: 6, brand: 'Lenel', title: 'Lenel Proximity Reader', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2sRfwQXtXTx16q8Oq6XerIleL3-0pXV0IYlFYAlEGQ&s=10' },
      { id: 7, brand: 'Lenel', title: 'Lenel EM Lock', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QGPY133JaXVXD5-9MIHH2XK4XrPrz9mwmsuH6bFe4w&s=10' },
      { id: 8, brand: 'Lenel', title: 'Lenel Exit Push Button', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNEdHeLqe7G8mIG4x4BJaeH-EqEUJmn_HlLAK5xsopA&s=10' },
    ],
  },

  'building-management-system': {
    title: 'Building Management System',
    tagline: 'Centralized, energy-efficient control of every building system',
    description:
      'Honeywell BMS controllers and software for unified, BACnet-native management of HVAC, ' +
      'lighting and energy across your facility.',
    color: '#7C3AED',
    products: [
      { id: 1, brand: 'Honeywell', title: 'WEBs-N4 Automation Controller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3K2pL-KlLHjFxwPhd7GZxK24JAI6V9VA5-TvOOd6BA&s=10' },
      { id: 2, brand: 'Honeywell', title: 'WEBs-AX Automation Controller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUrK5MUB-W_lF13d0zjCEna-DHN0zTDzMV6ipfdOoeg&s=10' },
      { id: 3, brand: 'Honeywell', title: 'ComfortPoint Open CPO-PC500 Plant Controller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-vAHiXWi_ES8NUYl-SbWk-JQRAYkVtN7wR1N4_BbVQ&s=10' },
      { id: 4, brand: 'Honeywell', title: 'ComfortPoint Open CPO-PC200 Plant Controller', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhwA0twFOQT8TWemHN0WCPnn21cBP04OYMG2NJ3AVOA&s=10' },
      { id: 5, brand: 'Honeywell', title: 'ComfortPoint Open Room Controllers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZr2IiAqNF_zaXMsduNobrvk2VODtPtzVG2PfAUq-Fcg&s=10' },
      { id: 6, brand: 'Honeywell', title: 'Excel Web Building Controller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrLjrnYTFKOC8QQojxfXs59BR_mpIy4dnXVcxFeDf1Q&s=10' },
    ],
  },

  'firefighting-system': {
    title: 'Firefighting System',
    tagline: 'Complete fire suppression — from hydrants to clean-agent systems',
    description:
      'End-to-end fire suppression solutions covering hydrant networks, sprinklers, clean-agent ' +
      'systems, pump rooms and standpipes for code-compliant protection.',
    color: '#0891B2',
    products: [
      { id: 1, title: 'Fire Hydrant System', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMmzU5gIGbQaTdQqccMFbt3r0q9FzaRY_P9AriZxFmg&s=10' },
      { id: 2, title: 'Automatic Sprinkler System', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVycD3jnviF4DEB4rSZvueql_YSoVU0Rb7fnyTiehI5g&s=10' },
      { id: 3, title: 'FM-200 Clean Agent Suppression System', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6In7_BsYOAt7lqxCaH0sCTSr1I8AYAIyZQfFalYoH2g&s=10' },
      { id: 4, title: 'Fire Pump Set (Electric, Diesel & Jockey)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrA3DlkN5KZjT0e-vVYGmA0T0KcKtP6mS_rYBODwWPjA&s=10' },
      { id: 5, title: 'Wet Riser & Standpipe System', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpF4vEt47JX0FczsxGhYqtL1j4UuhY8fejUTTaSBi_ww&s=10' },
      { id: 6, title: 'Portable Fire Extinguishers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2y0yGcZP_HJ_rks0W8m5tNu5jbPpe7Bh7tN9BjMy2w&s=10' },
    ],
  },

  'intruder-alarm-system': {
    title: 'Intruder Alarm System',
    tagline: '24/7 perimeter and interior intrusion detection',
    description:
      'Honeywell Galaxy Dimension integrated intrusion and door control panels with flexible ' +
      'keypads and communication modules for Grade 3 security installations.',
    color: '#DC2626',
    products: [
      { id: 1, brand: 'Honeywell', title: 'Galaxy Dimension GD-48 Control Panel', image: 'https://placehold.co/400x300?text=Galaxy+GD-48' },
      { id: 2, brand: 'Honeywell', title: 'Galaxy Dimension GD-96 Control Panel', image: 'https://placehold.co/400x300?text=Galaxy+GD-96' },
      { id: 3, brand: 'Honeywell', title: 'Galaxy Dimension GD-264 Control Panel', image: 'https://placehold.co/400x300?text=Galaxy+GD-264' },
      { id: 4, brand: 'Honeywell', title: 'Galaxy Dimension GD-520 Control Panel', image: 'https://placehold.co/400x300?text=Galaxy+GD-520' },
      { id: 5, brand: 'Honeywell', title: 'MK7 LCD Keypad', image: 'https://placehold.co/400x300?text=MK7+Keypad' },
      { id: 6, brand: 'Honeywell', title: 'E080-04 Ethernet Module', image: 'https://placehold.co/400x300?text=E080-04+Ethernet' },
    ],
  },

  'boom-barrier': {
    title: 'Boom Barrier',
    tagline: 'Fast, reliable automated vehicle access control',
    description:
      'Magnetic AutoControl MHTM MicroDrive boom barriers for access, parking and toll lanes — ' +
      'low power, high duty cycle and maintenance-free operation.',
    color: '#D97706',
    products: [
      { id: 1, brand: 'Magnetic AutoControl', title: 'Access Pro-H Barrier', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbdHYPuvgb8F5s6PLywGHGrPNuQ-dnZSAO4QzmoEBUA&s=10' },
      { id: 2, brand: 'Magnetic AutoControl', title: 'Access Pro-L Barrier', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7t1VADZPTeJqZDvhJzm6GaOAbe_5Ev8k-el3c8hUrxA&s=10' },
      { id: 3, brand: 'Magnetic AutoControl', title: 'Parking Pro Barrier', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2f6XIHrovksuQ6MBANep4TNByGBPCcJC3bDjaWKCvIQ&s=10'},
      { id: 4, brand: 'Magnetic AutoControl', title: 'Toll Pro Barrier', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswlR0PWEi2KdshTU-bnziL-7uuxx8XyBDjhGjUcqkiw&s=10' },
      { id: 5, brand: 'Magnetic AutoControl', title: 'MGC Pro Control Unit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqQudNfVlF9xQrA24rRTCN6CU5EBzl8fZGM5Qy45irg&s=10' },
      { id: 6, brand: 'Magnetic AutoControl', title: 'MicroBoom Barrier Arm', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqohVkHwym_Eibf1PA9lmsfbYA8aA8B0IYFgC24gNNg&s=10' },
    ],
  },

  'bollard-system': {
    title: 'Bollard System',
    tagline: 'High-strength vehicle intrusion prevention',
    description:
      'FAAC automatic and high-security hydraulic bollards for access control and anti-terror ' +
      'perimeter protection of critical facilities.',
    color: '#7C3AED',
    products: [
      { id: 1, brand: 'FAAC', title: 'J200 HA Automatic Bollard', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsjiLuNwQm0-0Z6HUHMFIVb3B2cslo-v6NEjEZJLblw&s=10' },
      { id: 2, brand: 'FAAC', title: 'J275 HA V2 Automatic Bollard', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWM7ko-tQ8vL7bxyHW4bkGfu1P_EW5d7FWVOm9OlJZdQ&s=10' },
      { id: 3, brand: 'FAAC', title: 'J275 2K20 High-Security Bollard', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2H9NyHMwZ1o5pJmNy0m_7IA4pwn34TZdbkSVrTm2E-g&s=10' },
      { id: 4, brand: 'FAAC', title: 'JS48 Anti-Terror Bollard', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ712Gj6OPCg-DygNbsf1cL-qwy9rF5SgPT1x39_25S-Q&s=10' },
      { id: 5, brand: 'FAAC', title: 'JS80 Anti-Terror Bollard', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJleGIEJgfMYtcrT01heh-OX5JCPVWneqewmK9N2Q0yw&s=10' },
      { id: 6, brand: 'FAAC', title: 'J355 HA Semi-Automatic Bollard', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5palNpsTwNx8PAOL1UANXw_OryqMUyqBLkqBBVnTGQ&s=10' },
    ],
  },

  'flap-barrier': {
    title: 'Flap Barrier',
    tagline: 'Elegant, high-throughput pedestrian lane management',
    description:
      'ZKTeco flap barrier speed gates with anti-tailgating and multi-credential support for ' +
      'smooth, secure pedestrian access in lobbies and transit hubs.',
    color: '#0284C7',
    products: [
      { id: 1, brand: 'ZKTeco', title: 'FBL2000 Pro Series Flap Barrier', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGzRnalHRHTW8q2ITsg_lcVbyZdmAhLWw6SYxy284QQ&s=10' },
      { id: 2, brand: 'ZKTeco', title: 'FBL2011 Pro Flap Barrier', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cAnH-60-mbWQ7dif_fAX10iJ5GoMBxisSi3JUcqeHw&s=10' },
      { id: 3, brand: 'ZKTeco', title: 'FBL2022 Pro Flap Barrier', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtuo5IHmJQTzLoVE8WEZG0kwkFJY4ZuNt-cid3m1d3w&s=10' },
      { id: 4, brand: 'ZKTeco', title: 'FBL5000 Pro Series Flap Barrier', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspdojcW2EtiGBlMbK8j0wOoG6zAyQ31Q502OKlp_ZxQ&s=10' },
      { id: 5, brand: 'ZKTeco', title: 'FBL6000 Pro Modular Flap Barrier', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9FquBjG6fd5ZbL9-KG_zbwfIwg3wnug-lsA3pVQYCA&s=10' },
      { id: 6, brand: 'ZKTeco', title: 'Mars Series Speed Gate', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeEOJAIyDwH4Rh18gVGQ48rpOyFuHqPGvtIrP3tEsYg&s=10' },
    ],
  },

  'electrical-systems': {
    title: 'Electrical Systems',
    tagline: 'End-to-end electrical design & installation',
    description:
      'Power distribution, protection and backup solutions — from LT/HT panels and distribution ' +
      'boards to UPS and earthing for safe, reliable electrical infrastructure.',
    color: '#CA8A04',
    products: [
      { id: 1, title: 'LT & HT Distribution Panels', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBM-15ycEViyHTdKdp8NejDLjw8jAaLowRp5PKpLPeZA&s=10' },
      { id: 2, title: 'Distribution Boards (DBs)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgxwTL-dI1IFf-L1-2PWTLjRbdlyqkgfFWMWZMz9vUA&s=10' },
      { id: 3, title: 'MCB, RCCB & Circuit Protection', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVYiwUcKmu4297M-5PLragY9ukhZ-QtpqjkHjvxd_uA&s=10' },
      { id: 4, title: 'Cable Tray & Raceway Systems', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMMH0ur-b_zbipdJ46NkvbSvrajXwq18ikSrUfUYM9iQ&s=10' },
      { id: 5, title: 'Online UPS Systems', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzoj4alIJSj0Xz9LyAlaeoDVTeV2T2tP4C9mNbtDdnA&s=10' },
      { id: 6, title: 'Earthing & Lightning Protection', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79235qhZH5MqWmVlHRqh87cpabNrxXRn-tSgB3YUGwQ&s=10' },
    ],
  },

  // ── Add more services here ────────────────────────────────────────────────
  // 'service-slug': {
  //   title: '...',
  //   tagline: '...',
  //   description: '...',
  //   color: '#...',
  //   products: [
  //     // `brand` is optional — add it to group products by brand on the page.
  //     { id: 1, brand: 'Brand', title: '...', image: '...' },
  //   ],
  // },
}

export function getServiceBySlug(slug) {
  return productCatalog[slug] || null
}
