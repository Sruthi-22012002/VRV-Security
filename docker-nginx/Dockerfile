# Dockerfile for Flask app
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /docker-nginx

# Copy the current directory contents (app.py, requirement.txt) into the container
COPY . /docker-nginx

# Install the dependencies
RUN pip install --no-cache-dir -r requirement.txt

# Expose the port Flask will run on
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.py"]

