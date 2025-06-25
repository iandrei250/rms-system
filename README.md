# rms-system

#In order to run the project you need to do the following : 

 Run the backend api
 (If you encounter CORS issue do ``` npm install cors ``` and inside index.ts add ``` app.use(cors()); ``` )

 Inside the root folder of the frontend create a ``` .env.local ``` file with the following content: 

 ``` VITE_API_BASE_URL=http://localhost:3000 ```

 Before running the application make sure to do ``` npm install ```

 Run the frontend application with ``` npm start ```

 Now you should be able to see data flowing in !

 The application is also responsive so you can try on different resolutions

 P.S. You can run the tests by executing ``` npm test ```
