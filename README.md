# lanGuesser
lanGuesser uses a Deep Learning model to identify a programming language based on code snippet.

## Preparation
Data has been extracted from Google BigQuery and downloaded as a CSV file for every programming language.
<img width="959" alt="bigquery" src="https://user-images.githubusercontent.com/38654875/59158130-0f7c5c00-8ab6-11e9-831d-1dd55dbffb71.png">

## Training
Model has been trained on a [Jupyter Notebook](lanGuesser.ipynb) in Google Colab using Tensorflow and Keras.
<img width="550" alt="model" src="https://user-images.githubusercontent.com/38654875/59158180-ff18b100-8ab6-11e9-9845-0c6196793b14.png">

## Supported Languages
|--------|------|------------|-----|
| Python | Java | Javascript | Go  |
|--------|------|------------|-----|
| PHP    | SQL  | HTML       | CSS |

## Local Setup
In [mysite](mysite) folder there is a Flask Web App that allows you to test the model on your local computer.
### Steps
- Create a virtual environment with either
  - virtualenv myenv
  - conda create --name myenv
- Install necessary packages with either
  - pip install -r pip_requirements.txt
  - while read requirement; do conda install --yes $requirement; done < requirements.txt
- Run python flask_app.py
- Enjoy it!
<img width="948" alt="lanGuesser" src="https://user-images.githubusercontent.com/38654875/59158812-84549380-8ac0-11e9-9293-70b2f926b48e.png">
