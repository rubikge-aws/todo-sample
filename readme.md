**The Difference Between Frontend and Backend**

In web application development, there are two key areas: frontend and backend. Let's explore their differences.

### Backend: The Server Side
The backend is an application running on a remote server. It is always active and waiting for client requests. For example, you can send GET requests to fetch data directly from a browser. Try accessing a backend for a to-do list application.

Insert this link into your browser's address bar:

```
http://ec2-51-20-136-135.eu-north-1.compute.amazonaws.com:3000/todos?user=John
```

In this request, the user's name is passed as a parameter, and the server responds with a JSON object containing their to-do list:

```json
[
  {"title":"Complete project documentation","completed":false},
  {"title":"Review pull requests","completed":false},
  {"title":"Update dependencies","completed":false}
]
```

The backend is responsible for storing, processing, and securing data. While we cannot see its code, we can ask AI to generate a minimal backend server. For example, by using this prompt:

> You are an experienced Python developer. Write a minimal server for storing to-do lists for different users. The server should return a JSON-formatted list based on the `user` parameter. Use the following sample data as a response: [ {"title":"Complete project documentation","completed":false}, {"title":"Review pull requests",completed":false}, {"title":"Update dependencies","completed":false} ]

Running a backend locally requires additional steps, which AI can also help clarify.

### Frontend: The Client Side
The frontend is responsible for the user interface. It displays data in a user-friendly format and provides tools for interacting with both the data and the server. A minimal frontend can be created within a single HTML page.

Let's ask AI to generate it:

> You are an experienced JavaScript developer. Write a minimal HTML page that requests a to-do list from the server, passing the `user` parameter.

HTML files can be opened in a browser without additional setup. Simply replace the server address in the code with the address from the link above (http://ec2-51-20-136-135.eu-north-1.compute.amazonaws.com:3000) and run the page.

### Further Development
To create a fully functional application, you can add the ability to edit the to-do list and send updates to the server using POST requests (which cannot be sent through the browser's address bar). An improved frontend will ensure a smooth user experience, while the backend will securely store and process data.

A complete example of a frontend application can be found in [index.html](https://github.com/rubikge/todo-sample/blob/main/index.html).
