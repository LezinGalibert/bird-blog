# Use an official base image
FROM node:21

# Set the working directory in the container
WORKDIR /src/app

# Copy the current directory contents into the container at work directory
COPY . .

# Install any needed packages specified in package.json
RUN yarn install

# Make port 3000 available to the world outside this container
EXPOSE 3000


# Run app.py when the container launches
CMD ["yarn", "dev"]
