## Project description
This project is aiming to implement the idea:https://assignments.reaktor.com/birdnest

The frontend part is bulit by React and the backend is bulit by Express. Also, Redis is needed to run this app.

## Project design
The key points of this application are:  
**1.** The backend should collect data from the reaktor API all the time. So, user can get information from the last 10 minutes immediately when they open the application.  
**2.** The frontend could get data without refreshing the page. It could be implemented by polling or websocket.

The design for backend is:  
**1.** Implement a feature to collect data from the reaktor API while the backend is runing. I use cronJob to schedlue a loop action.  
**2.** All data is stored in Redis. I'll explain why. Firstly, there is no need to persist data due to the current goal. Even though we would add some functionalities like searching, Redis can work well with other DBs as a cache middleware. And, Redis can check if the data aleady exists or not rapidly. Considering that we need to collect data several times per minute, Redis can help us imporve the performance.  
**3.** After storing data in Redis(expired 10 mins), the backend will return all data in Redis erevytime the frontend call the endpoint. This could avoid a lot of network IO operations.

The design for front is:  
**1.** Use useEffect and useState to update data on time.  
**2.** Use polling to get data on time.
