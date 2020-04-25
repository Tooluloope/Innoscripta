This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Django and setup to be deployed on Heroku.

## Available Scripts

In the project directory of the branch [latest-branch](https://github.com/Tooluloope/Innoscripta/tree/latest-brach), run the following script to deploy the app after you've cloned the branch:

1) ## Running it locally:

a) Create your Python environment (Python3)

b) run `pip3 install -r requirements.txt`

c) run `python manage.py makemigrations` (You would need to have Postgres installed and running, also set your db details in settings.py)

d) run `python manage.py migrate`

e) run `python manage.py runserver`

2) ## Running on Heroku(HerokuCLI must be installed in terminal)
`git add .`

`git commit -m "Just a test commit to push new branch to heroku"`

then Push the new branch to heroku.
`git push heroku new_branch:master`

heroku restart

