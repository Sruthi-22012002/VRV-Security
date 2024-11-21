# Use the official Python image from Docker Hub
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents (app.py, requirement.txt) into the container
COPY . /app

# Install the dependencies
RUN pip install --no-cache-dir -r requirement.txt

# Make port 5000 available to the world outside this container (if using Flask or another web framework)
EXPOSE 5000

# Define the command to run your application
CMD ["python", "app.py"]

