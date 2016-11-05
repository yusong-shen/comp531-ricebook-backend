#!/bin/bash
PORT=3000

# ===============================================================================
# article.js
# ===============================================================================

# echo "GET /"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}
# echo ""
# echo ""

# echo "GET /articles"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/articles
# echo ""
# echo ""

# echo "POST /article"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/article -d "{ \"text\":\"This is my new article! $(date)\" }" 
# echo ""
# echo ""

# echo "GET /articles"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/articles 
# echo ""
# echo ""

# echo "GET /articles/0"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/articles/0
# echo ""
# echo ""

# echo "GET /articles/2"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/articles/2
# echo ""
# echo ""

# ===============================================================================
# profile.js
# ===============================================================================

echo "GET /headlines"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/headlines
echo ""
echo ""

echo "GET /headlines/sep1,sep1test"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/headlines/sep1,sep1test
echo ""
echo ""

echo "GET /headlines/sep1,wrong"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/headlines/sep1,wrong
echo ""
echo ""

echo "PUT /headline"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/headline -X PUT -d '{"headline" : "happy"}' -i
echo ""
echo ""

echo "GET /headlines"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/headlines
echo ""
echo ""

echo "GET /email"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/email
echo ""
echo ""

echo "PUT /email"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/email -X PUT -d '{"email" : "gg@gm.com"}' -i
echo ""
echo ""

echo "GET /email"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/email
echo ""
echo ""

echo "GET /zipcode"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/zipcode
echo ""
echo ""

echo "PUT /zipcode"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/zipcode -X PUT -d '{"zipcode" : "12322"}' -i
echo ""
echo ""

echo "GET /zipcode"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/zipcode
echo ""
echo ""

echo "GET /avatars/sep1,sep1test"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/avatars/sep1,sep1test
echo ""
echo ""

echo "GET /avatars/sep1,wrong"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/avatars/sep1,wrong
echo ""
echo ""

echo "GET /avatars"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/avatars
echo ""
echo ""

echo "PUT /avatar"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/avatar -X PUT -d '{"avatar" : "hard-coded.jpg"}' -i
echo ""
echo ""

echo "GET /avatars"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/avatars
echo ""
echo ""

echo "GET /dob"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/dob
echo ""
echo ""

# ===============================================================================
# auth.js
# ===============================================================================

# echo "POST /login"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"defaultUser" , "password":"SomeLongPasswordCoolStuff" }' -i
# echo ""
# echo ""

# # echo "POST /login"
# # curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"defaultUser" , "password":"Wrong" }' -i
# # echo ""
# # echo ""

# # echo "POST /login"
# # curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"defaultUser"}' -i
# # echo ""
# # echo ""

# echo "PUT /logout"
# curl -H 'Content-Type: application/json' --cookie 'sid=600c8ba034c4ebaef4640230f35e44e2' http://localhost:${PORT}/logout -X PUT -i
# echo ""
# echo ""

# echo "POST /register"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/register -d '{ "username":"testYS01" , "password":"foobar132", "dob":"1233", "zipcode":"77006", "email":"a@b.com" }' -i
# echo ""
# echo ""

# echo "POST /login"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"testYS01" , "password":"foobar132" }' -i
# echo ""
# echo ""


# echo "PUT /logout"
# curl -H 'Content-Type: application/json' --cookie 'sid=95db7cb159af44d5d15a8c5215d121ce' http://localhost:${PORT}/logout -X PUT -i
# echo ""
# echo ""

# ===============================================================================
# following.js
# ===============================================================================

# echo "GET /following"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/following
# echo ""
# echo ""

# echo "GET /following"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/following/foo
# echo ""
# echo ""


# echo "PUT /following"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/following/foo -X PUT -i
# echo ""
# echo ""

# echo "DELETE /following"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/following/sep1 -X DELETE -i
# echo ""
# echo ""