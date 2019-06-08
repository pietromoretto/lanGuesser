import pickle
import os
import numpy as np


class Predictor:
    def __init__(self, model, processor):
        self._model = model
        self._processor = processor
        self.languages = [
            "CSS",
            "GO",
            "HTML",
            "JAVA",
            "JAVASCRIPT",
            "PHP",
            "PYTHON",
            "SQL",
        ]

    def predict(self, instances, **kwargs):
        preprocessed_data = self._processor.texts_to_matrix(instances)
        predictions = self._model.predict(preprocessed_data)
        return predictions.tolist()

    @classmethod
    def from_path(cls, model_dir):
        import tensorflow.keras as keras

        model = keras.models.load_model(os.path.join(model_dir, "keras_saved_model.h5"))
        with open(os.path.join(model_dir, "tokenizer_state.pkl"), "rb") as f:
            processor = pickle.load(f)

        return cls(model, processor)
