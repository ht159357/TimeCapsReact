FROM nginx

COPY ./build/ /usr/share/nginx/html/
COPY ./vhost.nginx.conf /etc/nginx/conf.d/sunnyharoro-info.conf

EXPOSE 80
