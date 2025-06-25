# rms-system

#In order to run the project you need to do the following : 

 Run the backend api
 (If you encounter CORS issue do ``` npm install cors ``` and inside index.ts add ``` app.use(cors()); ``` )

 Inside the root folder of the frontend create a ``` .env.local ``` file with the following content: 

 ``` VITE_API_BASE_URL=http://localhost:3000 ```

 Before running the application make sure to do ``` npm install ``` ( you might need to do ```  npm install --legacy-peer-deps ``` if the normal command fails )

 Run the frontend application with ``` npm start ```

 Now you should be able to see data flowing in !

 The application is also responsive so you can try on different resolutions

 P.S. 
 To  run the tests you need to do  ``` npx playwright install ``` to install the ncessary Playwright browsers

 After doing that you can run the tests by running ``` npm test ``` ( while having the frontend application already running )

 Lastly, run ``` px playwright show-report ``` to visualize the results in the browser
