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
#### cmd
```
set FLASK_APP=transmanager
set FLASK_ENV=development
flask run
```
#### PowerShell
```
$env:FLASK_APP = "transmanager"
$env:FLASK_ENV = "development"
flask run
```
### Contributions
Windows users should run the following command before modifying any file and issuing a pull request
```
git config --global core.autocrlf true
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
```
export FLASK_APP=transmanager
export FLASK_ENV=development
flask run
```
### Contributions
Linux/Mac users should run the following command before modifying any file and issuing a pull request
```
git config --global core.autocrlf input
```
