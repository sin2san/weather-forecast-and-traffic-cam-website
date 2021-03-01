# Installation
Copy or clone the repository to your local machine.
In the project directory, you can run:
## `npm install`
## `npm run`

# Running
1.Open http://localhost:3000 to view it in the browser.
2.Click date icon and select date or enter date
3.On entering date, locations will load automatically from api
4.Click location to view weather report and screenshots

# Problem
1.First API (Transport) don't have area name but only latitude, longitude & screenshot
2.Second API (Weather) having weather forecast, area name, latitude, longitude & not having screenshot  

# Solution
1.Date passed into parameter of both API.
2.In API 2 (Weather) i have mapped area_metadata.name with forecasts.area to get the forecast.
3.Getting area_metadata.latitude & area_metadata.longitude from API 2 (Weather) and mapping it with API 1 (Transport) latitude & longitude to get the screenshots.
4.Storing needed values in state.
5.Getting all the values from state and rendering in view.

# Tools & Technologies
1.React js
2.Axios
3.Bootstrap

