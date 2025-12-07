✅ 5. WiFi QR (tanpa URL tapi berbentuk text skema)

Format standar:

WIFI:T:WPA;S:NamaWifi;P:PasswordWifi;;

✅ 6. Contact / vCard (text format)

Bisa berupa file vCard atau text langsung.

Contoh:

BEGIN:VCARD
VERSION:3.0
N:Maulana;Aqil;;;
TEL:+628123456789
EMAIL:hello@example.com
URL:https://maqilm.site
END:VCARD

✅ 7. Email & SMS
Email (mailto)
mailto:email@example.com


Atau dengan preset:

mailto:email@example.com?subject=Judul&body=Isi%20pesan

SMS
sms:+6281234567890?body=Halo

✅ 8. App Store Links

Play Store:

https://play.google.com/store/apps/details?id=com.app.example

App Store:

https://apps.apple.com/app/id1234567890

✅ 9. Event Calendar

Format .ics:

BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Meeting Penting
DTSTART:20251206T090000Z
DTEND:20251206T100000Z
LOCATION:Jakarta
END:VEVENT
END:VCALENDAR

✅ 10. WiFi Login Page / Router Admin

Kadang dipakai internal:

http://192.168.1.1

http://192.168.0.1