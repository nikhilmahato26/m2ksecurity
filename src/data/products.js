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
      { id: 1, brand: 'Notifier', title: 'NFS2-3030 Intelligent Addressable Fire Alarm Control Panel', image: 'https://placehold.co/400x300?text=NFS2-3030' },
      { id: 2, brand: 'Notifier', title: 'NFS2-640 Intelligent Addressable Fire Alarm Control Panel', image: 'https://placehold.co/400x300?text=NFS2-640' },
      { id: 3, brand: 'Notifier', title: 'NFS-320 Intelligent Addressable Fire Alarm Control Panel', image: 'https://placehold.co/400x300?text=NFS-320' },
      { id: 4, brand: 'Notifier', title: 'FSP-951 Series Addressable Photoelectric Smoke Detectors', image: 'https://placehold.co/400x300?text=FSP-951' },
      { id: 5, brand: 'Notifier', title: 'LCM-320 and LEM-320 Loop Control and Expander Modules', image: 'https://placehold.co/400x300?text=LCM-320+LEM-320' },
      { id: 6, brand: 'Notifier', title: 'CONVENTIONAL - Photoelectric Smoke Detector', image: 'https://placehold.co/400x300?text=Photoelectric+Smoke+Detector' },
      { id: 7, brand: 'Notifier', title: 'FMM-1(A), FMM-101(A), FZM-1(A) & FDM-1(A) Monitor Modules', image: 'https://placehold.co/400x300?text=FMM+FZM+FDM+Modules' },
      { id: 8, brand: 'Notifier', title: 'FCM-1(A) & FRM-1(A) Series Control and Relay Modules', image: 'https://placehold.co/400x300?text=FCM+FRM+Modules' },
      { id: 9, brand: 'Notifier', title: 'Addressable Control Output Module', image: 'https://placehold.co/400x300?text=Addressable+Control+Output' },
      { id: 10, title: 'HM-MCP-GLASS-UL', image: 'https://placehold.co/400x300?text=HM-MCP-GLASS-UL' },
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
      { id: 1, brand: 'Honeywell', title: 'MAXPRO NVR SE', image: 'https://placehold.co/400x300?text=MAXPRO+NVR+SE' },
      { id: 2, brand: 'Honeywell', title: 'MAXPRO NVR PE', image: 'https://placehold.co/400x300?text=MAXPRO+NVR+PE' },
      { id: 3, brand: 'Honeywell', title: 'MAXPRO VMS', image: 'https://placehold.co/400x300?text=MAXPRO+VMS' },
      { id: 4, brand: 'Honeywell', title: '35 SERIESH C35WZ2R25 HC35WZ5R30', image: 'https://placehold.co/400x300?text=35+Series+HC35WZ' },
      { id: 5, brand: 'Honeywell', title: 'Performance Series Embedded NVRs', image: 'https://placehold.co/400x300?text=Performance+Series+NVR' },
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
      { id: 1, brand: 'Honeywell', title: 'PRO3000 2-Door Intelligent Controller', image: 'https://placehold.co/400x300?text=PRO3000+2+Door' },
      { id: 2, brand: 'Honeywell', title: 'HON-BIOEM-500TA', image: 'https://placehold.co/400x300?text=HON-BIOEM-500TA' },
      { id: 3, brand: 'Honeywell', title: 'OmniProx Proximity Card Readers', image: 'https://placehold.co/400x300?text=OmniProx+Reader' },
      { id: 4, brand: 'Honeywell', title: 'MF-01 MIFARE Proximity Cards', image: 'https://placehold.co/400x300?text=MF-01+MIFARE' },
      { id: 5, brand: 'Lenel', title: 'Lenel Access Control Panel', image: 'https://placehold.co/400x300?text=Lenel+Panel' },
      { id: 6, brand: 'Lenel', title: 'Lenel Proximity Reader', image: 'https://placehold.co/400x300?text=Lenel+Reader' },
      { id: 7, brand: 'Lenel', title: 'Lenel EM Lock', image: 'https://placehold.co/400x300?text=Lenel+EM+Lock' },
      { id: 8, brand: 'Lenel', title: 'Lenel Exit Push Button', image: 'https://placehold.co/400x300?text=Lenel+Exit+Button' },
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
      { id: 1, brand: 'Honeywell', title: 'WEBs-N4 Automation Controller', image: 'https://placehold.co/400x300?text=WEBs-N4' },
      { id: 2, brand: 'Honeywell', title: 'WEBs-AX Automation Controller', image: 'https://placehold.co/400x300?text=WEBs-AX' },
      { id: 3, brand: 'Honeywell', title: 'ComfortPoint Open CPO-PC500 Plant Controller', image: 'https://placehold.co/400x300?text=CPO-PC500' },
      { id: 4, brand: 'Honeywell', title: 'ComfortPoint Open CPO-PC200 Plant Controller', image: 'https://placehold.co/400x300?text=CPO-PC200' },
      { id: 5, brand: 'Honeywell', title: 'ComfortPoint Open Room Controllers', image: 'https://placehold.co/400x300?text=ComfortPoint+Room' },
      { id: 6, brand: 'Honeywell', title: 'Excel Web Building Controller', image: 'https://placehold.co/400x300?text=Excel+Web' },
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
      { id: 1, title: 'Fire Hydrant System', image: 'https://placehold.co/400x300?text=Fire+Hydrant+System' },
      { id: 2, title: 'Automatic Sprinkler System', image: 'https://placehold.co/400x300?text=Sprinkler+System' },
      { id: 3, title: 'FM-200 Clean Agent Suppression System', image: 'https://placehold.co/400x300?text=FM-200+Clean+Agent' },
      { id: 4, title: 'Fire Pump Set (Electric, Diesel & Jockey)', image: 'https://placehold.co/400x300?text=Fire+Pump+Set' },
      { id: 5, title: 'Wet Riser & Standpipe System', image: 'https://placehold.co/400x300?text=Wet+Riser+System' },
      { id: 6, title: 'Portable Fire Extinguishers', image: 'https://placehold.co/400x300?text=Fire+Extinguishers' },
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
      { id: 1, brand: 'Magnetic AutoControl', title: 'Access Pro-H Barrier', image: 'https://placehold.co/400x300?text=Access+Pro-H' },
      { id: 2, brand: 'Magnetic AutoControl', title: 'Access Pro-L Barrier', image: 'https://placehold.co/400x300?text=Access+Pro-L' },
      { id: 3, brand: 'Magnetic AutoControl', title: 'Parking Pro Barrier', image: 'https://placehold.co/400x300?text=Parking+Pro' },
      { id: 4, brand: 'Magnetic AutoControl', title: 'Toll Pro Barrier', image: 'https://placehold.co/400x300?text=Toll+Pro' },
      { id: 5, brand: 'Magnetic AutoControl', title: 'MGC Pro Control Unit', image: 'https://placehold.co/400x300?text=MGC+Pro' },
      { id: 6, brand: 'Magnetic AutoControl', title: 'MicroBoom Barrier Arm', image: 'https://placehold.co/400x300?text=MicroBoom' },
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
      { id: 1, brand: 'FAAC', title: 'J200 HA Automatic Bollard', image: 'https://placehold.co/400x300?text=FAAC+J200+HA' },
      { id: 2, brand: 'FAAC', title: 'J275 HA V2 Automatic Bollard', image: 'https://placehold.co/400x300?text=FAAC+J275+HA+V2' },
      { id: 3, brand: 'FAAC', title: 'J275 2K20 High-Security Bollard', image: 'https://placehold.co/400x300?text=FAAC+J275+2K20' },
      { id: 4, brand: 'FAAC', title: 'JS48 Anti-Terror Bollard', image: 'https://placehold.co/400x300?text=FAAC+JS48' },
      { id: 5, brand: 'FAAC', title: 'JS80 Anti-Terror Bollard', image: 'https://placehold.co/400x300?text=FAAC+JS80' },
      { id: 6, brand: 'FAAC', title: 'J355 HA Semi-Automatic Bollard', image: 'https://placehold.co/400x300?text=FAAC+J355+HA' },
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
      { id: 1, brand: 'ZKTeco', title: 'FBL2000 Pro Series Flap Barrier', image: 'https://placehold.co/400x300?text=FBL2000+Pro' },
      { id: 2, brand: 'ZKTeco', title: 'FBL2011 Pro Flap Barrier', image: 'https://placehold.co/400x300?text=FBL2011+Pro' },
      { id: 3, brand: 'ZKTeco', title: 'FBL2022 Pro Flap Barrier', image: 'https://placehold.co/400x300?text=FBL2022+Pro' },
      { id: 4, brand: 'ZKTeco', title: 'FBL5000 Pro Series Flap Barrier', image: 'https://placehold.co/400x300?text=FBL5000+Pro' },
      { id: 5, brand: 'ZKTeco', title: 'FBL6000 Pro Modular Flap Barrier', image: 'https://placehold.co/400x300?text=FBL6000+Pro' },
      { id: 6, brand: 'ZKTeco', title: 'Mars Series Speed Gate', image: 'https://placehold.co/400x300?text=Mars+Series' },
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
      { id: 1, title: 'LT & HT Distribution Panels', image: 'https://placehold.co/400x300?text=LT+HT+Panels' },
      { id: 2, title: 'Distribution Boards (DBs)', image: 'https://placehold.co/400x300?text=Distribution+Boards' },
      { id: 3, title: 'MCB, RCCB & Circuit Protection', image: 'https://placehold.co/400x300?text=MCB+RCCB' },
      { id: 4, title: 'Cable Tray & Raceway Systems', image: 'https://placehold.co/400x300?text=Cable+Tray' },
      { id: 5, title: 'Online UPS Systems', image: 'https://placehold.co/400x300?text=Online+UPS' },
      { id: 6, title: 'Earthing & Lightning Protection', image: 'https://placehold.co/400x300?text=Earthing+Protection' },
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
