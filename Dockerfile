# Usa una imagen de Nginx como servidor web
FROM nginx

# Establece el directorio de trabajo en la carpeta front
WORKDIR /usr/share/nginx/html

# Copia solo los archivos necesarios para el frontend
COPY front/templates/ /usr/share/nginx/html


# Expone el puerto 80 (predeterminado para HTTP)
EXPOSE 80