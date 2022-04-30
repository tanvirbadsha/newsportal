//const router = require("express").Router();
const app = require("../index");
const supertest = require('supertest')
const request = supertest(app)



// describe("post/users", ()=>{

//     test("should respond with a 200 status code", async ()=>{
//         const response = await request.post("/register").send({
            
//                 username: "oishee",
//                 email: "oishee@gmail.com",
//                 password: "123245235",
//         }
//             )
//             expect(response.statusCode).tobe(200)
//         })
// })

test('should sign up for a user',async ()=>{
    await request.post('register')
    .send({
        const newUser = new User({
            username: "oishee",
            email: "oishee@gmail.com",
            password: "123245235",
        })
    })
    .expect(201)
})
