const countryData = [
  {
    name: "india",
    states: [
      { name: "mh", cities: ["abad", "pune", "mumbai"] },
      { name: "gj", cities: ["vaodra", "surat"] },
    ],
  },
  {
    name: "usa",
    states: [
      { name: "la", cities: ["arizona", "boston"] },
      { name: "dc", cities: ["washington", "texas"] },
    ],
  },
  {
    name: "china",
    states: [{ name: "mainland", cities: ["bejing"] }],
  },
];

const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");
let op = "<option>Choose Country</option>";
for (i = 0; i < countryData.length; i++) {
  op += `<option value="${countryData[i].name}">${countryData[i].name}</option>`;
}
country.innerHTML = op;

country.addEventListener("change", (e) => {
  const selectedCountry = countryData.filter(
    (item) => item.name === e.target.value
  );

  let op = "";
  for (i = 0; i < selectedCountry[0].states.length; i++) {
    op += `<option value="${selectedCountry[0].states[i].name}">${selectedCountry[0].states[i].name}</option>`;
  }
  state.innerHTML = op;
  let cop = "";
  for (i = 0; i < selectedCountry[0].states.length; i++) {
    cop += `<option value="${selectedCountry[0].states[0].cities[i]}">${selectedCountry[0].states[0].cities[i]}</option>`;
  }
  console.log(selectedCountry[0].states[0].cities);
  city.innerHTML = cop;
});

state.addEventListener("change", (e) => {
  const selected = countryData.filter((item) => item.name === country.value);
  const selectedCity = selected[0].states.filter(
    (item) => item.name === state.value
  );

  const c = selectedCity[0].cities;
  let op = "";
  for (i = 0; i < c.length; i++) {
    op += `<option value="${c[i]}">${c[i]}</option>`;
  }
  city.innerHTML = op;
});
