# Nakon kloniranja projekta pokreni komande npm install i npm run dev

# 🛍️ Landing stranica sa listom kategorija (Fake Store API)

- Na početnoj stranici prikazana je lista kategorija koje se dinamički povlače sa [Fake Store API](https://fakestoreapi.com/).
- Klikom na neku od kategorija otvara se posebna stranica sa svim proizvodima iz te kategorije.
- Pored naziva kategorije prikazan je broj dostupnih proizvoda.

## 🛒 Prikaz proizvoda

- Svaki proizvod prikazuje:
  - Sliku
  - Naslov
  - Cenu

## 🔒 Dodavanje u korpu (samo za ulogovane korisnike)

- Samo korisnici prijavljeni putem **Google providera** mogu:
  - Odabrati količinu proizvoda
  - Dodati proizvod u korpu

- Ikonica korpe u zaglavlju se osvežava u realnom vremenu i prikazuje ukupan broj stavki.

## 🧺 Stranica korpe

- Klikom na ikonicu korpe korisnik dolazi do stranice sa prikazom svih dodatih proizvoda.
- Na ovoj stranici korisnik može:
  - Izmeniti količinu svakog proizvoda
  - Ukloniti proizvod iz korpe
- Promene automatski utiču na **ukupnu cenu**, prikazanu na dnu stranice.
