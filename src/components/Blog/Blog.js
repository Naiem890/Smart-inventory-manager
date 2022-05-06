import React from "react";

const Blog = () => {
  return (
    <div className="">
      <div
        className="max-w-7xl bg-white mx-auto p-4 sm:p-6 lg:p-8 shadow-sm border-2 mt-12
      rounded-xl"
      >
        <h2 className="text-center text-2xl mb-10">Some Question Answer</h2>

        <div className="shadow-sm rounded-lg border p-4 mb-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-500">
            <span className="text-green-500  mr-3">Question:</span>
            Difference between javascript and nodejs?
          </h2>
          <p className="text-gray-500">
            <span className="font-bold mr-3">Ans:</span>
            Javascript is a simple interpreted programming language that can run
            in any javascript engine and browser. It's mainly used for client
            side task like user interaction vs updating website content
            dynamically without refreshing the page .
            <br />
            <br />
            On the other hand node js is a javascript run time environment which
            is basically made to run javascript outside the browser and use the
            asynchronous programming in server side of the application. Node js
            use the google chrome v8 engine which makes it very fast.
          </p>
        </div>
        <div className="shadow-sm rounded-lg border p-4 mb-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-500">
            <span className="text-green-500  mr-3">Question:</span>
            When should you use nodejs and when should you use mongodb?
          </h2>
          <p className="text-gray-500">
            <span className="font-bold mr-3">Ans:</span>
            Node js is a run time environment that is used to handel task of
            non-blocking and event driven task in backend. So when we need to
            handle task that needed a fast response from backend server in real
            time we use node js.
            <br />
            <br />
            Mongodb is a No SQL Database. That means it doesn't store data in a
            sequential order like row column which is followed by SQL databases.
            Mongodb is the best choice when we need fast speed with lot of
            non-relational data
          </p>
        </div>
        <div className="shadow-sm rounded-lg border p-4 mb-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-500">
            <span className="text-green-500  mr-3">Question:</span>Differences
            between sql and no-sql databases.
          </h2>
          <p className="text-gray-500">
            <span className="font-bold mr-3">Ans:</span>
            <ul className="list-disc ml-4 mt-4">
              <li>
                SQL databases are schema based database. That means we can't add
                new field or properties to a record. But in NoSQL database we
                have the flexibility to add any kind of data for each record.
              </li>
              <li>
                SQL database are best for relational database which means when
                one data is updated other data also updates in relation to that
                data. NoSQL database are non-relational database that means we
                have to update each data. So if the application handel a lot of
                task of relational data it's best choice to go with SQL database
              </li>
              <li>
                As SQL database are relational database so for search and query
                it requires more time for large application on the other hand
                NoSQL data can handel a huge amount of data with a good read
                speed.
              </li>
              <li>
                SQL database are not horizontally scalable that means we can't
                distribute data with many server. It only scale in vertically.
                That requires more cpu and ram. but it has a limit. On the other
                hand NoSQL data are horizontally scalable so we have the
                flexibility to add more servers and database which results in
                good performance of application.
              </li>
            </ul>
          </p>
        </div>
        <div className="shadow-sm rounded-lg border p-4 mb-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-500">
            <span className="text-green-500  mr-3">Question:</span>
            What is the purpose of jwt and how does it work?
          </h2>
          <p className="text-gray-500">
            <span className="font-bold mr-3">Ans:</span>
            JWT token is a efficient way to authorize an user. It's full form is
            JASON Web Token .Unlike old authorization process of storing cookies
            and season data for a user in a server and then check each time if
            the user is same or not, JWT use JSON data formate to store token
            and store it in client side. so that we don't have to store token in
            server.
            <br />
            <br />
            <span className="font-semibold">It works like this :</span> <br />
            When a user log in then server creates a secret token using any
            hashing algorithm and then store it in browser. Each time user try
            to access any page it send request to the server. Server verify the
            request and send back responses. The benefit of this process is we
            can set a expire time for the token, run multiple server of same
            application or different application without the user have to login
            again. and the server doesn't have to store any token.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
