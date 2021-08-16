# ip-fyi

A simple module that grabs your public (ipv4) IP address from ipaddress.fyi.

## Example usage

```
const ip = require('ip-fyi');

ip.getPublicIp().then((result) => {
        console.log(result);
});
```
