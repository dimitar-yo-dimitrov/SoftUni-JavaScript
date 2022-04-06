function solve(request) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriRegex = /^[\w+0-9.]+$|^\*$/gm;
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let message = /[<>\\&'"]/gm;

    if (!validMethods.includes(request.method)) {

        throw new Error(`Invalid request header: Invalid Method`)

    } if (!request.hasOwnProperty('uri') || !request.uri.match(uriRegex)) {

        throw new Error(`Invalid request header: Invalid URI`)

    } if (!validVersion.includes(request.version)) {

        throw new Error(`Invalid request header: Invalid Version`)

    } if (request.message === null || request.message === undefined || request.message.match(message)) {

        throw new Error(`Invalid request header: Invalid Message`)
    }

    return request;
}

console.log(solve({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
}));