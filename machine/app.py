from fastapi import FastAPI, File, UploadFile
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
model = load_model('trash_model.h5')

with open('labels.txt', 'r') as f:
    labels = [line.strip() for line in f]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    with open("temp.jpg", "wb") as f:
        f.write(contents)
    img = image.load_img("temp.jpg", target_size=(150, 150))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    prediction = model.predict(img_array)
    class_index = np.argmax(prediction)
    return {
        "class": labels[class_index],
        "confidence": float(np.max(prediction))
    }