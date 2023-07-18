const withCallback = (cb) => setTimeout(cb, 0);
withCallback(() => console.log("This was called using Asynchronous callback"));

const withPromises = () => Promise.resolve("This was executed using Promise");
withPromises().then((res) => console.log(res));
