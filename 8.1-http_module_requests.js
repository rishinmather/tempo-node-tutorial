const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    // the proper way is to set res.write and then res.end like previous tutorial file syntax but john just shortcuts in this example

    res.end("welcome to home page");
    return;
  }

  if (req.url === "/about") {
    res.end("you are now in the about page ");
    return;
  }

  // this below is the default for when the page /url doesnt exist , we can also see how we can use html

  res.end(`
    <h1>sorry page not found</h1>
    <p>maybe try again</p>
    <a href="/">go back home </a>
    `);
});

server.listen(5000);

// note: if we dont add the return in the if cases or not set the whole thing as an if else ..js reads the first request (egs :say the home page  ) and at the same time reads the default error code we have set , thus causing our server to break this is because in node two responses are not accepted for a single request
