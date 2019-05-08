# TransManager
A web application for transaction management.

# Requirements
Python 3.4 and newer.

# Build Instructions

## Windows
### Create an environment
```
git clone https://github.com/theofilospechlivanis/TransManager
cd TransManager
py -3 -m venv venv
```
### Activate the environment
```
venv\Scripts\activate
```
### Install Flask
```
pip install Flask
```
### Run the application
#### PowerShell
```
$env:FLASK_APP = "flaskr"
$env:FLASK_ENV = "development"
flask run
```

## Linux
### Create an environment
```
git clone https://github.com/theofilospechlivanis/TransManager
cd TransManager
python3 -m venv venv
```
### Activate the environment
```
. venv/bin/activate
```
### Install Flask
```
pip install Flask
```
### Run the application
#### PowerShell
```
export FLASK_APP=flaskr
export FLASK_ENV=development
flask run
```
