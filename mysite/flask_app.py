import json
import os
from flask import Flask, jsonify, request, render_template
from predictor import Predictor

# from flask_cors import CORS


app = Flask(__name__)
# CORS(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/predict", methods=["GET"])
def predict():
    code = request.args.get("code")

    predictor = Predictor.from_path(".")
    results = predictor.predict([code])

    max_pred = -10000
    max_i = -1

    for result in results:
        for i, pred in enumerate(result):
            if pred > max_pred:
                max_i = i
                max_pred = pred

    json_res = {"language": predictor.languages[max_i], "pred": max_pred}

    return jsonify(json_res)


if __name__ == "__main__":
    app.run()
