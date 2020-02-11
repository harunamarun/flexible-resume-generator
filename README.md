# create-resume-App 

"This was created during my time as a student at Code Chrysalis."  
  
This app provides your resume with some layout. 

Let's prepare for getting a job!
1. You add your information.  
2. You select layout.  
3. You can get your resume!


## URL
You try this app.   
https://create-resume-app.herokuapp.com/


## Setup Instructions
#### Clone the repo:
```
git clone https://github.com/harunamarun/create-resume-app.git
```

#### Install packages:
```
yarn
```

#### Migrate and seed Data:
• We have a migrate file now. 
```
yarn migrate
```
• We can rollback using this command.
```
yarn rollback
```
 •We have one seed file. If you want to use You can use this command.
```
yarn seed
```

#### Start server:
```
yarn start
```

#### Run the front end: (This is `npx create-react-app` option)
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.   
Runs the app in the development mode.   
```
yarn hack
```

#### Build the front end: (This is `npx create-react-app` option)
Builds the app for production to the `build` folder.   
```
yarn build
```
#### Run the front end test: (This is `npx create-react-app` option)
Launches the test runner in the interactive watch mode.   
```
yarn test
```

## API
#### Endpoints
1. GET `/api/resumes`</br>
2. POST `/api/resumes`</br>
3. GET `/api/resumes/:id`</br>
#### Details
1. GET `/api/resumes`  
   Return list of resumes.   
   response: 
   ```
   [
    {
     "id":1,
     "firstname":"Hanako",
     "lastname":"Yamada",
     "address":"Tokyo",
     "gender":"female",
     "career1":"********* corporation",
     "desc1":"I experienced fooooooooo!",
     "career2":"*** corporation",
     "desc2":"I experienced piyopiyo!",
     "template":"temp1",
     "updatedAt":"2020-02-10 04:11:10"
    },
    {...}
   ]
   ```
    
2. POST `/api/resumes`</br>
   Create a resume.   
   request params:
   ```
   {
    firstname:"Yamada",
    lastname: "Hanako",
    address: "KYOTO",
    gender: "female",
    career1: "******** corporation",
    desc1: "enjoy!!!!",
    template: "temp1"
   }
   ```
   
3. GET `/api/resumes/:id`</br>
   Return a resume's information.   
   response:
   ```
   {
   "id":1,
   "firstname":"Hanako",
   "lastname":"Yamada",
   ...
   }
   ```
 



Add your postgres config to the .env file
DATABASE_URL = postgresql+psycopg2://{Your databaseusername}:password@localhost/locations
Build:
