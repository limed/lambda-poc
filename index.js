var child_process = require('child_process');

exports.handler = function(event, context) {

	// print out output of the received event
  console.log("\nREQUEST RECEIVED:\n", JSON.stringify(event));

	// since this is a vpc lambda function we need to export proxy variable
	var proxyServer = event.proxy;
	if (!proxyServer) {
		responseData = { Error: "Must provide a proxy environment variable" }
		console.log(responseData.Error)
	}

	// export http_proxy
	process.env['HTTP_PROXY'] = proxyServer;
	var proc = child_process.spawn('./myip', { stdio: 'inherit' });

	proc.on('close', function(code) {
		if(code !== 0) {
			return context.done(new Error("Process exited with non-zero status code"));
		}

		context.done(null);
	});
}

