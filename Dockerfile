FROM nsfilho/apacheturbo:latest
COPY docker/000-default.conf /etc/apache2/sites-available/
COPY dist /var/www/html

LABEL maintainer "tecnologia@credas.com.br"

HEALTHCHECK --interval=5s \
    --timeout=5s \
    CMD curl -f http://127.0.0.1:80 || exit 1
