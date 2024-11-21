# Use the official Python image from Docker Hub
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /docker

# Copy the current directory contents (app.py, requirement.txt) into the container
COPY . /docker

# Install the dependencies
RUN pip install --no-cache-dir -r requirement.txt

# Expose port 8080 (since your Flask app runs on port 8080)
EXPOSE 8080

# Define the command to run your application
CMD ["python", "app.py"]

