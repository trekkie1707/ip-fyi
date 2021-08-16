var http = require("http");

var options = {
  host: "ipaddress.fyi",
};

export function getPublicIp() {
  return new Promise((resolve, reject) => {
    const options = {
      host: "ipaddress.fyi",
      method: "GET",
    };
    const req = http.request(options, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error("statusCode=" + res.statusCode));
      }
      var ret = "";
      res.on("data", function (chunk) {
        ret += chunk;
      });
      res.on("end", function () {
        resolve(ret);
      });
    });
    req.on("error", (e) => {
      reject(e.message);
    });
    req.end();
  });
}
