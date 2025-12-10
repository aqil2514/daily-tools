export const i18nWifiForm = {
  en: {
    heading: "WiFi Data",

    type: {
      label: "Security Type",
      placeholder: "Select security type",
      wpa: "WPA / WPA2 / WPA3",
      wep: "WEP (outdated)",
      nopass: "No Password",
    },

    ssid: {
      label: "SSID (WiFi Name)",
      placeholder: "Example: Home WiFi...",
    },

    password: {
      label: "Password",
      placeholder: "WiFi Password",
    },

    hidden: {
      label: "Hidden SSID?",
    },

    submit: "Submit",
  },

  id: {
    heading: "Data WiFi",

    type: {
      label: "Jenis Keamanan",
      placeholder: "Pilih jenis keamanan",
      wpa: "WPA / WPA2 / WPA3",
      wep: "WEP (jadul)",
      nopass: "Tanpa Password",
    },

    ssid: {
      label: "SSID (Nama WiFi)",
      placeholder: "Contoh: Wifi Rumah...",
    },

    password: {
      label: "Password",
      placeholder: "Password WiFi",
    },

    hidden: {
      label: "SSID disembunyikan?",
    },

    submit: "Kirim",
  },
} as const;
