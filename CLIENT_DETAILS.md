# Rex Salon — Client Details Checklist

Use this file to collect or update real business details. Demo placeholders already power the site in [`src/data/salon.js`](src/data/salon.js). When you have the real info, reply here or edit that config file.

---

## Already set (demo / confirmed)

| Item | Value | Status |
|------|--------|--------|
| Shop name | Rex Salon | Confirmed |
| WhatsApp / phone | `9032519130` → `https://wa.me/919032519130` | Confirmed for demo |
| Country code | `+91` (India) | Assumed |

---

## Required before real launch

### Contact
- [ ] Confirm WhatsApp is the same number clients should message (`9032519130`)
- [ ] Alternate phone (if different from WhatsApp)
- [ ] Public email (optional)

### Location
- [ ] Full shop address (street, landmark, area, city, PIN)
- [ ] Google Maps link (or pin coordinates)
- [ ] City / area name for page title & footer

### Hours
- [ ] Weekday hours
- [ ] Weekend hours
- [ ] Holidays / closed days

### Services & pricing
- [ ] Final service list (which to keep / remove)
- [ ] Exact prices (replace demo INR amounts)
- [ ] Any packages or combo specials
- [ ] Whether kids / colour / women services should appear

### Brand & content
- [ ] Short About paragraph (2–3 sentences in the owner’s voice)
- [ ] Logo file (SVG or PNG) if different from the circular “R” mark
- [ ] Real photos: exterior, interior, cuts/beards, team (landscape preferred for hero)

---

## Nice to have

- [ ] Instagram / Facebook / Google Business Profile links
- [ ] Cancellation or walk-in policy (one line)
- [ ] Preferred booking slot interval (15 vs 30 minutes)
- [ ] Preferred greeting text for WhatsApp messages

---

## How booking works (no backend)

1. Visitor clicks **Book** / **Book an Appointment**
2. Modal collects: name, customer phone, service, date, time, optional note
3. **Book Now via WhatsApp** opens WhatsApp with a pre-filled message to the shop number
4. Owner confirms availability manually in the chat

To change the destination number later, update `whatsappNumber` and `phoneDisplay` in `src/data/salon.js`.

---

## Demo placeholders currently in use

- **Address:** 12, Jubilee Hills Road No. 36, Hyderabad (fictional)
- **Hours:** Mon–Sat 10:00 AM – 8:00 PM; Sun 11:00 AM – 6:00 PM
- **Prices:** Demo INR amounts in `src/data/salon.js` (`services` array)
- **Gallery / hero images:** Unsplash stock until real photos arrive
