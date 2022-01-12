# Routes Documentation for CryptoEconomy created with LowDB API

## Aditional Info

Any section route is defined in file `constants.js`

Every section JSON DB have a param `db_type` with the name of section

---

---

## Global Routes

---

Default Port `3010`

`http://localhost:3010`

---

Default path `.../api`

`http://localhost:3010/api`

---

Route for reset db JSONs to default values

`.../reset_db`

to confirm the reset_db the request should be throwed with a param json `reset_db` in body, with `true` value or will fail with response in '412 - Precondition Failed'

`http://localhost:3010/api/reset_db`

req.body => `{ "reset_db" : true }`

---

---

## Session Routes

Routes for get data in `session.js`

Default path ... `/session`

`http://localhost:3010/api/session/...`

---

GET data completly => `.../`

`http://localhost:3010/api/session/`

---

PUT - Update data => `.../`

`http://localhost:3010/api/session/`

req.body => `{ "active_page" :"example" }`

---

GET active_page value => `.../active_page`

`https://localhost:3010/api/session/active_page`

//TODO
