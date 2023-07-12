FROM lmregistry.us.lmco.com/ext.hub.docker.com/library/node:18-alpine

# ENV NODE_OPTIONS="--max-old-space-size=8192"
# Set the REACT_APP_BACKEND environment variable
# ARG REACT_APP_BACKEND
# ENV REACT_APP_BACKEND=$REACT_APP_BACKEND

# ARG REACT_APP_FRONTEND
# ENV REACT_APP_FRONTEND=$REACT_APP_FRONTEND

# ARG REACT_APP_EWP_KEY
# ENV REACT_APP_EWP_KEY=$REACT_APP_EWP_KEY

# set working directory
WORKDIR /app
RUN mkdir -p app

# Install app dependencies
COPY ./package*.json ./
RUN npm install

# Copy the rest of the app's files
COPY ./ ./

# add app
# COPY ./client ./
EXPOSE 3000

# start app
CMD ["npm", "start"]