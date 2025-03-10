type JSONValue = string | number | boolean | JSONObject | JSONArray;
type JSONObject = {
  [x: string]: JSONValue;
};
type JSONArray = Array<JSONValue>;

type AccountType = "student" | "educator";

/*
example implementation:
function printJSON(jsonData: JSONValue) {
  for (let key in jsonData) {
    console.log(key);
    console.log(jsonData[key]);
  }
}
*/
