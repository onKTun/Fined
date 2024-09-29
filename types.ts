type JSONValue = string | number | boolean | JSONObject | JSONArray;

type JSONObject = {
  [x: string]: JSONValue;
};

type JSONArray = Array<JSONValue>;

/*
example implementation:
function printJSON(jsonData: object) {
  for (let key in jsonData) {
    console.log(key);
    console.log(jsonData[key]);
  }
}
*/
