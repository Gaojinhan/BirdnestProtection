## Project description
This project is aiming to implement the idea:https://assignments.reaktor.com/birdnest
The web is deployed on Render: https://birdnestprotection.onrender.com
The frontend part is bulit by React and the backend is bulit by Express, Redis, and PostgreSQL.

## Backend configuration  
See .env.example under the folder named backend. Create a new .env file and set Redis and PostgreSQL settings.

## Project design
The key points of this application are:  
**1.** The backend should collect data from the reaktor API all the time. So, user can get information from the last 10 minutes immediately when they open the application.  
**2.** The frontend could get data without refreshing the page. It could be implemented by polling or websocket.

Project Sturcture:  
![1](https://user-images.githubusercontent.com/70991730/210434519-57144a14-1942-4240-a331-791f54c2e505.PNG)

The design for backend is:  
**1.** Implement a feature to collect data from the reaktor API while the backend is runing. I use cronJob to schedlue a loop action.  
**2.** Redis works as a cache middleware. Redis can check if the data aleady exists or not rapidly everytime we get data from external API. After storing data in Redis(expired 10 mins), the backend will return all data in Redis erevytime the frontend call the endpoint. This could avoid a lot of network IO operations. Considering that we need to a lot of write and read operations several times per minute, Redis can help us imporve the performance.  
**3.** The data would also be stored in PostgreSQL. Now, the PostgreSQL is aiming to persistently store data in case that the Redis could break down sometime. And for other functionalities like searching, we would search data in PostgreSQL if it is not in Redis.

The design for front is:  
**1.** Use useEffect and useState to update data on time.  
**2.** Use polling to get data on time.
