import tensorflow as tf

model = tf.keras.applications.MobileNetV2(weights='imagenet')

def classify_image(image):
    img = tf.image.decode_image(image, channels=3)
    img = tf.image.decode_image(image, channels=3)
    img = tf.image.resize(img, [224, 224]) 
    img = tf.keras.applications.mobilenet_v2.preprocess_input(img)
    img = tf.expand_dims(img, axis=0)  

    predictions = model.predict(img)
    decoded_predictions = tf.keras.applications.mobilenet_v2.decode_predictions(predictions, top=1)
    return decoded_predictions[0][0][1], decoded_predictions[0][0][2] 