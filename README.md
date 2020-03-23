# “Flexible Resume Generator”  

"This was created during my time as a student at <a href=https://www.codechrysalis.io/>Code Chrysalis</a>."  

  
This app provides your resume with some layout. 

Let's prepare for getting a job!
1. You add your information.  
2. You select layout.  
3. You can get your resume!　

## URL
You can try this app.   
https://create-resume-app.herokuapp.com/

<img src="https://user-images.githubusercontent.com/56245555/74307176-1592ad00-4da8-11ea-8fa0-102e11efe52c.png" width="400px">　　

## Why did I create this?
<img src="https://user-images.githubusercontent.com/56245555/77296123-73f96680-6d2a-11ea-9081-418e17b390ce.png" width="400px"><img src="https://user-images.githubusercontent.com/56245555/77296094-63e18700-6d2a-11ea-8ec1-f49c6c30c4cf.png" width="400px">

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

## Teck Stack
<img src="https://user-images.githubusercontent.com/56245555/77295760-daca5000-6d29-11ea-9895-af91bdc89aea.png" width="400px">



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
 
