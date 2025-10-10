const express = require('express')
const app = express()
require('dotenv').config()
// const port = 3000
const port = process.env.PORT

const githubData = {
  "login": "Prateek-02",
  "id": 114800060,
  "node_id": "U_kgDOBte1vA",
  "avatar_url": "https://avatars.githubusercontent.com/u/114800060?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Prateek-02",
  "html_url": "https://github.com/Prateek-02",
  "followers_url": "https://api.github.com/users/Prateek-02/followers",
  "following_url": "https://api.github.com/users/Prateek-02/following{/other_user}",
  "gists_url": "https://api.github.com/users/Prateek-02/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Prateek-02/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Prateek-02/subscriptions",
  "organizations_url": "https://api.github.com/users/Prateek-02/orgs",
  "repos_url": "https://api.github.com/users/Prateek-02/repos",
  "events_url": "https://api.github.com/users/Prateek-02/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Prateek-02/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 44,
  "public_gists": 0,
  "followers": 3,
  "following": 2,
  "created_at": "2022-10-01T07:22:03Z",
  "updated_at": "2025-09-08T09:50:37Z"
}


app.get('/',(req,res) =>{
    res.send('Hello World')
})

app.get('/twitter',(req,res) =>{
    res.send('Prateek Raj')
})

app.get('/login',(req,res) =>{
    res.send('<h1>Welcome to login Page</h1>')
})

app.get('/youtube',(req,res) =>{
    res.send('<h1>Welcome to YouTube</h1>')
})

app.get('/github',(req,res) => {
    res.json(githubData)
})

app.listen(port,() =>{
    console.log(`Example app listening on ${port}`)
})