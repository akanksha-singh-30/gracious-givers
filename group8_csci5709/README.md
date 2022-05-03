# Group8_csci5709

This is the repository for the frontend application of group project - Group 8 

* *Date Created*: 01 FEBRUARY 2022
* *Last Modification Date*: 12 APRIL 2022
* *Frontend Repo URL*: https://git.cs.dal.ca/akankshas/group8_csci5709
* *Frontend Deployment URL*: https://g8-gracious-givers.herokuapp.com/

### Members of Group 8:

*  [Akanksha Singh](akanksha.singh@dal.ca) - *(Full Stack Developer)*
*  [Jay Nimeshkumar Patel](jy982893@dal.ca) - *(Full Stack Developer)*
*  [Jay Bhagvanbhai Sonani](jy652788@dal.ca) - *(Full Stack Developer)*
*  [Arjun Naravula Loganathan](ar302948@dal.ca) - *(Full Stack Developer)*
*  [Venkata Saikiran Kattekola](vn857734@dal.ca) - *(Full Stack Developer)*
*  [Viraj Jigar Shah](viraj.shah@dal.ca) - *(Full Stack Developer)*

## Built With

* [React JS](https://reactjs.org/docs/getting-started.html) - The web framework used for frontend development
* [Node JS](https://nodejs.org/en/download/) - Dependency Management
* [Bootstrap](https://getbootstrap.com/) - The CSS framework used for styling
* [ReactBootstrap](https://react-bootstrap.github.io/) - Bootstrap framework built for React that is used for CSS styling
* [ReactIcons](https://react-icons.github.io/react-icons/) - Library used for React icons
* [Axios](https://axios-http.com/) - Axios is a simple promise based HTTP client for the browser and node.js. 

## Prerequisites

* For performing NGO tasks, must have an NGO login. The email "graciousgivers123@gmail.com" and password "GraciousDon123" can be used to perform NGO login. Or perform NGO registration using User management feature.

* For performing Admin tasks, plese follow below credentials:
	* username:superuser
	* password:superuser
	* Security question 1:what is your favorite color?
	* Answer 1:black
	* Security question 2:what is your favorite food item?
	* Answer 2:biryani 

## Sources Used

### FundraiserDonation.js

*Lines 15 - 17*

```
let endDate = new Date(event.endDate);
let timeDifference = endDate.getTime() - new Date().getTime();
let daysRemaining = Math.round(timeDifference / (1000 * 60 * 60 * 24));

```

The code above was created by adapting the code in [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/) as shown below: 

```
var date2 = new Date("07/30/2019");
var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

```

- The code in [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/) was implemented by author of webpage GeeksforGeeks
- [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/) Code was used because to calculate the difference between two dates
- [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/) Code was modified by self to calculate the difference between the current data and the fundraiser end date

## Acknowledgments

* Images of the fundraiser have been taken from websites [1] - [6]

## References

[1] “How an environment benefits from Forest Fires,” Mr. Tree, Inc., 15-Aug-2019. [Online]. Available: https://mrtreeservices.com/blog/forest-fires-benefit-environment/. [Accessed: 29-Mar-2022]. 

[2] R. Khrais, “Oh, poop! animal shelter may still need more newspapers,” NPR, 07-Feb-2013. [Online]. Available: https://www.npr.org/sections/thetwo-way/2013/02/06/171297312/oh-poop-animal-shelter-may-still-need-more-newspapers. [Accessed: 29-Mar-2022]. 

[3] C. Nugent, “How eco-anxiety exploded across the Western World,” Time, 21-Nov-2019. [Online]. Available: https://time.com/5735388/climate-change-eco-anxiety/. [Accessed: 29-Mar-2022]. 

[4] Google image result for https://wallpapercave.com/wp/wp6498980.jpg. [Online]. Available: https://wallpapercave.com/wp/wp6498980.jpg. [Accessed: 29-Mar-2022]. 

[5] “Photo of potted plants on wooden table · Free Stock Photo.” [Online]. Available: https://www.pexels.com/photo/photo-of-potted-plants-on-wooden-table-4503273/. [Accessed: 29-Mar-2022]. 

[6] “Photography of people graduating · Free Stock Photo - PEXELS.” [Online]. Available: https://www.pexels.com/photo/photography-of-people-graduating-1205651/. [Accessed: 29-Mar-2022]. 
