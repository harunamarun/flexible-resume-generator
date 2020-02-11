# create-resume-App 

"This was created during my time as a student at Code Chrysalis."  
  
This app provides your resume with some layout. 

Let's prepare for getting a job!
1. You add your information.  
2. You select layout.  
3. You can get your resume!


## URL
You can try this app.   
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

#### Create database:
• We have a migrate file now. 
```
yarn migrate
```
• We have one seed file. If you want to use You can use this command.
```
yarn seed
```

#### Build the front end:
```
yarn build
```

#### Start server:
```
yarn start
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
   }
   ```
   `firstname`and`lastname` are required, others are optional.  
   
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
 
