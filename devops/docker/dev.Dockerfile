FROM node:20.11.0-alpine

WORKDIR /srv/service

ENV TMPDIR "../../artifacts/tmp"

RUN ["pwd"]

RUN ["ls", "-lash"]

# # Copia los archivos de package y package-lock
# COPY package*.json ./

# # Instala las dependencias
# RUN npm install

# # Copia el resto del código de la aplicación
# COPY . .

# # Compila la aplicación
# RUN npm run build

# # Expone el puerto de la aplicación
# EXPOSE 3000

# # Comando para iniciar la aplicación

CMD ["npm", "run", "start:dev"]

