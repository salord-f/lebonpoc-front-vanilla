docker stop lebonpoc-front-vanilla || true
docker rm lebonpoc-front-vanilla || true
docker run --name lebonpoc-front-vanilla -p 80:80 -v $(pwd)/src:/usr/share/nginx/html:ro -d nginx:1.18.0-alpine