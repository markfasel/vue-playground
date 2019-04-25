import Vue from "vue";

Vue.filter("currency", value => {
  if (value >= 0) {
    return "$" + value.toFixed(2).toLocaleString();
  }
  return null;
});

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
