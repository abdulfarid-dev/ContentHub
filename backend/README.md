<h1>#User and Student Backend Management</h1>

<p>A Node.js backendb API for managing student, User ,Profiles ,and posts.</p>
<p>Built with Express.js ,MongoDB ,and Mongoose.</p>

<h2>Technologies Used</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB.js</li>
</ul>


## 📂 Project Structure

```plaintext


BACKEND/
│── routes/           # API route definitions
│   ├── userRoutes.js
│   ├── studentRoutes.js
│   ├── profileRoutes.js
│   ├── postRoutes.js
│
│── models/           # Mongoose schemas
│   ├── userModels.js
│   ├── studentModels.js
│   ├── profileModels.js
│
│── controller/       # Route handler logic
│   ├── userController.js
│   ├── studentController.js
│   ├── profileController.js
│   ├── postController.js
│
│── middleware/       # Middlewares (if any)
│
│── server.js         # Main server entry point
│── package.json


```
   <h1>Installation</h1>
  ## Installation<br>
  1. Clone the repository:

     git clone https://github.com/abdulfarid-dev/BackendLearningNode.git
   
2.Install dependencies<br>
```plaintext
       npm install
       npx nodemon server.js
```
  <h1>CRUD Operation</h1>
  <h2>Create User Using Normal Method </h2>
 
      

   ![createuserNormalMethod](https://github.com/user-attachments/assets/3378f1e4-7496-4005-8f94-92d3a719d8a8)
        <h2> Create User Using Create Method  </h2>


   ![using User CreateMethod](https://github.com/user-attachments/assets/4dc9fb6f-ead6-4613-9604-626eb6d62020)
        <h2>many User Create </h2>
        

   ![manyUserCreate](https://github.com/user-attachments/assets/f115f5e0-c5d4-48b7-ac2a-8fa251aeea5e)
        <h2>get Data Using Find Method </h2>
   <p> In this method data fetch from Database </p>
   


     
![getDataUsingFIndMethod](https://github.com/user-attachments/assets/aa0bb18f-d964-4415-b4d6-dba92a066cdd)

     
      
      
<h2>get Data Using Find Method </h2>


![getUserById](https://github.com/user-attachments/assets/f8573472-172e-4284-a03b-5903547d66c4)

<h2>Update UserBy Id </h2>


![updateUserById](https://github.com/user-attachments/assets/5f193b58-e1e3-4a11-be67-4f18ab94eee8)


<h1>One-to-One Relationship</h1>
<h2>Use case</h2>
<ul>
  <li>Each `User` has **exactly one** `Profile`.</li>

 <li>The `Profile` stores extra info like bio, age, social links, etc.<li>
</ul>
<h3>✅ 1) User Schema</h3>
<p>Basic info like <code>username</code> and <code>email</code>.</p>

<h3>✅ 2) Profile Schema</h3>
<p>Extra info:</p>
<ul>
  <li><code>bio</code></li>
  <li><code>age</code></li>
  <li><code>user</code> → references the User’s <code>_id</code>.</li>
</ul>

<h3>✅ 3) Create Data</h3>
<ul>
  <li>First save the <strong>User</strong></li>
  <li>Then save a <strong>Profile</strong> linked to that user.</li>
</ul>


